import { Component } from '@angular/core';
import { jsPDF } from "jspdf";
//import dm from '../../assets/dumimg.jpeg';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

  declare require: any

  //Persona info
  firstName ="";
  lastName = "";
  aboutYourSelf = ``;
  position = ''
  personAdd= '';
  gender ="";
  nationality = '';
  birthDate = '';
  birthPlace ='';
  mobileNumber = '';
  emailAdd = '';
  proSkills= '';

  //company A
  companyA = '';
  yearFromA = '';
  yearToA ='';
  addressA = '';
  dutiesA = ``

  //company B
  companyB = '';
  yearFromB = '';
  yearToB ='';
  addressB = '';
  dutiesB = ``;

  //company C
  companyC = '';
  yearFromC = '';
  yearToC ='';
  addressC = '';
  dutiesC= ``;

  //elementary variables
  elementary = '';
  yearElemFrom='';
  yearElemTo = '';
  addressElem = '';

  //secondary variables
  secondary ='';
  yearSecFrom = '';
  yearSecTo='';
  addressSec='';
  
  //tertiary variables
  college = '';
  yearColFrom ='';
  yearColTo='';
  addressCollege='';  

  myImage;

  constructor() {}

  handlePhoto(e){
    console.log(e)
  }

  pdfData(){    
    const padx = 200; 
    const pady = 30;
    const px = 45;      //padding for declared variables -- left column
    const px1= 32;      //padding for static string in --left column
    let py = 200;       //left column y padding
    const ln = 120;
    const ln1 = 230;
    let sthg = 0;
    let fontSize = 0; 
    
    const spX = 30;     //horizontal line start point
    const epX = 140;    //horizontal line end point
    const pad2 = 2;
    const pad3 = 3;    
    const pad5 = 5;    
    const pad10 = 10;    
    const pad20 = 20;
    const pad25 = 25;
    const pad30 = 30;
    const pad50 = 50;
    const pad110 = 110;
    const pad250 = 250;
    const pad290 = 290;
    const xx = 250; //right column padding for year variables
    
    let vlStart = 0;
    let vlEnd = 0;

    let pdf = new jsPDF('p', 'pt', 'a4');   
    
    pdf.setFillColor('#eee')
    pdf.rect(0,0,170,1000,'F')    

   pdf.addImage(this.myImage, 'JPEG', 30,38, 110,110); //person Photo

    pdf.setFont("Titillium Web", "sans-serif");
    pdf.setFontSize(12);
    pdf.setCharSpace(2);
    
    pdf.text('//  CONTACT', px1, py)
    pdf.setCharSpace(0);

    let leftColStrDim = pdf.getTextDimensions('CONTACT',{maxWidth: ln}); //left Colum text diminsions w h

    leftColStrDim.h = leftColStrDim.h = py+pad5; 
    
    pdf.line(spX,leftColStrDim.h,epX,leftColStrDim.h);  
    
    pdf.setFontSize(10)
    leftColStrDim.h+=pad20;
    pdf.text('Mobil', px, leftColStrDim.h); 

    leftColStrDim.h += pdf.getTextDimensions('Mobil',{maxWidth:ln}).h;
    leftColStrDim.h+=pad2;

    pdf.text(this.mobileNumber,px,leftColStrDim.h, {maxWidth:ln});
    leftColStrDim.h += pdf.getTextDimensions(this.mobileNumber,{maxWidth:ln}).h;  

    leftColStrDim.h+=pad10;
    pdf.text("Email",px, leftColStrDim.h);

    leftColStrDim.h+= pdf.getTextDimensions('Email',{maxWidth:ln}).h; 
    leftColStrDim.h+=pad2;
    pdf.text(this.emailAdd,px, leftColStrDim.h,{maxWidth:ln}) // this will be replace with variable

    leftColStrDim.h+= pdf.getTextDimensions(this.emailAdd,{maxWidth:ln}).h;
    leftColStrDim.h+=pad10;

    pdf.text("Home",px, leftColStrDim.h,{maxWidth:ln})   

    leftColStrDim.h+= pdf.getTextDimensions('Home',{maxWidth:ln}).h;
    leftColStrDim.h+=pad2;

    sthg = pdf.text(this.personAdd, px, leftColStrDim.h,{maxWidth: ln}).getLineHeight();   

    leftColStrDim.h+= pdf.getTextDimensions(this.personAdd,{maxWidth:ln}).h;
    leftColStrDim.h+=pad25;
    pdf.setFontSize(12);
    pdf.setCharSpace(2);
    pdf.text('//  PRO SKILLS',px1, leftColStrDim.h,{maxWidth:ln});
    
    leftColStrDim.h+=pad5;
    pdf.line(spX,leftColStrDim.h, epX,leftColStrDim.h);

    pdf.setFontSize(20);   
    pdf.setCharSpace(2);

    pdf.setFont("Titillium Web", 'bold');
    pdf.text(`${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`, padx, pady+20, { maxWidth: ln1 });
    pdf.setFont("Titillium Web", "sans-serif");

    let rightColStrDim = pdf.getTextDimensions(this.firstName,{maxWidth:ln1});
    rightColStrDim.h+=pad30+pad10+pad2;

   // pdf.text(`${this.lastName.toUpperCase()}`,padx, rightColStrDim.h,{maxWidth:ln1})

    //rightColStrDim.h += pdf.getTextDimensions(this.lastName, {maxWidth:ln1}).h; 
    //rightColStrDim.h+=pad10;

    pdf.setCharSpace(0);
    pdf.setFontSize(12)
    pdf.text('WEB DEVELOPER',padx,rightColStrDim.h)

    rightColStrDim.h += pdf.getTextDimensions('WEB DEVELOPER',{maxWidth:ln1}).h;        
    rightColStrDim.h+=pad5;
    pdf.setFontSize(11)
    pdf.text(this.aboutYourSelf,padx, rightColStrDim.h,{maxWidth:210});

    rightColStrDim.h+= pdf.getTextDimensions(this.aboutYourSelf,{maxWidth:210}).h;

    rightColStrDim.h+=pad50;

    pdf.setFontSize(14)

    //settings for education data
    pdf.setCharSpace(2);
    pdf.text('//  EDUCATION',padx, rightColStrDim.h,{maxWidth:ln1});

    rightColStrDim.h+=pad5;

    pdf.line(padx, rightColStrDim.h,550,rightColStrDim.h);    
    
    pdf.setFontSize(11)

    rightColStrDim.h+=pad30;
    
    pdf.setFontSize(10)
    pdf.setCharSpace(0);

    vlStart = rightColStrDim.h;

    pdf.text(`${this.elementary.toUpperCase()}`,pad290,rightColStrDim.h,{maxWidth:ln1});
    pdf.text(`${this.yearElemFrom} - ${this.yearElemTo}`, padx, rightColStrDim.h,{maxWidth:ln}); 

    pdf.setTextColor('#343d46')  
    pdf.ellipse(xx+pad20,rightColStrDim.h-pad3,4,4,'F')
    pdf.setTextColor('black')

    rightColStrDim.h += pdf.getTextDimensions(this.elementary,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad2;

    pdf.text(this.addressElem,pad290,rightColStrDim.h,{maxWidth:ln1}); //address

    rightColStrDim.h+= pdf.getTextDimensions(this.addressElem,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad20;
     //secondary 
    pdf.text(this.secondary.toUpperCase(),pad290,rightColStrDim.h,{maxWidth:ln1})
    pdf.text(`${this.yearSecFrom} - ${this.yearSecTo}`,padx,rightColStrDim.h,{maxWidth:ln})
    pdf.setTextColor('#343d46')
    pdf.ellipse(xx+pad20, rightColStrDim.h-pad3,4,4,'F');
    pdf.setTextColor('black')

    rightColStrDim.h+= pdf.getTextDimensions(this.secondary,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad2;

    pdf.text(this.addressSec,pad290, rightColStrDim.h,{maxWidth:ln1}); //address

    rightColStrDim.h+= pdf.getTextDimensions(this.addressSec,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad20;

    //tertiary
    pdf.text(this.college.toUpperCase(),pad290,rightColStrDim.h,{maxWidth:ln1})
    pdf.text(`${this.yearColFrom} - ${this.yearColTo}`, padx,rightColStrDim.h,{maxWidth:ln})
    pdf.setTextColor('#343d46')
    pdf.ellipse(xx+pad20,rightColStrDim.h-pad3,4,4,'F')
    pdf.setTextColor('black')

    rightColStrDim.h+= pdf.getTextDimensions(this.addressCollege,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad2;
    
    pdf.text(this.addressCollege,pad290,rightColStrDim.h,{maxWidth:ln1}); //address

    rightColStrDim.h+=pad30;
    pdf.setTextColor('#aaa')
    pdf.line(xx+pad20, vlStart,xx+pad20, rightColStrDim.h);  
    pdf.setTextColor('black')  

    rightColStrDim.h+=pad50;
   

    pdf.setFontSize(14);
    pdf.setCharSpace(2);
    pdf.text('//  EXPERIENCE',padx, rightColStrDim.h,{maxWidth: ln1})
    pdf.setFontSize(10);
    pdf.setCharSpace(0);
    rightColStrDim.h+=pad5;
    pdf.line(padx,rightColStrDim.h,550,rightColStrDim.h); 

    rightColStrDim.h+=pad30;

    vlStart = rightColStrDim.h;
    //experience 
    pdf.text(this.companyA.toUpperCase(), pad290, rightColStrDim.h,{maxWidth:ln1});
    pdf.text(`${this.yearFromA} - ${this.yearToA}`, padx,rightColStrDim.h, {maxWidth:ln}) 
    pdf.setTextColor('#343d46')   
    pdf.ellipse(xx+pad20,rightColStrDim.h-pad3,4,4,'F');
    pdf.setTextColor('black')

    rightColStrDim.h+= pdf.getTextDimensions(this.companyA,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad2;

    pdf.text(this.addressA,pad290,rightColStrDim.h,{maxWidth:ln1})

    rightColStrDim.h+= pdf.getTextDimensions(this.addressA,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad3;

    //duties responsibilities
    pdf.setTextColor('#343d46')
    pdf.text(this.dutiesA,pad290, rightColStrDim.h,{maxWidth:ln1});

    rightColStrDim.h+= pdf.getTextDimensions(this.dutiesA,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad20;

    pdf.setTextColor('black');
    pdf.text(this.companyB.toUpperCase(), pad290, rightColStrDim.h,{maxWidth:ln1})  
    pdf.text(`${this.yearFromB} - ${this.yearToB}`,padx, rightColStrDim.h,{maxWidth:ln})
    pdf.setTextColor('#343d46')
    pdf.ellipse(xx+pad20, rightColStrDim.h-pad3,4,4,'F');
    pdf.setTextColor('black')

    rightColStrDim.h+= pdf.getTextDimensions(this.companyB,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad2;

    pdf.text(this.addressB,pad290, rightColStrDim.h,{maxWidth:ln1})

    rightColStrDim.h+= pdf.getTextDimensions(this.addressB,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad3;

    //duties and responsibilities
    pdf.setTextColor('#343d46')
    pdf.text(this.dutiesB,pad290, rightColStrDim.h, {maxWidth:ln1});
    pdf.setTextColor('black')

    rightColStrDim.h+= pdf.getTextDimensions(this.dutiesB,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad20;

    pdf.text(this.companyC.toUpperCase(), pad290, rightColStrDim.h,{maxWidth:ln1})
    pdf.text(`${this.yearFromC} - ${this.yearToC}`, padx, rightColStrDim.h,{maxWidth:ln})
    pdf.setTextColor('#343d46')
    pdf.ellipse(xx+pad20, rightColStrDim.h-pad3,4,4,'F');
    pdf.setTextColor('black')

    rightColStrDim.h+= pdf.getTextDimensions(this.companyC,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad2;

    pdf.text(this.addressC,pad290, rightColStrDim.h,{maxWidth:ln1});

    rightColStrDim.h+= pdf.getTextDimensions(this.addressC,{maxWidth:ln1}).h;
    rightColStrDim.h+=pad3;

    //duties and responsibilities
    pdf.setTextColor('#343d46');
    pdf.text(this.dutiesC,pad290, rightColStrDim.h, {maxWidth:ln1});

    rightColStrDim.h+= pdf.getTextDimensions(this.dutiesC, {maxWidth:ln1}).h;
    pdf.setTextColor('#aaa')
    pdf.line(xx+pad20, vlStart, xx+pad20,rightColStrDim.h);
    
   // pdf.output("dataurlnewwindow"); 

    return pdf;
   
  }

  handlePrint(){
    const doc =  this.pdfData();  
    doc.output('dataurlnewwindow'); 
   
  }

  handleSave(){
    const doc = this.pdfData();
    doc.save(window.prompt("Enter a file name")+'.pdf')
   



//this.download(data, 'json.txt', 'text/plain');

}


download(data, fileName, contentType) {

  //var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  
    // var a = document.createElement("a");
    // var file = new Blob([{...data}], { type: "text/plain;charset=utf-8" });
    // // var file = new Blob([content], {type: contentType});
    // a.href = URL.createObjectURL(file);
    // a.download = fileName;
    // a.click();
}


  handleLastName(e){
    
  }

  compress(e) {
    
    const width = 110;
    const height = 110;
    const fileName = e.target.files[0].name;
    const reader = new FileReader();
    
    reader.readAsDataURL(e.target.files[0]); //
    const divImg = document.querySelector('#divimg')
    reader.onload = event => {
        let img = new Image(e.target.result);
        img.src =  event.target.result.toString();
        this.myImage = img;
        this.myImage.style.borderRadius = '50%';
        img.onload = () => {
                const elem = document.createElement('canvas');
                elem.width = width;
                elem.height = height;
                const ctx = elem.getContext('2d');
                // img.width and img.height will contain the original dimensions
                ctx.drawImage(img, 0, 0, width, height);
                divImg.appendChild(elem)
                ctx.canvas.toBlob((blob) => {
                    const file = new File([blob], fileName, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    });
                    
                }, 'image/jpeg', 1);
            },
            reader.onerror = error => console.log(error);                       
    };
  }

  handleImage(e){
    this.compress(e);
  }

}
