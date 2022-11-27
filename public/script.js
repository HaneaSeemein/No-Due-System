function download_as_pdf(){
    // TODO
    const certificate = document.getElementById("certificate");
    var opt = {
        margin: 1,
        filename: 'NoDuesCertificate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(certificate).set(opt).save();
}