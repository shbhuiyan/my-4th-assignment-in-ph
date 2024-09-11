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

const checkName = checkDigitsInName(' Suman ')
console.log(checkName)