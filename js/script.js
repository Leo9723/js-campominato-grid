let container = document.getElementById('container')

const button = document.getElementById('button')

function cellTab(numero) {
    const cell = document.createElement('div');

    cell.classList.add('box')

    cell.innerText = numero;

    return cell;
}


button.addEventListener('click', function(){
    
    let number = parseInt(document.getElementById('number').value);

    let element = document.getElementById("form");
    element.classList.add("none");
    console.log(number)
    
    if(number == 100) {
        for(let i = 0; i<number; i++){
        
            const cella = cellTab(i+1)
            cella.classList.add('c-100')
            container.appendChild(cella);

            
            console.log(element)
            
        
        }
    }
    else if(number == 81) {
        for(let i = 0; i<number; i++){
            const cella = cellTab(i+1)
            cella.classList.add('c-81')
            container.appendChild(cella);
        }
    }
    else {
        for(let i = 0; i<number; i++){
            const cella = cellTab(i+1)
            cella.classList.add('c-49')
            container.appendChild(cella);
        }
    }
    
    if(number == 100) {
        element.classList.add('c-100')
    }

})

/* element.addEventListener('click', function(){
    element.classList.add('red-box')
}) */

