const buttons =document.querySelectorAll('.button')
console.log(buttons);
const body = document.querySelector('body')

console.log(body);
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(button.id=='grey'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='orange'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='blue'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='pink'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='blueviolet'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='green'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='brown'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='aqua'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='red'){
            body.style.backgroundColor=button.id
        }
        if(button.id=='yellow'){
            body.style.backgroundColor=button.id
        }
    })

})
