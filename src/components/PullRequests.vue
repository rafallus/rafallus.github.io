<template>
  <div class="prs">
    <h2>Contributions to Godot Source Code</h2>
    <p class="text"> I submit PRs to the Godot Game Engine whenever I have the time, the need or commissioned by clients.
        If there is a bug that is giving you a hard time, <router-link :to="{ name: 'Contact' }">contact me</router-link>
        and I will solve it.</p>
    <div class="error" v-if="prs.error.length > 0">
        <p>Request failed. List of repository Pull Requests can't be shown. </p>
        <p>{{ prs.error }}</p>
    </div>
    <div v-else-if="prs.content.length > 0">
        <a class="pr-item" v-for="pr in prs.content" :key="pr.id" :href="pr.url" target="_blank">
            <span class="pr-date">{{ pr.created }}</span>
            <div class="pr-main">
                <div class="pr-state" :class="pr.stateClass">{{ pr.state }}</div>
                <div class="pr-title" v-html="pr.title"></div>
            </div>
            <div class="pr-labels">
                <span v-for="label in pr.labels" :key="label.id" :style="{ background: '#' + label.color }">{{ label.name }}</span>
            </div>
        </a>
        <div v-if="prs.showLongList" @click="onShowItems" class="pr-show-long">
            <a href="https://github.com/godotengine/godot/pulls?q=is%3Apr+author%3Arafallus" target="_blank" class="more-prs">
                (and {{ morePRs }} more PRs)
            </a>
            <div class="pr-show">
                <i class="arrow up"></i>
                <div>Show less</div>
            </div>
        </div>
        <div v-else @click="onShowItems" class="pr-show">
            <i class="arrow down"></i>
            <div>Show more</div>
        </div>
    </div>
    <div v-else>
        <scale-loader color="var(--primary)"></scale-loader>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { reactive } from 'vue';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

export default {
name: 'PullRequests',
components: {
    ScaleLoader
},
setup() {
    const INIT_PR_SHOWN = 3;
    const MAX_PR_SHOWN = 6;
    const prIdList = [54647, 54560, 54533, 54471, 54456, 53893, 48377, 48376, 47814, 47485, 47484, 47470];
    const morePRs = prIdList.length - MAX_PR_SHOWN;
    var prs = reactive({ content: [], error: "", showLongList: false});
    var prsList = [];

    function toStringDate(date) {
        let parts = date.split("T");
        return parts[0].replaceAll("-", "/")
    }

    function toDate(date_string) {
        let parts = date_string.split("T");
        let dateDay = parts[0].split("-");
        let dateTime = parts[1].split(":");
        let year = parseInt(dateDay[0]);
        let month = parseInt(dateDay[1]);
        let day = parseInt(dateDay[2]);
        let hour = parseInt(dateTime[0]);
        let minute = parseInt(dateTime[1]);
        return new Date(year, month, day, hour, minute, 0, 0);
    }

    function parsePRTitle(inTitle) {
        let parts = inTitle.split('`');
        let out = inTitle;
        if (parts.length > 1) {
            out = "";
            let count = 0;
            for (let i = 0; i < parts.length; i++) {
                if (i < parts.length - 1) {
                    out += parts[i] + (count % 2 == 0 ? '<code>' : '</code>');
                } else {
                    out += parts[i];
                }
                count++;
            }
        }
        return out;
    }

    function addPR(info) {
        var resp = JSON.parse(info);
        if (resp.user.login !== "rafallus") {
            return;
        }
        let state = resp.state === "closed" ? "merged" : resp.state;
        let date = toDate(resp.created_at);
        let pr = {
            id: resp.number,
            title: parsePRTitle(resp.title),
            url: resp.html_url,
            state: state[0].toUpperCase() + state.slice(1),
            stateClass: state,
            created: toStringDate(resp.created_at),
            labels: [],
            date: date
        };
        for (let label of resp.labels) {
            let l = {
                name: label.name,
                color: label.color,
                id: label.id
            };
            pr.labels.push(l);
        }
        if ('milestone' in resp) {
            pr['milestone'] = resp.milestone.title;
        }
        let i = -1;
        for (i = 0; i < prsList.length; i++) {
            let pri = prsList[i];
            if (pri.date < date) {
                break;
            }
        }
        if (i == -1 || i == prsList.length) {
            prsList.push(pr);
        } else {
            prsList.splice(i, 0, pr);
        }
        let end = Math.min(prsList.length, prs.showLongList ? MAX_PR_SHOWN : INIT_PR_SHOWN);
        prs.content = prsList.slice(0, end);
    }

    function onShowItems() {
        if (prs.showLongList) {
            prs.showLongList = false;
            let end = Math.min(prsList.length, INIT_PR_SHOWN);
            prs.content = prsList.slice(0, end);
        } else {
            prs.showLongList = true;
            prs.content = prsList;
        }
    };

    onMounted(() => {
        let owner = "godotengine";
        let repo = "godot";
        let url = 'https://api.github.com/repos/' + owner + '/' + repo + '/pulls/';
        for (let i = 0; i < prIdList.length; i++) {
            if (i >= MAX_PR_SHOWN) {
                break;
            }
            let pr = prIdList[i];
            let request = new XMLHttpRequest();
            request.open('GET', url + pr, true);
            request.onload = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        addPR(request.responseText);
                    } else {
                        prs.error = "Status " + request.status + ": " + request.statusText;
                    }
                }
            };
            request.onerror = function () {
                prs.error = "Error " + request.status + ": " + request.statusText;
            };
            request.timeout = 3000;
            request.ontimeout = function () {
                prs.error = "Error " + request.status + ": " + request.statusText;
            };
            request.send(null);
        }
    });

    return { prs, morePRs, onShowItems }
  }
}
</script>

<style>

.prs {
    background-color: var(--tertiary);
    padding: 3em 3em 1em 3em;
    border-radius: 16px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.prs .text {
    margin-bottom: 2.4em;
}

.prs .pr-item {
    display: block;
    background-color: var(--background);
    border-style: solid;
    border-width: 4px;
    border-color: var(--secondary);
    border-radius: 8px;
    margin: 1em 1.5em;
    padding: 14px;
    color: var(--light);
}

.prs .pr-item:hover {
    background: var(--less-dark);
}

.prs .pr-item .pr-date {
    display: block;
    font-size: 0.75em;
    text-align: right;
}

.prs .pr-item .pr-main {
    display: flex;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 10px;
}

.prs .pr-item .pr-state {
    text-align: center;
    border-radius: 4px;
    padding: 4px 4px 6px 4px;
    min-width: 4.5em;
    font-size: 0.75em;
}

.prs .pr-item .pr-state.open {
    background-color: var(--primary);
}

.prs .pr-item .pr-state.merged {
    background-color: indigo;
}

.prs .pr-item .pr-title {
    margin-left: 10px;
    font-weight: 600;
    line-height: 1.5;
}

.prs .pr-item .pr-title code {
    border-style: solid;
    border-width: 1px;
    border-color: dimgray;
    border-radius: 4px;
    padding: 8px 2px 4px 2px;
}

.prs .pr-item .pr-labels {
    text-align: right;
    margin-bottom: 0.4em;
}

.prs .pr-item .pr-labels span {
    border-radius: 16px;
    padding: 0px 8px 2px 8px;
    margin-right: 0.6em;
    color: black;
    font-size: 0.75em;
}

.prs .pr-show {
    background: var(--background);
    text-align: center;
    cursor: pointer;
    max-width: 500px;
    margin: 0 auto;
    padding-bottom: 0.5em;
}

.prs .pr-show:hover {
    background: var(--less-dark);
}

.prs .pr-show div {
    font-size: 0.8em;
}

.prs .arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    margin: auto;
    padding: 3px;
}

.prs .up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.prs .down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.prs .pr-show-long {
    text-align: center;
}

.prs .pr-show-long .more-prs {
    display: block;
    font-size: 0.8em;
    margin-bottom: 0.8em;
}
</style>