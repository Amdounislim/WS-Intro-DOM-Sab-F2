
// document.getElementById('my-p').addEventListener("click", function(){
//     document.getElementById('my-p').style.color="red"
// })

// var x = document.getElementById('my-p')
// x.addEventListener("click", function(){
//     x.style.color="red"
// })

// var y = document.getElementById('about-item')
// y.addEventListener("click", function(){
//     // console.log(y.innerHTML)
//     // console.log(y.innerText)
//     // y.innerHTML ='Bonjour'
//     y.innerText ='Bonjour'
// })
var y = document.getElementsByClassName('about-class')[0]
y.addEventListener("click", function(){
    y.innerHTML ='Bonjour'
})

var items = document.getElementsByClassName('item')
for (let el of items) {
    el.addEventListener('click', function(){
        el.innerHTML="hello"
    })
}

var prices = document.getElementsByClassName('price')
for(let el of prices){
    el.addEventListener("click", function(){
        el.style.color = "green"
        el.innerHTML = +el.innerHTML + 50
    })
}