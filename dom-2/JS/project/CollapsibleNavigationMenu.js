//  navigation :-----


{
    const collapsedClass = 'nav--collapsed';
    const lsKey = 'navcollapsed';
    const nav = document.querySelector(".nav");
    const navBorder = nav.querySelector(".nav__border");
    // default collpased
    if(localStorage.getItem(lsKey) === "true"){
        nav.classList.add(collapsedClass)
    }
    navBorder.addEventListener('click',function(){
        nav.classList.toggle(collapsedClass);
        localStorage.setItem(lsKey,nav.classList.contains(collapsedClass));

    })

}

