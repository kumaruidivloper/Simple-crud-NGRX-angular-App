# NGRX-Simple-CRUD-App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Devlelopment Steps

MongoDB Username Details
Username: kumaruidec
Password: $Kumar3861 <--
Username: kumariu
Password: $Kumar4321 <--

bootstrap Login: https://bootsnipp.com/snippets/GaZG0
ng new <AppName> --style=scss --routing

## Ng-Bootstrap Verstion List
https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap

## Install BootStrap / Ng-BootStrap
Step1: ng new [AppName] --style=scss --routing --prefix myprefix
Step2: npm install --save @ng-bootstrap/ng-bootstrap@4.2.1 [specific version for Angular 7]

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [NgbModule, ...],
  ...
})
export class YourAppModule {
}

Step1: npm install bootstrap --save
Step2: Open angular.json
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
 ----- [or] -------

There are many ways to do that. The simpest method is by using the [src/styles.css]file and adding the following code:
URL: https://www.techiediaries.com/angular-bootstrap-ui/
@import "~bootstrap/dist/css/bootstrap.css";

## Fake Server

Step1: npm install json-server
Step2: create db.json
Step3: Create some initial Data in db.json file
Step4: Edit package.json start property ["start": "concurrently \"ng serve\" \"json-server --watch db.json\" ",]
Step5: npm install concurrently
Step6: npm run start [For run the app]

## NGRX schematics:
https://www.intertech.com/Blog/ngrx-tutorial-quickly-adding-ngrx-to-your-angular-6-project/
Scaffolding library for Angular applications using NgRx libraries. 
@ngrx/schematics provides CLI commands for generating files when building new NgRx feature areas and expanding existing ones.

npm install @ngrx/schematics --save-dev

## Install the rest of NgRx:
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save

## NGRX Flow Diagram
![Ngrx-Image](https://user-images.githubusercontent.com/30646609/62344444-b22be680-b50b-11e9-85ae-7ce70f588995.JPG)

## NGRX Form
https://github.com/MrWolfZ/ngrx-forms
https://ngrx-forms.readthedocs.io/en/master/user-guide/form-controls/#connecting-to-the-dom

## NGRX Form DEMO

https://ngrx-forms-example-app-v2.herokuapp.com/introduction

## Install NGXS

Step:1: npm install @ngxs/store --save  [Yarn: yarn add @ngxs/store]


## Install NGXS Logger Plugin & Devtool Plugin

Step2: npm install @ngxs/store@dev --save
Step3: npm install @ngxs/logger-plugin@dev --save [Yarn: yarn add @ngxs/logger-plugin @ngxs/devtools-plugin --dev]

## NGXS/NGRX-Redux-Architecture

![NGXS-2](https://user-images.githubusercontent.com/30646609/60645886-87d90180-9e57-11e9-818d-d1c6f8eea6fd.png)
![NGXS-1](https://user-images.githubusercontent.com/30646609/60645850-798ae580-9e57-11e9-9280-3a7a131b73e2.png)


## Angular Vs React

![Angular-Vs-React](https://user-images.githubusercontent.com/30646609/60645904-92939680-9e57-11e9-86f9-de5a38adc76c.jpg)
