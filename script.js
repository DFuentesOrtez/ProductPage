function enlargeImg(smallImg) {
    let mainImg = document.getElementById('main-img');
    mainImg.src = smallImg.src;
}

// KEEPS ALL BUTTONS UNCHECKED BY DEFAULT. EVEN WHEN PAGE REFRESHES
document.getElementById('seven').checked = false;
document.getElementById('seven-half').checked = false;
document.getElementById('eight').checked = false;
document.getElementById('eight-half').checked = false;
document.getElementById('nine').checked = false;
document.getElementById('nine-half').checked = false;
document.getElementById('ten').checked = false;
document.getElementById('ten-half').checked = false;
document.getElementById('eleven').checked = false;
document.getElementById('eleven-half').checked = false;
document.getElementById('twelve').checked = false;
document.getElementById('twelve-half').checked = false;
document.getElementById('thirteen').checked = false;

// EACH BUTTON CHANGES THE SIZE VALUE
document.getElementById('seven').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "7";
})
document.getElementById('seven-half').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "7.5";
})
document.getElementById('eight').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "8";
})
document.getElementById('eight-half').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "8.5";
})
document.getElementById('nine').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "9";
})
document.getElementById('nine-half').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "9.5";
})
document.getElementById('ten').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "10";
})
document.getElementById('ten-half').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "10.5";
})
document.getElementById('eleven').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "11";
})
document.getElementById('eleven-half').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "11.5";
})
document.getElementById('twelve').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "12";
})
document.getElementById('twelve-half').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "12.5";
})
document.getElementById('thirteen').addEventListener('click', () => {
    document.getElementById('size-num').innerHTML = "13";
})