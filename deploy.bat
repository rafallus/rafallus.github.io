@echo off
REM ===============================================================
REM Portfolio Website - Windows Batch Deployment Script
REM ===============================================================
REM This script helps with local testing and GitHub Pages deployment
REM ===============================================================

:menu
cls
echo.
echo ======================================================
echo   Portfolio Website - Deployment Helper
echo ======================================================
echo.
echo   1. Start local development server (Python)
echo   2. Start local development server (Node.js)
echo   3. Initialize Git repository
echo   4. Stage all changes
echo   5. Create Git commit
echo   6. Push to GitHub
echo   7. View local site in browser
echo   8. Show Git status
echo   9. Exit
echo.
set /p choice="Enter your choice (1-9): "

if "%choice%"=="1" goto python_server
if "%choice%"=="2" goto node_server
if "%choice%"=="3" goto git_init
if "%choice%"=="4" goto git_add
if "%choice%"=="5" goto git_commit
if "%choice%"=="6" goto git_push
if "%choice%"=="7" goto open_browser
if "%choice%"=="8" goto git_status
if "%choice%"=="9" goto exit
goto menu

:python_server
echo.
echo Starting Python development server...
echo Open http://localhost:8000 in your browser
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
goto menu

:node_server
echo.
echo Starting Node.js development server...
echo Checking if http-server is installed...
where http-server >nul 2>nul
if %errorlevel% neq 0 (
    echo Installing http-server globally...
    npm install -g http-server
)
echo Open http://localhost:8080 in your browser
echo Press Ctrl+C to stop the server
echo.
http-server
goto menu

:git_init
echo.
echo Initializing Git repository...
git init
git add .
git commit -m "Initial portfolio website commit"
echo Git repository initialized successfully!
pause
goto menu

:git_add
echo.
echo Staging all changes...
git add .
echo All changes staged!
git status
pause
goto menu

:git_commit
echo.
set /p message="Enter commit message: "
git commit -m "%message%"
echo Commit created successfully!
pause
goto menu

:git_push
echo.
echo Pushing to GitHub...
echo Make sure you have:
echo   1. Created a repository on GitHub
echo   2. Set up the remote: git remote add origin [YOUR_REPO_URL]
echo.
set /p confirm="Ready to push? (y/n): "
if /i "%confirm%"=="y" (
    git push -u origin main
    echo.
    echo Push completed! Your site will be live soon at:
    echo https://[your-username].github.io/portfolio-website
) else (
    echo Push cancelled.
)
pause
goto menu

:open_browser
echo.
echo Opening portfolio in default browser...
start "" index.html
echo Check your browser for the portfolio website!
pause
goto menu

:git_status
echo.
git status
echo.
pause
goto menu

:exit
echo.
echo Thank you for using the Portfolio Website!
echo Good luck with your job search!
echo.
pause
exit /b

REM ===============================================================
REM Quick Reference Commands
REM ===============================================================
REM
REM Local Testing (Choose one):
REM   python -m http.server 8000
REM   npx http-server
REM   python -m SimpleHTTPServer 8000 (Python 2)
REM
REM GitHub Setup:
REM   git init
REM   git add .
REM   git commit -m "Initial commit"
REM   git remote add origin https://github.com/yourusername/repo.git
REM   git branch -M main
REM   git push -u origin main
REM
REM Deploy Updates:
REM   git add .
REM   git commit -m "Update portfolio"
REM   git push
REM
REM ===============================================================
