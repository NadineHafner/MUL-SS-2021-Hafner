var title= document.querySelector('input[name=txtTitel]');
console.log(title);
var content=document.querySelector('textarea[name=txtEintrag]');
console.log(content);
var posten=document.getElementById('fragen');
//hole alle titel
var jourTitles=document.getElementsByClassName('titel');
console.log(jourTitles);
var count=document.getElementsByClassName('counter')[0];


posten.addEventListener('click',function(event){
    postEntry();
  
  });
  //extra funktion um neuen Eintrag zu machen
  var postEntry=function(){
    if(title.value != '' && content.value != '')
    {
      var jeintrag=document.createElement('div');
      jeintrag.className='j-eintrag';
      var tit = document.createElement('div');
      tit.innerText=title.value;
      tit.className = 'titel';
      
      var journal=document.getElementById('journal');
      jeintrag.appendChild(tit);
      
      var ein= document.createElement('div');
      ein.innerText=content.value;
      ein.className = 'eintrag';
      jeintrag.appendChild(ein);
      jeintrag.appendChild(document.createElement('hr'));
      journal.appendChild(jeintrag);

      generateTrigger();
    }
  
    //Zurücksetzen der Texteingabe
    title.value = '';
    content.value='';
    posten.value='Posten!';
    count.innerHTML=0;
  }
  //gestützt an : https://www.codegrepper.com/code-examples/javascript/javascript+get+element+by+class+name+addEventListener
  var changeEntry =function(){
      //alert(this.innerText);
      var x=this.innerText;
      
      var jourEntry=document.getElementsByClassName('j-eintrag');
      [...jourEntry].forEach(function(e){
        console.log(e.innerText);
        //console.log(e.innerText.startsWith(x));
      if(e.innerText.startsWith(x))
        {
          
          posten.value='Update!';
          title.value=e.innerText.split("\n")[0];
          content.value=e.innerText.split("\n")[1];
          count.innerHTML=content.value.length;
          document.getElementById('journal').removeChild(e);
          
        }
      });
  }
  //muss extra funktion sein, damit schon zu beginn funktioniert und immer upgedated wird
  var generateTrigger=function(){
    //update yourtitles
    yourTitles=document.getElementsByClassName('titel');
    Array.from(jourTitles).forEach(function(element) {
      element.addEventListener('dblclick', changeEntry);
    });
  }
 generateTrigger();
 content.addEventListener('keyup',function(e){
   count.innerHTML=content.value.length;
 })
 
  