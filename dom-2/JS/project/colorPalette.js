/**
 * Create an Element based on the tag name and classes given.
 *  
 * @param {string} tagName the tag name of the element (i.e "div","img" etc.)
 * @param {string} classes Sets the class attribute,Multiple,separated by a space
 * @returns {HTMLElement}
 */

// createElementWithClass

function createElementWithClass(tagName,classes){

    const el = document.createElement(tagName);
    el.className = classes;
    // el.setAttribute('class',classes);

    return el

}


/**
 * @param {string} color The value of color
 * @param {string} desc The description/use of the color
 * @returns {HTMLElement}
 */



// createItem(this will make whole structure)

function createItem(color,desc){
    const elItem = createElementWithClass('div','palette__item');
    const elColor = createElementWithClass('div','palette__color');
    const elDesc = createElementWithClass('div','palette__desc');
    const elInput = createElementWithClass('input','palette__input');

    elColor.style.backgroundColor = color;
    elInput.value = color
    elDesc.textContent = desc

    elItem.appendChild(elColor);
    elItem.appendChild(elInput)
    elColor.appendChild(elDesc);

    elInput.onfocus = ()=> elInput.select();

    return elItem
}

const palette = document.querySelector('.palette');

fetch('../other/palette.json').then(response =>{
    return response.json();
}).then(colorList =>{
    for(const {desc,color} of colorList){
        console.log(desc,color);
        palette.appendChild(createItem(color,desc))
    }
});


