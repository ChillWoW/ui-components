@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

:: Start searching from the current directory and move up
SET "CURRENT_DIR=%CD%"
SET "ROOT_DIR="

:: Loop upwards until we find package.json or hit the root
:SEARCH
IF EXIST "%CURRENT_DIR%\package.json" (
    SET "ROOT_DIR=%CURRENT_DIR%"
    GOTO :FOUND
)

:: Move to the parent directory
SET "CURRENT_DIR=%CURRENT_DIR%\.."

:: If we reached the root directory and didn't find package.json, exit
IF "%CURRENT_DIR%"=="%CD%" (
    GOTO :NOT_FOUND
)

:: Continue searching
GOTO :SEARCH

:NOT_FOUND
echo package.json not found.
exit /b 1

:FOUND
:: Change to the directory containing package.json
cd /d "%ROOT_DIR%" || exit /b

:: Run npm install
echo Installing npm packages...
npm i clsx 
npm i tailwind-merge
