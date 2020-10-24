(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d29eec52"],{"0d0b":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"invoice-page"}},[a("vx-card",[a("div",{staticClass:"vx-row leading-loose p-base"},[a("div",{staticClass:"vx-col w-full md:w-1/2 mt-base"},[a("img",{attrs:{src:e("a4ef"),alt:"vuesax-logo"}})]),a("div",{staticClass:"vx-col w-full md:w-1/2 text-right"},[a("h1",[t._v("Invoice")]),a("div",{staticClass:"invoice__invoice-detail mt-6"},[a("h6",[t._v("INVOICE NO.")]),a("p",[t._v(t._s(t.invoiceDetails.invoiceNo))]),a("h6",{staticClass:"mt-4"},[t._v("INVOICE DATE")]),a("p",[t._v(t._s(t._f("date")(t.invoiceDetails.invoiceDate,!0)))])])]),a("div",{staticClass:"vx-col w-full md:w-1/2 mt-12"},[a("h5",[t._v("Recipient")]),a("div",{staticClass:"invoice__recipient-info my-4"},[a("p",[t._v(t._s(t.recipientDetails.fullName))]),a("p",[t._v(t._s(t.recipientDetails.addressLine1))]),a("p",[t._v(t._s(t.recipientDetails.addressLine2))]),a("p",[t._v(t._s(t.recipientDetails.zipcode))])]),a("div",{staticClass:"invoice__recipient-contact "},[a("p",{staticClass:"flex items-center"},[a("feather-icon",{attrs:{icon:"MailIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2"},[t._v(t._s(t.recipientDetails.mailId))])],1),a("p",{staticClass:"flex items-center"},[a("feather-icon",{attrs:{icon:"PhoneIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2"},[t._v(t._s(t.recipientDetails.mobile))])],1)])]),a("div",{staticClass:"vx-col w-full md:w-1/2 mt-base text-right mt-12"},[a("h5",[t._v(t._s(t.companyDetails.name))]),a("div",{staticClass:"invoice__company-info my-4"},[a("p",[t._v(t._s(t.companyDetails.addressLine1))]),a("p",[t._v(t._s(t.companyDetails.addressLine2))]),a("p",[t._v(t._s(t.companyDetails.zipcode))])]),a("div",{staticClass:"invoice__company-contact"},[a("p",{staticClass:"flex items-center justify-end"},[a("feather-icon",{attrs:{icon:"MailIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2"},[t._v(t._s(t.companyDetails.mailId))])],1),a("p",{staticClass:"flex items-center justify-end"},[a("feather-icon",{attrs:{icon:"PhoneIcon",svgClasses:"h-4 w-4"}}),a("span",{staticClass:"ml-2"},[t._v(t._s(t.companyDetails.mobile))])],1)])])]),a("div",{staticClass:"p-base"},[a("vs-table",{attrs:{hoverFlat:"",data:t.invoiceData.tasks},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.data;return t._l(e,(function(s,i){return a("vs-tr",{key:i},[a("vs-td",{attrs:{data:e[i].task}},[t._v(t._s(e[i].task))]),a("vs-td",{attrs:{data:e[i].hours}},[t._v(t._s(e[i].hours))]),a("vs-td",{attrs:{data:e[i].rate}},[t._v(t._s(e[i].rate)+" USD")]),a("vs-td",{attrs:{data:e[i].amount}},[t._v(t._s(e[i].amount)+" USD")])],1)}))}}])},[a("template",{slot:"thead"},[a("vs-th",[t._v("TASK DESCRIPTION")]),a("vs-th",[t._v("HOURS")]),a("vs-th",[t._v("RATE")]),a("vs-th",[t._v("AMOUNT")])],1)],2),a("vs-table",{staticClass:"w-1/2 ml-auto mt-4",attrs:{hoverFlat:"",data:t.invoiceData}},[a("vs-tr",[a("vs-th",[t._v("SUBTOTAL")]),a("vs-td",[t._v(t._s(t.invoiceData.subtotal)+" USD")])],1),a("vs-tr",[a("vs-th",[t._v("DISCOUNT ("+t._s(t.invoiceData.discountPercentage)+"%)")]),a("vs-td",[t._v(t._s(t.invoiceData.discountedAmount)+" USD")])],1),a("vs-tr",[a("th",[t._v("TOTAL")]),a("td",[t._v(t._s(t.invoiceData.total)+" USD")])])],1)],1),a("div",{staticClass:"invoice__footer text-right p-base"},[a("p",{staticClass:"mb-4"},[t._v("Transfer the amounts to the business amount below. Please include invoice number on your check.")]),a("p",[a("span",{staticClass:"mr-8"},[t._v("BANK: "),a("span",{staticClass:"font-semibold"},[t._v("FTSBUS33")])]),a("span",[t._v("IBAN: "),a("span",{staticClass:"font-semibold"},[t._v(" G882-1111-2222-3333 ")])])])])])],1)},i=[],n={data:function(){return{companyDetails:{name:"Microsion Technologies Pvt. Ltd.",addressLine1:"9 N. Sherwood Court",addressLine2:"Elyria, OH",zipcode:"94203",mailId:"hello@pixinvent.net",mobile:"+91 999 999 9999"},recipientDetails:{fullName:"Peter Stark",addressLine1:"8577 West West Drive ",addressLine2:"Holbrook, NY",zipcode:"90001",mailId:"peter@mail.com",mobile:"+91 988 888 8888"},invoiceDetails:{invoiceNo:"001/2019",invoiceDate:"Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)"},invoiceData:{tasks:[{id:1,task:"Website Redesign",hours:60,rate:15,amount:9e4},{id:2,task:"Newsletter template design",hours:20,rate:12,amount:24e3}],subtotal:114e3,discountPercentage:5,discountedAmount:5700,total:108300}}},computed:{},methods:{},components:{}},o=n,c=e("2877"),l=Object(c["a"])(o,a,i,!1,null,null,null);s["default"]=l.exports},a4ef:function(t,s,e){t.exports=e.p+"img/logo.d997614f.png"}}]);
//# sourceMappingURL=chunk-d29eec52.5e19d282.js.map