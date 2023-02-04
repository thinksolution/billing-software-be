const PDFDocument = require('pdfkit');
const fs = require('fs')
// Create PDF Document

    const doc = new PDFDocument();

        doc
        .pipe(fs.createWriteStream('example.pdf'));

        {console.log("doc.pipe(fs.createWriteStream('example.pdf'))")}
        
        doc
            .image('src/utils/helper/image 1.svg', 50, 45, { width: 50 })
            .fillColor('#444444')
            .fontSize(20)
            .text('ACME Inc.', 110, 57)
            .fontSize(10)
            .text('123 Main Street', 200, 65, { align: 'right' })
            .text('New York, NY, 10025', 200, 80, { align: 'right' })
            .moveDown();
    
    // const generateFooter = () => {
    //     doc
    //         .fontSize(10)
    //         .text('Payment is due within 15 days. Thank you for your business.',50,780,{ align: 'center', width: 500 },
    //     );
    // }
    
    doc.end();