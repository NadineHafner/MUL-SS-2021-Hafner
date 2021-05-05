

var oldChild=null;
document.getElementById("SearchButton").addEventListener('click',listEvents);
function listEvents(){
var city=document.getElementById("SearchCity").value;
if(city.length==0){
 
  city=document.getElementById("SearchCity").placeholder;
}
console.log(city);
fetch("https://api.deutschebahn.com/freeplan/v1/location/"+city)
.then(response => response.json())
.then(json => {
  console.log(json);
  var bahnhöfe=document.getElementById("Bahnhöfe");
  var list=document.createElement("ul");
  for (i in json){
      var listitem=document.createElement("li");
      listitem.innerHTML=json[i].name;
      listitem.addEventListener('dblclick',function(){
        //find methode von:https://stackoverflow.com/questions/10679580/javascript-search-inside-a-json-object
        var id=  json.find(o => o.name===this.innerHTML).id;
        console.log(id);

        fetch("https://api.deutschebahn.com/freeplan/v1/departureBoard/"+id+"?date="+(new Date()).toISOString())
      .then(response2 => response2.json())
      .then(json2 => {
        console.log(json2);
        var table=document.getElementById("Ankunftsinformationen");
        var rows=table.getElementsByTagName("tr");
        console.log(rows);
        //zuerst tabelle leeren
        for(let x=1;x<rows.length;x++){
          table.removeChild(rows[x]);
        }
        for(i in json2){
          var row=document.createElement("tr");
          var number=document.createElement("td");
          var datum=document.createElement("td");
          var ziel=document.createElement("td");
          var bahnsteig=document.createElement("td");
          number.innerHTML=json2[i].name;
          datum.innerHTML=json2[i].dateTime;
          ziel.innerHTML=json2[i].stopName;
          bahnsteig.innerHTML=json2[i].track;
          row.appendChild(number);
          row.appendChild(datum);
          row.appendChild(ziel);
          row.appendChild(bahnsteig);
          table.appendChild(row);
        }


      });
      });
      list.appendChild(listitem);
  }
  
  if(oldChild == null){
    bahnhöfe.appendChild(list);
    
  }
  else{
      bahnhöfe.replaceChild(list,oldChild);
  }
  oldChild=list;

});}