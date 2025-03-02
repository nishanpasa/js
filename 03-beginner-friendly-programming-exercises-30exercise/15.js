console.log('A cell phone company has the following billing policy,Reads how many seconds was the calls duration Calculates the monthly bill for the subscriber Prints the total amount');

// Fixed cost 25$
// Call duration(in seconds)	Charge($/per second)
// 1-500	0,01
// 501-800	0,008
// 801+	0,005
// Create a program that:


let callDuration = 9000 ;
let cost ;

if (callDuration == 0 || callDuration<0) {
    cost = 0;
}else if (callDuration >= 1 && callDuration <500){
    cost = 0.01;
}else if (callDuration >= 500 && callDuration <800){
    cost = 0.008;
}else {
    cost = 0.005;
}

console.log(cost);

