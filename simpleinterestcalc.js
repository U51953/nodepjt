
//initial sample startup code to use let,const,promise,async and await concept
async function calculateSimpleInterest(loanAmt,loanTerm) {
   const simpleInterestValue = 8.4;
    let promise = new Promise((resolve,reject) =>  {
    console.log("Today interest "+simpleInterestValue);
      resolve(simpleInterestValue);
   })
   let interestPerc = await promise;
   console.log("Loan Amount : "+loanAmt+",Loan Term : "+loanTerm);
   let interstAmt = (loanAmt * interestPerc * loanTerm)/100;
   console.log("Interest Amount is "+interstAmt);
}

exports.calculateSimpleInterest = calculateSimpleInterest;