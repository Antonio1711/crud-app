(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{34:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(26),s=n.n(a),i=(n(34),n(11)),j=n(7),d=n(45),o=n(46),u=n(47),b=n(48),l=n(49),O=n(2),h=function(){return Object(O.jsx)(d.a,{color:"dark",dark:!0,children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(u.a,{href:"/",children:"Cadastro de produtos"}),Object(O.jsx)(b.a,{children:Object(O.jsx)(l.a,{children:Object(O.jsx)(i.b,{className:"btn btn-primary",to:"/add",children:"Adicionar produto"})})})]})})},x=n(14),m=n(29),p=n(12),f=function(e,t){switch(t.type){case"REMOVE_USER":return Object(p.a)(Object(p.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload}))});case"ADD_USER":return Object(p.a)(Object(p.a)({},e),{},{users:[t.payload].concat(Object(m.a)(e.users))});case"EDIT_USER":var n=t.payload,c=e.users.map((function(e){return e.id===n.id?n:e}));return Object(p.a)(Object(p.a)({},e),{},{users:c});default:return e}},v={users:[]},g=Object(c.createContext)(v),E=function(e){var t=e.children,n=Object(c.useReducer)(f,v),r=Object(x.a)(n,2),a=r[0],s=r[1];return Object(O.jsx)(g.Provider,{value:{users:a.users,removeUser:function(e){s({type:"REMOVE_USER",payload:e})},addUser:function(e){s({type:"ADD_USER",payload:e})},editUser:function(e){s({type:"EDIT_USER",payload:e})}},children:t})},y=n(50),C=n(51),S=n(52),U=function(){var e=Object(c.useContext)(g),t=e.users,n=e.removeUser;return Object(O.jsx)(y.a,{className:"mt-4",children:t.length>0?Object(O.jsx)(O.Fragment,{children:t.map((function(e){return Object(O.jsxs)(C.a,{className:"d-flex",children:[Object(O.jsx)("strong",{children:e.name}),Object(O.jsxs)("div",{className:"ml-auto",children:[Object(O.jsx)(i.b,{to:"/edit/".concat(e.id),color:"warning",className:"btn btn-warning mr-1",children:"Editar"}),Object(O.jsx)(S.a,{onClick:function(){return n(e.id)},color:"danger",children:"Excluir"})]})]},e.id)}))}):Object(O.jsx)("h4",{className:"text-center",children:"Sem produtos"})})},D=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)(U,{})]})},R=n(28),N=n(53),F=n(54),_=n(55),k=n(56),w=function(){var e=Object(c.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(c.useContext)(g).addUser,s=Object(j.f)();return Object(O.jsxs)(N.a,{onSubmit:function(e){e.preventDefault();var t={id:Object(R.v4)(),name:n};a(t),s.push("/")},children:[Object(O.jsxs)(F.a,{children:[Object(O.jsx)(_.a,{children:"Produto"}),Object(O.jsx)(k.a,{type:"text",value:n,onChange:function(e){r(e.target.value)},name:"name",placeholder:"Coloque o nome do produto",required:!0})]}),Object(O.jsx)(S.a,{type:"submit",children:"Enviar"}),Object(O.jsx)(i.b,{to:"/",className:"btn btn-danger ml-2",children:"Cancelar"})]})},P=n(17),I=function(e){var t=Object(c.useContext)(g),n=t.editUser,r=t.users,a=Object(c.useState)({id:"",name:""}),s=Object(x.a)(a,2),d=s[0],o=s[1],u=Object(j.f)(),b=e.match.params.id;Object(c.useEffect)((function(){var e=b,t=r.find((function(t){return t.id===e}));o(t)}),[b,r]);return Object(O.jsxs)(N.a,{onSubmit:function(e){e.preventDefault(),n(d),u.push("/")},children:[Object(O.jsxs)(F.a,{children:[Object(O.jsx)(_.a,{children:"Produto"}),Object(O.jsx)(k.a,{type:"text",value:d.name,onChange:function(e){o(Object(p.a)(Object(p.a)({},d),{},Object(P.a)({},e.target.name,e.target.value)))},name:"name",placeholder:"Edite o nome do produto",required:!0})]}),Object(O.jsx)(S.a,{type:"submit",children:"Editar"}),Object(O.jsx)(i.b,{to:"/",className:"btn btn-danger ml-2",children:"Cancelar"})]})},T=(n(43),function(){return Object(O.jsx)("div",{style:{maxWidth:"30rem",margin:"4rem auto"},children:Object(O.jsx)(E,{children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:D}),Object(O.jsx)(j.a,{path:"/add",component:w}),Object(O.jsx)(j.a,{path:"/edit/:id",component:I})]})})})})}),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),q()}},[[44,1,2]]]);
//# sourceMappingURL=main.9f2cc249.chunk.js.map