var title= document.querySelector('input[name="txtTitel"]');
console.log(title);
var content=document.querySelector('textarea[name="txtEintrag"]');
console.log(content);
var posten=document.getElementById('fragen');
var jourEntry=document.getElementsByClassName('j-eintrag');
//der counter ist das nullte Element der collection aller Elemente der Klasse counter
var count=document.getElementsByClassName('counter')[0];
var journal=document.getElementById('journal');

posten.addEventListener('click',function(event){
    postEntry();
   });
  //extra funktion um neuen Eintrag zu machen
  var postEntry=function(){
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
      jeintrag.addEventListener('dblclick',function(e){
        addTrigger(jeintrag);
      })
      journal.appendChild(jeintrag);
      //jourEntry=document.getElementsByClassName('j-eintrag');
      //generateTrigger();
      
    }
  
    //Zurücksetzen der Texteingabe und aller Werte
    title.value = '';
    content.value='';
    posten.value='Posten!';
    count.innerHTML=0;
  }
  // triggerFunktion, zwecks wiederverwertbarkeit( soll 2mal angewendet werden)
var addTrigger=function(element){
  posten.value='Update!';
  //der Value ist der text, der im ersten Kindselement der jeintrags steht.
  title.value=element.firstElementChild.innerText;
  //das zweite Textfeld ist der Text der im Geschwisterelement des ersten Kindselements steht.
  content.value=element.firstElementChild.nextElementSibling.innerText;
  //counter muss upgedated werden
  count.innerHTML=content.value.length;
  journal.removeChild(element);
}
  var generateTrigger=function(){
    [...jourEntry].forEach(function(element) {
      console.log(element.firstElementChild.innerText);
      console.log(element.parentElement);
      element.firstElementChild.addEventListener('dblclick', function(e){
     addTrigger(element);
    })});
  }
 generateTrigger();
 content.addEventListener('keyup',function(e){
   count.innerHTML=content.value.length;
 })
 
  