var images = 
["https://i.pinimg.com/236x/0c/2c/23/0c2c23e22464bf49b9d4cecab6c3ccd4.jpg", "https://i.pinimg.com/564x/3e/1b/9c/3e1b9c79aa61ce39aa6cf49642fcfa1a.jpg" , "https://i.pinimg.com/236x/10/32/03/1032034b637d4284c320751365de3b9c.jpg" , "https://i.pinimg.com/236x/51/06/9e/51069e2869f13496b2a820c16d2166ae.jpg" , "https://i.pinimg.com/236x/de/ef/c4/deefc492495468d51848fc07f91c2df9.jpg"]
var names = ["Murilo huff","Marilia & Leo","Leo Dias Mendonça Huff","Marilia Gravida", "Leo & Marilia S2"];
var i = 0;
function update(){
     
i++;
var numbersOfFamilyMemberInArray = 4;
if(i > numbersOfFamilyMemberInArray ){
    i = 0;
}
 


var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("familiaimagens").src = updatedImage;
document.getElementById("familianome").innerHTML = updatedName;
}