console.log('loaded!')

let valid = true 

function contactFormValidation(event) {
    event.preventdefault()
    let name = document.getElementById('formName')
    let email = document.getElementById('formEmail')
    let subject = document.getElementById('formSubject')
    let message = document.getElementById('formMessage')

    if (name == '*Name') {
        valid = false
    }
    if (email == '*Email') {
        valid = false
    } 
    if (subject == '*Subject') {
        valid = false
    }
    if (message == '*Message') {
        valid = false
    }

    if (valid != true) {
        console.log('clicked')
        alert('Please fill out the form!')
    }
    else {
        continue
    } 
}

function preventDefaultEvent(event) {
    event.preventDefault()
}