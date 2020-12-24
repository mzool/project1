alert ('Welcome!');
confirm("lets start");
 var x = prompt('Enter your major'); 
 var proceed = true;
  
if (x == '' || x == null ) { proceed= false;}
while(proceed==false){
    var x = prompt('Enter your major'); 
    if (x!=='' && x !== null ){var proceed= true;}
    
}
   document.write(x);
  var t = prompt('insert number between 1 and 10');
  var go =true;
  if ( t==0 || t >10 || t===null || t===''){var go = false;}
 while (go==false){
   var t= prompt('insert number between 1 and 10');
   if( t<=10 && (t>0) && t !== null && t !==''){var go = true;}
 }
 var i = 1;
   for(i; i<=t && i>0; i++){
     document.write(i + '<p> <img src=https://media.istockphoto.com/photos/engineering-diagram-blueprint-paper-drafting-project-sketch-drawing-picture-id961452318?k=6&m=961452318&s=612x612&w=0&h=Y_Yco3ctf-5fLBzTFYffHoct-i0dkkJcXtIgC8fCOqk= ></img>     </p>' );
   }




