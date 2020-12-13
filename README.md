# PaintballApp

This is an app that lets you make reservations for a paintball court. The reservations are made on a day basis. Days which have passed or are fill cannot be accsessed. Each day has 3 timeframes which can be reserved from one user account only. 

## How to get it up and running

Clone the repository and run npm install
change backEnd api string in environments.ts
Start the server with ng serve



## ROUTES

/home The index route of the app no Authentication needed. Users can log in and register from here. IF authentication is provided users can make reservations

/reserve Auth: required ; Makes a call to the back end api and retrives information for all the days in the current month. Clicking on a day redirects to /details/:id if that day is not full or if it has not passed


/details/:id Auth: required ; Makes a call to the back end api and retrives information for the day which id is provided. Lets you make a reservation from the remaining free time frames


/profile  Auth: required ; Makes a call to the back end api and retrives information for the currently logged in users reservations.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
