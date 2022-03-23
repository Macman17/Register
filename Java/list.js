function displayUser(users){
    //travel the array
    let users="";
    //get each user
    for (let x = 0; x < readUser.length; x++) {
        users+=`
        <tr class= "Utable" id="${readUser}">
            <td>Pet Type: ${petSalon.pet[x].petType}</td>
            <td>Name: ${petSalon.pet[x].petName}</td>
            <td>Age: ${petSalon.pet[x].petAge}</td>
            <td>Gender: ${petSalon.pet[x].petGender}</td>
            <td>Breed: ${petSalon.pet[x].petBreed}</td>
            <td>Owner Name: ${petSalon.pet[x].petOwner}</td>
            <td>Owner Phone Number: ${petSalon.pet[x].petOwnerPhone}</td>
            <td>Service: ${petSalon.pet[x].petService}</td>
            <td> <button onclick="deletePet(${petSalon.pet[x].id});">Delete</button> <td>
        </tr>
        
        `;
        
    
        
    }
    //display the user

    //append the user to the table
}

function init() {
    console.log("Listing users");
    let users=readUser();
    displayUser(users);
}
window.onload=init;