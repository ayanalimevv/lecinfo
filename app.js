// All variables
let facinfo=document.getElementById("facinfo");
let subinfo=document.getElementById("subinfo");
let datediv=document.getElementById("date");
let nextfacinfo=document.getElementById("nextfacinfo");
let nextsubinfo=document.getElementById("nextsubinfo");
let rotatebtn=document.getElementsByClassName("rotate")[0];
let rotatebtn2=document.getElementsByClassName("rotate")[1];
let card=document.querySelector(".card");
let date= new Date();
let hours=date.getHours();
let lecinfo;
let minutes=date.getMinutes();
let index=Index(hours);
let teacherinfo="";
// Getting today name
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let day = weekday[date.getDay()];

// Everyday tt of both batches
let Monday1=["OOCUML","CN","Lunch","OS","OS","PCS:2","PCS:2"];
let Monday2=["OOCUML","CN","Lunch","OOOCUML","OOCUML","PCS:2","PCS:2"];
let Tuesday1=["OOCUML","OOCUML","Lunch","COMA","PSNM","LIB","CN"];
let Tuesday2=["OS","OS","Lunch","COMA","PSNM","LIB","CN"];
let Wednesday1=["PCS:2","OOCUML","Lunch","OS","COMA","CN","CN"];
let Wednesday2=["PCS:2","OOCUML","Lunch","OS","COMA","JPW","JPW"];
let Thursday1=["OS","LIB","Lunch","PSNM","PSNM","LIB","LIB"]
let Thursday2=["OS","LIB","Lunch","COMA","COMA","LIB","LIB"]
let Friday1=["COMA","PSNM","Lunch","CN","LIB","JPW","JPW"];
let Friday2=["COMA","PSNM","Lunch","CN","LIB","CN","CN"];
let Saturday1=["OOCUML","PSNM","Lunch","OS","LIB/OOCUML","COMA","COMA"];
let Saturday2=["OOCUML","PSNM","Lunch","OS","LIB/OOCUML","PSNM","PSNM"];
let Sunday1=["Holiday","Holiday","Holiday","Holiday","Holiday","Holiday","Holiday"];

// Faculties object having faculty name as key and subject name as value
var Faculties={
    "MONIKA NAYK":"OS",
    "KEYA PATEL":"OOCUML",
    "HIMANI JOSHI" : "CN",
    "PRALHAD MAGADUM" : "JPW",
    "ALKA VIRDA" : "COMA",
    "DHARNA PATEL" : "PSNM",
    "-":"PCS:2",
    "Break Time":"Lunch",
    "LIBRARY":"LIB",
    "Have a great weekend":"Holiday"
}
// getting day value and converting to array corresponding to that day name
let value=(day+"1");
value=eval(value);//Convert string to variable name's

// Finding and putting current lecture info
findinfo(index);
facinfo.innerText=teacherinfo;
subinfo.innerText=lecinfo;

// Formation of date string that has to display on nav
day=day.slice(0,3);
datetodisplay=`${day} ${date.getDate()},${date.getFullYear()}`
datediv.innerText=datetodisplay;

// information of next lecture(Fetching and putting in div)
index++;
findinfo(index);
nextfacinfo.innerText=teacherinfo;
nextsubinfo.innerText=lecinfo;

// Adding event listener to both of button
rotatebtn.addEventListener('click',()=>{
    card.classList.add('rotateddiv');
})
rotatebtn2.addEventListener('click',()=>{
    card.classList.remove('rotateddiv');
})


// functions used in program

// Clever algorithm to find index based on time
function Index(hours){
        if(hours>=9 && hours<12){
            return (minutes>=30)?(hours-9):(hours-10);
        }
        else if(hours>=12 && hours<17){
            return (minutes>=15)?(hours-9):(hours-10);
        }
        else{
            return -1;
        }
    }

// assigning value to lecinfo and teacherinfo based on index
function findinfo(index){
    if(index<0||index>6){
        lecinfo="No Lecture 🥳";
        teacherinfo="Enjoy!"
    } else{
        lecinfo=value[index];
        teacherinfo = getKeyByValue(Faculties,lecinfo );
    }
}

// Getting key by value to get teacher name by subject in Faculties object
function getKeyByValue(object, value) {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
            return prop;
        }
    }
}
let list=document.getElementById("list");