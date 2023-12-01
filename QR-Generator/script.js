const container = document.getElementById('container');
const inputBox = document.getElementById('input-box');
const generatorBtn = document.getElementById('generate');
const qrCodeImg = document.getElementById('QRImage');
const imgBox = document.getElementById('imgBox');

function generateQR(){

    // if(inputBox.value === " " || inputBox.value === ""){
    //    alert(`Please Type Something in the Input Box...`)
    // } else{
    //     qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`
    //     imgBox.classList.add('show-img');
    // }

    if(inputBox.value.length > 0){
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`
        imgBox.classList.add('show-img');
    } else{
        inputBox.classList.add('error');
        setTimeout(() => {
            inputBox.classList.remove('error');
        }, 1000)
    }

    
}

generatorBtn.addEventListener('click', generateQR)