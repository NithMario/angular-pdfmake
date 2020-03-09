import { Component, OnInit } from '@angular/core';
import { PdfmakeService } from 'ng-pdf-make/pdfmake/pdfmake.service';
import { Cell, Row, Table } from 'ng-pdf-make/objects/table';
import { ThrowStmt } from '@angular/compiler';
import { text } from '@angular/core/src/render3';
import { pdfMake } from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfmake from 'pdfmake/build/pdfmake';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public pdfmake: PdfmakeService) {
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;



  }

  ngOnInit() {
    // this.pdfmake.addImage(this.imageAddress, 100, 65);
    let imageAddress: string = "https://static.wixstatic.com/media/b31e36_cc8d250a4595e776c78ecac3b35a9d9e.gif/v1/fit/w_2500,h_1330,al_c/b31e36_cc8d250a4595e776c78ecac3b35a9d9e.gif";


    // Create a pdf document
    // IMPORTANT: if a document was created before, this method will destroy it and
    // create a new instance.

    this.pdfmake.create();
    // this.pdfmake.configureStyles({ header: { fontSize: 18 },content:{fontSize: 18 }});

    this.pdfmake.documentDefinition = {
      pageSize: 'A5',
      pageOrientation: 'portrait',
      pageMargins: [20, 15, 30, 0],
      // defaultStyle: {
      //   font: 'yourFontName'
      // },

      content: [

        {

          columns: [
            {

              // auto-sized columns have their widths based on their content


              image: 'data:image/png;base64,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',
              width: 100

            },
            [
              {
                text: 'Coffee Today',
                style: 'invoiceTitle',
                width: '*',
                alignment: 'center',
                fontSize: 35

              },
              {
                stack: [
                  {
                    columns: [
                      {
                        text: 'Nº 46B St 317 Boeung Kok II, Toul Kork Phnom Penh.',
                        style: 'invoiceSubTitle',
                        width: '*',
                        fontSize: 15,

                      },


                    ],


                  },
                  {
                    columns: [

                      {
                        text: 'Contact: +855 119 922 43',
                        style: 'invoiceSubTitle',
                        width: '*',
                        fontSize: 15,
                        margin: [0, 0, 0, 17]


                      },

                    ],
                  },

                ]

              }
            ],


            // {

            //   text: 'Coffee Today',
            //   fontSize: 40,
            //   // margin: [10, 3],
            //   alignment: 'center',





            // },


          ]

        },
//header table
        {
          columns: [
            {
              text: 'Invoice Nº',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              margin: [0, 0, 0, 3]

            },
            {
              text: '0012995',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              alignment: 'right',
              margin: [0, 0, 0, 3]
            },

          ],
        },
        {
          columns: [
            {
              text: 'Time In ',
              style: 'invoiceBillingDetails',
              fontSize: 17,
            },
            {
              text: '1/3/2020 12:39 48 PM',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              alignment: 'right',
              margin: [0, 0, 0, 3]

            },

          ],
        },

        {
          columns: [
            {
              text: 'Time Out',
              style: 'invoiceBillingDetails',
              fontSize: 17,
            },
            {
              text: '1/3/2020 12:39 48 PM',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              alignment: 'right'
            },

          ],
        },
        {
          columns: [
            {
              text: 'Cashier',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              margin: [0, 0, 0, 3]

            },
            {
              text: 'Admin',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              alignment: 'right',
              margin: [0, 0, 0, 3]

            },

          ],
        },

        {
          columns: [
            {
              text: 'Customer',
              style: 'invoiceBillingDetails',
              fontSize: 17,
            },
            {
              text: 'general',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              alignment: 'right',
              margin: [0, 0, 0, 15]

            },

          ],
        },

        // Items
        {
          style: 'exampleLayout',

          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            // widths: ['45%', '10%', '15%', '15%','20%'],

            widths: [150, 30, 35, 37, 55],


            body: [
              // Table Header
              [
                {
                  text: 'Items Description',
                  style: 'itemsHeader',
                  fontSize: 15,
                
                  
               

                },
                {
                  text: 'Qty',
                  style: ['qty_header'],
                  fontSize: 15,
                  alignment: 'center',
            
                  
               


                },
                {
                  text: 'Price',
                  style: ['price_header'],
                  fontSize: 15,
             


                },

                {
                  text: 'Dis',
                  style: ['dis_header'],
                  fontSize: 15,
                  alignment: 'center',
             
             
                  


                },
                {
                  text: 'Amount',
                  style: ['amout_header'],
                  fontSize: 15,
              




                },



              ],


              // Item 1
              [
                [

                  {

                    text: 'Topping Ice Cream Strawberry',
                    style: 'itemTitle',
                    fontSize: 15,



                  },
                  {
                    text: '50%',
                    style: 'itemSubTitle',
                  

                  }
                ],
                {
                  text: '999',
                  style: 'itemNumber',
                  fontSize: 15,


                },
                {
                  text: '$999',
                  style: 'itemNumber',
                  fontSize: 15,


                },
                {
                  text: '100%',
                  style: 'itemNumber',
                  fontSize: 15,


                },
                {
                  text: '$9999',
                  alignment:'center',

                  fontSize: 15,


                },


              ],

            ],

          }, // table
     
          // defaultStyle: {
          //   alignment: 'justify',
          // },
     
          layout:'lightHorizontalLines',
   



        },

        {


          columns: [

            {

              text: '---------------------------------------------------------------------------------------------------------------',


            },


          ],
        },
        {


          columns: [

            {
              text: 'Total',
              style: 'invoiceBillingDetails',
              fontSize: 17,
            },
            {
              text: '$10',
              style: 'invoiceBillingDetails',
              width: '15%',
              alignment: 'center',
              fontSize: 17,
              margin: [0, 0, 0, 3]

            },

          ],
        },

        {
          columns: [
            {
              text: 'Total Due',
              style: 'invoiceBillingDetails',
              fontSize: 17,
            },
            {
              text: '$10',
              style: 'invoiceBillingDetails',
              fontSize: 17,
              width: '15%',
              alignment: 'center',
              margin: [0, 0, 0, 3]
            },

          ],
        },

        {
          columns: [
            {
              text: 'Receive In',
              style: 'invoiceBillingDetails',
              fontSize: 17,
            },
            {
              text: '$10',

              fontSize: 17,
              width: '15%',
              alignment: 'center'
            },

          ],

        },
        {
          columns: [
            {
              text: '----------------------------------------------------------------------------------------',
              style: 'invoiceBillingDetails',
              fontSize: 15,



            },
            {
              text: '',

              fontSize: 15,

            },

          ],

        },
        {
          columns: [
            {
              text: 'Total Sales',
              style: 'invoiceBillingDetails',

              fontSize: 17,

            },
            {
              text: '$10',

              fontSize: 17,

              width: '15%',
              alignment: 'center',
              margin: [0, 0, 0, 20]
            },

          ],

        },




        {
          stack: [
            {



            },
            {
              columns: [
                {
                  width: 90,
                  text: 'WIFI NAME : ',
                  fontSize: 13
                },
                {
                  width: 70,
                  text: 'Coffee-001',
                  fontSize: 13,
                  bold: true,


                },
                {
                  width: 110,
                  text: 'WIFI PASSWORD :',
                  fontSize: 13
                },
                {

                  text: '001001001',

                  fontSize: 13, width: 100, bold: true,
                }
              ]
            },

          ]

        },





      ],
      styles: {
        exampleLayout: {
   
          // fillColor: '#eeeeee',
        },
        itemsHeader: {
          // fillColor: '#eeeeee',

        },
        qty_header: {
       
          alignment: 'right',

          // fillColor: '#4c4694',
          paddingLeft: 0,
          paddingRight:0,
          // margin: [1, 0, 2, 0]
        },
        dis_header: {

          alignment: 'right',
          
          // fillColor: '#b1b39d',

        },
        price_header: {
          // fillColor: '#eeeeee',
          alignment: 'right',
          // fillColor: '#494a3d',
          paddingLeft: 0,
          paddingRight:0,


        },
        amout_header: {
          alignment: 'right',
          // fillColor: '#eeeeee',
          paddingLeft: 0,
          paddingRight:0,

        },
        itemSubTitle: {
      
          margin:[17,0,0,0]
         
        },

        itemNumber: {

          alignment: 'right',
        },

        notesText: {
          fontSize: 10
        },

      },

    };

    this.pdfmake.addText("Thank you for coming at our shop!", {
      fontSize: 15, alignment: 'center', bold: true
    });


  }
}
