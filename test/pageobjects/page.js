"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
var Page = /** @class */ (function () {
    function Page() {
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    Page.prototype.open = function (path) {
        if (path === void 0) { path = "https://vacationsdirect.cxtrvl.com/"; }
        console.log("Url is: " + path);
        return browser.url(path);
    };
    return Page;
}());
exports.default = Page;
