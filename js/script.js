//creamos las variables llamando a los id del html 
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn")

//recorremos cada boton con la clase .btn y le agregamos un evento al cual cuando hacemos click se ejecuta el siguiente codigo
botones.forEach(boton =>{boton.addEventListener("click", ()=>{

    //toma el valor de cada boton en html y crea una constante
       const botonApretado = boton.textContent

    //si hacemos click en "c", el texto en pantalla vuelve al valor de 0
       if(boton.id === "c"){
        pantalla.textContent = "0";
        return;
       }


       if(boton.id === "borrar"){
        if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!" ){
            pantalla.textContent = "0"
        }else{
            pantalla.textContent = pantalla.textContent.slice(0, -1)
        }
        return;
       }

    //si hacemos click en "=" 
       if(boton.id === "igual"){
    //intenta tomar los valores clickeados en la pantalla y hacer una operacion según corresponda
        try{
            pantalla.textContent = eval(pantalla.textContent)
        }
    //si no se puede deducir la operacion aparecera en pantalla error
        catch{
            pantalla.textContent = "Error!"
        }
        return;
       }


       if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
        pantalla.textContent = botonApretado
       }else{
        pantalla.textContent += botonApretado
       }
       
    })
})

