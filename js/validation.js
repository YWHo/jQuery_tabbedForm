function validateForm() {
    for (var i=0; i < myform.elements.length; i++) {
        if (myform.elements[i].className == "req" &&
            myform.elements[i].value.length == 0) {

            alert("Please fill in all required fields");
            return false;
        }
    }

    var email = document.getElementById('email').value;
    var atPos = email.indexOf('@');
    var dotPos = email.lastIndexOf('.');
    if (atPos < 1 || dotPos < atPos+2 ||
        dotPos >= email.length-1) {
        alert('Please type a valid email address');
        return false;
    }
}
