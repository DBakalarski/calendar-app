(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a.n(c),r=a(15),l=a.n(r),i=(a(31),a(32),a(18)),o=(a(33),a(5)),d=a(44),j=a(45),u=(a(34),a(10)),b=a(1),O=function(e){var t=e.day,a=e.date,n=Object(u.d)((function(e){return e.tasks.tasks.filter((function(e){return e.date===a}))}),u.b);return Object(b.jsxs)("div",{className:"single-day",children:[Object(b.jsx)("div",{children:t}),Object(b.jsx)("div",{className:"tasks-number",children:n.length?Object(b.jsxs)("p",{children:["tasks: ",n.length," "]}):null})]})},h=function(){var e=Object(o.h)(),t=e.monthUrl,a=e.yearUrl,n=Object(o.g)(),s=Object(c.useState)({month:Number(t),year:Number(a)}),r=Object(i.a)(s,2),l=r[0],u=r[1],h=l.month,m=l.year,v=Object(d.a)(new Date(m,h-1)),x=Array.from({length:v},(function(e,t){return{day:t+1}}));return Object(b.jsxs)("div",{className:"month",children:[Object(b.jsxs)("div",{className:"buttons-date-container",children:[Object(b.jsx)("button",{className:"button previous",onClick:function(){var e=h,t=m;1===e?(e=12,t--):e--,u({month:e,year:t}),n.push("/month/".concat(e,"/").concat(t))},children:"previous month"}),Object(b.jsxs)("div",{className:"date-actual",children:[l.month," ",l.year]}),Object(b.jsx)("button",{className:"button next",onClick:function(){var e=h,t=m;12===e?(e=1,t++):e++,u({month:e,year:t}),n.push("/month/".concat(h,"/").concat(m))},children:"next month"})]}),Object(b.jsx)("div",{className:"days-container",children:x.map((function(e,t){return Object(b.jsx)(O,{date:(a=e.day,Object(j.a)(new Date(m,h-1,a),"yyyy-MM-dd")),day:e.day},t);var a}))})]})},m=a(22),v=a(11);a(41);!function(e){e.ADD_TASK="ADD_TASK",e.DELETE_TASK="DELETE_TASK"}(n||(n={}));var x,p=a(46);!function(e){e.OPEN_MODAL="OPEN_MODAL",e.CLOSE_MODAL="CLOSE_MODAL"}(x||(x={}));var f=function(){var e=Object(u.c)(),t=Object(c.useState)({value:"",date:""}),a=Object(i.a)(t,2),s=a[0],r=a[1],l=function(){e({type:x.CLOSE_MODAL})};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("div",{onClick:l,className:"close-modal",children:" "}),Object(b.jsxs)("form",{class:"form",onSubmit:function(t){t.preventDefault();var a,c,r;new Date(s.date);l(),e((a=s.value,c=s.date,r=Object(p.a)(),{type:n.ADD_TASK,payload:{value:a,date:c,key:r}}))},children:[Object(b.jsx)("div",{className:"form-task-value",children:Object(b.jsxs)("label",{children:["Task",Object(b.jsx)("input",{type:"text",value:s.value,onChange:function(e){return r((function(t){return Object(v.a)(Object(v.a)({},t),{},{value:e.target.value})}))}})]})}),Object(b.jsx)("div",{className:"form-task-date",children:Object(b.jsxs)("label",{children:["Date",Object(b.jsx)("input",{type:"date",onChange:function(e){return r((function(t){return Object(v.a)(Object(v.a)({},t),{},{date:e.target.value})}))}})]})}),Object(b.jsx)("button",{className:"button submit",type:"submit",children:" Submit"})]})]})})})},y=function(){var e=Object(u.c)(),t=Object(u.d)((function(e){return e.modal}),u.b).modalVisible;return Object(b.jsxs)("div",{className:"app",children:["Calendar App",Object(b.jsx)(m.a,{basename:"/calendar-app",children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/month/:monthUrl/:yearUrl",children:Object(b.jsx)(h,{})}),Object(b.jsx)(o.b,{exact:!0,path:"/",children:Object(b.jsx)(o.a,{to:"/month/09/2021"})})]})}),Object(b.jsx)("button",{class:"button add-task",onClick:function(){return e({type:x.OPEN_MODAL})},children:"Add Task"}),t?Object(b.jsx)(f,{}):null]})},D=a(19),_=a(25),N={tasks:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_TASK:return console.log(e),{tasks:[].concat(Object(_.a)(e.tasks),[{value:t.payload.value,date:t.payload.date,key:t.payload.key}])};default:return e}},k={modalVisible:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.OPEN_MODAL:return Object(v.a)(Object(v.a)({},e),{},{modalVisible:!0});case x.CLOSE_MODAL:return Object(v.a)(Object(v.a)({},e),{},{modalVisible:!1});default:return e}},S=Object(D.a)({tasks:E,modal:A}),g=Object(D.b)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u.a,{store:g,children:Object(b.jsx)(y,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bbd8b1d3.chunk.js.map