(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{120:function(t,e,a){"use strict";a.d(e,"a",(function(){return y}));var n=a(90),r=a(0),s=a.n(r),c=a(17),o=a(95),u=a(170),p=a(171),i=a(174),l=a(130),m=(a(175),a(176),a(99)),f=Object(p.a)(),d=Object(i.a)(),b=d.InlineToolbar,v=[d,f];function y(t){var e=t.selected,a=void 0!==e&&e,p=t.postId,i=Object(c.b)(),d=Object(r.useState)(o.EditorState.createEmpty()),y=Object(n.a)(d,2),h=y[0],E=y[1];return s.a.createElement("form",{className:"form",onSubmit:function(t){return function(t){var e=JSON.stringify(Object(o.convertToRaw)(h.getCurrentContent()));i(a?Object(m.a)(p,{text:e}):Object(m.b)({text:e})),E(o.EditorState.createEmpty()),t.preventDefault()}(t)}},s.a.createElement("div",{className:"form__group"},s.a.createElement(u.a,{editorState:h,onChange:function(t){return E(t)},plugins:v,placeholder:"type here..."}),s.a.createElement(b,null,(function(t){return s.a.createElement(r.Fragment,null,s.a.createElement(l.a,t),s.a.createElement(l.c,t),s.a.createElement(l.d,t),s.a.createElement(f.LinkButton,t))}))),s.a.createElement("div",{className:"form__submit form__submit--right"},s.a.createElement("input",{type:"submit",className:"btn btn--primary",value:"Submit"})))}},131:function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var n=a(90),r=a(0),s=a.n(r),c=a(17),o=a(95),u=a(178),p=a(177),i=a.n(p),l=a(29),m=a(94),f=a(99),d=a(98),b=a.n(d);function v(t){var e=t.selected,a=void 0!==e&&e,p=t.comment,d=void 0!==p&&p,v=t.postId,y=void 0===v?null:v,h=t.post,E=h._id,g=h.text,_=h.name,O=h.avatar,j=h.user,x=h.likes,k=h.comments,N=h.date,w=Object(u.a)(Object(o.convertFromRaw)(JSON.parse(g))),C=Object(c.c)((function(t){return t})).auth,T=Object(c.b)(),S=Object(r.useState)(x&&x.some((function(t){return t.user===C.user._id}))),I=Object(n.a)(S,2),D=I[0],F=I[1];return s.a.createElement("section",{className:"post ".concat(a?"post--selected":d&&"post--comment")},s.a.createElement("header",{className:"post__header"},s.a.createElement(l.b,{className:"post__user",to:"/profile/".concat(j)},O.length>0?s.a.createElement("img",{src:O,alt:"avatar"}):s.a.createElement("img",{src:b.a,alt:"Guest Avatar"}),s.a.createElement("p",null,_)),s.a.createElement("p",{className:"post__date"},"Posted on ",Object(m.a)(N,!0))),s.a.createElement("p",{className:"post__text",dangerouslySetInnerHTML:{__html:i.a.sanitize(w)}}),!a&&s.a.createElement("aside",{className:"post__actions"},!d&&s.a.createElement(r.Fragment,null,s.a.createElement("button",{onClick:function(){T(Object(f.g)(E)),F(!D)},className:"btn btn--tertiary post__likes ".concat(D&&"post__likes--active")},s.a.createElement("i",{className:"fas fa-thumbs-up"}),s.a.createElement("span",null,x.length>0&&s.a.createElement("sup",{className:"post__likes-count"},x.length))),s.a.createElement(l.b,{to:"/posts/".concat(E),className:"btn btn--tertiary post__discussion"},"Comments",s.a.createElement("span",null,k.length>0&&s.a.createElement("sup",{className:"post__comment-count"},k.length)))),!C.loading&&j===C.user._id&&s.a.createElement("button",{onClick:function(){T(d?Object(f.c)(y,E):Object(f.d)(E))},type:"button",className:"btn btn--tertiary post__delete"},s.a.createElement("i",{className:"fas fa-times"}))))}},283:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return i}));var n=a(0),r=a.n(n),s=a(17),c=a(99),o=a(32),u=a(120),p=a(131);function i(){var t=Object(s.c)((function(t){return t})).post,e=t.posts,a=t.loading,i=Object(s.b)();return Object(n.useEffect)((function(){i(Object(c.e)())}),[]),a?r.a.createElement(o.a,null):r.a.createElement("main",{className:"posts"},r.a.createElement("h1",{className:"posts__heading"},"Posts"),r.a.createElement(u.a,null),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"posts__container"},e.map((function(t){return r.a.createElement(p.a,{key:t._id,post:t})}))))}},94:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(30);function r(t){var e,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Intl.DateTimeFormat("en",(e={month:"long"},Object(n.a)(e,a&&"day","numeric"),Object(n.a)(e,"year","numeric"),e));return r.format(new Date(t))}},98:function(t,e,a){t.exports=a.p+"static/media/CodeLink_Guest_Icon.aa05132f.png"},99:function(t,e,a){"use strict";a.d(e,"f",(function(){return p})),a.d(e,"e",(function(){return i})),a.d(e,"g",(function(){return l})),a.d(e,"a",(function(){return m})),a.d(e,"c",(function(){return f})),a.d(e,"b",(function(){return d})),a.d(e,"d",(function(){return b}));var n=a(10),r=a.n(n),s=a(14),c=a(12),o=a(18),u=a(1),p=function(t){return function(){var e=Object(s.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/posts/".concat(t));case 3:n=e.sent,a({type:u.h,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:u.p,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},i=function(){return function(){var t=Object(s.a)(r.a.mark((function t(e){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/posts");case 3:a=t.sent,e({type:u.i,payload:a.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e({type:u.p,payload:{msg:t.t0.response.statusText,status:t.t0.response.status}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},l=function(t){return function(){var e=Object(s.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.put("posts/like/".concat(t));case 3:n=e.sent,a({type:u.v,payload:{likes:n.data,postId:t}}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a({type:u.p,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},m=function(t,e){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.a.post("/posts/comment/".concat(t),e);case 3:s=a.sent,console.log(t,e),n({type:u.b,payload:s.data}),n(Object(o.a)("Comment Created","success")),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:u.p,payload:{msg:a.t0.response.statusText,status:a.t0.response.status}});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(t){return a.apply(this,arguments)}}()},f=function(t,e){return function(){var a=Object(s.a)(r.a.mark((function a(n){var s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c.a.delete("/posts/comment/".concat(t,"/").concat(e));case 3:s=a.sent,n({type:u.f,payload:s.data}),n(Object(o.a)("Comment Deleted","danger")),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),n({type:u.p,payload:{msg:a.t0.response.statusText,status:a.t0.response.status}});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(t){return a.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(s.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,c.a.post("/posts",t);case 4:n=e.sent,a({type:u.c,payload:n.data}),a(Object(o.a)("Post Created","success")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:u.p,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},b=function(t){return function(){var e=Object(s.a)(r.a.mark((function e(a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.delete("/posts/".concat(t));case 3:a(Object(o.a)("Post Deleted","danger")),a({type:u.g,payload:t}),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),(n=e.t0.response.data.errors)&&n.forEach((function(t){return a(Object(o.a)(t.msg,"danger"))})),a({type:u.p,payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=5.874acc8c.chunk.js.map