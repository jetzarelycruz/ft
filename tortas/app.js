const calcular=()=>{
    let Total=0;
    let SALCHICHA=document.querySelector("#salchicha")
    let JAMON=document.querySelector("#jamon")
    let CHULETA=document.querySelector("#chuleta")
    let HUEVO=document.querySelector("#huevo")
    let VERONICA=document.querySelector("#veronica")
    let PACHEQUEÑA=document.querySelector("#pachequeña")
    let TEXANA=document.querySelector("#texana")
    let TOLUQUEÑA=document.querySelector("#toluqueña")
    let CUBANA=document.querySelector("#cubana")
    let Refresco=document.querySelector("#Refresco")
    let ServicioaDomicilio=document.querySelector("#ServicioaDomicilio")



    if(SALCHICHA.checked){

        Total+=35;
    }
    if(JAMON.checked){

        Total+=35;
    }
    if(CHULETA.checked){

        Total+=35;
    }
    if(HUEVO.checked){

        Total+=35;
    }
    if(VERONICA.checked){

        Total+=45;
    }
    if(PACHEQUEÑA.checked){

        Total+=45;
    }
    if(TEXANA.checked){

        Total+=45;
    }
    if(TOLUQUEÑA.checked){

        Total+=45;
    }
    if(CUBANA.checked){

        Total+=60;
    }
    if(ServicioaDomicilio.checked){

        Total+=50;
    }
    document.querySelector("#Total").innerHTML=`<h3>precio Total: $${Total.toFixed(2)} MXN</h3>`
}
