webpackJsonp([0],{

/***/ 105:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 105;

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_stepper__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage() {
        this.steps = [
            {
                icon: 'list',
                text: 'Input'
            },
            {
                icon: 'cog',
                text: 'Parameter'
            },
            {
                icon: 'cube',
                text: 'Save'
            },
            {
                icon: 'cloud-upload',
                text: 'Upload'
            },
            {
                icon: 'checkmark',
                text: 'Done'
            }
        ];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.stepper.reset();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('stepper'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__state_stepper__["a" /* StateStepperComponent */])
], HomePage.prototype, "stepper", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Project\github\state-stepper\demo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>State Stepper</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <state-stepper #stepper [steps]="steps"></state-stepper>\n\n  <div class="buttons">\n    <button ion-button (click)="stepper.nextStep(\'success\')">OK</button>\n    <button ion-button (click)="stepper.nextStep(\'warning\')">Warn</button>\n    <button ion-button (click)="stepper.nextStep(\'danger\')">Error</button>\n    <button ion-button (click)="stepper.reset()">Reset</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Project\github\state-stepper\demo\src\pages\home\home.html"*/
    })
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_stepper_module__ = __webpack_require__(251);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__state_stepper_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_state_stepper_state_stepper_component__ = __webpack_require__(188);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components_state_stepper_state_stepper_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateStepperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_stepper_component_html__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_stepper_component_css__ = __webpack_require__(253);



var StateStepperComponent = /** @class */ (function () {
    function StateStepperComponent() {
        this.steps = [
            {
                icon: 'help',
                text: 'Input'
            },
            {
                icon: 'cog',
                text: 'Process'
            },
            {
                icon: 'checkmark',
                text: 'Done'
            }
        ];
        this.stepIndex = 0;
    }
    StateStepperComponent.prototype.stepOk = function () {
        this.nextStep('success');
    };
    StateStepperComponent.prototype.stepWarn = function () {
        this.nextStep('warning');
    };
    StateStepperComponent.prototype.stepError = function () {
        this.nextStep('danger');
    };
    StateStepperComponent.prototype.nextStep = function (currentStepState) {
        // Current step.
        var currentStep = this.steps[this.stepIndex];
        currentStep.state = currentStepState;
        currentStep.active = false;
        if (currentStepState === 'danger') {
            return;
        }
        // Next step.
        this.stepIndex++;
        if (this.stepIndex >= this.steps.length) {
            this.stepIndex = this.steps.length - 1;
            return;
        }
        var nextStep = this.steps[this.stepIndex];
        this.steps.forEach(function (step) { return (step.active = false); });
        nextStep.active = true;
        nextStep.state = 'current';
        this.scrollToActiveStep();
    };
    StateStepperComponent.prototype.reset = function () {
        this.stepIndex = 0;
        this.steps.forEach(function (step) {
            step.active = false;
            step.state = '';
        });
        this.steps[0].active = true;
        this.steps[0].state = 'current';
        this.scrollToActiveStep();
    };
    StateStepperComponent.prototype.scrollToActiveStep = function () {
        var _this = this;
        setTimeout(function () {
            var element = _this.stepperElement.nativeElement;
            for (var i = 0; i < element.children.length; i++) {
                var step = element.children.item(i);
                if (step.classList.contains('active')) {
                    step.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                    break;
                }
            }
        });
    };
    StateStepperComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */], args: [{
                    selector: 'state-stepper',
                    template: __WEBPACK_IMPORTED_MODULE_1__state_stepper_component_html__["a" /* default */],
                    styles: [__WEBPACK_IMPORTED_MODULE_2__state_stepper_component_css__["a" /* default */]]
                },] },
    ];
    /** @nocollapse */
    StateStepperComponent.propDecorators = {
        "stepperElement": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */], args: ['stepper',] },],
        "steps": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */] },],
    };
    return StateStepperComponent;
}());

//# sourceMappingURL=state-stepper.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(209);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_stepper__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }), __WEBPACK_IMPORTED_MODULE_5__state_stepper__["b" /* StateStepperModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Project\github\state-stepper\demo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Project\github\state-stepper\demo\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateStepperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_state_stepper_state_stepper_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(52);



var StateStepperModule = /** @class */ (function () {
    function StateStepperModule() {
    }
    StateStepperModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__components_state_stepper_state_stepper_component__["a" /* StateStepperComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__components_state_stepper_state_stepper_component__["a" /* StateStepperComponent */]]
                },] },
    ];
    return StateStepperModule;
}());

//# sourceMappingURL=state-stepper.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("<div #stepper class=\"stepper\">\n  <div class=\"step\" *ngFor=\"let step of steps\" [class.active]=\"step.active\" [ngClass]=\"step.state\">\n    <div class=\"ani-wrapper\">\n      <div class=\"icon-wrapper\">\n        <ion-icon [name]=\"step.icon\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"text\" [class.active]=\"step.active\">{{ step.text }}</div>\n  </div>\n</div>\n");
//# sourceMappingURL=state-stepper.component.html.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (".stepper {\n  text-align: center;\n  padding: 10px 0px;\n  overflow: auto;\n  white-space: nowrap;\n  user-select: none; }\n  .stepper .step {\n    display: inline-block;\n    position: relative;\n    width: 100px; }\n    .stepper .step:last-of-type {\n      margin-right: 0; }\n      .stepper .step:last-of-type::before {\n        display: none; }\n    .stepper .step .ani-wrapper {\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n    .stepper .step .icon-wrapper {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0;\n      overflow: hidden;\n      width: 60px;\n      height: 60px;\n      background-color: #989aa2;\n      color: #ffffff;\n      border-radius: 50%;\n      transform: scale(0.67);\n      transition: all 300ms ease-out;\n      will-change: transform;\n      font-size: 2em; }\n    .stepper .step .text {\n      opacity: 0.5;\n      transition: all 300ms ease-out;\n      will-change: opacity;\n      margin-top: 1px; }\n      .stepper .step .text.active {\n        opacity: 1; }\n    .stepper .step::before {\n      display: block;\n      position: absolute;\n      content: '';\n      background-color: #989aa2;\n      left: 50%;\n      width: 100%;\n      height: 6px;\n      margin-top: 27px;\n      transition: all 300ms ease-out;\n      will-change: background-color; }\n    .stepper .step.active .ani-wrapper {\n      animation: active 1s 300ms infinite ease-in-out; }\n    .stepper .step.active .icon-wrapper {\n      transform: scale(1); }\n    .stepper .step.current .icon-wrapper {\n      background-color: #3880ff;\n      color: #ffffff; }\n    .stepper .step.danger .ani-wrapper {\n      animation: danger 600ms 300ms ease-in-out; }\n    .stepper .step.danger .icon-wrapper {\n      background-color: #f04141;\n      color: #ffffff; }\n    .stepper .step.warning .ani-wrapper {\n      animation: warn 1s 300ms ease-in-out; }\n    .stepper .step.warning .icon-wrapper {\n      background-color: #ffce00;\n      color: #ffffff; }\n    .stepper .step.warning::before {\n      background-color: #ffce00; }\n    .stepper .step.success .ani-wrapper {\n      animation: success 1s 300ms; }\n    .stepper .step.success .icon-wrapper {\n      background-color: #10dc60;\n      color: #ffffff; }\n    .stepper .step.success::before {\n      background-color: #10dc60; }\n\n@keyframes active {\n  from {\n    transform: scale3d(1, 1, 1); }\n  50% {\n    transform: scale3d(0.9, 0.9, 0.9); }\n  to {\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes danger {\n  0% {\n    transform: translateX(0); }\n  10% {\n    transform: translateX(-6px) rotateY(-9deg); }\n  20% {\n    transform: translateX(5px) rotateY(7deg); }\n  30% {\n    transform: translateX(-4px) rotateY(-6deg); }\n  40% {\n    transform: translateX(3px) rotateY(5deg); }\n  50% {\n    transform: translateX(-2px) rotateY(-4deg); }\n  60% {\n    transform: translateX(1px) rotateY(3deg); }\n  70% {\n    transform: translateX(0); } }\n\n@keyframes success {\n  from,\n  to {\n    transform: scale3d(1, 1, 1); }\n  30% {\n    transform: scale3d(1.2, 0.8, 1); }\n  40% {\n    transform: scale3d(0.8, 1.2, 1); }\n  50% {\n    transform: scale3d(1.1, 0.9, 1); }\n  65% {\n    transform: scale3d(0.98, 1.02, 1); }\n  75% {\n    transform: scale3d(1.02, 0.98, 1); } }\n\n@keyframes warn {\n  from,\n  10%,\n  to {\n    transform: translate3d(0, 0, 0); }\n  20% {\n    transform: skewX(-12deg) skewY(-12deg); }\n  30% {\n    transform: skewX(6deg) skewY(6deg); }\n  40% {\n    transform: skewX(-3deg) skewY(-3deg); }\n  50% {\n    transform: skewX(1.5deg) skewY(1.5deg); }\n  60% {\n    transform: skewX(-0.8deg) skewY(-0.8deg); }\n  70% {\n    transform: skewX(0.4deg) skewY(0.4deg); }\n  80% {\n    transform: skewX(-0.2deg) skewY(-0.2deg); } }\n");
//# sourceMappingURL=state-stepper.component.css.js.map

/***/ })

},[189]);
//# sourceMappingURL=main.js.map