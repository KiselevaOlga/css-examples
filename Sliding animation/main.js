const signUp = document.getElementById('sign-up');
const logIn = document.getElementById('log-in');

logIn.addEventListener("click",(e) => {
    window.parent = e.target.parentNode.parentNode;
    Array.from(parent.classList).find((element)=>{
        if(element !== 'slideUp'){
            parent.classList.add('slideUp');

        } else {
            parent.classList.remove('slideUp');
        }
    })
})

signUp.addEventListener("click",(e) => {
    Array.from(parent.classList).find((element)=>{
        if(element !== 'slideUp'){
            parent.classList.add('slideUp');
        } else {
            parent.classList.remove('slideUp');
        }
    })
})