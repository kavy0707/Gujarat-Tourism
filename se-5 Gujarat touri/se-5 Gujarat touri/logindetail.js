document.getElementById("Sign up").addEventListener("Sign up", function(event) {
    event.preventDefault(); 

    
    var fullname = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("PhoneNo").value;
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("conformpassword").value;
    var gender = document.querySelector('input[name="Gender"]:checked') ? 
                 document.querySelector('input[name="Gender"]:checked').value : '';

   
    if (
        fullname === 'Kishan' && 
        username === 'KISHAN123' && 
        email === 'kkr234@gamil.com' && 
        phoneNo === '9879879879' && 
        password === '123' && 
        confirmPassword === '123' &&
        gender !== ''
    ) {
        
        window.location.href = 'website.html';
        
    } else {
        
        alert('Invalid data. Please try again.');
    }
});
