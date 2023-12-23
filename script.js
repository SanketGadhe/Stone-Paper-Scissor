let btns=document.querySelectorAll('.btn')
let win=document.querySelector('.win')
let p=win.querySelector('p')
let you=document.querySelector('#you')
console.log(you)
let comp=document.querySelector('#computer')
let youScore=0
let compscore=0
let new_game=document.querySelector('#new-game')
new_game.addEventListener('click',()=>{
    youScore=0
    compscore=0
    console.log(you)
    you.innerText=youScore
    comp.innerText=compscore
    console.log(youScore,compscore)
    win.classList.add('hide')
    new_game.classList.add('hide')
})
console.log(p.innerText)
let list=['stone','paper','scissor']
btns.forEach((btn)=>{
btn.addEventListener('click',()=>{
    let btnname=btn.getAttribute('name')
    let computer=Math.floor(Math.random()*3)
    let comp_input=list[computer]
    let comp_turn=document.querySelector('.bot')
    let comp_button=comp_turn.querySelector('img')
    let path=comp_input+'.png'
    console.log(path)
    comp_button.setAttribute('src',path)
    checkwinner(btnname,comp_input)
    
    you.innerText=youScore
    comp.innerText=compscore
})
})
const checkwinner=(btnname,comp_input)=>{
    let youwin=`You Won! ${comp_input} beats`
    let compwin=`Bot Won! ${btnname} beats`
    if(btnname===comp_input){
        win.style.background='#9c9cef'

        p.innerText="Match Draw"
        win.classList.remove('hide')
        new_game.classList.remove('hide')
    console.log("Match Draw")
    youScore+=1
    compscore+=1
    }
    else if((btnname==='paper' && comp_input==='stone') || (btnname==='stone' && comp_input==='scissor') || (btnname==='scissor' && comp_input==='paper')){
        console.log(youwin)
        win.style.background='#70d470'
        p.innerText=youwin
        
        youScore+=1
        win.classList.remove('hide')
        new_game.classList.remove('hide')
    }
    else{
        console.log(compwin)
        compscore+=1
        win.style.background='#e45757'
        p.innerText=compwin
        win.classList.remove('hide')
        new_game.classList.remove('hide')
    }
}