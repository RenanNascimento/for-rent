(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{29:function(e,n,t){"use strict";t.r(n);var r,c,i,o,a,s,l,d,j,b,x,p,u,h,O,m,f,g,v,y,w=t(0),S=t.n(w),k=t(16),F=t.n(k),z=t(2),N=t(3),q=Object(N.a)(r||(r=Object(z.a)(["\n    html, body, #root {\n        margin: 0;\n        height: 100%;\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n            sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n\n    code {\n        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n    }\n"]))),C=t(4),R=t.n(C),A=t(7),B=t(6),P=t(5),I=N.c.div(c||(c=Object(z.a)(["\n  ",";\n"])),Object(N.b)(i||(i=Object(z.a)(["\n    display: inline-block;\n    position: relative;\n    width: 24px;\n    height: 24px;\n\n    div {\n      box-sizing: border-box;\n      display: block;\n      position: absolute;\n      top: -8px;\n      right: -8px;\n      width: 24px;\n      height: 24px;\n      margin: 8px;\n      border: 4px solid #191f43;\n      border-radius: 50%;\n      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n      border-color: #191f43 transparent transparent transparent;\n    }\n\n    div:nth-child(1) {\n      animation-delay: -0.45s;\n    }\n\n    div:nth-child(2) {\n      animation-delay: -0.3s;\n    }\n\n    div:nth-child(3) {\n      animation-delay: -0.15s;\n    }\n\n    @keyframes lds-ring {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n  "])))),M=t(1),J=function(){return Object(M.jsxs)(I,{children:[Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{}),Object(M.jsx)("div",{})]})},T=t(11),$=t(20),Q=N.c.h1(o||(o=Object(z.a)(["\n  text-align: center;\n  font-size: 48px;\n  color: #191f43;\n\n  @media (max-width: 640px) {\n    font-size: 24px;\n  }\n"]))),U=N.c.form(a||(a=Object(z.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),H=N.c.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 4px;\n  margin: 0px 8px;\n\n  input {\n    outline: 0;\n    border-width: 0 0 2px;\n    border-color: #a7c2f0;\n    background-color: transparent;\n\n    &:focus {\n      border-color: #3650f7;\n    }\n  }\n"]))),V=N.c.div(l||(l=Object(z.a)(["\n  display: flex;\n  width: 100%;\n  margin: 4px 0;\n  flex-direction: column;\n"]))),D=N.c.label(d||(d=Object(z.a)(["\n  font-size: 14px;\n  color: #191f43;\n  margin-top: 8px;\n  margin-bottom: 2px;\n"]))),E=N.c.select(j||(j=Object(z.a)(["\n  outline: 0;\n  font-size: 16px;\n  border-color: #a7c2f0;\n  border-width: 0 0 2px;\n  background-color: transparent;\n\n  &:focus {\n    border-color: #3650f7;\n  }\n"]))),L=N.c.option(b||(b=Object(z.a)([""]))),G=N.c.input(x||(x=Object(z.a)(["\n  font-size: 16px;\n"]))),K=N.c.div(p||(p=Object(z.a)(["\n  margin: 24px 0;\n"]))),W=N.c.button(u||(u=Object(z.a)(["\n  cursor: pointer;\n  font-size: 18px;\n  border: none;\n  border-radius: 24px;\n  padding: 8px 16px;\n  background-color: #191f43e6;\n  color: white;\n\n  &:hover {\n    background-color: #191f43;\n  }\n"]))),X=function(e){var n=e.getPredict,t=Object(w.useState)(!1),r=Object(B.a)(t,2),c=r[0],i=r[1],o=Object($.a)(),a=o.register,s=o.handleSubmit,l=function(e){return parseFloat(e.replace("R$ ","").replace(" m2","").replace(",","."))},d=function(e){return"true"===e};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(Q,{children:["Preencha os dados abaixo ",Object(M.jsx)("br",{}),"e veja quanto ser\xe1 o valor ",Object(M.jsx)("br",{}),"do aluguel"]}),Object(M.jsxs)(U,{id:"form",onSubmit:s((function(e){i(!0);var t={numAttr:[l(e.area||"0"),""===e.rooms?0:parseFloat(e.rooms),""===e.bathroom?0:parseFloat(e.bathroom),""===e.parkingSpaces?0:parseFloat(e.parkingSpaces),l(e.hoa||"0"),""===e.floor?0:parseFloat(e.floor),l(e.propertyTax||"0"),l(e.fireInsurance||"0")],catAttr:[e.city,d(e.pet),d(e.furniture)]},r=JSON.stringify(t);n(r)})),children:[Object(M.jsxs)(H,{children:[Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"city",children:"Cidade"}),Object(M.jsxs)(E,Object(P.a)(Object(P.a)({id:"city"},a("city")),{},{children:[Object(M.jsx)(L,{value:"1",children:"S\xe3o Paulo"}),Object(M.jsx)(L,{value:"2",children:"Rio de Janeiro"}),Object(M.jsx)(L,{value:"3",children:"Belo Horizonte"}),Object(M.jsx)(L,{value:"4",children:"Porto Alegre"}),Object(M.jsx)(L,{value:"5",children:"Campinas"})]}))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"rooms",children:"Qtde quartos"}),Object(M.jsx)(G,Object(P.a)({id:"rooms",type:"number",min:"0",step:"1",required:!0},a("rooms")))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"area",children:"\xc1rea"}),Object(M.jsx)(T.a,Object(P.a)({id:"area",allowNegative:!1,decimalSeparator:",",suffix:" m2",required:!0},a("area")))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"fire-insurance",children:"Seguro inc\xeandio"}),Object(M.jsx)(T.a,Object(P.a)({id:"fire-insurance",allowNegative:!1,decimalSeparator:",",prefix:"R$ ",required:!0},a("fireInsurance")))]})]}),Object(M.jsxs)(H,{children:[Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"pet",children:"Aceita pet"}),Object(M.jsxs)(E,Object(P.a)(Object(P.a)({id:"pet"},a("pet")),{},{children:[Object(M.jsx)(L,{value:"true",children:"Sim"}),Object(M.jsx)(L,{value:"false",children:"N\xe3o"})]}))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"rooms",children:"Qtde banheiros"}),Object(M.jsx)(G,Object(P.a)({id:"bathroom",type:"number",min:"0",step:"1",required:!0},a("bathroom")))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"hoa",children:"Condom\xednio"}),Object(M.jsx)(T.a,Object(P.a)({id:"hoa",allowNegative:!1,decimalSeparator:",",prefix:"R$ ",required:!0},a("hoa")))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"property-tax",children:"IPTU"}),Object(M.jsx)(T.a,Object(P.a)({id:"property-tax",allowNegative:!1,decimalSeparator:",",prefix:"R$ ",required:!0},a("propertyTax")))]})]}),Object(M.jsxs)(H,{children:[Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"furniture",children:"Mobiliado"}),Object(M.jsxs)(E,Object(P.a)(Object(P.a)({id:"furniture"},a("furniture")),{},{children:[Object(M.jsx)(L,{value:"false",children:"N\xe3o"}),Object(M.jsx)(L,{value:"true",children:"Sim"})]}))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"rooms",children:"Qtde vagas estac."}),Object(M.jsx)(G,Object(P.a)({id:"parking-spaces",type:"number",min:"0",step:"1",required:!0},a("parkingSpaces")))]}),Object(M.jsxs)(V,{children:[Object(M.jsx)(D,{htmlFor:"floor",children:"Andar"}),Object(M.jsx)(G,Object(P.a)({id:"floor",type:"number",min:"0",step:"1",required:!0},a("floor")))]})]})]}),Object(M.jsx)(K,{children:c&&Object(M.jsx)(J,{})||Object(M.jsx)(W,{type:"submit",form:"form",children:"Mostrar valor!"})})]})},Y=N.c.div(h||(h=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (max-width: 640px) {\n    height: 100vh;\n  }\n"]))),Z=N.c.h1(O||(O=Object(z.a)(["\n  text-align: center;\n  font-size: 36px;\n  color: #191f43;\n"]))),_=N.c.div(m||(m=Object(z.a)(["\n  text-align: center;\n  font-size: 32px;\n  color: #191f43;\n"]))),ee=N.c.button(f||(f=Object(z.a)(["\n  cursor: pointer;\n  font-size: 18px;\n  border: none;\n  border-radius: 24px;\n  padding: 8px 16px;\n  background-color: #191f43e6;\n  color: white;\n  margin-top: 24px;\n\n  &:hover {\n    background-color: #191f43;\n  }\n"]))),ne=function(e){var n=e.rentAmount,t=e.goBack,r=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});return Object(M.jsxs)(Y,{children:[Object(M.jsx)(Z,{children:"Valor do aluguel:"}),Object(M.jsx)(_,{children:r.format(n)}),Object(M.jsx)(ee,{onClick:function(){return t()},children:"Voltar"})]})},te=N.c.div(g||(g=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0 52px;\n\n  @media (max-width: 640px) {\n    margin: 0 16px;\n  }\n"]))),re=N.c.div(v||(v=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 52px;\n\n  @media (max-width: 640px) {\n    margin: 0;\n  }\n"]))),ce=function(){var e=Object(w.useState)(!0),n=Object(B.a)(e,2),t=n[0],r=n[1],c=Object(w.useState)(0),i=Object(B.a)(c,2),o=i[0],a=i[1],s=function(){var e=Object(A.a)(R.a.mark((function e(n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://for-rent.herokuapp.com/predict",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:n})}).then((function(e){return e.json()})).then((function(e){a(e.prediction),r(!1)})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(M.jsx)(te,{children:Object(M.jsx)(re,{children:t?Object(M.jsx)(X,{getPredict:function(e){return s(e)}}):Object(M.jsx)(ne,{rentAmount:o,goBack:function(){return r(!0)}})})})},ie=N.c.div(y||(y=Object(z.a)(["\n  background-color: #f3f6fc;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n\n  @media (max-width: 640px) {\n    height: auto;\n  }\n"]))),oe=function(){return Object(M.jsx)(ie,{children:Object(M.jsx)(ce,{})})};F.a.render(Object(M.jsxs)(S.a.StrictMode,{children:[Object(M.jsx)(q,{}),Object(M.jsx)(oe,{})]}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.19cf9e59.chunk.js.map