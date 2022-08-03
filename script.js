// ADDING AN ONCLICK EVENT LISTENER ON THE SUBMIT BUTTON
document.getElementById('submit').addEventListener('click', () => {
     let toggle = document.getElementById('toggle')
     if(toggle.className === 'toggle'){
          toggle.className = 'back'
     }
})

// CHANGING THE OUTCOME NUMBER ON THE BACK CARD
let number = document.querySelectorAll('.number')
let outcome = document.getElementById('outcome')
for(let i = 0; i < number.length; i++){
     number[i].addEventListener('click', ()=>{
          outcome.innerHTML =`You selected ${i++} out of 5`
     })  
}