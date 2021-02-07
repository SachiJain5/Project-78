var text = [
   "Kanhaiyalal Jain",
   "Pushpa Devi",
   "Vicky Jain",
   "Jaya Jain",
   "Sachi Jain",
   "Ridhi jain",
   "Priyansh Jain"
];
var pics= [
    "dadu.jpeg",
    "dadi.jpeg",
    "Pops.jpeg",
    "Mom.jpeg",
    "Sachi.jpeg",
    "Priya.jpeg",
    "",    
];
var i=0;
function nextslide(){
    document.getElementById("para").innerHTML=text [i];
    document.getElementById("Picture").scr=pics[i];
    i++
}