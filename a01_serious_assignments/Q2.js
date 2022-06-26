window.addEventListener('DOMContentLoaded', () =>{

    let empNo = document.querySelector('#empNo');
    let empName = document.querySelector('#empName');
    let empEmail = document.querySelector('#empEmail');
    let empDeptid = document.querySelector('#empDeptid');
    const Emp = [{empNo:111,empName:"Shubhangi",empEmail:"aaa@xyz.com",empDeptid:1},
                {empNo:112,empName:"Siddhant",empEmail:"bbb@xyz.com",empDeptid:1},
                {empNo:113,empName:"Siddhesh",empEmail:"ccc@xyz.com",empDeptid:2},
                {empNo:114,empName:"Snehal",empEmail:"ddd@xyz.com",empDeptid:3},
                {empNo:115,empName:"Sohel",empEmail:"eee@xyz.com",empDeptid:1}];
                {empNo:115,empName:"Sonam",empEmail:"fff@xyz.com",empDeptid:3}];
                
            
    var html = "<table border='1|1'>"

    let btnAdd = document.querySelector('#btnAdd');
    let btnRemove = document.querySelector('#btnRemove');
    let btnModify = document.querySelector('#btnModify');
    let btnViewAll = document.querySelector('#btnViewAll');
    let btnVOD = document.querySelector('#btnVOD');
    let sp = document.querySelector('#sp');
    let Y = document.querySelector('#Y');
 

    empNo.addEventListener('blur', () =>{
    let numEntered = empNo.value;
    for (let i = 0; i < Emp.length; i++) {
      if (numEntered == Emp[i].empNo) {
        btnModify.disabled = false;
        btnRemove.disabled = false;
        btnAdd.disabled = true;
        sp.innerHTML = "Present";
        break;
      } else {
        console.log("else");
        btnModify.disabled = true;
        btnRemove.disabled = true;
        btnAdd.disabled = false;
        sp.innerHTML = "Not Present"
      }
    }

    });
    btnAdd.addEventListener('click', () => {

        Emp.push({empNo:empNo.value});
        btnModify.disabled = true;
        btnRemove.disabled = true;
        btnAdd.disabled = true;
        sp.innerHTML = "Element added";
        empNo.value = "";
      });
    
      btnViewAll.addEventListener('click', () => {
        Y.innerHTML = Emp;
      });
    
      btnModify.addEventListener('click', () => {
    
        // var index = Emp.indexOf(empNo.value);
        let i = 0;
        while (i < Emp.length) {
          if (empNo.value == Emp[i])
            break;
          i++;
        }
        let newValue = prompt("Enter new element");
        Emp[i] = newValue;
        sp.innerHTML = "Element edited";
        empNo.value = "";
        console.log(Emp);
      });
    
      btnRemove.addEventListener('click', () => {
    
        let i = 0;
        while (i < Emp.length) {
          if (empNo.value == Emp[i])
            break;
          i++;
        }
        Emp.splice(i, 1);
        sp.innerHTML = "Element removed";
        empNo.value = "";
      });

      btnViewAll.addEventListener('click', () => {

        for(let i =0; i<Emp.length; i++){
            html+='<tr>';
            html+='<td>'+Emp[i].empNo+'</td>';
            html+='<td>'+Emp[i].empName+'</td>';
            html+='<td>'+Emp[i].empEmail+'</td>';
            html+='<td>'+Emp[i].empDeptid+'</td>';
            html+='</tr>';
        }
        document.getElementById("table").innerHTML = html;

      });

      btnVOD.addEventListener('click', () => {
        
        let tempId = btnVOD.value;

        const tempArr = [];
        for (let i = 0; i < Emp.length; i++) {
          if (tempId==Emp[i].empDeptid){
            tempArr.push(Emp[i].empName); 
          }
        }
        sp.innerHTML = "Employees of"+" "+tempId;
        Y.innerHTML = tempArr;

      });

      
});