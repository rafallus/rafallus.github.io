<template>
  <div class="section contact">
    <h2>Contact</h2>
    <form class="pure-form pure-form-stacked" @submit.prevent="handleSubmit">
      <label for="email">Email: <span class="required">*</span></label>
      <input type="email" id="email" required v-model="email">
      <label for="message">Message: <span class="required">*</span></label>
      <textarea name="message" id="message" cols="48" rows="8" v-model="message"></textarea>
      <button type="submit" class="pure-button pure-button-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: ''
    }
  },
  mounted() {
    let emailScript = document.createElement('script');
    emailScript.onload = () => {
      emailjs.init("user_IkKP08HC9MiJW6lLzTmla");
    };
    emailScript.async = true;
    emailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    emailScript.type = 'text/javascript';
    document.head.appendChild(emailScript);
  },
  methods: {
    handleSubmit() {
      let content = {
        reply_to: this.email,
        message: this.message
      };
      emailjs.send('rafallus_gmail', 'template_u5gsc3j', content);
      this.email = '';
      this.message = '';
    }
  }
}
</script>

<style>
.contact form {
  max-width: 800px;
  margin: 2em auto;
  text-align: left;
  padding: 3em;
  border-radius: 8px;
  background: var(--tertiary);
}

.contact form textarea {
  width: 100%;
  resize: none;
}

.contact form .required {
  color: red;
  font-size: 0.8em;
}

.contact form button {
  background-color: var(--primary);
  margin-top: 1em;
}
</style>