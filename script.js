function myFunctionUp() {
    var updown = document.getElementById('number').value;
    console.log(updown)
    var up = parseInt(updown);
    console.log(up)
     up = up+1;
     console.log(up)
     document.getElementById('number').value = up;
     
   }
   function myFunctiondown() {
    var updown = document.getElementById('number').value;
    var up = parseInt(updown);
    if (up-1 <0)
    {up = 0} 
    else{up = up-1;}
     document.getElementById('number').value = up; 
   }
   
   var prop =""
   function dlt() {
     prop = "You have successfully deleted that entry.";
     console.log(prop)
     document.getElementById("property").innerText = prop;
     document.getElementById("toasthead").style.backgroundColor = "#cd1543";
     document.getElementById("toasthead").style.color = "white";
   }
   function updt(){
     prop = "Changes have been made successfully.";
     console.log(prop)
     document.getElementById("property").innerText = prop;
     document.getElementById("toasthead").style.backgroundColor = "#001844";
     document.getElementById("toasthead").style.color = "white";
   } 
   function Adt(){
    prop = "Successfully added a record.";
    console.log(prop)
    document.getElementById("property").innerText = prop;
    document.getElementById("toasthead").style.backgroundColor = "#869ec3";
    document.getElementById("toasthead").style.color = "white";
  } 
   $(document).ready(function(){
   $("#myBtn").click(function(){
   $('.toast').toast('show');
    });
    $("#myDlt").click(function(){
        $('.toast').toast('show');
    });
     $("#myAdd").click(function(){
        $('.toast').toast('show');
    });
   });