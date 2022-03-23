const LS_KEY="users";
function saveUser(user) {
    //load  the old data
    let data=readUser();
    //marge old and new data
    data.push(user);
    //save
    let val= JSON.stringify(user);//parse into a JSON String
    localStorage.setItem(LS_KEY,val);//send the string to the local storage
}
function readUser() {
    let data= localStorage.getItem(LS_KEY);//get data from LS
    console.log(data);// JSON
    if(!data){//is not data?
        return [];//create the array
    }else{
        //we have data
        let list=JSON.parse(data);//obj
        return list;
    }
}