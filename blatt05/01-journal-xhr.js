
   //starten, wenn page vollständig geladen ist
   document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
//Einlesen über die fetch Schnittstelle
var requisite = fetch("https://xn--4ca9a.eu/FH/posts.xml");
console.log(requisite);
//Fehler abfangen, denn die Operation ist asynchron. Nur wenn die Antwort ok ist sollen die Daten verwertet werden

requisite.then((response) =>{
    if(response.ok){
       return response.text();
    }
   
}).then((data)=>{
   var doc=(new DOMParser()).parseFromString(data,"text/html");
   //weil die Variable nur innerhalb des Blocks angegriffen werden soll: let verwenden
   //um die elemente nach datum sortieren zu können brauche ich die Posts in Arrayform
   let posts=Array.from(doc.getElementsByTagName("post"));
   
   posts.sort(function(a,b){
      return a.getElementsByTagName("datum")[0].innerHTML.localeCompare(b.getElementsByTagName("datum")[0].innerHTML);
   });
   posts.forEach(function(post){
       console.log(post);
   });

    var journal=document.getElementById('journal');
  for(i in posts){
       let jeintrag=document.createElement('div');
       jeintrag.className='j-eintrag';
       let tit = document.createElement('div');
       tit.innerText="[WEB:]"+posts[i].getElementsByTagName('title')[0].innerHTML;
       tit.className = 'titel';
       let ein= document.createElement('div');
       ein.innerText=posts[i].getElementsByTagName('content')[0].innerHTML;
       ein.className = 'eintrag';
       jeintrag.appendChild(tit);
       jeintrag.appendChild(ein);
       jeintrag.appendChild(document.createElement('hr'));
       journal.appendChild(jeintrag);

   };
   console.log('posts loaded');

  
   var jourEntry=document.getElementsByClassName('j-eintrag');
   console.log(document);
   //der counter ist das nullte Element der collection aller Elemente der Klasse counter
   [...jourEntry].forEach(function(element){
      element.firstElementChild.addEventListener('dblclick',function(e){
        addTrigger(element);
      
      });
    });
   var title= document.querySelector('input[name="txtTitel"]');
   
   var content=document.querySelector('textarea[name="txtEintrag"]');
   
   var posten=document.getElementById('fragen');
   
   var count=document.getElementsByClassName('counter')[0];
   
   //variable, die einen Wert erhält, wenn ein Eintrag geupdated werden soll
   var toReplace=null;
   
   posten.addEventListener('click',function(event){
       postEntry(toReplace);
      });
     //extra funktion um neuen Eintrag zu machen
     var postEntry=function(element){
       if(title.value != '' && content.value != '')
       {
         //Element Eintrag hat Kindselement j-eintrag, der wiederum 3 Kindselemente hat
         var jeintrag=document.createElement('div');
         jeintrag.className='j-eintrag';
         var tit = document.createElement('div');
         //Annahme: Die hinzugefügten Posts sind ja auch "Online-Posts", daher schreibe ich auch Web davor
         tit.innerText="[WEB:]"+title.value;
         tit.className = 'titel';
         jeintrag.appendChild(tit);
         var ein= document.createElement('div');
         ein.innerText=content.value;
         ein.className = 'eintrag';
         jeintrag.appendChild(ein);
         jeintrag.appendChild(document.createElement('hr'));
         //ein neuer jeintrag braucht einen Eventlistener
         jeintrag.firstElementChild.addEventListener('dblclick',function(e){
           addTrigger(jeintrag);
         })
         if(posten.value=='Posten!'){
           journal.appendChild(jeintrag);
         }
         else{
           journal.replaceChild(jeintrag,element);
         }
       
        }
     
       //Zurücksetzen der Texteingabe und aller Werte
       title.value = '';
       content.value='';
       posten.value='Posten!';
       count.innerHTML=0;
     };
     // triggerFunktion, zwecks wiederverwertbarkeit( soll 2mal angewendet werden)
   var addTrigger=function(element){
     posten.value='Update!';
     //der Value ist der text, der im ersten Kindselement der jeintrags steht.
     title.value=element.firstElementChild.innerText;
     //das zweite Textfeld ist der Text der im Geschwisterelement des ersten Kindselements steht.
     content.value=element.firstElementChild.nextElementSibling.innerText;
     //counter muss upgedated werden
     count.innerHTML=content.value.length;
     toReplace=element;
    
     
   };
   content.addEventListener('keyup',function(e){
      count.innerHTML=content.value.length;
    });

}).catch((message)=>{
    console.log(message);
});

 