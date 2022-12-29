function generateTable(array) {
  // Get the reference to the table body
  var tableBody = document.getElementById("table-body");
// Clear the table body
  tableBody.innerHTML = "";
  console.log(array);
  // Iterate through the array of objects
  for (var i = 0; i < array.length; i++) {
    // Get the current object
    var object = array[i];
    console.log(object);
    // Create a new table row element
    var row = document.createElement("tr");
// Add the ID cell
    var idCell = document.createElement("td");
    idCell.innerHTML = object.empId;
    row.appendChild(idCell);
 // Add the Name cell
    var nameCell = document.createElement("td");
    nameCell.innerHTML = object.firstName;
    row.appendChild(nameCell);
 // Add the Email cell
    var emailCell = document.createElement("td");
    emailCell.innerHTML = object.lastName;
    row.appendChild(emailCell);
 // Add the Email cell
    var emailCell = document.createElement("td");
    emailCell.innerHTML = object.mobileNo;
    row.appendChild(emailCell);
 // Add the Email cell
    var emailCell = document.createElement("td");
    emailCell.innerHTML = '<button><a href="edit.html?id='+`${object.empId}`+'"><i class="fa fa-edit"></a></button>';
    row.appendChild(emailCell);
// Add the Email cell
    var emailCell = document.createElement("td");
    emailCell.innerHTML = '<button type="button" onclick="onDelete(' + `${object.empId}` + ')"><i class="fa fa-trash"></button>';
    row.appendChild(emailCell);
 // Add the row to the table body
    tableBody.appendChild(row);
  }
}
window.onload = getData;
function getData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      let emp = JSON.parse(this.response);
      console.log(emp.data)
      generateTable(emp.data);
    }
  };
  xhttp.open("GET", "http://localhost:8000/contacts", true);
  xhttp.send();
}

async function onDelete(id) {
  console.log('deleting ' + id)
  fetch(`http://localhost:8000/contact/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.getData();
    })
    .catch(error => console.error(error))
}