let pointHome = document.getElementById("point-home")
let pointGuest = document.getElementById("point-guest")
let countHome = 0
let countGuest = 0

function addHome1() {
    countHome += 1
    pointHome.textContent = countHome
}

function addHome2() {
    countHome += 2
    pointHome.textContent = countHome
}

function addHome3() {
    countHome += 3
    pointHome.textContent = countHome
}

function addGuest1() {
    countGuest += 1
    pointGuest.textContent = countGuest
}

function addGuest2() {
    countGuest += 2
    pointGuest.textContent = countGuest
}

function addGuest3() {
    countGuest += 3
    pointGuest.textContent = countGuest
}

function resetHome() {
    let countRes = countHome + " - "
    pointHome.textContent = 0
    countHome = 0
}

function resetGuest() {
    let countRes = countGuest + " - "
    pointGuest.textContent = 0
    countGuest = 0
}