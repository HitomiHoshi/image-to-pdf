import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-to-pdf';
  qrString = 'https://pbdata.ikramatic.com.my/semak/5';
  hide = true;

  constructor(){}

  public captureScreen(){
    var stringhtml = '<div style="background: #ec2a2a">IMBAS KOD QR DI BAWAH</div>';
    var data = document.getElementById('contentToConvert')!;

    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      var imgWidth = 316;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      console.log("width:" + canvas.width + "height:" + imgHeight);

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      // pdf.addImage(contentDataURL, 'PNG', 0, position, canvas.width, canvas.height);
      pdf.addImage(contentDataURL, 'PNG', 0, position, canvas.width, canvas.height);
      pdf.save('MYPDF.pdf'); // Generate PDF
    });
  }

  public captureScreen2(){
    var html_string = "<html><head></head><body><p>HI</p></body></html>";
    var iframe=document.createElement('iframe');
    document.body.appendChild(iframe);

    setTimeout(function(){
      var iframedoc=iframe.contentDocument!;
      iframedoc.body.innerHTML=html_string;
      html2canvas(iframedoc.body).then((canvas) => {
        // Few necessary setting options
        var imgWidth = 309;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, canvas.width, canvas.height);
        pdf.save('MYPDF.pdf'); // Generate PDF
      });
  }, 10);
  }
}
