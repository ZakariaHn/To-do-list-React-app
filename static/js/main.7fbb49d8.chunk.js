(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),i=a(1),s=a(2),u=a(4),o=a(3),m=a(7),d=function(e){var t=e.list.map((function(t){return c.a.createElement("div",{className:"list"},c.a.createElement("ul",{className:"listing"},c.a.createElement("li",{key:t.id},c.a.createElement("input",{className:"checkbox",type:"checkbox",value:t.done,onChange:function(){e.check(t.id)}}),t.title,c.a.createElement("i",{onClick:function(){e.remove(t.id)}},"\ud83d\uddd1"))))}));return c.a.createElement("ul",null,t)},h=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeHandel=function(e){n.setState({userInput:e.target.value.trim()})},n.add=function(e){e.preventDefault();var t=n.state.userInput;n.setState({userInput:"",list:[].concat(Object(m.a)(n.state.list),[{id:n.state.list.length,title:t,done:!1}])})},n.remove=function(e){var t=n.state.list.filter((function(t){return t.id!==e}));n.setState({list:t})},n.check=function(e){var t=n.state.list.filter((function(t){return t.id===e&&(t.done=!t.done),t}));n.setState({list:t})},n.state={userInput:"",list:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"datafield"},c.a.createElement("div",{className:"heading"},c.a.createElement("h3",null,"To Do")),c.a.createElement("form",{className:"user",onSubmit:this.add},c.a.createElement("input",{type:"text",id:"userText",value:this.state.userInput,onChange:this.changeHandel,placeholder:"type something"}),c.a.createElement("input",{className:"button",type:"submit",value:""})),c.a.createElement(d,{list:this.state.list,remove:this.remove,check:this.check}))))}}]),a}(c.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h,null))}}]),a}(c.a.Component);a(13);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7fbb49d8.chunk.js.map