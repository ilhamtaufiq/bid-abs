(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1181"],{"9eba":function(t,n,a){"use strict";a.r(n);var e,r,o,l,i,s,d,c,p,u,b,h,C,m,f,x,g,y,j=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"extra-component-chartjs-demo"}},[t._m(0),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-line-chart")],1),a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-bar-chart")],1),a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-horizontal-bar-chart")],1),a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-pie-chart")],1),a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-doughnut-chart")],1),a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-radar-chart")],1),a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-polar-area-chart")],1),a("div",{staticClass:"vx-col w-full md:w-1/2"},[a("chartjs-bubble-chart")],1),a("div",{staticClass:"vx-col w-full"},[a("chartjs-scatter-chart")],1)])])},v=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",{staticClass:"mb-4"},[t._v("You can easily create reuseable chart components. "),a("a",{attrs:{href:"https://vue-chartjs.org/",target:"_blank",rel:"nofollow"}},[t._v("vue-chartjs")]),t._v(" is a wrapper for Chart.js. Read full documnetation "),a("a",{attrs:{href:"https://vue-chartjs.org/guide/",target:"_blank",rel:"nofollow"}},[t._v("here")])])}],A=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Bar Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-bar-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { Bar } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        legend: { display: false },\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},E=[],k=a("1fca"),w={extends:k["a"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},F=w,L=a("2877"),B=Object(L["a"])(F,e,r,!1,null,null,null),P=B.exports,_={data:function(){return{data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#7367F0","#28C76F","#EA5455","#FF9F43","#1E1E1E"],data:[2478,5267,734,784,433]}]},options:{legend:{display:!1},title:{display:!0,text:"Predicted world population (millions) in 2050"}}}},components:{ChartjsComponentBarChart:P}},O=_,D=Object(L["a"])(O,A,E,!1,null,null,null),S=D.exports,N=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Line Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-line-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { Line } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],\n        datasets: [{\n          data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],\n          label: "Africa",\n          borderColor: "#3e95cd",\n          fill: false\n        }, {\n          data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],\n          label: "Asia",\n          borderColor: "#8e5ea2",\n          fill: false\n        }, {\n          data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],\n          label: "Europe",\n          borderColor: "#3cba9f",\n          fill: false\n        }, {\n          data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],\n          label: "Latin America",\n          borderColor: "#e8c3b9",\n          fill: false\n        }, {\n          data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],\n          label: "North America",\n          borderColor: "#c45850",\n          fill: false\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'World population per region (in millions)\'\n        }\n      }\n    }\n  },\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},R=[],$={extends:k["e"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},z=$,H=Object(L["a"])(z,o,l,!1,null,null,null),W=H.exports,G={data:function(){return{data:{labels:[1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],datasets:[{data:[86,114,106,106,107,111,133,221,783,2478],label:"Africa",borderColor:"#7367F0",fill:!1},{data:[282,350,411,502,635,809,947,1402,3700,5267],label:"Asia",borderColor:"#28C76F",fill:!1},{data:[168,170,178,190,203,276,408,547,675,734],label:"Europe",borderColor:"#EA5455",fill:!1},{data:[40,20,10,16,24,38,74,167,508,784],label:"Latin America",borderColor:"#FF9F43",fill:!1},{data:[6,3,2,2,7,26,82,172,312,433],label:"North America",borderColor:"#1E1E1E",fill:!1}]},options:{title:{display:!0,text:"World population per region (in millions)"}}}},components:{ChartjsComponentLineChart:W}},J=G,M=Object(L["a"])(J,N,R,!1,null,null,null),T=M.exports,Y=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Pie Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-pie-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { Pie } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},q=[],I={extends:k["f"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},K=I,Q=Object(L["a"])(K,i,s,!1,null,null,null),U=Q.exports,V={data:function(){return{data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#7367F0","#28C76F","#EA5455","#FF9F43","#1E1E1E"],data:[2478,5267,734,784,433]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"}}}},components:{ChartjsComponentPieChart:U}},X=V,Z=Object(L["a"])(X,Y,q,!1,null,null,null),tt=Z.exports,nt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Radar Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-radar-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { Radar } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "1950",\n          fill: true,\n          backgroundColor: "rgba(179,181,198,0.2)",\n          borderColor: "rgba(179,181,198,1)",\n          pointBorderColor: "#fff",\n          pointBackgroundColor: "rgba(179,181,198,1)",\n          data: [8.77, 55.61, 21.69, 6.62, 6.82]\n        }, {\n          label: "2050",\n          fill: true,\n          backgroundColor: "rgba(255,99,132,0.2)",\n          borderColor: "rgba(255,99,132,1)",\n          pointBorderColor: "#fff",\n          pointBackgroundColor: "rgba(255,99,132,1)",\n          pointBorderColor: "#fff",\n          data: [25.48, 54.16, 7.61, 8.06, 4.45]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Distribution in % of world population\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},at=[],et={extends:k["h"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},rt=et,ot=Object(L["a"])(rt,d,c,!1,null,null,null),lt=ot.exports,it={data:function(){return{data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"1950",fill:!0,backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointBackgroundColor:"rgba(179,181,198,1)",data:[8.77,55.61,21.69,6.62,6.82]},{label:"2050",fill:!0,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointBackgroundColor:"rgba(255,99,132,1)",data:[25.48,54.16,7.61,8.06,4.45]}]},options:{title:{display:!0,text:"Distribution in % of world population"}}}},components:{ChartjsComponentRadarChart:lt}},st=it,dt=Object(L["a"])(st,nt,at,!1,null,null,null),ct=dt.exports,pt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Polar Area Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-polar-area-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { PolarArea } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},ut=[],bt={extends:k["g"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},ht=bt,Ct=Object(L["a"])(ht,p,u,!1,null,null,null),mt=Ct.exports,ft={data:function(){return{data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#7367F0","#28C76F","#EA5455","#FF9F43","#1E1E1E"],data:[2478,5267,734,784,433]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"}}}},components:{ChartjsComponentPolarAreaChart:mt}},xt=ft,gt=Object(L["a"])(xt,pt,ut,!1,null,null,null),yt=gt.exports,jt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Doughnut Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-doughnut-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { Doughnut } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},vt=[],At={extends:k["c"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},Et=At,kt=Object(L["a"])(Et,b,h,!1,null,null,null),wt=kt.exports,Ft={data:function(){return{data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#7367F0","#28C76F","#EA5455","#FF9F43","#1E1E1E"],data:[2478,5267,734,784,433]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"}}}},components:{ChartjsComponentDoughnutChart:wt}},Lt=Ft,Bt=Object(L["a"])(Lt,jt,vt,!1,null,null,null),Pt=Bt.exports,_t=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Horizontal Bar Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-horizontal-bar-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { HorizontalBar } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],\n        datasets: [{\n          label: "Population (millions)",\n          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],\n          data: [2478, 5267, 734, 784, 433]\n        }]\n      },\n      options: {\n        legend: { display: false },\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},Ot=[],Dt={extends:k["d"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},St=Dt,Nt=Object(L["a"])(St,C,m,!1,null,null,null),Rt=Nt.exports,$t={data:function(){return{data:{labels:["Africa","Asia","Europe","Latin America","North America"],datasets:[{label:"Population (millions)",backgroundColor:["#7367F0","#28C76F","#EA5455","#FF9F43","#1E1E1E"],data:[2478,5267,734,784,433]}]},options:{legend:{display:!1},title:{display:!0,text:"Predicted world population (millions) in 2050"}}}},components:{ChartjsComponentHorizontalBarChart:Rt}},zt=$t,Ht=Object(L["a"])(zt,_t,Ot,!1,null,null,null),Wt=Ht.exports,Gt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{staticClass:"mb-base",attrs:{title:"Bubble Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-bubble-chart",{attrs:{height:250,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { Bubble } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        labels: "Africa",\n        datasets: [{\n          label: ["China"],\n          backgroundColor: "rgba(255,221,50,0.2)",\n          borderColor: "rgba(255,221,50,1)",\n          data: [{\n            x: 21269017,\n            y: 5.245,\n            r: 15\n          }]\n        }, {\n          label: ["Denmark"],\n          backgroundColor: "rgba(60,186,159,0.2)",\n          borderColor: "rgba(60,186,159,1)",\n          data: [{\n            x: 258702,\n            y: 7.526,\n            r: 10\n          }]\n        }, {\n          label: ["Germany"],\n          backgroundColor: "rgba(0,0,0,0.2)",\n          borderColor: "#000",\n          data: [{\n            x: 3979083,\n            y: 6.994,\n            r: 15\n          }]\n        }, {\n          label: ["Japan"],\n          backgroundColor: "rgba(193,46,12,0.2)",\n          borderColor: "rgba(193,46,12,1)",\n          data: [{\n            x: 4931877,\n            y: 5.921,\n            r: 15\n          }]\n        }]\n      },\n      options: {\n        title: {\n          display: true,\n          text: \'Predicted world population (millions) in 2050\'\n        },\n        scales: {\n          yAxes: [{\n            scaleLabel: {\n              display: true,\n              labelString: "Happiness"\n            }\n          }],\n          xAxes: [{\n            scaleLabel: {\n              display: true,\n              labelString: "GDP (PPP)"\n            }\n          }]\n        }\n      }\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},Jt=[],Mt={extends:k["b"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},Tt=Mt,Yt=Object(L["a"])(Tt,f,x,!1,null,null,null),qt=Yt.exports,It={data:function(){return{data:{labels:"Africa",datasets:[{label:["China"],backgroundColor:"rgba(255,221,50,0.2)",borderColor:"rgba(255,221,50,1)",data:[{x:21269017,y:5.245,r:15}]},{label:["Denmark"],backgroundColor:"rgba(60,186,159,0.2)",borderColor:"rgba(60,186,159,1)",data:[{x:258702,y:7.526,r:10}]},{label:["Germany"],backgroundColor:"rgba(0,0,0,0.2)",borderColor:"#000",data:[{x:3979083,y:6.994,r:15}]},{label:["Japan"],backgroundColor:"rgba(193,46,12,0.2)",borderColor:"rgba(193,46,12,1)",data:[{x:4931877,y:5.921,r:15}]}]},options:{title:{display:!0,text:"Predicted world population (millions) in 2050"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Happiness"}}],xAxes:[{scaleLabel:{display:!0,labelString:"GDP (PPP)"}}]}}}},components:{ChartjsComponentBubbleChart:qt}},Kt=It,Qt=Object(L["a"])(Kt,Gt,Jt,!1,null,null,null),Ut=Qt.exports,Vt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("vx-card",{attrs:{title:"Scatter Chart","code-toggler":""}},[a("div",{staticClass:"mt-5"},[a("chartjs-component-scatter-chart",{attrs:{height:300,data:t.data,options:t.options}})],1),a("template",{slot:"codeContainer"},[t._v('\n<script>\nimport { Scatter } from \'vue-chartjs\'\n\nexport default {\n  extends: Line,\n  data() {\n    return {\n      data: {\n        datasets: [{\n          label: "My First dataset",\n          data: [{\n            x: 65, y: 28,\n          }, {\n            x: 59, y: 48,\n          }, {\n            x: 80, y: 40,\n          }, {\n            x: 81, y: 19,\n          }, {\n            x: 56, y: 86,\n          }, {\n            x: 55, y: 27,\n          }, {\n            x: 40, y: 89,\n          }],\n          backgroundColor: "rgba(209,212,219,.3)",\n          borderColor: "transparent",\n          pointBorderColor: "#D1D4DB",\n          pointBackgroundColor: "#FFF",\n          pointBorderWidth: 2,\n          pointHoverBorderWidth: 2,\n          pointRadius: 4,\n        }, {\n          label: "My Second dataset",\n          data: [{\n            x: 45, y: 17,\n          }, {\n            x: 25, y: 62,\n          }, {\n            x: 16, y: 78,\n          }, {\n            x: 36, y: 88,\n          }, {\n            x: 67, y: 26,\n          }, {\n            x: 18, y: 48,\n          }, {\n            x: 76, y: 73,\n          }],\n          backgroundColor: "rgba(81,117,224,.6)",\n          borderColor: "transparent",\n          pointBorderColor: "#5175E0",\n          pointBackgroundColor: "#FFF",\n          pointBorderWidth: 2,\n          pointHoverBorderWidth: 2,\n          pointRadius: 4,\n        }]\n      },\n\n      options: {\n        responsive: true,\n        maintainAspectRatio: false,\n        responsiveAnimationDuration: 800,\n        title: {\n          display: false,\n          text: \'Chart.js Scatter Chart\'\n        },\n        scales: {\n          xAxes: [{\n            position: \'top\',\n            gridLines: {\n              zeroLineColor: "rgba(0,255,0,1)",\n              color: "#f3f3f3",\n              drawTicks: false,\n            },\n            scaleLabel: {\n              display: true,\n              labelString: \'x axis\'\n            }\n          }],\n          yAxes: [{\n            position: \'right\',\n            gridLines: {\n              zeroLineColor: "rgba(0,255,0,1)",\n              color: "#f3f3f3",\n              drawTicks: false,\n            },\n            scaleLabel: {\n              display: true,\n              labelString: \'y axis\'\n            }\n          }]\n        }\n      },\n    }\n  }\n  mounted () {\n    this.renderChart(this.data, this.options)\n  }\n}\n<\/script>\n        ')])],2)},Xt=[],Zt={extends:k["i"],props:{data:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.data,this.options)}},tn=Zt,nn=Object(L["a"])(tn,g,y,!1,null,null,null),an=nn.exports,en={data:function(){return{data:{datasets:[{label:"My First dataset",data:[{x:65,y:28},{x:59,y:48},{x:80,y:40},{x:81,y:19},{x:56,y:86},{x:55,y:27},{x:40,y:89}],backgroundColor:"rgba(209,212,219,.3)",borderColor:"transparent",pointBorderColor:"#D1D4DB",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4},{label:"My Second dataset",data:[{x:45,y:17},{x:25,y:62},{x:16,y:78},{x:36,y:88},{x:67,y:26},{x:18,y:48},{x:76,y:73}],backgroundColor:"rgba(81,117,224,.6)",borderColor:"transparent",pointBorderColor:"#5175E0",pointBackgroundColor:"#FFF",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:4}]},options:{responsive:!0,maintainAspectRatio:!1,responsiveAnimationDuration:800,title:{display:!1,text:"Chart.js Scatter Chart"},scales:{xAxes:[{position:"top",gridLines:{zeroLineColor:"rgba(0,255,0,1)",color:"#f3f3f3",drawTicks:!1},scaleLabel:{display:!0,labelString:"x axis"}}],yAxes:[{position:"right",gridLines:{zeroLineColor:"rgba(0,255,0,1)",color:"#f3f3f3",drawTicks:!1},scaleLabel:{display:!0,labelString:"y axis"}}]}}}},components:{ChartjsComponentScatterChart:an}},rn=en,on=Object(L["a"])(rn,Vt,Xt,!1,null,null,null),ln=on.exports,sn={components:{ChartjsBarChart:S,ChartjsLineChart:T,ChartjsPieChart:tt,ChartjsRadarChart:ct,ChartjsPolarAreaChart:yt,ChartjsDoughnutChart:Pt,ChartjsHorizontalBarChart:Wt,ChartjsScatterChart:ln,ChartjsBubbleChart:Ut}},dn=sn,cn=Object(L["a"])(dn,j,v,!1,null,null,null);n["default"]=cn.exports}}]);
//# sourceMappingURL=chunk-2d0f1181.364b051b.js.map