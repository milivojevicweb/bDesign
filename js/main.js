$(document).ready(function() {
    $(document).on('keyup','input,textarea',checkContact);
    $(document).on('click',"#button",function(){
        alert("Poruka je poslata");
    })
    $(document).on("click","#glasanje",anketaGlasanje);
});

$(window).scroll(function(){

    var skrolovano = $(this).scrollTop();

    if(skrolovano > 700){
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }

    if(320<skrolovano){
        document.querySelector("#navigacija").style.position="fixed";
        document.querySelector("#navigacija").style.backgroundColor="rgb(34 34 34)";
        document.querySelector("#navigacija").style.boxShadow="0 0 10px rgba(0,0,0,.8)";
        document.querySelector("#navigacija").style.marginTop="0px"

    }else{
        document.querySelector("#navigacija").style.position="absolute";
        document.querySelector("#navigacija").style.backgroundColor="transparent";
        document.querySelector("#navigacija").style.boxShadow="none";

    }

});


    
    // As A Vanilla JavaScript Plugin




function checkContact(){
    var name=$('#name').val();
    var email=$('#email').val();
    var text=$('#comments').val();
    var button=$("#button")
    var reName=/^[A-ZŽŠĐČĆ][a-zžšđčć]{1,30}\s[A-ZŽŠĐČĆ][a-zžšđčć]{1,30}$/;
    var reEmail=/^\w+([.-]?[\w\d]+)*@\w+([.-]?[\w]+)*(\.\w{2,4})+$/;

    var status=true;

    if(text == "") {
        status = false;
        error("#comments");
    } else {
        success("#comments");
    }

    if(name == "") {
        status = false;
        error("#name");

    } else if(!reName.test(name)) {
        status = false;
        error("#name");
    } else {
        success("#name");
    }

    if(email == "") {
        status = false;
        error("#email");

    } else if(!reEmail.test(email)) {
        status = false;
        error("#email");
    } else {
        success("#email");
    }

    if(status==false){
        $(button).prop( "disabled", true );
        $(button).addClass("buttonDisable");
    }else{
        $(button).prop( "disabled", false );
        $(button).removeClass("buttonDisable");
    }



}

function error(name){
    $(name).addClass("errorReg");
    $(name).removeClass("successReg");
}

function success(name){
    $(name).removeClass("errorReg");
    $(name).addClass("successReg");
}
    
    
function anketaGlasanje(){
    var anketa=document.getElementsByName("anketa");
    var marker=0;
    for (var i = 0, length = anketa.length; i < length; i++) {
        if (anketa[i].checked) {
            var rez=anketa[i].value;
            marker=1;
            break;
        }
    }

    if(marker==1){
        alert("Uspešno ste glasali za "+rez);
    }else{
        alert("Izaberite polje!")
    }   
}