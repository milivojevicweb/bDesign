$(document).ready(function() {
    $(document).on('keyup','input,textarea',checklogin);
    $(document).on('click',"#dugme",function(){
        alert("Uspešno logovanje");
    })
});

function checklogin(){
    var email=$('#inputEmail').val();
    var password = $('#inputPassword').val();
    var button=$("#dugme")

    var reEmail=/^\w+([.-]?[\w\d]+)*@\w+([.-]?[\w]+)*(\.\w{2,4})+$/;
    var rePassword = /^(?=.*\d)(?=.*[A-zČĆŽŠĐčćžšđ])(?=.*[~!@#$%^&*<>?]).{6,}$/;
    var status=true;

    if(email == "") {
      status = false;
        error("#inputEmail");

    } else if(!reEmail.test(email)) {
      status = false;
        error("#inputEmail");
    } else {
        success("#inputEmail");
    }

    if(password == "") {
        status = false;
          error("#inputPassword");

      } else if(!rePassword.test(password)) {
        status = false;
          error("#inputPassword");
      } else {
          success("#inputPassword");
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
