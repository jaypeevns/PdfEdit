// this is how we will require our module
var pdfedit = require('./pdfedit');
var jsonl={
    "pdfPath": "DNV GL Certificate.pdf",
    "imageFilePath": "QRCode.png",
    "X": "60",
    "Y": "70",
    "scale":"0.18"
}
pdfedit.editPdf(jsonl);
