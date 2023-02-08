
//initial sample startup code to use var,import,async and await concept
const simpleInterstFunc = require('./simpleinterestcalc');
var interestTitle = "Simple Interest Calculation";
(async () => { 
    console.log(interestTitle);
    await simpleInterstFunc.calculateSimpleInterest(200000,24);
})();