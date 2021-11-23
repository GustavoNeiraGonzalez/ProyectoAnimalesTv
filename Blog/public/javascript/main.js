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

        function comparar(){
                window.addEventListener('resize', function(){
                        if(this.document.getElementById("imagenNoticia").heig){

                        }
                      });
        }

        function MostrarVetYCom(){
                document.querySelectorAll('.btnVetCom').forEach(item => {
                        item.addEventListener('click', event =>{
                                document.getElementById("carta").style.display="block";
                                document.getElementById("carta").style.display="flex";
                                document.getElementById("carta").style.justifyContent="center";
                                document.getElementById("carta").style.flexWrap="wrap";
                                document.getElementById("Fondo").style.visibility="visible";
                                //handle click
                                })
                        })
        }
        function CerrarVetYCom(){
                document.getElementById('Fondo').addEventListener('click',function(){
                        document.getElementById("carta").style.display="none";
                        document.getElementById("Fondo").style.visibility="hidden";
                })
                document.getElementById('botonX').addEventListener('click',function(){
                        
                });
        }

