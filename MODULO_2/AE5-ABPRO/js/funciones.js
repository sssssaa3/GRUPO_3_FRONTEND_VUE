//SELECCION DE FORMULARIO, INPUTS Y MODAL
const form = document.querySelector('.needs-validation')
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");
const modalEmail = new bootstrap.Modal(document.getElementById("exampleModal"));

//EXPRESION REGULAR PARA VALIDAR EMAIL
const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//ESTADO DE LOS INPUTS, FALSE PARA NO VALIDO
let formIsValid = {
    inputName: false,
    inputEmail: false,
    inputMensaje: false
}

//FUNCIONES QUE AGREGAN O REMUEVEN LA CLASE IS-VALID O IS-INVALID DE BOOTSTRAP A LOS INPUTS QUE ACTIVAN O DESACTIVAN LA EXHIBICION DEL DIV CON LA CLASE invalid-feedback
function validateInput(e) {
    e.target.classList.add("is-valid")
    e.target.classList.remove("is-invalid")
}

function invalidateInput(e) {
    e.target.classList.remove("is-valid")
    e.target.classList.add("is-invalid")
}

//EVENTO INPUT EN COMBINACION CON LAS FUNCIONES DE VALIDACION PARA RETROALIMENTACION EN TIEMPO REAL
inputName.addEventListener("input", (e) => {
    const value = e.target.value.trim()
    if (value.length >= 4) {
        formIsValid.inputName = true;
        validateInput(e)

    } else {
        formIsValid.inputName = false;
        invalidateInput(e)

    }

})

//EVENTO INPUT EN COMBINACION CON LAS FUNCIONES DE VALIDACION PARA RETROALIMENTACION EN TIEMPO REAL
inputEmail.addEventListener("input", (e) => {
    const value = e.target.value.trim()
    if (regex.test(value)) {
        formIsValid.inputEmail = true;
        validateInput(e)
    } else {
        formIsValid.inputEmail = false;
        invalidateInput(e)
    }

})

//EVENTO INPUT EN COMBINACION CON LAS FUNCIONES DE VALIDACION PARA RETROALIMENTACION EN TIEMPO REAL
inputMessage.addEventListener("input", (e) => {
    const value = e.target.value.trim()
    if (value.length >= 10) {
        formIsValid.inputMensaje = true;
        validateInput(e)
    } else {
        formIsValid.inputMensaje = false;
        invalidateInput(e)
    }
})

//EVENTO SUBMIT. EVITAMOS EL ENVIO DEL FORM, VERIFICAMOS EL ESTADO DE LOS INPUTS Y SOLO CUANDO SEAN TRUE RESTABLCEMOS TODOS LOS VALORES, Y MOSTRAMOS EL MODAL CON EL MENSAJE DE EXITO SIMULANDO EL ENVIO. 
form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (!formIsValid.inputEmail) {
        inputEmail.classList.add("is-invalid")
    }
    if (!formIsValid.inputName) {
        inputName.classList.add("is-invalid")
    }
    if (!formIsValid.inputMensaje) {
        inputMessage.classList.add("is-invalid")
    }


    if (formIsValid.inputEmail && formIsValid.inputMensaje && formIsValid.inputName) {

        inputName.classList.remove("is-valid")
        inputEmail.classList.remove("is-valid")
        inputMessage.classList.remove("is-valid")
        formIsValid.inputEmail = false
        formIsValid.inputMensaje = false
        formIsValid.inputName = false
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
        modalEmail.show()
    }
    event.stopPropagation()
})



