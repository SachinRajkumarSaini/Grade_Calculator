(this.webpackJsonpgrade_calculator=this.webpackJsonpgrade_calculator||[]).push([[0],{10:function(e,a,l){e.exports=l(19)},15:function(e,a,l){},19:function(e,a,l){"use strict";l.r(a);var t=l(1),n=l.n(t),r=l(9),c=l.n(r),m=l(21),o=l(22),s=l(23),i=l(24),u=l(25),E=l(26);l(15);document.body.style="background-color: #27c5b6;";var d=function(){var e=document.getElementById("physics").value,a=document.getElementById("chemistry").value,l=document.getElementById("maths").value,t=document.getElementById("web-programming").value,n=parseFloat(e)+parseFloat(a)+parseFloat(l)+parseFloat(t),r=n/400*100,c="",m="";r<=100&&r>=90?c="A+":r<90&&r>=80?c="A":r<80&&r>=70?c="B+":r<70&&r>=60?c="B":r<60&&r>=50?c="C+":r<50&&r>40?c="C":r<=40&&(c="F"),"F"==c&&(m="Fail"),"A+"!=c&&"A"!=c&&"B+"!=c&&"B"!=c&&"C+"!=c&&"C"!=c||(m="Pass"),""!=e&&""!=a&&""!=l&&""!=t||alert("Please Enter The Marks of Subject"),(e.length<3&&e.length>0||100==e)&&(a.length<3&&a.length>0||100==a)&&(l.length<3&&l.length>0||100==l)&&(t.length<3&&t.length>0||100==t)&&(document.getElementById("result").innerHTML="Out Of 400 Your Total is ".concat(n," and Percentage is ").concat(r,". Your Grade is ").concat(c," and You Are ").concat(m,".")),e.length>2&&(document.getElementById("phys").innerHTML="Please Enter the Marks Between 1 to 100"),a.length>2&&(document.getElementById("chem").innerHTML="Please Enter the Marks Between 1 to 100"),l.length>2&&(document.getElementById("math").innerHTML="Please Enter the Marks Between 1 to 100"),t.length>2&&(document.getElementById("web").innerHTML="Please Enter the Marks Between 1 to 100")},h=function(){return n.a.createElement("div",{className:"main-area"},n.a.createElement(m.a,{className:"jumbotron"},n.a.createElement(o.a,{className:"row"},n.a.createElement(s.a,{lg:"6",md:"6",sm:"12",className:"col-lg-6 col-md-6 col-sm-12 text-area"},n.a.createElement("ul",null,n.a.createElement("li",null,"S"),n.a.createElement("li",null,"T"),n.a.createElement("li",null,"U"),n.a.createElement("li",null,"D"),n.a.createElement("li",null,"E"),n.a.createElement("li",null,"N"),n.a.createElement("li",null,"T")),n.a.createElement("ul",null,n.a.createElement("li",null,"G"),n.a.createElement("li",null,"R"),n.a.createElement("li",null,"A"),n.a.createElement("li",null,"D"),n.a.createElement("li",null,"E")),n.a.createElement("ul",null,n.a.createElement("li",null,"C"),n.a.createElement("li",null,"A"),n.a.createElement("li",null,"L"),n.a.createElement("li",null,"C"),n.a.createElement("li",null,"U"),n.a.createElement("li",null,"L"),n.a.createElement("li",null,"A"),n.a.createElement("li",null,"T"),n.a.createElement("li",null,"O"),n.a.createElement("li",null,"R"))),n.a.createElement(s.a,{lg:"6",md:"6",sm:"12",className:"col-lg-6 col-md-6 col-sm-12 input-area"},n.a.createElement(i.a,null,n.a.createElement("div",{className:"form-group"},n.a.createElement(u.a,{type:"number",id:"physics",className:"form-control shadow-none",placeholder:"Physics"}),n.a.createElement(o.a,null,n.a.createElement("span",{id:"phys"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement(u.a,{type:"number",id:"chemistry",className:"form-control shadow-none",placeholder:"Chemistry"}),n.a.createElement(o.a,null,n.a.createElement("span",{id:"chem"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement(u.a,{type:"number",id:"maths",className:"form-control shadow-none",placeholder:"Maths"}),n.a.createElement(o.a,null,n.a.createElement("span",{id:"math"}))),n.a.createElement("div",{className:"form-group"},n.a.createElement(u.a,{type:"number",id:"web-programming",className:"form-control shadow-none",placeholder:"Web Programming"}),n.a.createElement(o.a,null,n.a.createElement("span",{id:"web"}))),n.a.createElement(E.a,{className:"btn shadow-none",onClick:d},"Show Percentage")))),n.a.createElement("p",{id:"result"},"This Grade Calculator will Find Out Your Total Marks, Percentage & Grade with Final Result.")))};l(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.edc3e541.chunk.js.map