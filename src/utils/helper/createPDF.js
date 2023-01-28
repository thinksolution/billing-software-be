const PDFDocument = require('pdfkit');
const fs = require('fs')
// Create PDF Document

const createInovice = () => {
    let doc = new PDFDocument({ margin:50});

    const generateHeader = () => {
        doc.image('logo.png', 50, 45, { width: 50 })
            .fillColor('#444444')
            .fontSize(20)
            .text('ACME Inc.', 110, 57)
            .fontSize(10)
            .text('123 Main Street', 200, 65, { align: 'right' })
            .text('New York, NY, 10025', 200, 80, { align: 'right' })
            .moveDown();
    }
    
    const generateFooter = () => {
        doc.fontSize(
            10,
        ).text(
            'Payment is due within 15 days. Thank you for your business.',
            50,
            780,
            { align: 'center', width: 500 },
        );
    }

    doc.end();
    doc.pipe(fs.createWriteStream('invoice.pdf'));
}

// doc.pipe(fs.createWriteStream('example.pdf'));

// doc
   
//   .fontSize(27)
//   .text('This the article for GeeksforGeeks', 100, 100);

//   doc.image('download3.jpg', {
//     fit: [300, 300],
//     align: 'center',
//     valign: 'center'
//   });

//   doc
//   .addPage()
//   .fontSize(15)
//   .text('Generating PDF with the help of pdfkit', 100, 100);

//   doc
//   .scale(0.6)
//   .translate(470, -380)
//   .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
//   .fill('red', 'even-odd')
//   .restore();

//   doc
//   .addPage()
//   .fillColor('blue')
//   .text('The link for GeeksforGeeks website', 100, 100)
    
//   .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
   
// // Finalize PDF file
// doc.end();
