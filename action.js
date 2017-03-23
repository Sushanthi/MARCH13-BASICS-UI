(function () {
    alert("hi");
  
    function submitRegister(){
        var fname, lname, age;
        fname = document.getElementById("firstNameId").value;
        lname = document.getElementById("lastNameId").value;
        age = document.getElementById("ageId").value;
        var arr = [{fname, lname, age}];
        empTable(arr);
    }
    
   function empCol(data){
        var col = document.createElement("td");
        col.innerHTML = data;
        return col;
    }
    
    function empRow(emp){
        var fnameCol =  empCol(emp.fname);
        var lnameCol = empCol(emp.lname);
        var ageCol = empCol(emp.age);
        var row = document.createElement("tr");
        row.appendChild(fnameCol);
        row.appendChild(lnameCol);
        row.appendChild(ageCol);
        return row;

    }
    
    function empTable(ar){
        var tabId = document.getElementById("detailsTableId");
        for(var i = 0; i<ar.length; i++){
          var table =  empRow(ar[i]);
            tabId.appendChild(table);
        }
        
    }
    
    var sub = document.getElementById("submitId");
    sub.addEventListener("click",submitRegister);
})();