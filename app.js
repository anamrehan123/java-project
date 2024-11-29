//object in object
let company = {
    compname: "miscrosoft",
annualrevenue: 4500,
address: {
        street: "street no 2",
        cityname: "paris",
        countryname:"france",




    }
}
console.log(company.address.cityname);
let compname=company.compname
let street=company.address.street
let cityname=company.address.cityname

console.log(`${compname} ${street} ${cityname} `);



//array in object

let company1={
    compname: "miscrosoft",
    annualrevenue: 4500,
    address:["street no 2", "paris","france"]
}
console.log(company1.address[1]);


let product1={
    name:"airpod",
    price:50,
    rating:5

}

let product2={
    name:"headphones",
    price:50,
    rating:7

}

let product3={
    name:"watch",
    price:50,
    rating:5

}
console.log(product3);
console.log(product2.rating);




