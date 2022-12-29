function addData() {
    var createdBy = document.getElementById("createdBy").value;
    var updatedBy = document.getElementById("updatedBy").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var employeeId = document.getElementById("employeeId").value;
    var mobileNo = document.getElementById("mobileNo").value;
    var jobTitle = document.getElementById("jobTitle").value;
    var deptName = document.getElementById("deptName").value;
  var datePick = document.getElementById("datePick").value;
    var companyId = document.getElementById("companyId").value;
    var adress = document.getElementById("adress").value;
    var data={
      createdBy: createdBy, updatedBy: updatedBy, firstName: firstName, lastName: lastName,
      employeeId: employeeId, mobileNo: mobileNo, jobTitle: jobTitle, deptName: deptName,datePick:datePick, companyId: companyId
      , adress: adress
    }
    console.log(data);
    this.uploadData(data)
  }
  
  function uploadData(data)
  {
    fetch('http://localhost:8000/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response =>
         {
          console.log('Success:', JSON.stringify(response))
          window.location.assign('index.html')
        })
      .catch(error => console.error('Error:', error));
  
  }
  
  $(function() {  
    $( "#datePick" ).datepicker({  
        dateFormat:"dd-mm-yy"
    });
});