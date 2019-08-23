(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-form-component></app-form-component>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center; }\n  .wrapper .content {\n    width: 300px;\n    display: flex;\n    flex-direction: column; }\n  .wrapper .content .task-list .task-item {\n      margin-top: 10px; }\n  #myId {\n  position: absolute;\n  left: 600px;\n  top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxHaXRodWIgZm9sZGVyXFxtdWx0aXJvdXRlIGVkaXRvclxcQXJ0eW9tTmVyc2lzeWFuLVxcbXVsdGlyb3V0ZSBlZGl0b3Ivc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQUYzQjtJQUlRLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFOOUI7TUFTZ0IsZ0JBQWdCLEVBQUE7RUFNaEM7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC50YXNrLWxpc3Qge1xyXG4gICAgICAgICAgICAudGFzay1pdGVtIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNteUlkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDYwMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


window.global = window;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_component_form_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-component/form-component.component */ "./src/app/form-component/form-component.component.ts");



 // Configure animations
 //Import the component modules



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _form_component_form_component_component__WEBPACK_IMPORTED_MODULE_7__["FormComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form-component/form-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/form-component/form-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n\n<div id=\"myId\">\n\n\n    <mat-toolbar color=\"primary\">\n        <span *ngIf=\"tasks.length>0; else elseBlock\">number of addresses: {{tasks.length}}</span>\n        <ng-template #elseBlock>\n            <span>number of addresses 0</span>\n\n        </ng-template>\n    </mat-toolbar>\n\n\n    <div class=\"wrapper\">\n\n        <div class=\"content\">\n            <mat-card class=\"task-add\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"addAddress()\" novalidate>\n                    <mat-form-field>\n                        <input matInput formControlName=\"task\" placeholder=\"write the address\">\n                        <mat-error>This field is mandatory</mat-error>\n                    </mat-form-field>\n                    <button mat-raised-button color='primary'>add</button>\n                </form>\n            </mat-card>\n            <div class=\"task-list\" *ngFor=\"let task of tasks; let i = index\">\n                <mat-card class=\"task-item\">\n                    <span>{{task}}</span>\n\n                    <button mat-icon-button (click)=\"deletAddress(i)\" color=\"warn\">\n\n                <mat-icon>clear</mat-icon>\n\n              </button>\n\n\n                </mat-card>\n            </div>\n        </div>\n    </div>\n    <div>\n        <div class=\"footer\">\n\n            <h3> Contact information:\n                <a href=\"https://www.facebook.com/ard.mag\">\n                    <img class=\"img\" src=\"https://image.flaticon.com/icons/svg/174/174848.svg\" alt=\"facebook\">\n                </a>\n                <a href=\"https://www.linkedin.com/feed/\">\n                    <img class=\"img\" src=\"https://image.flaticon.com/icons/svg/174/174857.svg\" alt=\"linkedin\"></a>\n\n\n                <a href=\"https://github.com/artyomnersisyan86\"> <img class=\"img\" src=\"https://image.flaticon.com/icons/svg/25/25657.svg\" alt=\"github\"></a>\n\n            </h3>\n\n            <h4> © 2019 Copyright: <a href=\"https://mail.google.com/mail/u/0/#inbox\"> artyom.nersisyan86@gmail.com</a></h4>\n\n\n            <!-- Copyright -->\n\n\n\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/form-component/form-component.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/form-component/form-component.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center; }\n  .wrapper .content {\n    width: 100%;\n    display: flex;\n    flex-direction: column; }\n  .wrapper .content .task-list .task-item {\n      margin-top: 10px; }\n  #myId {\n  position: absolute;\n  left: 80%;\n  top: 0px;\n  width: 62.5%; }\n  .footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #00a9ec;\n  color: white;\n  text-align: center;\n  height: 70px; }\n  .img {\n  background-color: aliceblue;\n  width: 20px;\n  height: 20px;\n  margin: 4px;\n  padding: 2px; }\n  h4 {\n  background-color: #00a2ec;\n  color: aliceblue;\n  width: 100%;\n  height: 25px; }\n  #map {\n  width: 80%;\n  height: 680px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS1jb21wb25lbnQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxHaXRodWIgZm9sZGVyXFxtdWx0aXJvdXRlIGVkaXRvclxcQXJ0eW9tTmVyc2lzeWFuLVxcbXVsdGlyb3V0ZSBlZGl0b3Ivc3JjXFxhcHBcXGZvcm0tY29tcG9uZW50XFxmb3JtLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQUYzQjtJQUlRLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFOOUI7TUFTZ0IsZ0JBQWdCLEVBQUE7RUFNaEM7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZLEVBQUE7RUFHaEI7RUFDSSxlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTtFQUdoQjtFQUNJLHlCQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTtFQUdoQjtFQUNJLFVBQVU7RUFDVixhQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3JtLWNvbXBvbmVudC9mb3JtLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLnRhc2stbGlzdCB7XHJcbiAgICAgICAgICAgIC50YXNrLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI215SWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogODAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogNjIuNSU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE2OSwgMjM2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTYyLCAyMzYpO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4jbWFwIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDY4MHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/form-component/form-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/form-component/form-component.component.ts ***!
  \************************************************************/
/*! exports provided: FormComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponentComponent", function() { return FormComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



window.global = window;
var FormComponentComponent = /** @class */ (function () {
    function FormComponentComponent() {
        this.tasks = [];
        //create form properties
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            task: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    FormComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        //create a map!
        ymaps.ready().then(function () {
            _this.map = new ymaps.Map('map', {
                center: [55.76, 37.64],
                zoom: 5,
                controls: ['geolocationControl', 'zoomControl']
            });
            //Creates a multi-route on the map.
            _this.multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: _this.tasks
            }, {
                boundsAutoApply: true,
                reverseGeocoding: true,
                viaPointDraggable: true,
            });
            _this.renderRoute();
        });
    };
    //add addresses!
    FormComponentComponent.prototype.addAddress = function (task) {
        if (this.form.value.task === null) {
            return alert('you did not write the address !');
        }
        this.tasks.push(this.form.value.task);
        this.form.reset();
        console.log(this.tasks);
        this.updateRoute();
    };
    //address deletion!
    FormComponentComponent.prototype.deletAddress = function (index) {
        this.tasks.splice(index, 1);
        this.updateRoute();
    };
    FormComponentComponent.prototype.renderRoute = function () {
        // Add the route to the map.
        this.map.geoObjects.add(this.multiRoute);
        //Enable editing mode and configure settings
        this.multiRoute.editor.start({
            // When the addWayPoints option is enabled, users can
            // create waypoints by clicking on the map.
            addWayPoints: true,
            // When the removeWayPoints option is enabled, users can
            // delete waypoints.
            // To delete a waypoint, double-click it.
            removeWayPoints: true,
        });
    };
    FormComponentComponent.prototype.updateRoute = function () {
        this.multiRoute.model.setReferencePoints(this.tasks);
        //this.map.options.set('mapStateAutoApply', true);
        this.map.setZoom(4, { duration: 1000,
            checkZoomRange: true,
            zoomMargin: 35,
            smooth: true,
        });
    };
    FormComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-component',
            template: __webpack_require__(/*! ./form-component.component.html */ "./src/app/form-component/form-component.component.html"),
            styles: [__webpack_require__(/*! ./form-component.component.scss */ "./src/app/form-component/form-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponentComponent);
    return FormComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Github folder\multiroute editor\ArtyomNersisyan-\multiroute editor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map