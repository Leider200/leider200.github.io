
// Data Base
var form = document.getElementById('form');
var Name = document.getElementById('Name');
var User = document.getElementById('User');
var Email = document.getElementById('Email');
var Pasw = document.getElementById('Pasw');
var Pasw2 = document.getElementById('Pasw2');






form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    el = document.getElementById('Pasw');
    ShowMsg(el);
    if(Pasw.value == Pasw2.value) {
        var ver = 'true';
    } else {
        var ver = 'false';
    }

    if(ver == 'true') {
        if(
            Name.value != "" &&
            User.value != "" &&
            Email.value != "" &&
            Pasw.value != "" &&
            Pasw2.value != ""
        ) {
            let forminfo = new FormData(form);
            fetch('/CLOSE/enviar.php', {
                method: 'POST',
                body: forminfo
            })
            .then(res => res.json())
            .then(data => {
                if(data == 'true') {
                    Name.value = '';
                    User.value = '';
                    Email.value = '';
                    Pasw.value = '';
                    Pasw2.value = '';
                    alert('Registro completado exitosamente, Inicia Sesion');
                } else {
                    alert('Ha ocurrido un error',data);
                    console.log(data);
                }
            })
    
        } else {
            alert('Los campos no pueden estar vacios');
    
        }

    } else {
        alert('La contraseña no coincide');
    }
    




 

});