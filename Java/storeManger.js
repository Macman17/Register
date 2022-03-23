const LS_KEY="users";
function saveUser(user) {
    let val= JSON.stringify(user);//parse into a JSON String
    localStorage.setItem(LS_KEY,val);//send the string to the local storage
}
function readUser() {
    let data= localStorage.getItem(LS_KEY);
    console.log(data);// JSON
    if(!data){
        return [];
    }else{
        let list=JSON.parse(data);//obj
        console.log(list);
        return list;
    }
}