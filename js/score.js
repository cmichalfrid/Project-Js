let divOut = document.createElement('div')
divOut.id = 'divOut'
document.getElementById('yourScore').append(divOut)

let d = document.createElement('div')
d.id = "d"
let d1 = document.createElement('div')
d1.id = "d1"
divOut.append(d)
divOut.append(d1)

let allUsers = JSON.parse(localStorage.getItem("users"))
let user1
for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == sessionStorage.getItem("userEmail")) {
        user1 = allUsers[i]
        d.innerText = 'name:' + user1.name
        d1.innerText = 'score:' + user1.score
        break
    }
}

let d2 = document.createElement('div')
d2.className = "d2"
let d3 = document.createElement('div')
d3.className = "d3"
let d4 = document.createElement('div')
d4.className = "d2"
let d5 = document.createElement('div')
d5.className = "d3"
let d6 = document.createElement('div')
d6.className = "d2"
let d7 = document.createElement('div')
d7.className = "d3"
document.getElementById('allScores').append(d2)
document.getElementById('allScores').append(d3)
document.getElementById('allScores').append(d4)
document.getElementById('allScores').append(d5)
document.getElementById('allScores').append(d6)
document.getElementById('allScores').append(d7)

let max1 = allUsers[0]
let max2 = allUsers[1]
let max3 = allUsers[2]
for (let i = 3; i < allUsers.length; i++) {
    if (allUsers[i].score >= max1.score) {
        max3 = max2
        max2 = max1
        max1 = allUsers[i]


    }
}
d2.innerText = 'name:' + max1.name
d3.innerText = 'score:' + max1.score

d4.innerText = 'name:' + max2.name
d5.innerText = 'score:' + max2.score

d6.innerText = 'name:' + max3.name
d7.innerText = 'score:' + max3.score





