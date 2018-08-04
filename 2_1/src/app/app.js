"use strict";
var HelloTS = (function () {
    function HelloTS() {
    }
    HelloTS.prototype.printMessage = function () {
        document.write("Hello Typescript!");
    };
    return HelloTS;
}());
var hello = new HelloTS();
hello.printMessage();
