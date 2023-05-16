window.addEventListener('scroll',()=>{
    const scrollable = (document.documentElement.scrollHeight-window.innerHeight);
    const scrolled = window.scrollY;
    if(scrolled === scrollable){
        alert('you reach the bottom')
    }


})


