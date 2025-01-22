function generateQrCode() {

    const url = document.getElementById('url').value;
    const warning = document.querySelector('div > p');
    const img = document.getElementById('qr-code');


    if (!url) {
        warning.classList.remove('hidden');
        return;
    } else {
        warning.classList.add('hidden');
    }

    QRCode.toDataURL(url, (err, dataUrl) => {
        if (err) {
            alert("Error Generating QR Code!");
            console.error('error generating qr code:', err);
            return;
        }
        
        img.src = dataUrl;
        img.classList.remove('hidden');

    })

}

window.generateQrCode = generateQrCode;