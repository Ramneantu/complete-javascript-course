var numberOfFields = 1;

function add() {
    var nextField = document.createElement('input');
    numberOfFields++;
    nextField.setAttribute('class', 'equivalences');
    nextField.setAttribute('id', 'no-' + (numberOfFields));
    nextField.setAttribute('placeholder', 'Equivalent Expression');
    document.body.appendChild(nextField);
    document.querySelector('#no-' + numberOfFields).addEventListener('click', add, {once : true});
}

document.querySelector('#no-' + numberOfFields).addEventListener('click', add, {once : true});