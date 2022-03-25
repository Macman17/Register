const LS_KEY="users";
function saveUser(user) {
    //load  the old data
    let data=readUsers();
    //marge old and new data
    data.push(user);
    //save
    let val= JSON.stringify(data);//parse into a JSON String
    localStorage.setItem(LS_KEY,val);//send the string to the local storage
}
function readUsers() {
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
function remove(index) {
    let data=readUsers();
    //we remove the user in the given index from the array data
    data.splice(index, 1);//must have the specific index and how many to delete
    //save
    let val= JSON.stringify(data);//parse into a JSON String
    localStorage.setItem(LS_KEY,val);
}