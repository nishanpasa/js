console.log('Create a program that asks the user for seconds(integers values) and then start printing the countdown, when the countdown ends print Go!. If the user enters a non integer value, exit the program with proper message.Create a program that:Reads integers until user enters a non integer value.Print the countdown and at the end print Go!Input: 3, -7,Output: 3, 2, 1, Go! - Exit Program');


let seconds = -5;
if (seconds<0) {
    console.log('Exit Program');
}else {
    for (let i = seconds; i > 0; i--) {
        console.log(i);    
        if (i==1) {
            console.log('Go!');
        }
    }
}