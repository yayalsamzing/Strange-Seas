function checkForm() {
    const textAreas = document.querySelectorAll('.required');
    const contactInput = document.querySelector('#contact');
    const contactValue = contactInput.value.trim();
if (contactValue !== '') { 
    const isEmail = contactValue.includes('@') && contactValue.includes('.');
    const isPhone = contactValue.length === 10 && !isNaN(contactValue);

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