(this["webpackJsonpmovies-app-test"]=this["webpackJsonpmovies-app-test"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(16),r=c.n(a),i=(c(24),c(25),c(0)),o=function(){return Object(i.jsx)("nav",{children:Object(i.jsx)("a",{href:"/movies-app-test",className:"brand-logo center",children:"Movies App"})})},j=c(8),l=c(19),d=c(10),b=c(13),u=c.n(b),h=c(17),p=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("b14a88b9e069c9bea180cd6a5ed8b7a4"));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.id,c=e.title,n=e.overview,s=e.release_date;return Object(i.jsx)("div",{id:t,className:"row ",children:Object(i.jsx)("div",{className:"col s12 m6 ",children:Object(i.jsxs)("div",{className:"card blue-grey darken-1 movie",children:[Object(i.jsxs)("div",{className:"card-content white-text",children:[Object(i.jsx)("span",{className:"card-title",children:c}),Object(i.jsxs)("span",{className:"card-title",children:["Release date: ",s]}),Object(i.jsx)("p",{children:n.substr(0,150)+"..."})]}),Object(i.jsx)("div",{className:"card-action",children:Object(i.jsx)(d.b,{onClick:function(){return p(t)},to:"/".concat(t),className:"btn",children:"Read more"})})]})})})},O=function(e){var t=e.movies;return Object(i.jsx)("div",{className:"movies",children:t.map((function(e){return Object(i.jsx)(m,Object(l.a)({},e),e.id)}))})},v=function(e){var t=e.searchMovies,c=Object(n.useState)(""),s=Object(j.a)(c,2),a=s[0],r=s[1];return Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col s12",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"input-field col s12",children:Object(i.jsx)("input",{type:"search",id:"autocomplete-input",className:"validate",value:a,onChange:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t(a)},placeholder:"Type name of the movie in English and press Enter"})})})})})},x=function(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})},f=c(2),N=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(f.g)().id,r=Object(f.f)().goBack;return Object(n.useEffect)((function(){p(a).then((function(e){return s(e)}))}),[a]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("button",{className:"btn left",onClick:r,children:"Go back"}),Object(i.jsxs)("section",{children:[Object(i.jsx)("h1",{children:c.title}),Object(i.jsx)("p",{children:c.overview}),Object(i.jsxs)("span",{children:["Release date: ",c.release_date]}),Object(i.jsxs)("h2",{children:["Film revenue: ",c.revenue]}),Object(i.jsxs)("h2",{children:["Film runtime: ",c.runtime]})]})]})},g="b14a88b9e069c9bea180cd6a5ed8b7a4",y=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(g,"&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return s(e.results)}))}),[]),Object(i.jsxs)("main",{className:"container",children:[Object(i.jsx)(v,{searchMovies:function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(g,"&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return s(e.results)}))}}),Object(i.jsx)(f.a,{path:"/:id",component:N}),c?Object(i.jsx)(O,{movies:c}):Object(i.jsx)(x,{})]})},k=function(){return Object(i.jsx)("footer",{className:"page-footer",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsx)("div",{className:"container",children:"\xa9 2021 Copyright Text"})})})};var w=function(){return Object(i.jsx)(d.a,{basename:"/movies-app-test",children:Object(i.jsx)(f.c,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(f.a,{exact:!0,path:"/",component:y}),Object(i.jsx)(f.a,{path:"/:id",component:N}),Object(i.jsx)(k,{})]})})})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.26047cf4.chunk.js.map