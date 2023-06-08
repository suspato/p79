menuListArray = ["Pizza Vegetariana","pizza portuguesa","pizza de calabresa","pizza de queijo"];

function getMenu(){
var htmldata;
menuListArray.sort()
for(var i=0 i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i] + '<br>'
} 
document.getElementById("displaymenu").innerhtml=htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for(var i=0 i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+menuListArray[i] + '<br>'
    document.getElementById("displayaddedmenu").innerhtml=htmldata;
} 

}

function addTop(){
var item=document.getElementById("additem").value;
menuListArray.push(item);
addItem();
}