document.getElementById('pdfInput').addEventListener('change', function(event) {
    const pdfFile = event.target.files[0];
    if (pdfFile) {
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.data = URL.createObjectURL(pdfFile);
    }
});

document.getElementById('imageInput').addEventListener('change', function(event) {
    const imageFile = event.target.files[0];
    if (imageFile) {
        const imageViewer = document.getElementById('imageViewer');
        imageViewer.src = URL.createObjectURL(imageFile);
    }
});

document.getElementById('textInput').addEventListener('input', function(event) {
    const text = event.target.value;
    const textDisplay = document.getElementById('textDisplay');
    textDisplay.textContent = text;
    textArea.style.display = 'none';
});
