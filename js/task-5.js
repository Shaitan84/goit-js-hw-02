'use strict'

const checkForSpam = function (message) {
    let check;
    const text = message.toLowerCase();
    if (text.includes("spam") || text.includes("sale")) {    
    check = "true";
    } else {
    check = "false";
    }
    return check;
  };
  
  console.log(checkForSpam("Latest technology news")); 
  
  console.log(checkForSpam("JavaScript weekly newsletter")); 
  
  console.log(checkForSpam("Get best sale offers now!")); 
  
  console.log(checkForSpam("[SPAM] How to earn fast money?")); 