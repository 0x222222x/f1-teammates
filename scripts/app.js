(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{315:function(t,e,n){"use strict";n.r(e);var i=n(317),r=n.n(i),a=n(316),s=a.sessions.FP1,o=a.sessions.FP2,c=a.sessions.FP3,u=a.sessions.Q1,h=a.sessions.Q2,l=a.sessions.Q3,d=a.sessions.RACE,f=new Map;f.set(a.teams.ALFA_ROMEO,"#9b0000"),f.set(a.teams.FERRARI,"#dc0000"),f.set(a.teams.HAAS,"#bd9e57"),f.set(a.teams.MCLAREN,"#ff8700"),f.set(a.teams.MERCEDES,"#00d2be"),f.set(a.teams.RACING_POINT,"#f596c8"),f.set(a.teams.RED_BULL,"#1e41ff"),f.set(a.teams.RENAULT,"#fff500"),f.set(a.teams.TORO_ROSSO,"#469bff"),f.set(a.teams.WILLIAMS,"#FFFFFF");var v=new Map;v.set(s,"Practice 1"),v.set(o,"Practice 2"),v.set(c,"Practice 3"),v.set(u,"Qualifying 1"),v.set(h,"Qualifying 2"),v.set(l,"Qualifying 3"),v.set(d,"Race");var g="#393939",p="#4E4E4E",m="#919191",y="#7A7A7A",w="#444444",x="#222222",b="#1A1A1A",S="#1A1A1A",M="'Open Sans'",k=10,T=10,A=14,E={NORMAL:"normal",INVERTED:"inverted"},R=(Math.PI,Math.PI/2),L=(Math.PI,Math.PI,Math.PI,Math.PI,function(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],o=!(arguments.length>7&&void 0!==arguments[7])||arguments[7];if(s&&t<e)return i;if(o&&t>n)return r;var c=(t-e)/(n-e),u=c*(r-i)+i;return a?Math.round(u):u}),D=n(121),C=n.n(D),O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=C.a.items.get("drivers");return n.items.find((function(t){return t.id===e||t.uuid===e}))},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=C.a.items.get("teams");return n.items.find((function(t){return t.id===e||t.slug===e}))},N=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.event;if((t=n.sessions.find((function(t){return"Race"===t.session})))||(t=n.sessions[n.sessions.length-1]),t){var i=[];t.details.forEach((function(t){i.push(O({id:t.driver}))})),i.sort((function(t,e){return t.lastName>e.lastName?1:-1})),n.driverA=i[0],n.driverB=i[1]}},P=function(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.event,r=0,a=0,s=0,o=1/0,c=-1/0,u=i.sessions.filter((function(t){return"Race"!==t.session}));u.forEach((function(e){e.details.forEach((function(e){(t=e.gap.timeToLead)&&(o>t&&(o=t),c<t&&(c=t),a+=t,r++)}))})),e=~~(a/r)/1e3,o=0,c=Math.min(Math.max(Math.ceil(c/1e3),o+2),4);var h=i.sessions.find((function(t){return"Race"===t.session}));h&&h.details.forEach((function(t){"CLA"===t.classifiedStatus&&(s=Math.max(s,t.gap.lapsToLead))})),s++,i.gap={min:o,max:c,avg:e,laps:s}},j=(n(321),function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=String(t),i=0;i<e;i++)t<Math.pow(10,i+1)&&t>-1&&(n="0".concat(n));return n}),F=function(t){return"".concat(t,1===t?" LAP":" LAPS")},Y=function(t,e){var n=e.row,i=e.keys,r=e.tick,a=e.title,s=e.label,o=e.margin,c={x:s.width+o.left,y:t*n.height+a.height+r.height+o.top,width:n.width,height:n.height};return i[t]===d&&(c.y+=r.height),c},_=function(t,e){if(!t||!t.details)return"N/A";var n,i,r,a,s,o=t.details.find((function(t){return t.driver===e.id}));return o&&o.time?"CLA"!==o.classifiedStatus?o.classifiedStatus:o.gap.lapsToLead>0?F(o.gap.lapsToLead):(n=o.gap.timeToLead,i=Math.floor(n/1e3),r=Math.floor(i/60),Math.floor(r/60),a=Math.floor(n%1e3),s="",s=i>60?"".concat(s).concat(r%60,":").concat(j(i%60)):"".concat(s).concat(i%60),s="".concat(s,".").concat(j(a,2))):"N/A"},H=function(t,e){var n=!1;return t.x>e.x&&t.x<e.x+e.width&&t.y>e.y&&t.y<e.y+e.height&&(n=!0),n};function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function U(t,e,n){return e&&B(t.prototype,e),n&&B(t,n),t}var G=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e.data,i=e.index,r=e.team,a=e.canvas;this.data=n,this.index=i,this.team=r,this.canvas=a,this.chart={keys:[s,o,c,u,h,l,d],row:{width:380,height:20},tick:{height:20,margin:5},dash:{height:2},label:{width:50,margin:10},event:{width:30,margin:10},title:{height:20,margin:10},bar:{height:10},margin:{left:0,right:0,top:20,bottom:20},highlight:-1},this.initData()}return U(t,[{key:"width",get:function(){var t=this.chart,e=t.row,n=(t.tick,t.label),i=(t.title,t.event),r=t.margin;return e.width+n.width+i.width+r.left+r.right}},{key:"height",get:function(){var t=this.chart,e=t.row,n=t.keys,i=t.tick,r=(t.label,t.title),a=(t.event,t.margin);return e.height*n.length+2*i.height+r.height+a.top+a.bottom}}]),U(t,[{key:"initData",value:function(){var t=this.data.sessions.find((function(t){return"Race"===t.session}));if(t){O({id:t.details[0].driver}),O({id:t.details[1].driver});var e=[];t.details.forEach((function(t){e.push(O({id:t.driver}))})),e.sort((function(t,e){return t.lastName>e.lastName?1:-1})),this.data.driverA=e[0],this.data.driverB=e[1]}}},{key:"update",value:function(t,e){this.x=t,this.y=e}},{key:"draw",value:function(t){this.drawGrid(t),this.drawBars(t),this.drawTicks(t),this.drawTicks(t,!0),this.drawEvent(t),this.drawTitle(t),this.drawInfo(t)}},{key:"drawGrid",value:function(t){var e=this;this.chart.keys.forEach((function(n,i){return e.drawRow(t,i)}))}},{key:"drawBars",value:function(t){var e=this;this.chart.keys.forEach((function(n,i){return e.drawBar(t,i)}))}},{key:"drawRow",value:function(t,e){var n,i,r,a=this.chart,s=a.row,o=a.keys,c=(a.tick,a.title,a.label),u=(a.margin,Y(e,this.chart));n=u.x,i=u.y,t.save(),t.translate(n,i),t.strokeStyle=g,t.beginPath(),t.moveTo(0,0),t.lineTo(s.width,0),t.stroke(),t.beginPath(),t.moveTo(0,s.height),t.lineTo(s.width,s.height),t.stroke(),n=0,t.strokeStyle=p,t.beginPath(),t.moveTo(n,0),t.lineTo(n,s.height),t.stroke(),n=0+.5*s.width,t.beginPath(),t.moveTo(n,0),t.lineTo(n,s.height),t.stroke(),n=0+s.width,t.beginPath(),t.moveTo(n,0),t.lineTo(n,s.height),t.stroke(),n=-c.margin,i=.5*s.height,r=o[e],t.fillStyle=m,t.textAlign="right",t.textBaseline="middle",t.font="".concat(k,"px ").concat(M),t.fillText(r,n,i),t.restore()}},{key:"drawBar",value:function(t,e){var n,i,r,a,s,o,c,u=this.chart,h=u.row,l=u.keys,g=u.tick,p=u.title,m=u.label,y=u.bar,x=u.margin,b=this.data,S=b.gap,M=b.gapType,k=l[e]===d;n=m.width+x.left,i=e*h.height+p.height+g.height+.5*(h.height-y.height)+x.top,k&&(i+=g.height);var T=v.get(l[e]),A=this.data.sessions.find((function(t){return t.session===T}));if(A){var R=this.data.driverA,D=this.data.driverB;t.save(),t.translate(n,i),o=c=0,(r=A.details.find((function(t){return t.driver===R.id})))&&r.time&&(a=r.gap.timeToLead,o=L(a,1e3*S.min,1e3*S.max,0,.5*h.width),k&&(a=r.gap.timeToLead,r.gap.lapsToLead>0&&(a=r.time-r.laps*A.leaderAvgLap),r.gap.lapsToLead>3&&(a=A.leaderTime-r.time),o=L(a,0,S.laps*A.leaderAvgLap,0,.5*h.width),"CLA"!==r.classifiedStatus&&M!==E.INVERTED&&(o=0))),(r=A.details.find((function(t){return t.driver===D.id})))&&r.time&&(s=r.gap.timeToLead,c=L(s,1e3*S.min,1e3*S.max,0,.5*h.width),k&&(s=r.gap.timeToLead,r.gap.lapsToLead>0&&(s=r.time-r.laps*A.leaderAvgLap),r.gap.lapsToLead>3&&(s=A.leaderTime-r.time),c=L(s,0,S.laps*A.leaderAvgLap,0,.5*h.width),"CLA"!==r.classifiedStatus&&M!==E.INVERTED&&(c=0))),void 0===a&&M===E.INVERTED&&(o=.5*h.width),void 0===s&&M===E.INVERTED&&(c=.5*h.width),void 0===a&&(a=1e3*S.max),void 0===s&&(s=1e3*S.max),t.fillStyle=a<=s?f.get(this.team.id):w,M===E.INVERTED?t.fillRect(o,0,.5*h.width-o,y.height):(0===a&&(o=1),o&&t.fillRect(.5*h.width-o,0,o,y.height)),t.fillStyle=a>=s?f.get(this.team.id):w,M===E.INVERTED?t.fillRect(.5*h.width,0,.5*h.width-c,y.height):(0===s&&(c=1),c&&t.fillRect(.5*h.width,0,c,y.height)),t.restore()}}},{key:"drawTicks",value:function(t,e){var n,i,r,a,s=this.chart,o=s.row,c=s.keys,u=s.label,h=s.tick,l=s.title,f=s.dash,v=s.margin,g=this.data,m=g.gap,w=g.gapType,x=this.canvas.scale>2?5:3;m.interval=m.max-m.min;var b=m.interval/(x-1),S=2*x-1;(n=u.width+v.left,i=h.height+l.height+v.top,e)&&(i+=c.findIndex((function(t){return t===d}))*o.height+h.height);t.save(),t.translate(n,i);for(var k=0;k<S;k++)a=m.max-b*k,k>=x&&(a=Math.abs(m.min+b*(x-k-1))),w===E.INVERTED&&(a=m.min+b*k,k>=x&&(a=m.max+b*(x-k-1))),n=b*k*o.width*.5/m.interval,r=a.toFixed(1),e&&(r=a===m.max?F(m.laps):a===m.min?"0.0":""),t.fillStyle=y,t.textAlign="center",t.textBaseline="bottom",t.font="".concat(T,"px ").concat(M," "),t.fillText(r,n,-h.margin),t.strokeStyle=p,t.beginPath(),t.moveTo(n,0),t.lineTo(n,-f.height),t.stroke();t.restore()}},{key:"drawEvent",value:function(t){var e,n,i,r=this.chart,a=r.row,s=r.keys,o=r.label,c=r.tick,u=r.title,h=r.margin,l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,n=C.a.items.get("calendar");return n.items.find((function(t){return t.id===e}))}({id:this.data.event});e=o.width+o.margin+a.width+h.left,n=c.height+u.height+.5*(s.length-1)*a.height+h.top,i=l.country.toUpperCase(),t.save(),t.translate(e,n),t.rotate(R),t.fillStyle=m,t.textAlign="center",t.textBaseline="alphabetic",t.font="".concat(k+1,"px ").concat(M),t.fillText(i,0,0),t.restore()}},{key:"drawTitle",value:function(t){var e,n,i,r=this.chart,a=r.row,s=r.label,o=r.title,c=r.margin;this.data.driverA&&(e=s.width+.25*a.width+c.left,n=o.height-o.margin+c.top,t.save(),t.translate(e,n),t.fillStyle=f.get(this.team.id),t.textAlign="center",t.textBaseline="alphabetic",t.font="700 ".concat(A,"px ").concat(M),i=this.data.driverA.lastName.toUpperCase(),a.width<=250&&(i=this.data.driverA.initials),t.fillText(i,0,0),i=this.data.driverB.lastName.toUpperCase(),a.width<=250&&(i=this.data.driverB.initials),t.fillText(i,.5*a.width,0),t.restore())}},{key:"drawHighlight",value:function(t){if(!(this.chart.highlight<0)){var e=Y(this.chart.highlight,this.chart);t.fillStyle=b,t.fillRect(e.x,e.y,e.width,e.height)}}},{key:"drawInfo",value:function(t){if(!(this.chart.highlight<0)){var e=Y(this.chart.highlight,this.chart),n=v.get(this.chart.keys[this.chart.highlight]),i=this.data.sessions.find((function(t){return t.session===n}));if(i){var r,a,s,o;t.textBaseline="middle",t.font="".concat(k,"px ").concat(M),o=_(i,this.data.driverA),r=e.x+10,a=e.y+.5*e.height+1,s=(~~t.measureText(o).width||0)+20,t.strokeStyle=p,t.fillStyle=S,t.beginPath(),t.rect(e.x+2,e.y+2,s-2,e.height-4),t.fill(),t.fillStyle=m,t.textAlign="left",t.fillText(o,r,a),o=_(i,this.data.driverB),r=e.x+e.width-10-2,s=(~~t.measureText(o).width||0)+20+1,t.strokeStyle=p,t.fillStyle=S,t.beginPath(),t.rect(e.x+e.width-s,e.y+2,s-2,e.height-4),t.fill(),t.fillStyle=m,t.textAlign="right",t.fillText(o,r,a)}}}},{key:"mousemove",value:function(t){var e=H(t,this);if(!e&&-1!==this.chart.highlight)return this.chart.highlight=-1,void this.canvas.drawSingle(this.index);for(var n={x:t.x-this.x,y:t.y-this.y},i=0;i<this.chart.keys.length;i++){var r=Y(i,this.chart);if(e=H(n,r)){this.chart.highlight!==i&&(this.chart.highlight=i,this.canvas.drawSingle(this.index));break}}e||-1===this.chart.highlight||(this.chart.highlight=-1,this.canvas.drawSingle(this.index))}}]),t}();function z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.app=e,this.scale=3,this.initCanvas()}var e,n,i;return e=t,(n=[{key:"init",value:function(){var t=this;this.intiGraph(),setTimeout((function(){return t.resize()}),500)}},{key:"initCanvas",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d",{alpha:!1})}},{key:"intiGraph",value:function(){this.graphs=[];for(var t=0;t<this.app.data.length;t++){var e=t,n=this.app.data[t],i=this.app.team;n.gapType=this.app.gapType;var r=new G({data:n,index:e,team:i,canvas:this});this.graphs.push(r)}}},{key:"update",value:function(){this.graphs.forEach((function(t){return t.update()}))}},{key:"draw",value:function(){var t=this,e=this.graphs[0].width+0,n=this.graphs[0].height+0,i=Math.min(this.graphs.length,~~((window.innerWidth-80)/e)),r=Math.ceil(this.graphs.length/i),a=i*e,s=r*n,o=window.devicePixelRatio;this.canvas.height=s*o,this.ctx.save(),this.ctx.scale(o,o),this.ctx.fillStyle=x,this.ctx.fillRect(0,0,window.innerWidth,this.canvas.height),this.graphs.forEach((function(r,s){var o=e*(s%i)+.5*(window.innerWidth-a)-15,c=n*~~(s/i);t.ctx.save(),t.ctx.translate(.5+~~o,.5+~~c),r.update(o,c),r.draw(t.ctx),t.ctx.restore()})),this.ctx.restore()}},{key:"drawSingle",value:function(t){var e=window.devicePixelRatio,n=this.graphs.find((function(e){return e.index===t}));this.ctx.fillStyle=x,this.ctx.fillRect(n.x,n.y,n.width,n.height),this.ctx.save(),this.ctx.scale(e,e),this.ctx.translate(.5+~~n.x,.5+~~n.y),n.draw(this.ctx),this.ctx.restore()}},{key:"resize",value:function(){var t=window.innerWidth,e=window.innerHeight,n=window.devicePixelRatio;this.canvas.width=t*n,this.canvas.height=e*n,this.updateScale(this.scale),this.update(),this.draw(),this.canvas.style.width="".concat(t,"px"),this.canvas.style.height="".concat(this.canvas.height/n,"px")}},{key:"updateScale",value:function(t){var e,n,i;switch(e=500,n=30,window.innerWidth<500&&(t=1),parseInt(t)){case 0:e=160,n=16;break;case 1:e=200,n=16;break;case 2:e=256,n=18;break;case 3:e=340,n=20;break;case 4:e=480,n=24}i=.5*n,this.graphs.forEach((function(t){t.chart.row.width=e,t.chart.row.height=n,t.chart.bar.height=i}))}},{key:"mousemove",value:function(t){this.graphs&&(t.x+=window.pageXOffset-this.canvas.offsetLeft,t.y+=window.pageYOffset-this.canvas.offsetTop,this.graphs.forEach((function(e){e.mousemove(t)})))}}])&&z(e.prototype,n),i&&z(e,i),t}();function Q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var $=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.app=e,this.el=document.querySelector(".ui"),this.elSelect=this.el.querySelector(".select-team"),this.elScale=this.el.querySelector(".range-scale"),this.elGap=this.el.querySelector(".toggle-gap"),this.initTeamSelect(),this.initScaleRange(),this.initToggleGap(),this.styleTeamSelect()}var e,n,i;return e=t,(n=[{key:"initTeamSelect",value:function(){for(var t in a.teams){var e=a.teams[t],n=I({id:e}),i=document.createElement("option");i.value=n.slug,i.innerText=n.name,i.selected=n.slug===this.app.team.slug,this.elSelect.appendChild(i)}this.elSelect.addEventListener("change",this.onTeamChange.bind(this))}},{key:"initScaleRange",value:function(){this.elScale.min=0,this.elScale.max=4,this.elScale.value=3,this.elScale.step=1,this.elScale.addEventListener("input",this.onScaleChange.bind(this))}},{key:"initToggleGap",value:function(){this.elGap.addEventListener("change",this.onGapChange.bind(this))}},{key:"styleTeamSelect",value:function(){var t=this;this.elSelect.classList.add("select-hidden");var e=document.createElement("div");e.classList.add("select");var n=document.createElement("div");n.classList.add("select-styled");var i=document.createElement("ul");i.classList.add("select-options");for(var r=function(){n.classList.remove("active"),i.style.display="none"},a=function t(){document.removeEventListener("click",t),r()},s=0;s<this.elSelect.options.length;s++){var o=this.elSelect.options[s],c=document.createElement("li");c.rel=o.value,c.innerText=o.innerText,i.appendChild(c),c.addEventListener("click",(function(e){e.stopPropagation(),n.innerText=e.target.innerText,t.elSelect.value=e.target.rel,t.elSelect.dispatchEvent(new Event("change")),r()}))}n.addEventListener("click",(function(t){t.stopPropagation(),n.classList.toggle("active"),i.style.display=n.classList.contains("active")?"":"none",n.classList.contains("active")&&document.addEventListener("click",a)})),this.elSelect.parentNode.insertBefore(e,this.elSelect),e.appendChild(this.elSelect),e.appendChild(n),e.appendChild(i),r(),n.innerText=this.elSelect.selectedOptions[0].innerText}},{key:"onTeamChange",value:function(t){this.app.onTeamChange(t.target.value)}},{key:"onScaleChange",value:function(t){this.app.canvas.scale=t.target.value,this.app.canvas.resize()}},{key:"onGapChange",value:function(t){this.app.onGapTypeChange(t.target.checked)}}])&&Q(e.prototype,n),i&&Q(e,i),t}(),W=n(124);function J(t,e,n,i,r,a,s){try{var o=t[a](s),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,r)}function q(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){J(a,i,r,s,o,"next",t)}function o(t){J(a,i,r,s,o,"throw",t)}s(void 0)}))}}function Z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,"default",(function(){return K}));var X=r.a.parse(location.search),K=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.team=I({id:X.team||"alfa-romeo"}),this.gapType=E.NORMAL,this.initUI(),this.initCanvas(),this.addListeners()}var e,n,i,r,a,s;return e=t,(n=[{key:"init",value:(s=q(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.initData();case 2:this.canvas.init(),this.gui&&this.gui.update(),this.resize();case 5:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"initData",value:(a=q(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(W.a)("data/teammates/2019/".concat(this.team.id,".json"));case 2:this.data=t.sent,this.data.forEach((function(t){N({event:t}),P({event:t})}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"initUI",value:function(){this.ui=new $(this)}},{key:"initCanvas",value:function(){this.canvas=new V(this),document.querySelector(".container").appendChild(this.canvas.canvas)}},{key:"initGUI",value:function(){this.gui=new GUIView(this)}},{key:"addListeners",value:function(){this.handlerAnimate=this.animate.bind(this),window.addEventListener("mousemove",this.mousemove.bind(this)),window.addEventListener("resize",this.resize.bind(this)),window.addEventListener("keyup",this.keyup.bind(this))}},{key:"animate",value:function(){this.update(),this.draw()}},{key:"update",value:function(){this.gui.stats&&this.gui.stats.begin(),this.canvas&&this.canvas.update()}},{key:"draw",value:function(){this.canvas&&this.canvas.draw(),this.gui.stats&&this.gui.stats.end()}},{key:"resize",value:function(){this.canvas&&this.canvas.resize()}},{key:"keyup",value:function(t){71==t.keyCode&&this.gui&&this.gui.toggle()}},{key:"mousemove",value:function(t){var e=t.touches?t.touches[0]:t,n={x:e.clientX,y:e.clientY};this.canvas&&this.canvas.mousemove(n)}},{key:"onTeamChange",value:(r=q(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=I({id:e})){t.next=3;break}return t.abrupt("return");case 3:return this.team=n,t.next=6,this.init();case 6:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"onGapTypeChange",value:function(t){this.gapType=t?E.INVERTED:E.NORMAL,this.canvas.init(),this.resize()}}])&&Z(e.prototype,n),i&&Z(e,i),t}()},316:function(t,e){var n="https://mssproxy.motorsportstats.com/web/3.0.0",i="".concat(n,"/").concat("series","/formula-one/").concat("seasons"),r="".concat(n,"/").concat("seasons","/$uuid/").concat("events"),a="".concat(n,"/").concat("events","/$uuid/").concat("sessions"),s="".concat(n,"/").concat("sessions","/$uuid/").concat("classification"),o="https://results.motorsportstats.com",c="".concat(o,"/series/formula-one"),u="".concat(c,"/season/$uuid"),h="".concat(o,"/results/$uuid/classification"),l="".concat(o,"/results/$eventid/classification/$uuid"),d=new Map;d.set("seasons",i),d.set("events",r),d.set("sessions",a),d.set("classification",s);var f=new Map;f.set("seasons",c),f.set("events",u),f.set("sessions",h),f.set("classification",l);var v={ALFA_ROMEO:"alfa-romeo",FERRARI:"ferrari-2",HAAS:"haas",MCLAREN:"mclaren",MERCEDES:"mercedes-2",RACING_POINT:"racing-point",RED_BULL:"red-bull-racing",RENAULT:"renault-2",TORO_ROSSO:"scuderia-toro-rosso",WILLIAMS:"williams"},g={FP1:"FP1",FP2:"FP2",FP3:"FP3",Q1:"Q1",Q2:"Q2",Q3:"Q3",RACE:"RACE"};t.exports={DIR_ROOT:"../static/data",ID_SERIES:"series",ID_SEASONS:"seasons",ID_EVENTS:"events",ID_SESSIONS:"sessions",ID_CLASSIFICATION:"classification",ID_TEAMMATES:"teammates",sessions:g,teams:v,urls:f}},317:function(t,e,n){"use strict";function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){r=!0,a=t}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=n(318),o=n(319),c=n(320);function u(t,e){return e.encode?e.strict?s(t):encodeURIComponent(t):t}function h(t,e){return e.decode?o(t):t}function l(t){var e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function d(t){var e=(t=l(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function f(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function v(t,e){var n=function(t){var e;switch(t.arrayFormat){case"index":return function(t,n,i){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===i[t]&&(i[t]={}),i[t][e[1]]=n):i[t]=n};case"bracket":return function(t,n,i){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==i[t]?i[t]=[].concat(i[t],n):i[t]=[n]:i[t]=n};case"comma":return function(t,e,n){var i="string"==typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;n[t]=i};default:return function(t,e,n){void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),a=Object.create(null);if("string"!=typeof t)return a;if(!(t=t.trim().replace(/^[?#&]/,"")))return a;var s=!0,o=!1,u=void 0;try{for(var l,d=t.split("&")[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var v=l.value,g=i(c(v.replace(/\+/g," "),"="),2),p=g[0];w=void 0===(w=g[1])?null:h(w,e),n(h(p,e),w,a)}}catch(t){o=!0,u=t}finally{try{s||null==d.return||d.return()}finally{if(o)throw u}}for(var m=0,y=Object.keys(a);m<y.length;m++){var w;p=y[m];if("object"===r(w=a[p])&&null!==w)for(var x=0,b=Object.keys(w);x<b.length;x++){var S=b[x];w[S]=f(w[S],e)}else a[p]=f(w,e)}return!1===e.sort?a:(!0===e.sort?Object.keys(a).sort():Object.keys(a).sort(e.sort)).reduce((function(t,e){var n=a[e];return Boolean(n)&&"object"===r(n)&&!Array.isArray(n)?t[e]=function t(e){return Array.isArray(e)?e.sort():"object"===r(e)?t(Object.keys(e)).sort((function(t,e){return Number(t)-Number(e)})).map((function(t){return e[t]})):e}(n):t[e]=n,t}),Object.create(null))}e.extract=d,e.parse=v,e.stringify=function(t,e){if(!t)return"";var n=function(t){switch(t.arrayFormat){case"index":return function(e){return function(n,i){var r=n.length;return void 0===i?n:[].concat(a(n),null===i?[[u(e,t),"[",r,"]"].join("")]:[[u(e,t),"[",u(r,t),"]=",u(i,t)].join("")])}};case"bracket":return function(e){return function(n,i){return void 0===i?n:[].concat(a(n),null===i?[[u(e,t),"[]"].join("")]:[[u(e,t),"[]=",u(i,t)].join("")])}};case"comma":return function(e){return function(n,i,r){return null==i||0===i.length?n:0===r?[[u(e,t),"=",u(i,t)].join("")]:[[n,u(i,t)].join(",")]}};default:return function(e){return function(n,i){return void 0===i?n:[].concat(a(n),null===i?[u(e,t)]:[[u(e,t),"=",u(i,t)].join("")])}}}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),i=Object.keys(t);return!1!==e.sort&&i.sort(e.sort),i.map((function(i){var r=t[i];return void 0===r?"":null===r?u(i,e):Array.isArray(r)?r.reduce(n(i),[]).join("&"):u(i,e)+"="+u(r,e)})).filter((function(t){return t.length>0})).join("&")},e.parseUrl=function(t,e){return{url:l(t).split("?")[0]||"",query:v(d(t),e)}}},318:function(t,e,n){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},319:function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function s(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var n=t.slice(0,e),i=t.slice(e);return Array.prototype.concat.call([],s(n),s(i))}function o(t){try{return decodeURIComponent(t)}catch(i){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=s(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+i(t)+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(t);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var i=o(n[0]);i!==n[0]&&(e[n[0]]=i)}n=a.exec(t)}e["%C2"]="�";for(var r=Object.keys(e),s=0;s<r.length;s++){var c=r[s];t=t.replace(new RegExp(c,"g"),e[c])}return t}(t)}}},320:function(t,e,n){"use strict";t.exports=function(t,e){if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];var n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},321:function(t,e,n){(function(t){var n;function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/**
 * @preserve date-and-time.js (c) KNOWLEDGECODE | MIT
 */!function(r){"use strict";var a={},s={},o={},c="en",u={MMMM:["January","February","March","April","May","June","July","August","September","October","November","December"],MMM:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dd:["Su","Mo","Tu","We","Th","Fr","Sa"],A:["a.m.","p.m."]},h={YYYY:function(t){return("000"+t.getFullYear()).slice(-4)},YY:function(t){return("0"+t.getFullYear()).slice(-2)},Y:function(t){return""+t.getFullYear()},MMMM:function(t){return this.res.MMMM[t.getMonth()]},MMM:function(t){return this.res.MMM[t.getMonth()]},MM:function(t){return("0"+(t.getMonth()+1)).slice(-2)},M:function(t){return""+(t.getMonth()+1)},DD:function(t){return("0"+t.getDate()).slice(-2)},D:function(t){return""+t.getDate()},HH:function(t){return("0"+t.getHours()).slice(-2)},H:function(t){return""+t.getHours()},A:function(t){return this.res.A[t.getHours()>11|0]},hh:function(t){return("0"+(t.getHours()%12||12)).slice(-2)},h:function(t){return""+(t.getHours()%12||12)},mm:function(t){return("0"+t.getMinutes()).slice(-2)},m:function(t){return""+t.getMinutes()},ss:function(t){return("0"+t.getSeconds()).slice(-2)},s:function(t){return""+t.getSeconds()},SSS:function(t){return("00"+t.getMilliseconds()).slice(-3)},SS:function(t){return("0"+(t.getMilliseconds()/10|0)).slice(-2)},S:function(t){return""+(t.getMilliseconds()/100|0)},dddd:function(t){return this.res.dddd[t.getDay()]},ddd:function(t){return this.res.ddd[t.getDay()]},dd:function(t){return this.res.dd[t.getDay()]},Z:function(t){var e=t.utc?0:t.getTimezoneOffset()/.6;return(e>0?"-":"+")+("000"+Math.abs(e-e%100*.4)).slice(-4)},post:function(t){return t}},l={YYYY:function(t){return this.exec(/^\d{4}/,t)},YY:function(t){var e=this.exec(/^\d\d/,t);return e.value+=e.value<70?2e3:e.value<100?1900:0,e},Y:function(t){return this.exec(/^\d{1,4}/,t)},MMMM:function(t){var e=this.find(this.res.MMMM,t);return e.value++,e},MMM:function(t){var e=this.find(this.res.MMM,t);return e.value++,e},MM:function(t){return this.exec(/^\d\d/,t)},M:function(t){return this.exec(/^\d\d?/,t)},DD:function(t){return this.exec(/^\d\d/,t)},D:function(t){return this.exec(/^\d\d?/,t)},HH:function(t){return this.exec(/^\d\d/,t)},H:function(t){return this.exec(/^\d\d?/,t)},A:function(t){return this.find(this.res.A,t)},hh:function(t){return this.exec(/^\d\d/,t)},h:function(t){return this.exec(/^\d\d?/,t)},mm:function(t){return this.exec(/^\d\d/,t)},m:function(t){return this.exec(/^\d\d?/,t)},ss:function(t){return this.exec(/^\d\d/,t)},s:function(t){return this.exec(/^\d\d?/,t)},SSS:function(t){return this.exec(/^\d{1,3}/,t)},SS:function(t){var e=this.exec(/^\d\d?/,t);return e.value*=10,e},S:function(t){var e=this.exec(/^\d/,t);return e.value*=100,e},h12:function(t,e){return(12===t?0:t)+12*e},exec:function(t,e){var n=(t.exec(e)||[""])[0];return{value:0|n,length:n.length}},find:function(t,e){for(var n,i=-1,r=0,a=0,s=t.length;a<s;a++)n=t[a],!e.indexOf(n)&&n.length>r&&(i=a,r=n.length);return{value:i,length:r}},pre:function(t){return t}},d=function(t,e,n){var i=function(t,e,n){var i=function(t){t&&(this.res=t)};(i.prototype=t).constructor=i;var r,a=new i(n);for(var s in e||{})e.hasOwnProperty(s)&&(r=e[s],a[s]=r.slice?r.slice():r);return a},r={res:i(e.res,n.res)};r.formatter=i(e.formatter,n.formatter,r.res),r.parser=i(e.parser,n.parser,r.res),s[t]=r};a.format=function(t,e,n){var i=a.addMinutes(t,n?t.getTimezoneOffset():0),r=s[c].formatter;return i.utc=n,e.replace(/\[[^\[\]]*]|\[.*\][^\[]*\]|([A-Za-z])\1*|./g,(function(t){return r[t]?r.post(r[t](i,e)):t.replace(/\[(.*)]/,"$1")}))},a.preparse=function(t,e){var n,i,r,a=s[c].parser,o=/([A-Za-z])\1*|./g,u=0,h={Y:1970,M:1,D:1,H:0,A:0,h:0,m:0,s:0,S:0,_index:0,_length:0,_match:0};for(t=a.pre(t),e=e.replace(/\[[^\[\]]*]|\[.*\][^\[]*\]/g,(function(t){return t.replace(/./g," ").slice(2)}));n=o.exec(e);)if(a[i=n[0]]){if(!(r=a[i](t.slice(u),e)).length)break;u+=r.length,h[i.charAt(0)]=r.value,h._match++}else{if(i!==t.charAt(u)&&" "!==i)break;u++}return h.H=h.H||a.h12(h.h,h.A),h._index=u,h._length=t.length,h},a.isValid=function(t,e){var n="string"==typeof t?a.preparse(t,e):t,i=[31,28+a.isLeapYear(n.Y)|0,31,30,31,30,31,31,30,31,30,31][n.M-1];return!(n._index<1||n._length<1||n._index-n._length||n._match<1||n.Y<1||n.Y>9999||n.M<1||n.M>12||n.D<1||n.D>i||n.H>23||n.H<0||n.m>59||n.m<0||n.s>59||n.s<0||n.S>999||n.S<0)},a.parse=function(t,e,n){var i=a.preparse(t,e);return a.isValid(i)?(i.M-=i.Y<100?22801:1,n?new Date(Date.UTC(i.Y,i.M,i.D,i.H,i.m,i.s,i.S)):new Date(i.Y,i.M,i.D,i.H,i.m,i.s,i.S)):new Date(NaN)},a.addYears=function(t,e){return a.addMonths(t,12*e)},a.addMonths=function(t,e){var n=new Date(t.getTime());return n.setMonth(n.getMonth()+e),n},a.addDays=function(t,e){var n=new Date(t.getTime());return n.setDate(n.getDate()+e),n},a.addHours=function(t,e){return a.addMilliseconds(t,36e5*e)},a.addMinutes=function(t,e){return a.addMilliseconds(t,6e4*e)},a.addSeconds=function(t,e){return a.addMilliseconds(t,1e3*e)},a.addMilliseconds=function(t,e){return new Date(t.getTime()+e)},a.subtract=function(t,e){var n=t.getTime()-e.getTime();return{toMilliseconds:function(){return n},toSeconds:function(){return n/1e3|0},toMinutes:function(){return n/6e4|0},toHours:function(){return n/36e5|0},toDays:function(){return n/864e5|0}}},a.isLeapYear=function(t){return!((t%4||!(t%100))&&t%400)},a.isSameDay=function(t,e){return a.format(t,"YYYYMMDD")===a.format(e,"YYYYMMDD")},a.locale=function(t,e){return e?d(t,{res:u,formatter:h,parser:l},e):t&&(c=t),c},a.extend=function(t){d(c,s[c],t)},a.plugin=function(t,e){o[t]=o[t]||e,!e&&o[t]&&a.extend(o[t])},a.locale(c,{}),"object"===i(t)&&"object"===i(t.exports)?t.exports=a:void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()}).call(this,n(126)(t))}}]);