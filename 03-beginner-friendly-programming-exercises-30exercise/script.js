console.log('you have a list with domain names and an other list with domain extension. also possible combinations.');
let domainName = ['pasastudio', 'ace', 'spherenepal'];
let domainExtension = ['.com','.net','.gov'];

let domainCombinations = []
for (let i = 0; i < domainName.length; i++) {
    for (let j = 0; j < domainExtension.length; j++) {
        domainCombinations.push(domainName[i]+domainExtension[j]); 
    }    
}
domainCombinations = domainCombinations.join(', '); 
// console.log(`These are the possible combinations: \n${domainCombinations}`);

let combination = document.getElementById("combo");
for (let i = 0; i < domainCombinations.length; i++) {
    combination.innerHTML += domainCombinations[i] + "<br>";        
}

