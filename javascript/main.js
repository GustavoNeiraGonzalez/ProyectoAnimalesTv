'use strict'
        /*Este codigo hará que el nav desaparezca cuando se haga click fuera de el, osea solo en lo que queda abajo del nav */
        function CambiarCheckbox(){
                if(document.getElementById("menu-bar").checked == true){
                        document.getElementById("menu-bar").checked = false;
                }   
        }
        function clickMain(){
                document.querySelector("main").addEventListener("click",CambiarCheckbox);
        }
        /* */

        function ocultarTexto(y){
                document.getElementById(y).style.color="red";
        }

        function cambiarTextoContacto(x,y){
                document.getElementById(x).addEventListener("click",ocultarTexto(y))
        }
