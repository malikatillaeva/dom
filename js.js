// DOM document object module

const palet = document.querySelector('.palet')

const childs = document.querySelectorAll('.child')

// console.log(palet);
// console.log(childs);

const colors = ['red', 'yellow', 'green', 'blue']

for(let i=0; i<childs.length; i++){
    childs[i].style.background = colors[i]
}


const btn = document.querySelector('button')

// addEventListener eto shtuka reagiruyet na sobitiye
                        //
btn.addEventListener('click', function() {
    console.log('najali');
    if(btn.innerText != 'close'){
    palet.style.transform = 'translateY(0)'
    this.innerText = 'close'}
    else{
        palet.style.transform = 'translateY(-100%)'
        this.innerText = 'open'
    }
})

const input = document.querySelector('input')
const mirror = document.querySelector('.mirror')

const change = document.querySelector('.change')

change.addEventListener('click', function(){
    var random = Math.round(Math.random()*colors.length);
    console.log(random);
    mirror.style.background = colors[random]
})

input.addEventListener('input', function(){
    mirror.style.background = input.value
})