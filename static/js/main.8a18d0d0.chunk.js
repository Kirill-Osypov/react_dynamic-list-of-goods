(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),l=n(3),s=n(4),i=n(6),u=n(5),d=(n(12),function(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}),f=function(){return d()},m=function(){return d().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},p=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},y=function(t){var e=t.goods,n=t.typeLoad;return a.a.createElement("ul",{className:n},e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:t.color}},t.name)})))};y.defaultProps={typeLoad:""};var h=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[],typeLoad:""},t.loadAll=function(){f().then((function(e){return t.setState({goods:e,typeLoad:"loadAll"})}))},t.loadFiveFirst=function(){m().then((function(e){return t.setState({goods:e,typeLoad:"load5First"})}))},t.loadRedGoods=function(){p().then((function(e){return t.setState({goods:e,typeLoad:"loadRed"})}))},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.typeLoad;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("div",{className:"container"},a.a.createElement("button",{type:"button",className:"buttonAll",onClick:this.loadAll},"Load All goods"),a.a.createElement("button",{type:"button",className:"button5First",onClick:this.loadFiveFirst},"Load 5 first goods"),a.a.createElement("button",{type:"button",className:"buttonRed",onClick:this.loadRedGoods},"Load red goods"),0!==e.length&&a.a.createElement(y,{goods:e,typeLoad:n})))}}]),n}(o.Component);c.a.render(a.a.createElement(h,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.8a18d0d0.chunk.js.map