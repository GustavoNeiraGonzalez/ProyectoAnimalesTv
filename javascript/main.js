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

        /*function ocultarTexto(y,x){
                if(document.getElementById(x).value.length ==1){
                        document.getElementById(y).style.display="block";
                }else{
                        document.getElementById(y).style.display="none";
                }
        }
        function cambiarTextoContacto(x,y){document.getElementById(x).addEventListener("keydown",function()
        {
                 ocultarTexto(y,x);
        });
        }*/
        function comparar(){
                window.addEventListener('resize', function(){
                        if(this.document.getElementById("imagenNoticia").heig){

                        }
                      });
        }