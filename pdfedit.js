/*var jsonl={
    "pdfPath": "DNV GL Certificate.pdf",
    "imageFilePath": "QRCode.png",
    "X": "60",
    "Y": "70",
    "scale":"0.18"
}*/

exports.editPdf = function (requestjson) {
    var child = require('child_process').spawn(
        'java', ['-jar', 'lib/EditPdfFile.jar', [requestjson.imageFilePath,requestjson.pdfPath,
            requestjson.X,requestjson.Y,requestjson.scale]]
    );
    child.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    child.stderr.on("data", function (data) {
        console.log(data.toString());
    });
}