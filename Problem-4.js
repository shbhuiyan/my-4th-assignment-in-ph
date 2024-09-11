function calculateFinalScore(obj) {

    if(typeof obj !== 'object'){
        return "Invalid Input"
    }

    const totalScore = obj.testScore + obj.schoolGrade;
    const isFFamily = obj.isFFamily === true;

    if(totalScore >= 80 || (totalScore >= 60 && isFFamily === true)){
        return true;
    }
    else{
        return false;
    }

}



const obj = calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true })

console.log(obj);