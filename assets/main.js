function validar() {
    let btn = document.querySelector('#btn');
    let pass = document.getElementById('pass').value;

    if (pass == 'password') {
        parrafo = document.querySelector('#resultado')
        parrafo.innerHTML = "Wena, sapbe"
    }

    else {
        parrafo = document.querySelector('#resultado')
        parrafo.innerHTML = "Nop, fail"
    }
}