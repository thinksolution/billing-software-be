const fs = require('fs');
const moment = require('moment/moment');
const PdfDocument = require('pdfkit');

    let doc = new PdfDocument();

    // Create PDF document
    let companyName = "Shre News Papper"
    let date = moment().format('DD/MM/YYYY')
    let street = "Jay bhole cottage Malwani"
    let city = "Thane"
    let pincode = "400095"
    let state = "Maharashtra"
    let companyMobileNumber = 7208693598
    let companyEmail = "sambhaji08081998@gmail.com"

        doc.pipe(fs.createWriteStream('example.pdf'));

        // Header Set
        doc
            .image('src/utils/helper/test.png', 50, 45, { width: 50 })
            .fillColor('#444444')
            .fontSize(20)
            .text(companyName, 110, 50)
            .moveDown()

        //vendor Details
        doc 
            .fontSize(12)
            .text('Billing To,', 50, 95)
            .fontSize(09)
            .text(`Address : ${companyName}`, 50, 110)
            .text(street , 50, 120 )
            .text(`${city} : ${pincode}`, 50, 130)
            .text(state, 50, 140)
            .text(companyMobileNumber, 50, 150)
            .text(companyEmail, 50, 160)
            .fontSize(12)
            .text(`Invoice No. : ${date}`, 200, 110, { align: 'right' })
            .text(`Date : ${date}`, 200, 130, { align: 'right' })
            .moveDown();

        //Footer Set
        doc
            .text('This bill is genrated from I Think Solution', 20, doc.page.height - 50, {
            lineBreak: false
          });
    
    doc.end();