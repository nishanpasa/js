console.log('You have started working and you are wondering how many things you can buy with the money you\'ve earned. A PS4 costs 200$, a Samsung phone 900$, a TV 500$, a game skin 9.99$ ,Create a program:Notice that you can\'t buy half TV or 1/4 of PS4.Reads how many hours you\'ve worked ,Reads your hourly income,Prints how many items you can buy');
console.log('');

ps4Price = 220; //dollar
phonePrice = 900;
tvPrice = 500 ; 
gameSkinPrice = 9.99;

hourlyIncome = 30;
hoursWorked = 500;

totalIncome = hourlyIncome * hoursWorked;
console.log(`totalIncome : ${totalIncome}`);

//----------alternatively------ //
// ps4Count = totalIncome / ps4Price;
// if (totalIncome%ps4Price != 0) {
//     let remainder = totalIncome%ps4Price;
//     actualMoney = totalIncome - remainder;
//     ps4RemainingAmount = remainder;
//     ps4Count = actualMoney/ps4Price;
// }

ps4Count = Math.floor(totalIncome/ps4Price);
phoneCount = Math.floor(totalIncome/phonePrice);
tvCount = Math.floor(totalIncome/tvPrice);
gameSkinCount = Math.floor(totalIncome/gameSkinPrice);



console.log(`With the total money of ${totalIncome}$ , I can buy ${ps4Count} PS4s, ${phoneCount} Samsung Phones, ${tvCount} TVs, and ${gameSkinCount} game Skins`);
