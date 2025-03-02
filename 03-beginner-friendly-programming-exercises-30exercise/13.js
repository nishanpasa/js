console.log('An internet cafe has 2 ways of charging. If the user is a member pays 2$/hour, Else the user pays 5$. Find if someone is a member or not and calculate the price based on how many hours the user spend. If the user is a member the tax is 10% else the tax is 20%.Create a program that:Reads how many hours the user spend,Check if is a member,Add the proper tax fee,Print the total amount the user has to pay');

hoursSpend = 5 ; //hrs
isMember = false;

internetPrice = isMember ? 2:5;
taxRate = isMember ? 10 : 20;

internetAmount = hoursSpend * internetPrice ;
taxAmount = internetAmount * (taxRate/100);

totalAmount = internetAmount + taxAmount;
console.log(totalAmount);

/*
hoursSpend = 5; //hrs
memberPrice = 2 ;  // per hr
customerPrice = 5 ; // per hr
taxRateMember = 10; //percent
taxRateConsumer = 20; //percent

isMember = false;

if (isMember){
    hourlyRate = memberPrice;
    taxRate = taxRateMember;
}else {
    hourlyRate = customerPrice;
    taxRate = taxRateConsumer;
}

internetCharge = (hoursSpend * hourlyRate);
taxAmount = internetCharge * (taxRate/100);

totalAmount = internetCharge + taxAmount;

console.log(totalAmount);

*/