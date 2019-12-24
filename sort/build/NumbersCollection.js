"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex) {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    };
    NumbersCollection.prototype.swap = function (leftIndex) {
        var leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex + 1];
        this.data[leftIndex + 1] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
