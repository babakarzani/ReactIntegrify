  function autofill(){  
          var fname, lname, fullname, randomemail, randomteli, i;
          var table=document.getElementById("mytable");
        var table_len;
                for (i=0; i<30; i++){
                fname = randomEl(firstnames);
                lname= randomEl(lastnames); 
                fullname= fname+' '+lname;
                randomemail= fname.toLowerCase()+lname.toLowerCase()+'@'+randomEl(emails);
                 randomteli= randomEl(codez)+ Math.floor(Math.random()*(9999999-1111111) + 1111111);
                table_len=(table.rows.length);
                 var row= table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+fullname+"</td><td id='email_row"+table_len+"'>"+randomemail+"</td><td id='number_row"+table_len+"'>"+randomteli+"</td><td><img src='edit.png' id='edit_img"+table_len+"' class='Edit_img' onclick='edit_row("+table_len+")'> <img src='delete.png' id='delete_img"+table_len+"' class='Delete_img' onclick='delete_row("+table_len+")'><button class='save_btn' id='save_button"+table_len+"'  onclick='save_row("+table_len+")'>Save</button> <button class='cancel_btn' id='cancel_button"+table_len+"' onclick='cancel_row("+table_len+")'>Cancel</button></td></tr>";
                }
      }
function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}


var firstnames = ["Sophia", "Amalia", "Lauretta", "Dorinda", "Owen", "Tyrell", "Gile", "Katherin", "Dorthy", "Dewayne", "Kathey", "Song", "Cerulean", "Charlotte", "Leonarda", "Minda", "crapulous", "Ana", "Dorathy", "Roxane", "Rupert", "Juan", "Ahmad", "Ali", "Hasan", "Ines", "Blumer", "Fast", "McLess", "Fecund", "Fry", "Fulsome", "Garril", "Guilgod", "Henrik", "Sabi", "Anna", "Xing", "Jamal", "Saul", "Sandor", "Andras", "James", "Henry", "Zoltan", "Peiman", "Felix", "Johannes", "Satu", "Andy", "Woodrow", "Jonathan", "Camille"];
var lastnames = ["Bobbin", "Sly", "Coachman", "Truong", "Gile", "Rainbow", "Kaul", "Reisman", "Buny", "Schomer", "Nibblet", "Etienne", "Pixley", "Bouchard", "Glitter", "Garnett", "Kantner", "Perreira", "Prindle", "Beets", "Officer", "Blumer", "Reitz", "Martindale", "Gauer", "Saitos", "Smith", "Karimi", "Dahl", "Brecht", "Bender", "Dudumi", "Turki", "Casaneve", "Kazoo", "Banjo", "Patternmaker", "Plant", "Ozborne", "Sawfil", "Sharp", "Sandberg", "Statham", "Wheelwright", "Wilson"];
var emails = ["gmail.com", "hotmail.com", "yahoo.com"];
var codez= ["040", "030", "050"];
       
       var or_name="";
       var or_email="";
       var or_number="";
       
//**Edit row code
       function edit_row(no)
{
 document.getElementById("edit_img"+no).style.display="none";
 document.getElementById("delete_img"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.position="relative";
    document.getElementById("save_button"+no).style.left="0px";
    document.getElementById("save_button"+no).style.top="20px";
document.getElementById("cancel_button"+no).style.display="block";
    document.getElementById("cancel_button"+no).style.position="relative";
    document.getElementById("cancel_button"+no).style.left="100px";
    document.getElementById("cancel_button"+no).style.top="-20px";
    
 or_name=document.getElementById("name_row"+no).innerHTML;
 or_email=document.getElementById("email_row"+no).innerHTML;
 or_number=document.getElementById("number_row"+no).innerHTML;
    
 var name=document.getElementById("name_row"+no);
 var email=document.getElementById("email_row"+no);
 var number=document.getElementById("number_row"+no);
	
 var name_data=name.innerHTML;
 var email_data=email.innerHTML;
 var number_data=number.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"' class='temp_input'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"' class='temp_em_input'>";
 number.innerHTML="<input type='number' id='number_text"+no+"' value='"+number_data+"' class='temp_input'>";
}
       function save_row(no)
{
    
 var name_val=document.getElementById("name_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var number_val=document.getElementById("number_text"+no).value;
    if (name_val=="") return;
    if (email_val=="") return;
    if (number_val=="") return;
 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("number_row"+no).innerHTML=number_val;

 document.getElementById("edit_img"+no).style.display="block";
document.getElementById("delete_img"+no).style.display="block";
document.getElementById("save_button"+no).style.display="none";
document.getElementById("cancel_button"+no).style.display="none";
    document.getElementById("edit_img"+no).style.position="relative";
    document.getElementById("edit_img"+no).style.left="60px";
    document.getElementById("edit_img"+no).style.top="8px";
    document.getElementById("delete_img"+no).style.position="relative";
    document.getElementById("delete_img"+no).style.left="138px";
    document.getElementById("delete_img"+no).style.top="-16px";
    
}

function cancel_row(no)
       {
           
document.getElementById("edit_img"+no).style.display="block";
document.getElementById("delete_img"+no).style.display="block";
document.getElementById("save_button"+no).style.display="none";
document.getElementById("cancel_button"+no).style.display="none";  
           document.getElementById("edit_img"+no).style.position="relative";
    document.getElementById("edit_img"+no).style.left="60px";
    document.getElementById("edit_img"+no).style.top="8px";
    document.getElementById("delete_img"+no).style.position="relative";
    document.getElementById("delete_img"+no).style.left="138px";
    document.getElementById("delete_img"+no).style.top="-16px";
           
document.getElementById("name_row"+no).innerHTML=or_name;
document.getElementById("email_row"+no).innerHTML=or_email; document.getElementById("number_row"+no).innerHTML=or_number;

           
       }
       
function addRow()
{
    
    var new_name=document.getElementById("Name_input").value;
    var new_email=document.getElementById("email_input").value;
    var new_number=document.getElementById("number_input").value;
    if (new_name=="") return;
    if (new_email=="") return;
    if (new_number=="") return;
	
 var table=document.getElementById("mytable");
 var table_len=(table.rows.length);
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='number_row"+table_len+"'>"+new_number+"</td><td><img src='edit.png' id='edit_img"+table_len+"' class='Edit_img' onclick='edit_row("+table_len+")'> <img src='delete.png' id='delete_img"+table_len+"' class='Delete_img' onclick='delete_row("+table_len+")'><button class='save_btn' id='save_button"+table_len+"'  onclick='save_row("+table_len+")'>Save</button> <button class='cancel_btn' id='cancel_button"+table_len+"' onclick='cancel_row("+table_len+")'>Cancel</button></td></tr>";

 document.getElementById("Name_input").value="";
 document.getElementById("email_input").value="";
 document.getElementById("number_input").value="";
}
       function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

       function sortTable(n) {
           
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("mytable");

  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");

    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
           if (dir=="asc")
            {
                if (n==0){document.getElementById("cul_1").innerHTML='Name &#8595;';
                         document.getElementById("cul_2").innerHTML='E-mail address';
                          document.getElementById("cul_3").innerHTML='Phone number';
                         }
                if (n==1){document.getElementById("cul_2").innerHTML='E-mail address &#8595;';
                         document.getElementById("cul_1").innerHTML='Name';
                          document.getElementById("cul_3").innerHTML='Phone number';}
                if (n==2){document.getElementById("cul_3").innerHTML='Phone number &#8595;';
                         document.getElementById("cul_1").innerHTML='Name';
                         document.getElementById("cul_2").innerHTML='E-mail address';
                          }
        
                }
           if (dir=="desc")
            {
                if (n==0){document.getElementById("cul_1").innerHTML='Name &#8593;';document.getElementById("cul_2").innerHTML='E-mail address';
                          document.getElementById("cul_3").innerHTML='Phone number';}
                if (n==1){document.getElementById("cul_2").innerHTML='E-mail address &#8593;';
                         document.getElementById("cul_1").innerHTML='Name';
                          document.getElementById("cul_3").innerHTML='Phone number';}
                if (n==2){document.getElementById("cul_3").innerHTML='Phone number &#8593;';
                          document.getElementById("cul_1").innerHTML='Name';
                         document.getElementById("cul_2").innerHTML='E-mail address';}
        
                }

}
