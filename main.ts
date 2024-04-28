function myname(){
console.log("sonia");
}
myname()  

function shopping(dress:string = "firstdayOutfit" ,price:number=20000,brand:boolean=true){
    console.log(`My first day outfit is ${dress}`);
    console.log(`my dress range is ${20000}`);
    console.log(`my dress brand is khaadi ${brand}`);


}

shopping()

function salary(basic:number,allowance:number,benefits:number){
  let  amount =basic+allowance+benefits;
    return amount;
}

console.log(salary(80000,20000,30000));



