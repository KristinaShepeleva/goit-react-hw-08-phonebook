"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[258],{258:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(791),r=n(434),s="Container_container__VVOCq",o=n(184);var c=function(e){var t=e.children;return(0,o.jsx)("div",{className:s,children:t})},i="ContactForm_form__dhl+T",l="ContactForm_label__-cVXI",u="ContactForm_input__Bl93P",m="ContactForm_button__eSwX9",d=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t},h=n(694),p=function(e){return e.contacts.items},_=function(e){return e.filter},f=function(e){return e.isLoading},v=function(e){return e.error},x=function(){var e=(0,r.I0)(),t=(0,r.v9)(p);return(0,o.jsxs)("form",{className:i,onSubmit:function(n){n.preventDefault();var a={id:d(),name:n.target.elements.name.value,phone:n.target.elements.phone.value};return t.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}))?alert("".concat(a.name," is already in contacts")):t.find((function(e){return e.phone===a.phone}))?alert("".concat(a.phone," is already in contacts")):(e((0,h.je)(a)),void n.target.reset())},children:[(0,o.jsxs)("label",{className:l,children:["Name",(0,o.jsx)("input",{className:u,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:l,children:["Number",(0,o.jsx)("input",{className:u,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})},b="ContactList_list__csErn",j="ContactList_item__EZYHO",C="ContactList_button_delete__fgPe0";var g=function(){var e=(0,r.I0)(),t=(0,r.v9)(p),n=(0,r.v9)(_),a=t.filter((function(e){return e.name.toLowerCase().trim().includes(n.toLowerCase().trim())})).sort((function(e,t){return e.name.localeCompare(t.name)}));return(0,o.jsx)("ul",{className:b,children:a.map((function(t){var n=t.id,a=t.name,r=t.phone;return(0,o.jsxs)("li",{className:j,children:[(0,o.jsxs)("p",{children:[a,": ",r]}),(0,o.jsx)("button",{className:C,type:"button",onClick:function(){return e((0,h.xX)(n))},children:"Delete"})]},n)}))})},N="Filter_label__vEd1E",y="Filter_input__N7T3z",w=n(331);var k=function(){var e=(0,r.I0)(),t=(0,r.v9)(_);return(0,o.jsxs)("label",{className:N,children:["Find contacts by name",(0,o.jsx)("input",{className:y,name:"search",type:"text",value:t,onChange:function(t){e((0,w.x)(t.target.value))}})]})};function F(){var e=(0,r.I0)(),t=(0,r.v9)(p),n=(0,r.v9)(f),s=(0,r.v9)(v);return(0,a.useEffect)((function(){e((0,h.yF)())}),[e]),(0,o.jsxs)(c,{children:[(0,o.jsx)("h1",{children:"Phonebook"}),(0,o.jsx)(x,{}),n&&!s&&(0,o.jsx)("b",{children:"Request in progress..."}),(0,o.jsx)("h2",{children:"Contacts"}),t.length>1&&(0,o.jsx)(k,{}),t.length>0?(0,o.jsx)(g,{}):(0,o.jsx)("p",{children:"Your phonebook is empty."})]})}}}]);
//# sourceMappingURL=258.6e8aa9f6.chunk.js.map