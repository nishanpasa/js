console.log('Create a program that register a user with a username and a password. Then the user will try to login with the login credentials. If the user make 3 wrong attempts exit program with proper message.Create a program that:Reads the username and the password, Then the user try to login,If the user makes 3 wrong attempts exit with proper message');

username = prompt('Username');
password = prompt('Password');

let userAttempt = 0;
let attempts = 3;
let remainingAttempts = attempts-1;
do {
    loginPassword = prompt('Password');
    if (loginPassword == password) {
        console.log('Log in Success');
        break;
    } else {
        userAttempt++; //1 //
        console.log(`Password incorrect. You have ${remainingAttempts--} attempts left`);//2
        // if (remainingAttempts=0) {
        //     console.log(`log in unsuccessfull`);
        // }
    }
} while (userAttempt < attempts);