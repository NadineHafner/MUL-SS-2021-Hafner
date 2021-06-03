//console.dir(document.getElementById("create"));
window.onload=function(){
    var button=document.getElementById("SearchButton");
    console.log(button);
    document.getElementById("SearchButton").addEventListener('click',addEntryToTable);
}



function addEntryToTable(){
console.log("hello");
var table= document.getElementById("Table");
console.log(table);
var fullname=document.getElementById("name");
console.log(fullname.value);
var street=document.getElementById("street");
var city=document.getElementById("city");
var country=document.getElementById("country");
var type=document.getElementById("type");
var orderDate=document.getElementById("orderDate");
console.log("hello");
var table= document.getElementById("Table");
    if(fullname.value !='' || street.value !='' || city.value !='' || country.value !=''|| type.value !=''|| orderDate.value !=''){
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
    

};
