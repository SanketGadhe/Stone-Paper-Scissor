let choices=document.querySelectorAll('.choice')
let win=document.querySelector('.win')
let p=win.querySelector('p')
let you=document.querySelector('#you')
let comp=document.querySelector('#computer')
let youScore=0
let compscore=0
let new_game=document.querySelector('#new-game')
let list=['stone','paper','scissor']
choices.forEach((choice)=>{
choice.addEventListener('click',()=>{
    let img=choice.querySelector('img')
    let imgname=img.getAttribute('name')
    let computer=Math.floor(Math.random()*3)
    let comp_input=list[computer]
    let comp_turn=document.querySelector('.bot')
    let comp_button=comp_turn.querySelector('img')
    let path=comp_input+'.png'
    comp_button.setAttribute('src',path)
    checkwinner(imgname,comp_input)
    you.innerText=youScore
    comp.innerText=compscore
})
})
const checkwinner=(btnname,comp_input)=>{
    let youwin=`You Won! ${comp_input} beats`
    let compwin=`Bot Won! ${btnname} beats`
    if(btnname===comp_input){
        p.style.background='#9c9cef'

        p.innerText="Match Draw"
        win.classList.remove('hide')
        new_game.classList.remove('hide')
 
    youScore+=1
    compscore+=1
    }
    else if((btnname==='paper' && comp_input==='stone') || (btnname==='stone' && comp_input==='scissor') || (btnname==='scissor' && comp_input==='paper')){

        p.style.background='#70d470'
        p.innerText=youwin
        youScore+=1
        win.classList.remove('hide')
        new_game.classList.remove('hide')
    }
    else{
       
        compscore+=1
       p.style.background='#e45757'
        p.innerText=compwin
        win.classList.remove('hide')
        new_game.classList.remove('hide')
    }
}
new_game.addEventListener('click',()=>{
    youScore=0
    compscore=0
    you.innerText=youScore
    comp.innerText=compscore
    win.classList.add('hide')
    new_game.classList.add('hide')
})