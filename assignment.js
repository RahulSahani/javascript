
//https://github.com/RahulSahani/javascript

//1st kilometerToMeter

function kilometerToMeter(kilometer){

var meter = kilometer * 1000;
return meter;

}

var output = kilometerToMeter(5);

console.log(output);




//Budget Calculator 

 function budgetCalculator(watch , mobile, camera){

var watchTotal = watch * 50;

var mobileTotal = mobile * 70;

var cameraTotal = camera * 100;

return watchTotal +mobileTotal + cameraTotal  ;

}

var result = budgetCalculator(5 , 2, 8);


console.log(result);

//mega friend

var friendsName = ["Rahul", "Sumit", "Suraj","Krishna","Rabindra Nath","kumar Sanu"];

var maxWord = friendsName[0];

function megaFriend(){
    for(var i = 0; i<friendsName.length; i++){
        var element = friendsName[i];
        if(element.length<maxWord){
            maxWord = element;

            element = maxWord;
           
        }
        return element;
    }
}
var largeName = megaFriend(friendsName);

console.log(largeName);



