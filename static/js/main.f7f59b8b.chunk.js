(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(19),a(2)),i=a(3),s=a(5),u=a(4),h=a(6),m=(a(20),a(13)),f=a(7),g=a(1),p=a.n(g),d=a(8),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={background:"#000",character:"#&~",count:5,size:5,palette:p.a.shuffle(p.a.pick(d)),points:[]},a.createGrid=function(){for(var e=[],t=a.state.count,n=0;n<t;n++)for(var r=0;r<t;r++){var o=t<=1?.5:n/(t-1),c=t<=1?.5:r/(t-1),l=Math.abs(p.a.noise2D(o,c))*a.state.size;e.push({color:p.a.pick(a.state.palette),radius:l,rotation:p.a.noise2D(o,c),position:[o,c]})}return e},a.changePattern=function(){a.setState({points:a.createGrid().filter(function(){return p.a.value()>.5})})},a.changeColor=function(){a.setState({palette:p.a.shuffle(p.a.pick(d))},function(){a.changePattern()})},a.setBackground=function(e){a.setState({background:e.target.value})},a.setCharacter=function(e){a.setState({character:e.target.value})},a.setCount=function(e){a.setState({count:e.target.value},function(){a.changePattern()})},a.setSize=function(e){a.setState({size:e.target.value},function(){a.changePattern()})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.changePattern(),this.drawCanvas()}},{key:"componentDidUpdate",value:function(){this.drawCanvas()}},{key:"drawCanvas",value:function(){var e=this,t=this.myCanvas.getContext("2d"),a=this.myCanvas.width,n=this.myCanvas.height,r=this.state.points;t.fillStyle=this.state.background,t.fillRect(0,0,a,n),r.forEach(function(r){var o=r.color,c=r.position,l=r.radius,i=r.rotation,s=Object(m.a)(c,2),u=s[0],h=s[1],g=Object(f.lerp)(0,a-0,u),p=Object(f.lerp)(0,n-0,h),d=e.state.character.split("");t.save(),t.fillStyle=o,t.font="".concat(l*a,'px "Helvetica"'),t.translate(g,p),t.rotate(i),t.fillText(d[Math.floor(Math.random()*d.length)],0,0),t.restore()})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",{id:"form"},r.a.createElement("legend",{className:"form-group"},r.a.createElement("label",null,"Background "),r.a.createElement("input",{type:"text",value:this.state.background,onChange:this.setBackground})),r.a.createElement("legend",{className:"form-group"},r.a.createElement("label",null,"Character "),r.a.createElement("input",{type:"text",value:this.state.character,onChange:this.setCharacter})),r.a.createElement("legend",{className:"form-group"},r.a.createElement("label",null,"Grid count"),r.a.createElement("input",{type:"number",value:this.state.count,onChange:this.setCount})),r.a.createElement("legend",{className:"form-group"},r.a.createElement("label",null,"Size"),r.a.createElement("input",{type:"number",value:this.state.size,onChange:this.setSize})),r.a.createElement("legend",{className:"form-group"},r.a.createElement("button",{onClick:this.changeColor},"Change color!"))),r.a.createElement("section",{id:"creative"},r.a.createElement("canvas",{ref:function(t){return e.myCanvas=t},height:768,width:1024})))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Random Art Generator")),r.a.createElement("main",null,r.a.createElement(v,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.f7f59b8b.chunk.js.map