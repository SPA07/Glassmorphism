const color = document.querySelector('.color-btn');
const transparencia = document.querySelector('.transparencia');
const transparenciaOutput = document.querySelector('.transparencia-output');

const difum = document.querySelector('.blur');
const blurOutput = document.querySelector('.blur-output');

const contrast = document.querySelector('.contraste');
const contrastOutput = document.querySelector('.contrast-output');

const saturacion = document.querySelector('.saturacion');
const saturacionOutput = document.querySelector('.saturacion-output');

const size = document.querySelector('.tamanio');
const sizeOutput = document.querySelector('.tamanio-output');

const radio = document.querySelector('.radio');
const radioOutput = document.querySelector('.border-radius-output');
const code = document.querySelector('.code');
const glass = document.querySelector('.glass');
const copy = document.querySelector('.copy');

transparencia.addEventListener('input', ()=>{
    glass.style.filter = `opacity(${transparencia.value}%)`;
    transparenciaOutput.innerHTML = `${transparencia.value}%`;
    code.innerHTML = 
    `
    <div>
    background: (${transparencia.value}%);
    <div>
    backdrop-filter: blur(${difum.value}px);
    </div>
    <div>
    backdrop-filter: contrast(${contrast.value}%);
    </div>
    <div>
    backdrop-filter: saturate(${saturacion.value}%);
    </div>
    <div>
    width: (${size.value}px);
    </div>
    <div>
    border-radius: (${radio.value}px)
    </div>
    `
})

difum.addEventListener('input', () =>{
    glass.style.filter = `blur(${difum.value}px)`;
    blurOutput.innerHTML = `${difum.value}px`;
    code.innerHTML = 
    `
    <div>
    background: (${transparencia.value}%);
    </div>
    <div>
    backdrop-filter: blur(${difum.value}px);
    </div>
    <div>
    backdrop-filter: contrast(${contrast.value}%);
    </div>
    <div>
    backdrop-filter: saturate(${saturacion.value}%);
    </div>
    <div>
    width: (${size.value}px);
    </div>
    <div>
    border-radius: (${radio.value}px)
    </div>
    `
})

contrast.addEventListener('input', () =>{
    glass.style.filter = `brightness(${contrast.value}%)`;
    contrastOutput.innerHTML = `${contrast.value}%`;
    code.innerHTML = 
    `
    <div>
    background: (${transparencia.value}%);  
    <div>
    backdrop-filter: blur(${difum.value}px);
    </div>
    <div>
    backdrop-filter: contrast(${contrast.value}%);
    </div>
    <div>
    backdrop-filter: saturate(${saturacion.value}%);
    </div>
    <div>
    width: (${size.value}px);
    </div>
    <div>
    border-radius: (${radio.value}px)
    </div>
    `
})

saturacion.addEventListener('input', () =>{
    glass.style.filter = `saturate(${saturacion.value}%)`;
    saturacionOutput.innerHTML = `${saturacion.value}%`;
    code.innerHTML = 
    `
    <div>
    background: (${transparencia.value}%);
    </div>
    <div>
    backdrop-filter: blur(${difum.value}px);
    </div>
    <div>
    backdrop-filter: contrast(${contrast.value}%);
    </div>
    <div>
    backdrop-filter: saturate(${saturacion.value}%);
    </div>
    <div>
    width: (${size.value}px);
    </div>
    <div>
    border-radius: (${radio.value}px)
    </div>
    `
})

size.addEventListener('input', () =>{
    glass.style.width = `${size.value}%`;
    sizeOutput.innerHTML = `${size.value}%`;
    code.innerHTML = 
    `
    <div>
    background: (${transparencia.value}%);
    </div>
    <div>
    backdrop-filter: blur(${difum.value}px);
    </div>
    <div>
    backdrop-filter: contrast(${contrast.value}%);
    </div>
    <div>
    backdrop-filter: saturate(${saturacion.value}%);
    </div>
    <div>
    width: (${size.value}px);
    </div>
    <div>
    border-radius: (${radio.value}px)
    </div>
    `
})

radio.addEventListener('input', () =>{
    glass.style.borderRadius = `${radio.value}px`;
    radioOutput.innerHTML = `${radio.value}px`;
    code.innerHTML = 
    `
    <div>
    background: (${transparencia.value}%);
    </div>
    <div>
    backdrop-filter: blur(${difum.value}px);
    </div>
    <div>
    backdrop-filter: contrast(${contrast.value}%);
    </div>
    <div>
    backdrop-filter: saturate(${saturacion.value}%);
    </div>
    <div>
    width: (${size.value}px);
    </div>
    <div>
    border-radius: (${radio.value}px)
    </div>
    `
})

color.addEventListener('input', () =>{
    glass.style.background = color.value;
})

let buttonCopy = code.nextElementSibling;

copy.addEventListener('click', ()=> {
    navigator.clipboard.writeText(code.textContent).then(() => {
    copy.setAttribute('value', 'Copied!');
    copy.style.background = 'rgba(193, 13, 13, 0.5)';
    })
    .catch();
})