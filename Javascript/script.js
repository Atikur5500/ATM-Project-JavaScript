document.querySelector('#submit-button').addEventListener('click', function () {
    const userEmail = document.querySelector('#user-email');
    const email = userEmail.value;
    const userPassword = document.querySelector('#user-password');
    const password = userPassword.value;
    if (email === 'shanto@gmail.com' && password === 'shanto') {
        window.location.href = 'calculate.html'
    } else {
        alert('Please give valid data')
    }
    userEmail.value = '';
    userPassword.value = '';
})