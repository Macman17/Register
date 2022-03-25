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
function isValid(user) {
     //validate the user *** Extra Home work
         
    let valid=true;
    $('input').removeClass("input-error");
    if (user.email.length == 0) {
        console.log("User not added: Add email");
        valid=false;
        $('#txtEmail').addClass("input-error");
    }
    if (user.password == 0) {
        console.log("User not added: Add password");
        valid=false;
        $('#txtPassword').addClass("input-error");
    }
      
    if(!valid){
        displayError("Missing data");
   
    }

    return valid;
}
function validatePass() {
    //get the value from form
    let txtPass=$("#txtPassword");
    let password=txtPass.val();
    if (password.length<6) {
        txtPass.css("border","2px solid red");//jquery function
        console.error("Min:6 characters");
    }else{
        txtPass.css("border","2px solid green");//jquery function
        hideError();
    }
    
}
function displayError(msg) {
    //console.error("missing data");
        $("#alertError").removeClass("hide").text(msg);
        
}
function hideError() {
        $("#alertError").addClass("hide");
    
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

    if (isValid(theUser)) {
        saveUser(theUser);
        //clear the inputs
        $("input").val("");
    }
    
}
function login() {
    let inputEmail= $('#txtEmail').val();
    let inputPassword= $('#txtPassword').val();
    let users = readUsers();
    console.log(inputEmail,inputPassword)
    for (let i = 0; i < users.length; i++) {
        if(users[i].email === inputEmail && users[i].password === inputPassword)
        {
            window.location = "user.html";
        }
        else{
            displayError();
            txtPass.css("border","2px solid green");//jquery function
            hideError();
            console.error("Min:6 characters");
            
        }  
    }
}
function displayError(msg2) {
    //console.error("missing data");
        $("#loginError").removeClass("hide").text(msg2);
        
}
function hideError() {
    $("#loginError").addClass("hide");

}
function init() {
   console.log("Registration");
    //hook events
    $(".capture-form #txtPassword").change(validatePass);
}
window.onload=init;
 
