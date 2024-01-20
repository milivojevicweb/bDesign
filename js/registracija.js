$(document).ready(function() {
    $(document).on('keyup','input',checkParam);
    $(document).on('click',"#dugme",function(){
        alert("Uspešna registracija");
    })
});

function checkParam(){
    var name=$("#ime").val();
    var lastName=$("#prezime").val();
    var email=$("#email").val();
    var password=$("#lozinka").val();
    var repeatPassword=$("#ponovljenaLozinka").val();
    var button=$("#dugme")
    var rePassword = /^(?=.*\d)(?=.*[A-zČĆŽŠĐčćžšđ])(?=.*[~!@#$%^&*<>?]).{6,}$/;
    var reName=/^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{1,14})*$/;
    var reEmail=/^\w+([.-]?[\w\d]+)*@\w+([.-]?[\w]+)*(\.\w{2,4})+$/;

    var status=true;

    if(name == "") {
        status = false;
        error("#ime");

    } else if(!reName.test(name)) {
        status = false;
        error("#ime");
    } else {
        success("#ime");
    }

    if(lastName == "") {
        status = false;
        error("#prezime");

    } else if(!reName.test(lastName)) {
        status = false;
        error("#prezime");
    } else {
        success("#prezime");
    }

    if(password == "") {
        error("#lozinka");
        status = false;
    } else if(!rePassword.test(password)) {
        error("#lozinka");
        status = false;
    } else {
        success("#lozinka");
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

    if(repeatPassword == "" || repeatPassword!=password) {
        status = false;
        error("#ponovljenaLozinka");
    } else if(!rePassword.test(repeatPassword) || repeatPassword!=password) {
        status = false;
        error("#ponovljenaLozinka");
    } else if(rePassword.test(repeatPassword) && repeatPassword==password){
        success("#ponovljenaLozinka");
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
