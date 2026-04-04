@echo off
REM Modern Portfolio - Development Setup
REM This script helps set up the development environment

echo.
echo ================================
echo Modern Portfolio Setup
echo ================================
echo.

REM Check if Node.js is installed
echo Checking dependencies...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js from https://nodejs.org/
    exit /b 1
)

where java >nul 2>nul
if %errorlevel% neq 0 (
    echo Java is not installed. Please install Java 17 or higher.
    exit /b 1
)

where mvn >nul 2>nul
if %errorlevel% neq 0 (
    echo Maven is not installed. Please install Maven from https://maven.apache.org/
    exit /b 1
)

echo All dependencies found!
echo.

REM Install frontend dependencies
echo Installing frontend dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo Frontend installation failed!
    exit /b 1
)
cd ..

REM Build backend
echo Building backend...
cd backend
call mvn clean install -DskipTests
if %errorlevel% neq 0 (
    echo Backend build failed!
    exit /b 1
)
cd ..

echo.
echo ================================
echo Setup Complete!
echo ================================
echo.
echo Frontend: cd frontend && npm run dev
echo Backend:  cd backend && mvn spring-boot:run
echo.
