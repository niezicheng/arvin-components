"use strict";(self.webpackChunk_arvin_react_ui=self.webpackChunk_arvin_react_ui||[]).push([[433],{76404:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsxs)(a.Space,{children:[(0,n.jsx)(a.Button,{disabled:!0,children:"disabled"}),(0,n.jsx)(a.Button,{disabled:!1,children:"not disabled"})]})}},75975:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsx)("div",{style:{background:"rgb(190, 200, 200)",padding:"16px 16px"},children:(0,n.jsxs)(a.Space,{children:[(0,n.jsx)(a.Button,{type:"primary",ghost:!0,children:"Primary"}),(0,n.jsx)(a.Button,{ghost:!0,children:"Default"}),(0,n.jsx)(a.Button,{type:"dashed",ghost:!0,children:"Dashed"})]})})}},28282:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsxs)(a.Space,{children:[(0,n.jsx)(a.Button,{shape:"circle",children:"C"}),(0,n.jsx)(a.Button,{shape:"round",children:"Round"})]})}},26714:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsxs)(a.Space,{children:[(0,n.jsx)(a.Button,{size:"small",children:"Small"}),(0,n.jsx)(a.Button,{size:"middle",children:"Middle"}),(0,n.jsx)(a.Button,{size:"large",children:"Large"})]})}},43912:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsxs)(a.Space,{children:[(0,n.jsx)(a.Button,{status:"info",children:"Info"}),(0,n.jsx)(a.Button,{status:"success",children:"Success"}),(0,n.jsx)(a.Button,{status:"warning",children:"Warning"}),(0,n.jsx)(a.Button,{status:"error",children:"Error"})]})}},43977:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsxs)(a.Space,{children:[(0,n.jsx)(a.Button,{type:"primary",children:"Primary"}),(0,n.jsx)(a.Button,{children:"Default"}),(0,n.jsx)(a.Button,{type:"dashed",children:"Dashed"}),(0,n.jsx)(a.Button,{type:"text",children:"Text"}),(0,n.jsx)(a.Button,{type:"link",children:"Link"})]})}},14710:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsx)(a.Radio,{children:"Radio"})}},66523:function(u,_,e){e.r(_);var a=e(54306),r=e.n(a),n=e(65893),l=e(50959),t=e(11527);_.default=function(){var c=l.useState(!1),i=r()(c,2),d=i[0],h=i[1],s=function(){h(!d)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.Radio,{defaultChecked:!1,disabled:d,children:"Disabled"}),(0,t.jsx)(n.Radio,{defaultChecked:!0,disabled:d,children:"Disabled"}),(0,t.jsx)("br",{}),(0,t.jsx)(n.Button,{type:"primary",onClick:s,style:{marginTop:8},children:"Toggle disabled"})]})}},67509:function(u,_,e){e.r(_);var a=e(54306),r=e.n(a),n=e(65893),l=e(50959),t=e(11527),c=["Apple","Pear","Orange"],i=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0},{label:"Banana",value:"Banana"}],d=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}];_.default=function(){var h=(0,l.useState)("Apple"),s=r()(h,2),v=s[0],m=s[1],O=(0,l.useState)("Apple"),j=r()(O,2),p=j[0],M=j[1],B=(0,l.useState)("Apple"),P=r()(B,2),x=P[0],R=P[1],C=(0,l.useState)("Apple"),D=r()(C,2),g=D[0],f=D[1],A=function(o){console.log("radio1 checked",o),m(o)},T=function(o){console.log("radio2 checked",o),M(o)},L=function(o){console.log("radio3 checked",o),R(o)},W=function(o){console.log("radio4 checked",o),f(o)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Radio.Group,{options:c,onChange:A,value:v}),(0,t.jsx)("br",{}),(0,t.jsx)(n.Radio.Group,{options:d,onChange:T,value:p}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.Radio.Group,{options:i,onChange:L,value:x,optionType:"button"}),(0,t.jsx)("br",{}),(0,t.jsx)(n.Radio.Group,{options:i,onChange:W,value:g,optionType:"button",buttonType:"solid"})]})}},60798:function(u,_,e){e.r(_);var a=e(54306),r=e.n(a),n=e(65893),l=e(50959),t=e(11527),c=["Apple","Pear","Orange"],i=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"},{label:"Banana",value:"Banana"}],d=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}];_.default=function(){var h=(0,l.useState)("Apple"),s=r()(h,2),v=s[0],m=s[1],O=(0,l.useState)("Apple"),j=r()(O,2),p=j[0],M=j[1],B=(0,l.useState)("Apple"),P=r()(B,2),x=P[0],R=P[1],C=(0,l.useState)("Apple"),D=r()(C,2),g=D[0],f=D[1],A=function(o){console.log("radio1 checked",o),m(o)},T=function(o){console.log("radio2 checked",o),M(o)},L=function(o){console.log("radio3 checked",o),R(o)},W=function(o){console.log("radio4 checked",o),f(o)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Radio.Group,{options:c,onChange:A,value:v}),(0,t.jsx)("br",{}),(0,t.jsx)(n.Radio.Group,{options:d,onChange:T,value:p}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.Radio.Group,{options:i,onChange:L,value:x,optionType:"button"}),(0,t.jsx)("br",{}),(0,t.jsx)(n.Radio.Group,{options:i,onChange:W,value:g,optionType:"button",buttonType:"solid"})]})}},19209:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsxs)(a.Space,{direction:"vertical",size:"large",children:[(0,n.jsxs)(a.Radio.Group,{defaultValue:"1",size:"small",children:[(0,n.jsx)(a.Radio.Button,{value:"1",children:"Beijing"}),(0,n.jsx)(a.Radio.Button,{value:"2",children:"Shanghai"}),(0,n.jsx)(a.Radio.Button,{value:"3",children:"Hangzhou"}),(0,n.jsx)(a.Radio.Button,{value:"4",children:"Jiangxi"})]}),(0,n.jsxs)(a.Radio.Group,{defaultValue:"1",size:"middle",children:[(0,n.jsx)(a.Radio.Button,{value:"1",children:"Beijing"}),(0,n.jsx)(a.Radio.Button,{disabled:!0,value:"2",children:"Shanghai"}),(0,n.jsx)(a.Radio.Button,{value:"3",children:"Hangzhou"}),(0,n.jsx)(a.Radio.Button,{value:"4",children:"Jiangxi"})]}),(0,n.jsxs)(a.Radio.Group,{disabled:!0,defaultValue:"1",size:"large",children:[(0,n.jsx)(a.Radio.Button,{value:"1",children:"Beijing"}),(0,n.jsx)(a.Radio.Button,{value:"2",children:"Shanghai"}),(0,n.jsx)(a.Radio.Button,{value:"3",children:"Hangzhou"}),(0,n.jsx)(a.Radio.Button,{value:"4",children:"Jiangxi"})]})]})}},92411:function(u,_,e){e.r(_);var a=e(54306),r=e.n(a),n=e(65893),l=e(50959),t=e(11527);_.default=function(){var c=(0,l.useState)("1"),i=r()(c,2),d=i[0],h=i[1],s=function(m){console.log("radio checked",m),h(m)};return(0,t.jsxs)(n.Radio.Group,{value:d,onChange:s,children:[(0,t.jsx)(n.Radio,{value:"1",children:"A"}),(0,t.jsx)(n.Radio,{value:"2",children:"B"}),(0,t.jsx)(n.Radio,{value:"3",children:"C"}),(0,t.jsx)(n.Radio,{value:"4",children:"D"})]})}},48990:function(u,_,e){e.r(_),e.d(_,{default:function(){return l}});var a=e(65893),r=e(50959),n=e(11527),l=function(){return(0,n.jsxs)("div",{className:"space-align-container",children:[(0,n.jsx)("div",{className:"space-align-block",children:(0,n.jsxs)(a.Space,{align:"center",children:["center",(0,n.jsx)(a.Button,{type:"primary",children:"Primary"}),(0,n.jsx)("span",{className:"mock-block",children:"Block"})]})}),(0,n.jsx)("div",{className:"space-align-block",children:(0,n.jsxs)(a.Space,{align:"start",children:["start",(0,n.jsx)(a.Button,{type:"primary",children:"Primary"}),(0,n.jsx)("span",{className:"mock-block",children:"Block"})]})}),(0,n.jsx)("div",{className:"space-align-block",children:(0,n.jsxs)(a.Space,{align:"end",children:["end",(0,n.jsx)(a.Button,{type:"primary",children:"Primary"}),(0,n.jsx)("span",{className:"mock-block",children:"Block"})]})}),(0,n.jsx)("div",{className:"space-align-block",children:(0,n.jsxs)(a.Space,{align:"baseline",children:["baseline",(0,n.jsx)(a.Button,{type:"primary",children:"Primary"}),(0,n.jsx)("span",{className:"mock-block",children:"Block"})]})})]})}},43994:function(u,_,e){e.r(_);var a=e(54306),r=e.n(a),n=e(65893),l=e(50959),t=e(11527);_.default=function(){var c=l.useState("horizontal"),i=r()(c,2),d=i[0],h=i[1];return(0,t.jsxs)(n.Space,{direction:"vertical",size:24,children:[(0,t.jsx)(n.Radio.Group,{value:d,onChange:function(v){return h(v)},children:["horizontal","vertical"].map(function(s){return(0,t.jsx)(n.Radio,{value:s,children:s},s)})}),(0,t.jsxs)(n.Space,{direction:d,children:[(0,t.jsx)(n.Button,{type:"primary",children:"Primary"}),(0,t.jsx)(n.Button,{type:"default",children:"Default"}),(0,t.jsx)(n.Button,{type:"dashed",children:"Dashed"})]})]})}},55034:function(u,_,e){e.r(_);var a=e(54306),r=e.n(a),n=e(65893),l=e(50959),t=e(11527);_.default=function(){var c=(0,l.useState)("middle"),i=r()(c,2),d=i[0],h=i[1];return(0,t.jsxs)(n.Space,{direction:"vertical",size:24,children:[(0,t.jsx)(n.Radio.Group,{value:d,onChange:function(v){return h(v)},children:["small","middle","large"].map(function(s){return(0,t.jsx)(n.Radio,{value:s,children:s},s)})}),(0,t.jsxs)(n.Space,{size:d,children:[(0,t.jsx)(n.Button,{type:"primary",children:"Primary"}),(0,t.jsx)(n.Button,{children:"Default"}),(0,t.jsx)(n.Button,{type:"dashed",children:"Dashed"}),(0,t.jsx)(n.Button,{type:"link",children:"Link"})]})]})}},4063:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){var l=(0,r.useMemo)(function(){return(0,n.jsx)("span",{style:{color:"#cccccc"},children:"|"})},[]);return(0,n.jsx)(a.Space,{direction:"vertical",children:(0,n.jsxs)(a.Space,{split:l,align:"center",children:[(0,n.jsx)(a.Button,{type:"link",children:"Link"}),(0,n.jsx)(a.Button,{type:"link",children:"Link"}),(0,n.jsx)(a.Button,{type:"link",children:"Link"})]})})}},68787:function(u,_,e){e.r(_);var a=e(65893),r=e(50959),n=e(11527);_.default=function(){return(0,n.jsx)(a.Space,{size:[8,16],wrap:!0,children:new Array(18).fill(null).map(function(l,t){return(0,n.jsx)(a.Button,{children:"Button"},t)})})}}}]);