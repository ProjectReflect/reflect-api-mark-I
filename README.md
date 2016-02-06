# Reflect-Node
This repository contains the code for the Reflect Backend Node.js server.

Reflect superimposes information on a reflection of the user, allowing users to multitask. The user has access to the time, date, weather, their calendar, estimated time of arrival to work (Google Maps driven), estimated Uber cost, stocks, news headlines, measured weight, calculated body-mass index, calories burned throughout the day (Google Fit API driven, to be implemented), and an estimated energy level. The user can access all this information at a glance hands-free. The mirror uses a LEAP motion sensor to let the user switch between two panes with a simple swipe.

While you're brushing your teeth, fixing your tie, or doing your hair, you can focus on what's important - the day ahead.

# Install
<i>Note: Instructions are for UNIX systems. Use a terminal emulator, like <a href="https://www.cygwin.com/">Cygwin</a>, if you are on Windows</i>
 1. Ensure you have <code>node</code> and <code>npm</code> installed
 2. Clone this repo by running <code>git clone https://github.com/ProjectReflect/reflect-api-mark-I.git</code> in your Terminal.
 3. Change directory to the app by running <code>cd reflect-api-mark-I</code>.
 4. Run <code>npm install</code> to install necessary dependencies.
 5. Set the following environment variables: <code>origin</code> Home location, <code>destination</code> Work location, <code>mapsKey</code> <a href="http://openweathermap.org/api">OpenWeatherMap</a> key, and <code>userKey</code> with a key for your user
 6. Run <code>node server.js</code> to start the server.
