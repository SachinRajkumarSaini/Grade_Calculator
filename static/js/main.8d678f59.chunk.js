(this.webpackJsonpgrade_calculator=this.webpackJsonpgrade_calculator||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},15:function(e,a,t){},16:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(9),r=t.n(c),m=(t(15),t(22)),o=t(23),s=t(24),i=t(25),u=t(26);t(16);document.body.style="background-color: #27c5b6;";var E=function(){var e=document.getElementById("physics").value,a=document.getElementById("chemistry").value,t=document.getElementById("maths").value,l=document.getElementById("web-programming").value,n=parseFloat(e)+parseFloat(a)+parseFloat(t)+parseFloat(l),c=n/400*100,r="";0===e&&0===a&&0===t&&0===l?alert("Please Enter The Marks of All Subject"):(r=c<=100&&c>=90?"A+":c<90&&c>=80?"A":c<80&&c>=70?"B+":c<70&&c>=60?"B":c<60&&c>=50?"C+":c<50&&c>40?"C":"F",document.getElementById("result").innerHTML="F"===r?"Out Of 400 Your Total is ".concat(n," and Percentage is ").concat(c," <br> Your Grade is ").concat(r," and You Are Fail."):"Out Of 400 Your Total is ".concat(n," and Percentage is ").concat(c," <br> Your Grade is ").concat(r," and You Are Pass."))},d=function(){return n.a.createElement("div",{className:"main-area"},n.a.createElement(m.a,{className:"jumbotron"},n.a.createElement(o.a,{className:"row"},n.a.createElement(s.a,{lg:"6",sm:"12",className:"text-area"},n.a.createElement("ul",null,n.a.createElement("li",null,"S"),n.a.createElement("li",null,"T"),n.a.createElement("li",null,"U"),n.a.createElement("li",null,"D"),n.a.createElement("li",null,"E"),n.a.createElement("li",null,"N"),n.a.createElement("li",null,"T")),n.a.createElement("ul",null,n.a.createElement("li",null,"G"),n.a.createElement("li",null,"R"),n.a.createElement("li",null,"A"),n.a.createElement("li",null,"D"),n.a.createElement("li",null,"E")),n.a.createElement("ul",null,n.a.createElement("li",null,"C"),n.a.createElement("li",null,"A"),n.a.createElement("li",null,"L"),n.a.createElement("li",null,"C"),n.a.createElement("li",null,"U"),n.a.createElement("li",null,"L"),n.a.createElement("li",null,"A"),n.a.createElement("li",null,"T"),n.a.createElement("li",null,"O"),n.a.createElement("li",null,"R"))),n.a.createElement(s.a,{lg:"6",sm:"12",className:"input-area"},n.a.createElement(o.a,{className:"physics"},n.a.createElement(i.a,{type:"text",className:"input",id:"physics",placeholder:"Physics"})),n.a.createElement(o.a,{className:"chemistry"},n.a.createElement(i.a,{type:"text",className:"input",id:"chemistry",placeholder:"Chemistry"})),n.a.createElement(o.a,{className:"maths"},n.a.createElement(i.a,{type:"text",className:"input",id:"maths",placeholder:"Maths"})),n.a.createElement(o.a,{className:"web-programming"},n.a.createElement(i.a,{type:"text",className:"input",id:"web-programming",placeholder:"Web Programming"})),n.a.createElement(o.a,{className:"button"},n.a.createElement(u.a,{class:"btn",onClick:E},"Show Percentage")))),n.a.createElement("p",{id:"result"})))};t(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.8d678f59.chunk.js.map