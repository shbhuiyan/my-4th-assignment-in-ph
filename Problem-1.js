function calculateTax(income, expenses) {
    
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }

    const remainingAmount = income - expenses;
    const tax = remainingAmount * 20 / 100;
    return tax;
}


console.log(calculateTax( 10000, 3000 ))


// Complete....Done