//

  document.getElementById('loginbtn').addEventListener('click', login)

function login () {
    let Username = (document.getElementById('UN').value);
    let Password = (document.getElementById('PW').value);

    if ( Username == 'username' && Password == 'password') {
      alert('Login Successful');

    } else if (Username == 'computer' && Password =='science') {
      alert('Login Successful');

    } else if (Username =='Harry' && Password =='Ainlay') {
      alert('Login Successful');


    } else {
       document.getElementById('PW').style.backgroundColor= 'gray';
       document.getElementById("PW").value = '';
       document.getElementById("UN").value = '';
       alert('Login Unsuccessful, Please try again');
    }
}


