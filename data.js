let employees=[{Id:101,Name:"kevika",Salary:50000},
                {Id:102,Name:"gayi",Salary:45000},        
                {Id:103,Name:"pavi",Salary:40000},
                {Id:104,Name:"pinky",Salary:35000}]

function display_Data(){
    let rows=""
    for(employee of employees)
    rows = rows + `<tr>
    <td>${employee.Id}</td>
    <td>${employee.Name}</td>
    <td>${employee.Salary}</td>

</tr>`
document.getElementById('abc').innerHTML = rows
}        