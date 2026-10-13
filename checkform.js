function checkForm() {
    const textAreas = document.querySelectorAll('.required');
    const contactInput = document.querySelector('#contact');
    const contactValue = contactInput.value.trim();
    if (contactValue !== '') {
    if (contactValue.length !== 10 || (contactValue.includes('@') && contactValue.includes('.'))) {
        alert('Invalid Email or Phone Number (Must be a 10 digit phone number)');
        return false;
    } else if (contactValue.includes('@') and contactValue.includes('.'))  {
        alert('e');
        console.log('email_accepted');
    } else if (contactValue.length === 10) {
        alert('phone');
        console.log('phone_number_accepted');
    } else {
        alert('error');
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