let input = document.querySelector('.input');
let imag = document.querySelector('img');
let btn = document.querySelector('.btn');
let api = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

function QrGenerate(){
    if(input.value == ''){
        input.classList.add('error');
        setTimeout(function(){
            input.classList.remove('error');
        },1000)
    }
    else{
        let all = api + input.value ;
        imag.src = all;
        imag.classList.add('mainimg')
    }
}

