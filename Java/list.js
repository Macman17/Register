function displayUser(users){
    //travel the array
   
    //get each user
    for (let x = 0; x < User.length; x++) {
    users+=`
        <tr class= "Utable" id="${User[x].id}">
            <td>Pet Type: ${User[x].firstName}</td>
            <td>Name: ${User[x].lastName}</td>
            <td>Age: ${User[x].email}</td>
            <td>Gender: ${User[x].age}</td>
            <td>Breed: ${User[x].address}</td>
            <td>Owner Name: ${User[x].cardNumber}</td>
            <td>Owner Phone Number: ${User[x].phone}</td>
            <td>Service: ${User[x].color}</td>
            <td> <button onclick="deletePet(${User[x].id});">Delete</button> <td>
        </tr>
        
        `;
        
        console.log(users);
        
    }
    //display the user
    document.getElementById("userTable").innerHTML=users;
    //append the user to the table
    $("#userTable").append($("h3"));
}

function init() {
    console.log("Listing users");
    let users=readUser();
    displayUser(users);
}
window.onload=init;