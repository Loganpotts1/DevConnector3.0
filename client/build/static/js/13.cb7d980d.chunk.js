(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(0),l=n.n(a),c=n(4),r=n(29),o=n(17),u=n(35);function i(){var e=Object(o.b)();return l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav__logo"},l.a.createElement(r.b,{to:"/"},l.a.createElement("i",{className:"fas fa-code"}))),l.a.createElement("ul",{className:"nav__links"},l.a.createElement("li",null,l.a.createElement(r.b,{to:"/profiles"},"Developers")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/posts"},"Posts")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return e(Object(u.d)())},href:"#"},l.a.createElement("i",{className:"fas fa-sign-out-alt"})))),l.a.createElement("button",{className:"btn nav__hamburger",onClick:function(){document.querySelector(".nav__links").classList.toggle("nav__links--active")}},l.a.createElement("i",{className:"fas fa-bars"})))}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=n(32);function b(e){var t=e.component,n=m(e,["component"]),a=Object(o.c)((function(e){return e.auth})),r=a.isAuthenticated,u=a.loading;return l.a.createElement(c.b,n,(function(e){return r?u?l.a.createElement(s.a,null):l.a.createElement(t,e):l.a.createElement(c.a,{to:"/"})}))}var p=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,287))})),f=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,288))})),d=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,279))})),E=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,280))})),h=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,281))})),v=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,282))})),O=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,283))})),y=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,284))}));function j(){return l.a.createElement(a.Fragment,null,l.a.createElement(i,null),l.a.createElement("div",{className:"page__content"},l.a.createElement(c.d,null,l.a.createElement(b,{exact:!0,path:"/profiles",component:f}),l.a.createElement(b,{exact:!0,path:"/profile/:id",component:p}),l.a.createElement(b,{exact:!0,path:"/dashboard",component:d}),l.a.createElement(b,{exact:!0,path:"/edit-profile",component:E}),l.a.createElement(b,{exact:!0,path:"/add-education",component:h}),l.a.createElement(b,{exact:!0,path:"/add-experience",component:v}),l.a.createElement(b,{exact:!0,path:"/posts",component:O}),l.a.createElement(b,{exact:!0,path:"/posts/:id",component:y}))))}}}]);
//# sourceMappingURL=13.cb7d980d.chunk.js.map