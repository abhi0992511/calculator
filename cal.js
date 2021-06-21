"use strict"
var button=document.getElementsByClassName('button');
var display=document.getElementById('display-container');
var operator=null;
var oprend1=0;
var oprend2=null;
for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('click',function()
    {
        var value=this.getAttribute('data-value');
        if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
        {
            operator=value;
            oprend1=parseFloat(display.textContent)
           
            display.textContent=' ';
        }
        else if(value=='AC')
    {
        oprend1=0;
        oprend2='null';
        operator='null';
        display.textContent=' ';
    }
       
        else if(value=='='){
            //operator=parseFloat(display.textContent);
            oprend2=parseFloat(display.textContent);
           // var res=eval(oprend1+" "+operator+" "+oprend2);
        
        var res=eval(oprend1+" "+operator+" "+oprend2);
        display.textContent=' ';
    
            display.textContent=res;
        }
        else{
            display.textContent+=value;
        }
    });
}
//on key
for(var i=0;i<button.length;i++)
{
    button[i].addEventListener('keyPress',function(event)
    {
        var value=this.getAttribute('data-value');
        if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
        {
            operator=value;
            oprend1=parseFloat(display.textContent)
           
            display.textContent=' ';
        }
        else if(value=='AC')
    {
        oprend1=0;
        oprend2='null';
        operator='null';
        display.textContent=' ';
    }
       
        else if(value=='='){
            //operator=parseFloat(display.textContent);
            oprend2=parseFloat(display.textContent);
           // var res=eval(oprend1+" "+operator+" "+oprend2);
        
        var res=eval(oprend1+" "+operator+" "+oprend2);
        display.textContent=' ';
    
            display.textContent=res;
        }
        else{
            display.textContent+=value;
        }
    });
}
