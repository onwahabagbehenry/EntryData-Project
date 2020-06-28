var selectedRow = null

function onFormSubmit(){
 var formData = readFormData();
 if(selectedRow == null) 
 insertNewRecord(formData);
 else
 updateRecord(formData);

 resetform ();
}
   
   function readFormData() {
     var formData = {};
          formData["Fullname"] = document.getElementById("Fullname").value;
          formData["lastname"] = document.getElementById("lastname").value;
          formData["emailaddress"] = document.getElementById("emailaddress").value;
          formData["gender"] = document.getElementById("gender").value;
          formData["RecentlycameintoNigeria"] = document.getElementById("RecentlycameintoNigeria").value;
          return formData;
   
   }
   
   function insertNewRecord(data){
     var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
     var newRow = table.insertRow(table.length);
     cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.Fullname; 
     cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.lastname;
     cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.emailaddress;
     cell4 = newRow.insertCell(3);
     cell4.innerHTML = data.gender;
     cell5 = newRow.insertCell(4);
     cell5.innerHTML = data.RecentlycameintoNigeria;
     cell6 = newRow.insertCell(5);
     cell6.innerHTML = '<a onClick="onEdit(this)">Edit</a>'; 
     cell6 = newRow.insertCell(6);
     cell6.innerHTML = '<a onClick ="onDelete(this)">Delete</a>'; 
   
   }

   function resetform (){
    document.getElementById("Fullname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("emailaddress").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("RecentlycameintoNigeria").value = "";
    selectedRow = null
  }
  
  function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emailaddress").value = selectedRow.cells[2].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("RecentlycameintoNigeria").value = selectedRow.cells[4].innerHTML;
  }
  
  function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Fullname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.emailaddress;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.RecentlycameintoNigeria;
  }
  
  function onDelete(td){
    if(confirm('Are you sure to delete this record?'))
  row = td.parentElement.parentElement;
  document.getElementById("employeeList").deleteRow(row.rowIndex);
  resetform();
  }
  
  
   
   
   
