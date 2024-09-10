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

const email = sendNotification('Zihad.ph@gmail.com');
console.log(email);