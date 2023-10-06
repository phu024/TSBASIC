var calculateMyAge = function (birthYear) {
    return new Date(Date.now()).getFullYear() - birthYear;
};
var myAge = calculateMyAge(2000);
console.log(myAge);
