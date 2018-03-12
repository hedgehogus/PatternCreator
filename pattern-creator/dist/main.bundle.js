webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'root component';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "   \n   <pattern-component></pattern-component>   \n  ",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pattern_component__ = __webpack_require__("../../../../../src/app/pattern.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__color_component__ = __webpack_require__("../../../../../src/app/color.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__pattern_component__["a" /* PatternComponent */],
            __WEBPACK_IMPORTED_MODULE_5__color_component__["a" /* ColorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/color.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".displayColor {\r\n    height: 70px;\r\n    width: 90px;    \r\n    margin: 25px;\r\n}\r\n\r\ninput[type=\"range\"]{\r\n    display: block;\r\n    width: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/color.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-back\">\r\n<div class=\"radio\">\r\n    <input type=\"radio\" id=\"main\" name=\"mainorback\" [value]=\"1\" [(ngModel)]=\"radio.value\">  \r\n    <label for=\"main\">main color<label>              \r\n    <input type=\"radio\" id=\"back\" name=\"mainorback\" [value]=\"0\" [(ngModel)]=\"radio.value\">\r\n    <label for=\"back\">background color<label>                \r\n<div> \r\n<div class=\"displayColor\" [ngStyle]=\"changeBackground()\" > </div>            \r\n<div class=\"mainpicker\" *ngIf=\"radio.value === 1\">                  \r\n    <input type=\"range\" name=\"r\" min=\"0\" max =\"254\"\r\n                    [(ngModel)]=\"mainColor.r\">\r\n    <input type=\"range\" name=\"g\" min=\"0\" max =\"254\"\r\n                    [(ngModel)]=\"mainColor.g\">\r\n    <input type=\"range\" name=\"b\" min=\"0\" max =\"254\"\r\n                    [(ngModel)]=\"mainColor.b\">\r\n</div>\r\n<div class=\"backpicker\" *ngIf=\"radio.value === 0\">       \r\n    <input type=\"range\" name=\"r\" min=\"0\" max =\"254\"\r\n                    [(ngModel)]=\"backColor.r\">\r\n    <input type=\"range\" name=\"g\" min=\"0\" max =\"254\"\r\n                    [(ngModel)]=\"backColor.g\">\r\n    <input type=\"range\" name=\"b\" min=\"0\" max =\"254\"\r\n                    [(ngModel)]=\"backColor.b\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorComponent; });
/* harmony export (immutable) */ __webpack_exports__["b"] = convertColor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__("../../../../../src/app/color.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NgStyle } from '@angular/common';
var ColorComponent = (function () {
    function ColorComponent() {
        this.radio = { value: 1 };
    }
    ColorComponent.prototype.ngOnInit = function () {
    };
    ColorComponent.prototype.getCurrent = function () {
        var color;
        switch (this.radio.value) {
            case 0:
                color = this.backColor;
                break;
            case 1:
                color = this.mainColor;
        }
        return convertColor(color);
    };
    ColorComponent.prototype.changeBackground = function () {
        return { 'background-color': this.getCurrent() };
    };
    return ColorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */]) === "function" && _a || Object)
], ColorComponent.prototype, "backColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */]) === "function" && _b || Object)
], ColorComponent.prototype, "mainColor", void 0);
ColorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'color-component',
        template: __webpack_require__("../../../../../src/app/color.component.html"),
        styles: [__webpack_require__("../../../../../src/app/color.component.css")]
    })
], ColorComponent);

function convertColor(color) {
    return '#' + color.r.toString(16) + color.g.toString(16) + color.b.toString(16);
}
var _a, _b;
//# sourceMappingURL=color.component.js.map

/***/ }),

/***/ "../../../../../src/app/color.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var Color = (function () {
    function Color() {
    }
    return Color;
}());

//# sourceMappingURL=color.js.map

/***/ }),

/***/ "../../../../../src/app/mock-pattern.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PATTERN; });
var PATTERN = {
    height: 5,
    width: 5,
    cells: [],
    minSize: 2,
    maxSize: 15,
};
function initCells(width, height) {
    var arr = new Array;
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var j = 0; j < width; j++) {
            row.push({ color: 0 });
            console.log(row);
        }
        arr.push(row);
    }
    console.log(arr);
    return arr;
}
//# sourceMappingURL=mock-pattern.js.map

/***/ }),

/***/ "../../../../../src/app/pattern.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n  list-style-type: none;\r\n}\r\n.row li {\r\n    display:inline-block;\r\n    margin: 0;\r\n}\r\n\r\n.cell {    \r\n    height: 40px;\r\n    width: 40px;\r\n    border: 1px solid black;      \r\n    overflow:auto;    \r\n}\r\n\r\n.row ul {    \r\n    margin: 0;\r\n    padding: 0;\r\n    height: 40px;\r\n}\r\n\r\n.default {\r\n    background: lightcoral;\r\n}\r\n\r\n.selected {\r\n    background: yellow;\r\n}\r\n\r\n.size button {\r\n    display: inline-block;\r\n}\r\n\r\n.size div {\r\n    display: inline-block;\r\n    margin: 40px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pattern.component.html":
/***/ (function(module, exports) {

module.exports = "<color-component [backColor]=\"backColor\" [mainColor]=\"mainColor\"></color-component>\r\n    <div class=\"size\">\r\n        <div class=\"height\">\r\n            <h3> Height </h3> \r\n            <button (click)=\"decrease(pattern, 'height')\">-</button>\r\n            <label>{{pattern.height}}</label>\r\n            <button (click)=\"increase(pattern, 'height')\">+</button>\r\n            </div>\r\n        <div class=\"width\">\r\n            <h3> Width </h3> \r\n            <button (click)=\"decrease(pattern, 'width')\">-</button>\r\n            <label>{{pattern.width}}</label>\r\n            <button (click)=\"increase(pattern, 'width')\">+</button>\r\n        </div>\r\n    </div>\r\n    <ul class=\"pattern\" (mouseup)=\"mUp()\" >\r\n        <li class=\"row\" *ngFor = \"let row of pattern.cells\">\r\n            <ul>\r\n                <li *ngFor = \"let cell of row\" >   \r\n                    <div   \r\n                        (mousedown)=\"mDown($event, cell, i, j)\"                                                            \r\n                        (mousemove)=\"change(cell , $event)\" \r\n                        class=\"cell\" \r\n                        [ngStyle]=\"getStyle(cell.color)\"                        \r\n                        >  \r\n                    </div>           \r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ul>\r\n            "

/***/ }),

/***/ "../../../../../src/app/pattern.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatternComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_pattern__ = __webpack_require__("../../../../../src/app/mock-pattern.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color_component__ = __webpack_require__("../../../../../src/app/color.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PatternComponent = (function () {
    function PatternComponent() {
        this.mouseState = false;
        this.lastChangedCell = undefined;
    }
    PatternComponent.prototype.getInitialPattern = function () {
        this.pattern = __WEBPACK_IMPORTED_MODULE_1__mock_pattern__["a" /* PATTERN */];
        this.initCells();
        this.convertColor = __WEBPACK_IMPORTED_MODULE_2__color_component__["b" /* convertColor */];
        this.backColor = { r: 120, g: 50, b: 100 };
        this.mainColor = { r: 170, g: 100, b: 150 };
    };
    PatternComponent.prototype.initCells = function () {
        var arr = new Array;
        for (var i = 0, height = this.pattern.height; i < height; i++) {
            var row = [];
            for (var j = 0, width = this.pattern.width; j < width; j++) {
                row.push({ color: 0 });
            }
            arr.push(row);
        }
        this.pattern.cells = arr;
    };
    PatternComponent.prototype.ngOnInit = function () {
        this.getInitialPattern();
    };
    PatternComponent.prototype.change = function (cell, event) {
        if (this.mouseState) {
            if (!(cell === this.lastChangedCell)) {
                cell.color = this.cellColor;
                this.lastChangedCell = cell;
            }
        }
    };
    PatternComponent.prototype.mDown = function (event, cell) {
        event.preventDefault();
        this.mouseState = true;
        if (cell.color === 0) {
            this.cellColor = 1;
        }
        else if (cell.color === 1) {
            this.cellColor = 0;
        }
        ;
        this.change(cell, event);
    };
    ;
    PatternComponent.prototype.mUp = function () {
        this.mouseState = false;
        this.lastChangedCell = undefined;
    };
    ;
    PatternComponent.prototype.increase = function (pattern, param) {
        if (param === "height") {
            if (pattern.height < pattern.maxSize) {
                pattern.height++;
            }
        }
        else if (param === "width") {
            if (pattern.width < pattern.maxSize) {
                pattern.width++;
            }
        }
        resizePattern(pattern);
    };
    PatternComponent.prototype.decrease = function (pattern, param) {
        if (param === "height") {
            if (pattern.height > pattern.minSize) {
                pattern.height--;
            }
        }
        else if (param === "width") {
            if (pattern.width > pattern.minSize) {
                pattern.width--;
            }
        }
        resizePattern(pattern);
    };
    PatternComponent.prototype.getStyle = function (mainOrBack) {
        if (mainOrBack === 1) {
            return this.getMainColor();
        }
        else if (mainOrBack === 0) {
            return this.getBackColor();
        }
    };
    PatternComponent.prototype.getMainColor = function () {
        return { 'background-color': this.convertColor(this.mainColor) };
    };
    PatternComponent.prototype.getBackColor = function () {
        return { 'background-color': this.convertColor(this.backColor) };
    };
    return PatternComponent;
}());
PatternComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'pattern-component',
        template: __webpack_require__("../../../../../src/app/pattern.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pattern.component.css")]
    })
], PatternComponent);

function initCells(width, height) {
    var arr = new Array;
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var j = 0; j < width; j++) {
            row.push({ color: 0 });
            console.log(row);
        }
        arr.push(row);
    }
    console.log(arr);
    return arr;
}
function resizePattern(pattern) {
    if (pattern.height > pattern.cells.length) {
        for (var i = pattern.cells.length; i < pattern.height; i++) {
            var row = [];
            for (var j = 0; j < pattern.cells[0].length; j++) {
                row.push({ color: 0 });
            }
            pattern.cells.push(row);
        }
    }
    else if (pattern.height < pattern.cells.length) {
        for (var i = pattern.cells.length; i > pattern.height; i--) {
            pattern.cells.pop();
        }
    }
    if (pattern.width > pattern.cells[0].length) {
        for (var i = 0; i < pattern.cells.length; i++) {
            for (var j = pattern.cells[i].length; j < pattern.width; j++) {
                pattern.cells[i].push({ color: 0 });
            }
        }
    }
    else if (pattern.width < pattern.cells[0].length) {
        for (var i = 0; i < pattern.cells.length; i++) {
            for (var j = pattern.cells[i].length; j > pattern.width; j--) {
                pattern.cells[i].pop();
            }
        }
    }
}
//# sourceMappingURL=pattern.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map