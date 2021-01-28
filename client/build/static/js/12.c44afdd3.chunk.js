(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12],{286:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t(90),r=t(0),c=t.n(r),o=t(4),s=t(17),i=t(10),l=t.n(i),m=t(14),u=t(30),d=t(2),p=t(35),f=t(18);function h(e){var a=e.login,t=Object(s.c)((function(e){return e.auth.isAuthenticated})),r=Object(s.b)(),i=c.a.useState({name:"",email:"",password:"",password2:""}),h=Object(n.a)(i,2),b=h[0],g=h[1],E=b.name,v=b.email,_=b.password,w=b.password2;if(t)return c.a.createElement(o.a,{to:"/dashboard"});var N=function(e){return g(Object(d.a)(Object(d.a)({},b),{},Object(u.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(m.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),r(_!==w?Object(f.a)("Passwords do not match","danger"):Object(p.e)({name:E,email:v,password:_}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"login"},c.a.createElement("h1",{className:"login__heading"},"Create an Account"),c.a.createElement("form",{className:"form",onSubmit:y},c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:E,onChange:N,required:!0})),c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:v,onChange:N})),c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:_,minLength:"6",onChange:N})),c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:w,minLength:"6",onChange:N})),c.a.createElement("button",{type:"submit",className:"btn btn--login form__submit form__submit--center",onChange:N},"Submit ",c.a.createElement("i",{className:"fa fa-chevron-right"}))),c.a.createElement("div",{className:"line"}),c.a.createElement("p",{className:"login__switch"},"Already have an account?",c.a.createElement("a",{href:"#!",onClick:a}," Sign In")))}function b(e){var a=e.register,t=Object(s.c)((function(e){return e.auth})).isAuthenticated,r=Object(s.b)(),i=c.a.useState({email:"",password:""}),f=Object(n.a)(i,2),h=f[0],b=f[1],g=h.email,E=h.password;if(t)return c.a.createElement(o.a,{to:"/dashboard"});var v=function(e){return b(Object(d.a)(Object(d.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))},_=function(){var e=Object(m.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),r(Object(p.c)({email:g,password:E}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("section",{className:"login"},c.a.createElement("h1",{className:"login__heading"},"Log Into Your Account"),c.a.createElement("form",{className:"form",onSubmit:_},c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:g,onChange:v})),c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:E,minLength:"6",onChange:v})),c.a.createElement("button",{type:"submit",className:"btn btn--login form__submit form__submit--center",onChange:v},"Login ",c.a.createElement("i",{className:"fa fa-chevron-right"}))),c.a.createElement("div",{className:"line"}),c.a.createElement("p",{className:"login__switch"},"Don't have an account?",c.a.createElement("a",{href:"#!",onClick:a}," Sign Up")))}function g(){var e=Object(s.c)((function(e){return e.auth})).isAuthenticated,a=Object(r.useState)("Login"),t=Object(n.a)(a,2),i=t[0],l=t[1];return e?c.a.createElement(o.a,{to:"/dashboard"}):c.a.createElement("main",{className:"landing"},c.a.createElement("section",{className:"landing__inner"},c.a.createElement("h2",{className:"codelink"},c.a.createElement("i",{className:"fas fa-code"})," ","Code",c.a.createElement("span",null,"Link")),c.a.createElement("div",{className:"landing__main"},"Register"===i?c.a.createElement(h,{login:function(){return l("Login")}}):c.a.createElement(b,{register:function(){return l("Register")}}))),c.a.createElement("aside",{className:"landing__hero"}))}},90:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(34);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==s.return||s.return()}finally{if(r)throw c}}return t}}(e,a)||Object(n.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=12.c44afdd3.chunk.js.map