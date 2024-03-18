// Day 15 Challenge: Start Coding!
// Question 43
var magician = ["user1", "user2", "user3"];
var magic = ["sfsag"];
function showMagician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
function make_great(magicians) {
    var greatMagicians = magician.map(function (magician) { return "the great ".concat(magicians); });
    return magician;
}
var greatMagicianNames = make_great(magician); //modified 
console.log("Orignal magicians"); //Orignal magicians list
showMagician(magician);
console.log("\nGreat Magicians"); //Great Magicians list
showMagician(greatMagicianNames);
// Question 44;
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwiches ".concat(items.join(', '), "."));
}
sandwiches("Cheese");
sandwiches("avocado", "Mayo");
// Question 45
function cars(manufacturing, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturing: manufacturing, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(cars("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(cars("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
