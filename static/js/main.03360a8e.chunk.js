(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},34:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n,c=a(0),s=a.n(c),r=a(15),l=a.n(r),i=(a(31),a(32),a(18)),o=(a(33),a(5)),d=a(44),j=a(45),u=(a(34),a(10)),b=a(1),O=function(t){var e=t.day,a=t.date,n=Object(u.d)((function(t){return t.tasks.tasks.filter((function(t){return t.date===a}))}),u.b);return Object(b.jsxs)("div",{className:"single-day",children:[Object(b.jsx)("div",{children:e}),Object(b.jsx)("div",{className:"tasks-number",children:n.length?Object(b.jsxs)("p",{children:["tasks: ",n.length," "]}):null})]})},h=function(){var t=Object(o.h)(),e=t.monthUrl,a=t.yearUrl,n=Object(o.g)(),s=Object(c.useState)({month:Number(e),year:Number(a)}),r=Object(i.a)(s,2),l=r[0],u=r[1],h=l.month,m=l.year,v=Object(d.a)(new Date(m,h-1)),x=Array.from({length:v},(function(t,e){return{day:e+1}}));return Object(b.jsxs)("div",{className:"month",children:[Object(b.jsxs)("div",{className:"buttons-date-container",children:[Object(b.jsx)("button",{className:"button previous",onClick:function(){var t=h,e=m;1===t?(t=12,e--):t--,u({month:t,year:e}),n.push("/month/".concat(t,"/").concat(e))},children:"previous month"}),Object(b.jsxs)("div",{className:"date-actual",children:[l.month," ",l.year]}),Object(b.jsx)("button",{className:"button next",onClick:function(){var t=h,e=m;12===t?(t=1,e++):t++,u({month:t,year:e}),n.push("/month/".concat(h,"/").concat(m))},children:"next month"})]}),Object(b.jsx)("div",{className:"days-container",children:x.map((function(t,e){return Object(b.jsx)(O,{date:(a=t.day,Object(j.a)(new Date(m,h-1,a),"yyyy-MM-dd")),day:t.day},e);var a}))})]})},m=a(22),v=a(11);a(41);!function(t){t.ADD_TASK="ADD_TASK",t.DELETE_TASK="DELETE_TASK"}(n||(n={}));var x,f=a(46);!function(t){t.OPEN_MODAL="OPEN_MODAL",t.CLOSE_MODAL="CLOSE_MODAL"}(x||(x={}));var p=function(){var t=Object(u.c)(),e=Object(c.useState)({value:"",date:""}),a=Object(i.a)(e,2),s=a[0],r=a[1],l=function(){t({type:x.CLOSE_MODAL})};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("div",{onClick:l,className:"close-modal",children:" "}),Object(b.jsxs)("form",{class:"form",onSubmit:function(e){e.preventDefault();var a,c,r;new Date(s.date);l(),t((a=s.value,c=s.date,r=Object(f.a)(),{type:n.ADD_TASK,payload:{value:a,date:c,key:r}}))},children:[Object(b.jsx)("div",{className:"form-task-value",children:Object(b.jsxs)("label",{children:["Task",Object(b.jsx)("input",{type:"text",value:s.value,onChange:function(t){return r((function(e){return Object(v.a)(Object(v.a)({},e),{},{value:t.target.value})}))}})]})}),Object(b.jsx)("div",{className:"form-task-date",children:Object(b.jsxs)("label",{children:["Date",Object(b.jsx)("input",{type:"date",onChange:function(t){return r((function(e){return Object(v.a)(Object(v.a)({},e),{},{date:t.target.value})}))}})]})}),Object(b.jsx)("button",{className:"button submit",type:"submit",children:" Submit"})]})]})})})},y=function(){var t=Object(u.c)(),e=Object(u.d)((function(t){return t.modal}),u.b).modalVisible;return Object(b.jsxs)("div",{className:"app",children:["Calendar App",Object(b.jsx)(m.a,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/month/:monthUrl/:yearUrl",children:Object(b.jsx)(h,{})}),Object(b.jsx)(o.b,{exact:!0,path:"/",children:Object(b.jsx)(o.a,{to:"/month/09/2021"})})]})}),Object(b.jsx)("button",{class:"button add-task",onClick:function(){return t({type:x.OPEN_MODAL})},children:"Add Task"}),e?Object(b.jsx)(p,{}):null]})},D=a(19),_=a(25),N={tasks:[]},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.ADD_TASK:return console.log(t),{tasks:[].concat(Object(_.a)(t.tasks),[{value:e.payload.value,date:e.payload.date,key:e.payload.key}])};default:return t}},k={modalVisible:!1},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x.OPEN_MODAL:return Object(v.a)(Object(v.a)({},t),{},{modalVisible:!0});case x.CLOSE_MODAL:return Object(v.a)(Object(v.a)({},t),{},{modalVisible:!1});default:return t}},S=Object(D.a)({tasks:E,modal:A}),g=Object(D.b)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u.a,{store:g,children:Object(b.jsx)(y,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.03360a8e.chunk.js.map