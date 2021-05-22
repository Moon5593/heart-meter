# Heart Rate Meter
This application is build with the help of two frameworks Angular and Ionic v5. The purpose of using Ionic framework with Angular framework is Ionic helps to build a pixel responsive applications which fits in all scenarios since it is framework independant and hence when Ionic application is built with any framework (like Angular)/without any framework even, it helps to deploy the application as an Android/iPhone application or as a PWA (progressive web app) or as a Electron app. The Ionic when built with Angular like this current application, it wraps the web app into a native mobile app (in case of mobile) and provides some extra functionalities. The functionalities mainly include web components and which is the main reason I picked Ionic framework.

## Deployment
Link to application - https://heart-rate-73d27.web.app/home
Github deployment - https://github.com/tanmay0057/heart-meter

## Frontend
The frontend is Angular with Ionic pages and routing. The frontend is composed of total three pages. First is home page which holds the second page (session-begin page) which has button to start the session. The third page is the main-chart page which includes the core application. To display a decent chart, I have used Highcharts library which is very popular javascript library to work with chart's.
Main-chart page is full placed inside ion-grid component which helps to control the pixel responsiveness of this application which in turn looks good in all devices and screen sizes.
There are two buttons provided to stop the session and clear all the records. Stop halts the session and clear deletes all the records from firebase and from local too.
To the right side there will be a current number box which shows the realtime value which is data (number column).
The table is shown at the very last below which updates in real time.

# Important
Due to the width and height of the chart, the x-axis where the time is shown after every two seconds, after few iterations it seems that the x-axis time has originally been incremented by 5 or more seconds, which is not the case. Rather the Highchart library automatically adjust's the label display of x-axis to avoid overlapping of labels. To verify try increasing the width and height of div which holds the chart.
Also after every 30 iterations, the chart's data is manually refreshed by me to always get clear view of points. The table data here has no effect since the data gets saved before the clear.

## Working of the application
1) When the page is refreshed the table data is not lost since it is persisted in Firebase realtime database.
2) When stop session is clicked the chart stops and to again resume the chart refresh the page. The table data does not get lost.
3) The number 7 is marked with red spot
4) The Y and X are number and time respectively. Time (x- axis) is incremented every 2 seconds and if value is 7 then, the data is stored with time in database.
5) The requests to firebase server is maintained in 'app-state.service.ts'.

## Features
1) Application uses Alert controller, Navigation controller and Toast controller to provide beautiful components and transitions.
2) This application is fully lazy loaded.
3) Router transitions
4) Deployed as PWA (Progressive web app) which works like a native app in the browser.

## Backend
The backend comprises of Firebase realtime database. There is only one node in firebase which stores the data and time associated with data.