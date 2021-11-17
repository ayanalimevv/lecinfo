let date= new Date();
// let hours=date.getHours();
let hours=11;
let minutes=date.getMinutes();
let index=Index(hours);
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let day = weekday[date.getDay()];
let Monday1=["Weekly/OOCUML","CN","Lunch","OS","OS","PCS:2","PCS:2"];
let Monday2=["Weekly/OOCUML","CN","Lunch","OOOCUML","OOCUML","PCS:2","PCS:2"];
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

var Faculties={
    "MONIKA NAYK":"OS",
    "KEYA PATEL":"OOCUML",
    "HIMANI JOSHI" : "CN",
    "PRALHAD MAGADUM" : "JPW",
    "ALKA VIRDA" : "COMA",
    "DHARNA PATEL" : "PSNM",
    "-":"PCS:2",
    "Break Time":"Lunch"
}
let value=(day+"1");
value=eval(value);
var lecinfo;
if(index===-1||index>6){
    lecinfo="No Lecture 🥳";
} else{
    lecinfo=value[index];
}

function getKeyByValue(object, value) {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
            return prop;
        }
    }
}
let teacherinfo = getKeyByValue(Faculties,lecinfo );


function Index(hours){
    if(hours>=9 && hours<12){
        return (minutes>30)?(hours-9):(hours-10);
    }
    else if(hours>=12 && hours<17){
        return (minutes>15)?(hours-9):(hours-10);
    }
    else{
        return -1;
    }
}
