// will find window width

console.log(document.documentElement.clientWidth)

var width = document.documentElement.clientWidth
var menu = document.getElementsByClassName('menu')
const archive = menu[0].children[2]

console.log(archive)
console.log(menu[0].children[2]);



function displayChange(){
    if (width < 768) {
        archive.classList.add('not-visible')
    }
    else {
        archive.classList.remove('visible')
    }
}