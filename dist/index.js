"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
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
  } else {
    return value * 2;
  }
}
function getMostExpensiveProduct(products) {
  if (products.length === 0) return null;
  let maxProduct = products[0];
  for (const product of products) {
    if (product.price > maxProduct.price) {
      maxProduct = product;
    }
  }
  return maxProduct;
}
var Day;
(function (Day) {
  Day[(Day["Monday"] = 0)] = "Monday";
  Day[(Day["Tuesday"] = 1)] = "Tuesday";
  Day[(Day["Wednesday"] = 2)] = "Wednesday";
  Day[(Day["Thursday"] = 3)] = "Thursday";
  Day[(Day["Friday"] = 4)] = "Friday";
  Day[(Day["Saturday"] = 5)] = "Saturday";
  Day[(Day["Sunday"] = 6)] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
function squareAsync(n) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject("Negative number is not allowed");
      } else {
        setTimeout(() => resolve(n * n), 1000);
      }
    });
  });
}
