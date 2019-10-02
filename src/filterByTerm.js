"use strict";
var obj1 = {
    url: "string1"
};
var obj2 = {
    url: "string2"
};
var obj3 = {
    url: "string3"
};
var post1 = {
    description: "TypeScript tutorial for beginners is a tutorial for all the JavaScript developers ...",
    id: 1,
    url: "www.valentinog.com/typescript/",
    title: "TypeScript tutorial for beginners",
    body: "some stuff here..."
};
var arrOfLinks = [obj1, obj2, obj3];
var term = "java";
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
filterByTerm(arrOfLinks, term);
