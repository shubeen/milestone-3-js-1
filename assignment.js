// feetToMile 

function feetToMile(feet){
    let mile = feet * 0.000189;
    return mile;
}
let output = feetToMile(6000);
console.log(output);


//  woodCalculator

function woodCalculator(woodForChair, woodForTable, woodForBed){

    let chair = woodForChair * 1;
    let table = woodForTable * 3;
    let bed = woodForBed * 5;
    let totalCount = chair + table + bed;
    return totalCount;
}
let totalWood = woodCalculator (15,30,40);
console.log(totalWood);

// brickCaculator

function brickCalculator(brickCount){

}

// tinyFriend

function tinyFriend(name){

    let shortName = name[0];
    for ( let i=0; i< name.length; i++){
        let currentName= name[i];
        if (currentName > shortName){
            shortName = currentName;
        }     
    }
    return shortName;
}

let findName = tinyFriend (["joe", "josh","anahita","benjamin"]);
console.log(findName);



