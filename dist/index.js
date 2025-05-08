"use strict";
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
function concatenateArrays(...arrays) {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
}
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
