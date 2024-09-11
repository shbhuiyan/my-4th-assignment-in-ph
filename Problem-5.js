function  waitingTime(waitingTimes  , serialNumber) {
    
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    };

    let n = 0;
    let sum = 0;
    while(n < waitingTimes.length){
        sum = sum + waitingTimes[n];
        n++;
    }
    const avg = sum / waitingTimes.length;
    const average = Math.round(avg)

    const remainingCandidates = serialNumber - waitingTimes.length;
    const heOrShe = 1;
    const candidates = remainingCandidates - heOrShe;
    const remainingTime = candidates * average;

    return remainingTime;
}


console.log(waitingTime(
    [7, 8, 3, 4, 5], "9"
))