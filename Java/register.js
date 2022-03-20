let userList = []

class User{
    constructor (firstName, lastName, email, age, address, password, cardNumber,phone, color){ 
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age= age;
        this.address= address;
        this.password = password;
        this.cardNumber = cardNumber;
        this.contactPhone= phone; //#attention###
        this.color= color;
    }
}

function register(){
    let inputFirstName= $('#txtFirstName').val();
    let inputLastName= $('#txtLastName').val();
    let inputEmail= $('#txtEmail').val();
    let inputPassword= $('#txtPassword').val();
    let inputage= $("#txtAge").val();
    let inputCardNumber= $('#txtCardNumber').val();
    let inputAddress= $("#txtAddress").val();
    let inputPhone= $("#txtPhone").val();
    let inputColor= $("#txtColor").val();

    console.log(inputFirstName,inputLastName,inputEmail,inputPassword,inputage,inputCardNumber,inputAddress,inputPhone,inputColor);
    //create theUser
    let theUser = new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputage,inputCardNumber,inputAddress,inputPhone,inputColor);
    //validate the user *** Extra Home work
    if (theUser.email=="") {
        console.log("User not added");
    
    }
    else{
        console.log("User Added");
    }
    console.log(theUser);
    //clear the inputs
    $("input").val("");
}
function init() {
   console.log("Registration");
    //hook events

}
window.onload=init;
 
