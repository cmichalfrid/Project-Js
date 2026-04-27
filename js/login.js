function singIn() {
    let users = JSON.parse(localStorage.getItem('users')) || []
    let pname = document.getElementById('name')
    let pemail = document.getElementById('email')
    let ppassword = document.getElementById('password')
    let user = {
        name: pname.value,
        email: pemail.value,
        password: ppassword.value,
        score: 0
    }
    let isfind = 0
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == pemail.value) {
            if (users[i].password != user.password) {
                console.log(user.password);
                alert("הסיסמא שגויה")
                isfind = 1
                break
            }
            sessionStorage.setItem('userName', user.name)
            sessionStorage.setItem('userEmail', user.email)
            alert("ברוכים הבאים")
            event.preventDefault()
            window.location = '../html/play.html'
            isfind = 1
            break
        }

    }
    debugger
    if (isfind == 0) {
        alert("עליך להירשם")
        event.preventDefault()
        window.location = '../html/singUp.html'

    }

}
function singUp() {

    let users = JSON.parse(localStorage.getItem('users')) || []
    let pname = document.getElementById('name')
    let pemail = document.getElementById('email')
    let ppassword = document.getElementById('password')
    let user = {
        name: pname.value,
        email: pemail.value,
        password: ppassword.value,
        score: 0
    }
    let i = 0;
    debugger
    for (; i < users.length && (users[i].email != pemail.value); i++);
    if (i < users.length) {
        alert("המייל קיים במערכת")
        event.preventDefault()
        window.location = '../html/login.html'
    }
    else {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users))
        sessionStorage.setItem('userName', user.name)
        sessionStorage.setItem('userEmail', user.email)
        alert("נרשמת בהצלחה")
        event.preventDefault()
        window.location = '../html/play.html'
    }
}





