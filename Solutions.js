function calculateTax(income, expenses) {
    
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }

    const remainingAmount = income - expenses;
    const tax = remainingAmount * 20 / 100;
    return tax;
}




function sendNotification(email) {

    const check = email.includes('@')
    if(check !== true){
        return "Invalid Email";
    }

    const emailPart = email.split('@');
    const emailFirstPart = emailPart[0];
    const emailLastPart = emailPart[1];
    
    const sendNotification = emailFirstPart.concat(' sent you an email from ').concat(emailLastPart);

    return sendNotification;
}





function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return "Invalid Input"
    }

    const checkArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for(const word of name){
        for(const number of checkArray){
            if(word === number){
                return true;
            }
            
        }
    }
    return false;
}



