"use strict"
var button=document.getElementsByClassName('button');
var display=document.getElementById('display-container');
var display2=document.getElementById('display-container2');

var store="";

for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('click',function()
    {
        var value=this.getAttribute('data-value');
        if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
        {
            store +=value;
            display.textContent=store;
          
        }
        else if(value=='AC')
        {
           
            display.textContent=' ';
            display2.textContent=' ';
            store="";
        }
       
        else if(value=='='){

            var res=eval(store);
            display.textContent = store;
            display2.textContent = ('='+res);
        }
        else{
           
            store +=value;
            var res=eval(store);
            display.textContent=store;
            display2.textContent = ('='+res);
        }
    });
}
//on key
for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('keyPress',function()
    {
        var value=this.getAttribute('data-value');
        if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
        {
            store +=value;
            display.textContent=store;
          
        }
        else if(value=='AC')
        {
          
            display.textContent=' ';
            display2.textContent=' ';
            store="";
        }
       
        else if(value=='='){
            
            var res=eval(store);
            display.textContent = store;
            display2.textContent = ('='+res);
        }
        else{
           
            store +=value;
            var res=eval(store);
            display.textContent=store;
            display2.textContent = ('='+res);
        }
    });
}
