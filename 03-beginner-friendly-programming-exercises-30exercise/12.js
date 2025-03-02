console.log('You\'ve consumed X amount of Mbps on Wikipedia and Y amount of Mbps on memes. The cost of visiting Wikipedia is 0,10$ per Mb and the cost for watching memes is 0,05$ per Mb. If total consumption is more than 100$ print "Too much consumption". If watching meme consumption is greater than reading wikipedia consumption print "WOW MANY MEMES", "SUCH LOL"(in new line).Create a program that:Reads X(wikipedia Mb consupmtion) and Y(watching meme Mb consumption)Calculates the total consumption,If total consumption greater than 100$ print proper message,If watching meme consumption is greater than reading wikipedia articles print proper messages');

let wikiConsumption = 800 ; //mbps
let wikiRate = 0.10; //per mb

let memesConsumption = 900; //mbps
let memeRate = 0.05; //per mb

totalWikiConsumption = wikiConsumption * wikiRate;
totalMemeConsumption = memesConsumption * memeRate;
totalConsumption =  totalWikiConsumption + totalMemeConsumption;

console.log(totalWikiConsumption);
console.log(totalMemeConsumption);
console.log(totalConsumption);

if (totalConsumption>100) {
    console.log('Too much consumption');
}

if (memesConsumption>wikiConsumption) {
    console.log('WOW MANY MEMES');
    console.log('SUCH LOL');
}