function checkForm() {
    const textAreas = document.querySelectorAll('.required');
    const contactInput = document.querySelector('#contact');
    const contactValue = contactInput.value.trim();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numcheck = /^\d{10}$/;
    if (contactValue !== '') { 
        const isEmail = regex.test(contactValue);
        const isPhone = numcheck.test(contactValue);
        alert(document.querySelector);
        if (isEmail) { 
            alert('e'); 
            console.log('email_accepted'); 
        } else if (isPhone) { 
            alert('p'); 
            console.log('phone_number_accepted'); 
        } else { 
            alert('Invalid Email or Phone Number (Must be a valid email or a 10-digit phone number)'); 
            return false; 
        } 
}

    for (const textarea of textAreas) {
    if (textarea.value.trim() === '') {
        alert('Required questions missing!');
        return false;
    }
    }
    clearForm()
    alert('Form Submitted')
    window.location.replace("game.html")
    }