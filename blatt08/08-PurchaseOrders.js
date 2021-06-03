console.log(document.getElementById("type"));


function addEntryToTable(){
console.log("hello");
var table= document.getElementById("Table");
console.log(table);
document.getElementById("create").addEventListener("click",addEntryToTable());


var fullname=document.getElementById("name");
var street=documet.getElementById("street");
var city=document.getElementById("city");
var country=document.getElementById("country");
var type=document.getElementById("type");
var orderDate=document.getElementById("orderDate");
console.log("hello");
var table= document.getElementById("Table");
    if(fullname.value !=''){
        var row = table.insertRow();
        var col1=row.insertCell();
        col1.innerHTML=fullname.value;
        var col2=row.insertCell();
        col2.innerHTML=street.value;
        var col3=row.insertCell();
        col3.innerHTML=city.value;
        var col4=row.insertCell();
        col4.innerHTML=country.value;
        var col5=row.insertCell();
        col5.innerHTML=type.value;
        var col6=row.insertCell();
        col6.innerHTML=orderDate.value;

    }
    fullname.value='';
    street.value='';
    city.value='';
    country.value='';
    type.value='';
    orderDate.value='';

}
