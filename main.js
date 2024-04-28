function myname() {
    console.log("sonia");
}
myname();
function shopping(dress, price, brand) {
    if (dress === void 0) { dress = "firstdayOutfit"; }
    if (price === void 0) { price = 20000; }
    if (brand === void 0) { brand = true; }
    console.log("My first day outfit is ".concat(dress));
    console.log("my dress range is ".concat(20000));
    console.log("my dress brand is khaadi ".concat(brand));
}
shopping();
function salary(basic, allowance, benefits) {
    var amount = (basic + allowance + benefits);
    return amount;
}
console.log(salary(80000, 20000, 30000));
