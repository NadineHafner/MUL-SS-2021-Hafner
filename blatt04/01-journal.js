var title= document.querySelector('input[name="txtTitel"]');
console.log(title);
var content=document.querySelector('textarea[name="txtEintrag"]');
console.log(content);
var posten=document.getElementById('fragen');
var jourEntry=document.getElementsByClassName('j-eintrag');
//der counter ist das nullte Element der collection aller Elemente der Klasse counter
var count=document.getElementsByClassName('counter')[0];
var journal=document.getElementById('journal');
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
      tit.innerText=title.value;
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
        journal.replaceChild(jeintrag,element)
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
  console.log(toReplace);
  
};
content.addEventListener('keyup',function(e){
   count.innerHTML=content.value.length;
 });
 [...jourEntry].forEach(function(element){
  element.firstElementChild.addEventListener('dblclick',function(e){
    addTrigger(element);
  
  })
});
 
  