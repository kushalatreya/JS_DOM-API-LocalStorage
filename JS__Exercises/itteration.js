const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//code starts from here

/* companies.forEach(function(company,index){
    console.log(company,index); 
});*/

//filter

// old way, using for loop
/* let canDrink = [];
for (let i = 0; i<ages.length; i++){
    if(ages[i] >= 21 ){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink); */

//better way using methods.
/* const canDrink = ages.filter(function(age){
    if (age >= 21){
        return true;
    }
});
console.log(canDrink); */

/* const canDrink = ages.filter(age => age >= 21);
console.log(canDrink); 


const retailCompanies = companies.filter(function(company){
    if (company.category === 'Retail'){
        return true;
    }
});
console.log(retailCompanies); */



/* const canDrink = ages.filter(function(age){
    if(age >= 18){
        return true
    }
});
console.log(canDrink); */

/* const canDrink = ages.filter(age => age>= 18)
){
    return true;
}
console.log(canDrink); 

const canDrink = ages.filter(age => age >= 18);
console.log(canDrink);*/

/* const retailCompanies = companies.filter(company => company.category==='Retail');
console.log(retailCompanies); */

//get 80s companies

/* const eightiesCompanies = companies.filter(function(company){
    if(company.start < 1990 && company.start > 1980){
        return true
    }
})
console.log(eightiesCompanies);

const eightiesCompaniess = companies.filter(company => company.start < 1990 && company.start > 1980)
console.log(eightiesCompaniess); */

// get companies that lasted 10 years or more

/* const lastedTenYears = companies.filter(function(company){
    if(company.end - company.start >= 10){
        return true
    }
});
console.log(lastedTenYears); */

/* const lastedTenYears = companies.filter(company => company.end - company.start >= 10)
console.log(lastedTenYears); */

//=====================================================
//                             MAP
//=====================================================

//create array of companies names

/* const companyNames = companies.map(function(company)    {
    return `[${company.name}-${company.category} ${company.start} to ${company.end}]`
});
console.log(companyNames); */

/* const companyNames = companies.map(company => `${company.name} is a ${company.category} company`)
console.log(companyNames); */

/* 
==========================
        Sort
========================== */
/* const sortedCompanies = companies.sort(function(c1,c2){
    if (c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }

});
console.log(sortedCompanies); */

/* const sortedCompanies = companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1 ));
console.log(sortedCompanies); */

// sort ages

/* const sortedAge = ages.sort((a,b) => a-b);
console.log(sortedAge); */

/* ===========================
            Reduce
==============================*/
const ageSum = ages.reduce(function(total,age){
    return total + age;
},0);

console.log(ageSum);

const combinedArrays = ages
    .map(age => age * 2)
    .filter(age => age >= 18)
    .sort((age1,age2) => age1 - age2)
    .reduce( (a,b) => a + b, 0 );

    console.log(combinedArrays);
