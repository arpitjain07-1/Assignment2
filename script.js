function addUser() {

    let name = document.getElementById("Name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("emailtype").value;

    if (name === "" || age === "" || email === "") {
        alert("Please fill all 3 fields!");
        return;
    }

    let table = document.getElementById("userTable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = email;

    // Clear inputs
    document.getElementById("Name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("emailtype").value = "";
}