let allUsers = JSON.parse(localStorage.getItem("users"))
let user1
for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["email"] == sessionStorage.getItem("userEmail")) {
    user1 = allUsers[i]
    console.log('dfgh');
    break
  }
}

let l1 = document.createElement('label')
l1.id = "playerName"
l1.append("hello" + ":" + " " + sessionStorage.getItem("userName"))
document.body.append(l1)

let c = 0
let arr = []
let arrcolor = document.getElementsByClassName('color')
let i = 0
let d = 1
function start() {
  i = 0
  arr = []
  d = 1
  play()

}


function play() {
  let x = Math.round(Math.random() * 3 + 0)
  arr[i] = arrcolor[x]
  console.log(arr);
  for (let index = 0; index < arr.length; index++) {
    setTimeout(() => {
      arr[index].classList.add(arr[index].id + "1");
      song = new Audio("../audio/redSound.mp3");
      song.play()
      setTimeout(() => {
        arr[index].classList.remove(arr[index].id + "1");
      }, 500);
    }, 1000 * index);
  }
  count = 0
}
console.log(user1);
let counter = user1["score"]
console.log(counter);
let count = 0
function check() {
  let r = document.getElementById('count')
  let y = event.currentTarget

  y.classList.add(y.id + "1");
  setTimeout(() => {
    y.classList.remove(y.id + "1");
    h = new Audio("../audio/redSound.mp3");
    h.play()
    setTimeout(() => {
      if (y == arr[count]) {
        count++
        if (count > counter) {
          counter = count
          t1.innerText = counter
        }
        console.log(counter);
      }
      else if (y != arr[count]) {
        i = 0
        arr = []
        r.innerText = 'XX'
        d = 1
        H = new Audio("../audio/fail.mp3");
        H.play()

        saveScore()
        play()
        if (counter < count)
          t1.innerText = count++
      } {
        if (count == arr.length) {
          r.innerText = d++
          i++
          play()
        }
      }

    }, 900);
  }, 400);


}

let t = document.createElement('div')
t.id = 'score'
document.body.append(t)
let h = document.createElement('h1')
t.append(h)
h.innerText = 'score:'
let t1 = document.createElement('div')
t1.id = 'r'
t.append(t1)
t1.innerText = counter

function saveScore() {
  user1["score"] = counter
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["email"] == sessionStorage.getItem("userEmail"))
      allUsers[i] = user1
    localStorage.setItem("users", JSON.stringify(allUsers))
    break
  }
}

let hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0]
let instructions = document.getElementsByClassName('instructions')[0]
hamburgerIcon.addEventListener('click', humb)
function humb() {
  console.log("asdfghfdsdfg");
  if (instructions.style.display == "block") {
    instructions.style.animation = "humbC 1s forwards"
    instructions.addEventListener('animationend', function (event) {
      if (event.animationName == 'humbC') {
        instructions.style.display = "none";
        instructions.style.animation = "";
      }
      ;
    })
  }
  else {
    instructions.style.display = "block"
    instructions.style.animation = "humb 1s forwards"
  }
}

window.onbeforeunload = function () {
  saveScore()
}
function s() {
  window.location = '../html/score.html'
}








