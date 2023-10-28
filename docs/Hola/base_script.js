// Barra Horizontal
function Home() {
    window.location.href = "/CLOSE/HOME/home.html"
}

function Profile() {
    window.location.href = "/CLOSE/USER_MENU/user_menu.html"
}

function Prices() {
    window.location.href = "/CLOSE/HOME/home.html"
}

function Test() {
    window.location.href = "/CLOSE/HOME/home.html"
}

function Courses() {
    window.location.href = "/CLOSE/COURSES/courses.html"
}
function we() {
    window.location.href = "/CLOSE/WE/we.html"
}
// Inicio de sesion
function Login() {
    window.location.href = "/CLOSE/LOGIN/login.html"
}
function Signup() {
    window.location.href = "/CLOSE/SIGNUP/signup.html"
}

//mostrar/ocultar contraseña
function ShowPW(text_id,item_id) {
    var visibility_text = document.getElementById(text_id);
    var visibility = document.getElementById(item_id);
    if ( visibility.type === "password") {
        visibility.type = "text";
        visibility_text.innerText = "Hide";

    } else {
        visibility.type = "password";
        visibility_text.innerText = "Show";

    }
}

function validate_pw() {
    let pasw = document.getElementById('Pasw');
    let pasw2 = document.getElementById('Pasw2');

    if(pasw.value == pasw2.value) {
        var Validacion = 'true'
    } else {
        var Validacion = 'false'
    }
    console.log(Validacion);
    return Validacion;

}

function CreateMsg(el, text) {
   
    let message = document.createElement('div')
    if(text == 'La contraseña coincide') {
        message.style.cssText = "color: #04ff4f;";
    } else {
        message.style.cssText = "color: #ff0101;";
    }
    message.id = "validate_msg";
    

    let coords = el.getBoundingClientRect();
    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";
    message.innerHTML = text;
    return message;
  
} 
    

function ShowMsg(el) {
    if (document.getElementById('validate_msg')) {
        mess = document.getElementById('validate_msg');
        mess.remove();
        console.log('Ya existia, se borro');
    } else {
        console.log('No existia');

    }
    if (!document.getElementById('validate_msg')){
        var valid = validate_pw();

        if(valid == 'true') {
            var txt = 'La contraseña coincide'
        } else {
            var txt = 'La contraseña debe coincidir'
        }
        var message = CreateMsg(el, txt);
 

        document.body.append(message);
        setTimeout(() => message.remove(), 3000);
    } else {
        msg_txt = document.getElementById('validate_msg');
        ae = validate_pw();
        if(msg_txt.innerText == 'La contraseña debe coincidir' && ae == 'true')  {
            let message_true = CreateMsg(el, 'La contraseña coincide');
            document.body.append(message_true);
            setTimeout(() => message_true.remove(), 3000);
        }
    }
}


// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     el = document.getElementById('Pasw');
//     ShowMsg(el);


// })

// function a(el) {
//     ae = validate_pw();

//     var msg_txt = document.getElementById('validate_msg');
//     if(!msg_txt) {
//         console.log('no existe');
//         // clearInterval(xs);
//         // clearInterval(xd);

//     } else {
//         if(msg_txt.innerText == 'La contraseña debe coincidir' && ae == 'true')  {
//             // clearInterval(xs);
//             // clearInterval(xd);


  
//             let message = CreateMsg(el, 'La contraseña coincide');
//             document.body.append(message);
//             setTimeout(() => message.remove(), 3000);
//         } else {
//             return 'false';
//         }
//     }

    
    
// }
// var msg_txt = document.getElementById('validate_msg');
//         if(msg_txt.innerText == 'La contraseña debe coincidir' && valid == 'true')  {
//             message.remove();
//             let message = CreateMsg(el, txt);
//             document.body.append(message);
//             setTimeout(() => message.remove(), 5000);
//             console.log('efe')
//         } else {
//             console.log('nop')
//         }


    // var validate_tip = document.getElementById('pasw_validate_text');
    // validate_tip.style.top = coords.top + "px";
    // validate_tip.style.left = coords.left + "px";
    // validate_tip.style.right = coords.right + "px";
    // validate_tip.style.bottom = coords.bottom + "px";


    // // ancho del elemento                 
    // coords.width
    // // alto del elemento
    // coords.height

    // // distancia del borde derecho del elemento al borde derecho del viewport
    // coords.right - coords.width
    // // distancia del borde inferior del elemento al borde inferior del viewport 
    // coords.bottom - coords.height 

    // // distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll)
    // coords.top + scrollY 


