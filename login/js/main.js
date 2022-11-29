if(localStorage.getItem('users') === null){
    localStorage.setItem('users',JSON.stringify([]))
}



function signUp() {
  let user_name=document.getElementById('username').value
let e_mail=document.getElementById('email').value;
let pass_word=document.getElementById('password').value;
  console.log(user_name);
    if (user_name===null || e_mail===null || pass_word===null) {
      return;
    }else{

        let user_data = {
            Username:user_name,
            Email: e_mail,
            Password: pass_word
        }
        
        
        let user_data_str = JSON.stringify(user_data)
      
       
        let clientsArr = JSON.parse(localStorage.getItem('users')) || [];
        
      
        const userExists = clientsArr.find(user => JSON.stringify(user) === user_data_str);
        
        if (userExists) {
          return alert('User already exists')
        }
          
        
        clientsArr.push(user_data);
        localStorage.setItem('users', JSON.stringify(clientsArr));
      
    }   
  
}
