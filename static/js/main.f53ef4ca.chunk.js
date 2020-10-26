(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],{136:function(e,t,a){e.exports=a(191)},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(78),i=a(229),m=a(21),u=a(246),s=a(54),d=a(238),p=a(118),f=a.n(p),E=a(112),b=a.n(E),g=a(26),h=a.n(g),y=a(122),v=a(89),C=a.n(v),R=a(115),T=a.n(R),S=a(116),j=a.n(S),O=a(117),w=a.n(O),D=a(228),N=a(113),I=a.n(N),k=a(114),x=a.n(k),A=function(e){var t=e.number,a=e.paddedNumber;return String(t).padStart(a,"0")},M=function(e){var t=A({number:Math.floor(e/36e5),paddedNumber:2}),a=A({number:Math.floor(e/6e4)%60,paddedNumber:2}),n=A({number:Math.floor(e/1e3)%60,paddedNumber:2}),r=A({number:Math.floor(e/10)%100,paddedNumber:3});return"".concat(t," : ").concat(a," : ").concat(n," : ").concat(r)},L=function(e){localStorage.setItem("countDownTime",e)};var W=function(e){var t=e.countDownTime,a=e.columnType,c=e.onChangeCountDownTime,l=e.isRunning,o=Object(n.useMemo)((function(){switch(a){case"hours":return A({number:Math.floor(t/1e3/60/60%24),paddedNumber:2});case"minutes":return A({number:Math.floor(t/1e3/60%60),paddedNumber:2});case"seconds":return A({number:Math.floor(t/1e3%60)%60,paddedNumber:2})}}),[a,t]);return r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minWidth:100,m:2},r.a.createElement(u.a,{my:1},r.a.createElement(s.a,{variant:"caption"},a.charAt(0).toUpperCase()+a.slice(1))),r.a.createElement(D.a,{variant:"contained",color:"primary",disabled:l,onClick:function(){return c({columnType:a,changeType:"increment"})}},r.a.createElement(I.a,{fontSize:"large"})),r.a.createElement(u.a,{display:"flex",justifyContent:"center",minWidth:80,my:1},r.a.createElement(s.a,{variant:"h2"},o)),r.a.createElement(D.a,{variant:"contained",color:"primary",disabled:l,onClick:function(){return c({columnType:a,changeType:"decrement"})}},r.a.createElement(x.a,{fontSize:"large"})))},B=a(73),F=a.n(B),P=a(233),H=a(237),z=a(236),_=a(232),Y=a(243),K=a(234),G=a(235),U=a(226),V=a(245),J=a(230),q=a(231),X=a(240),$=F()((function(e){return{paper:{minWidth:900},tableContainer:{maxHeight:440},tableHeader:{fontWeight:500},tableCellHead:{backgroundColor:e.palette.grey[300]},tableFooter:{width:"100%",display:"flex",justifyContent:"flex-end"},tableRow:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}));var Q=function(e){var t=e.laps,a=e.open,c=e.handleClose,l=$(),o=Object(n.useState)(0),i=Object(m.a)(o,2),d=i[0],p=i[1],f=Object(n.useState)(5),E=Object(m.a)(f,2),b=E[0],g=E[1];return r.a.createElement(V.a,{maxWidth:"lg",onClose:c,open:a},r.a.createElement(J.a,{onClose:c},"Laps Recorded"),r.a.createElement(q.a,{dividers:!0},h()(t)?r.a.createElement(u.a,{minWidth:500,display:"flex",justifyContent:"center"},r.a.createElement(s.a,null,"No Laps Recorded")):r.a.createElement(U.a,{className:l.paper},r.a.createElement(_.a,{className:l.tableContainer},r.a.createElement(P.a,{stickyHeader:!0},r.a.createElement(K.a,null,r.a.createElement(G.a,null,r.a.createElement(z.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"No.")),r.a.createElement(z.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"Start Time")),r.a.createElement(z.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"End Time")),r.a.createElement(z.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"Duration")))),r.a.createElement(H.a,null,!h()(t)&&t.slice(d*b,d*b+b).map((function(e){var t=e||{},a=t.index,n=t.lapStartTime,c=t.lapEndTime,o=t.lapDuration;return r.a.createElement(G.a,{key:a,className:l.tableRow},r.a.createElement(z.a,{align:"center",component:"th",scope:"row"},r.a.createElement(s.a,{variant:"subtitle2"},r.a.createElement("strong",null,a))),r.a.createElement(z.a,{align:"center"},r.a.createElement(s.a,{variant:"subtitle2",color:"primary"},M(n))),r.a.createElement(z.a,{align:"center"},r.a.createElement(s.a,{variant:"subtitle2",color:"primary"},M(c))),r.a.createElement(z.a,{align:"center"},r.a.createElement(s.a,{variant:"subtitle2",color:"primary"},M(o))))}))))),r.a.createElement(Y.a,{rowsPerPageOptions:[5,10,25,100],component:"div",count:t.length,rowsPerPage:b,page:d,onChangePage:function(e,t){p(t)},onChangeRowsPerPage:function(e){g(+e.target.value),p(0)}}))),r.a.createElement(X.a,null,r.a.createElement(u.a,{mx:2},r.a.createElement(D.a,{size:"large",variant:"outlined",onClick:c,color:"primary"},"Ok"))))},Z=Object(y.a)((function(e){return{gridItemRoot:{padding:e.spacing(1)},iconRoot:{fontSize:50},"@keyframes blink":{from:{opacity:1},to:{opacity:0}}}}));var ee=function(){var e=Object(o.b)().enqueueSnackbar,t=Object(n.useState)(0),a=Object(m.a)(t,2),c=a[0],l=a[1],i=Object(n.useRef)(),p=Object(n.useState)(0),f=Object(m.a)(p,2),E=f[0],g=f[1],y=Object(n.useState)(!1),v=Object(m.a)(y,2),R=v[0],S=v[1],O=Object(n.useState)(!1),D=Object(m.a)(O,2),N=D[0],I=D[1],k=Object(n.useState)(0),x=Object(m.a)(k,2),M=x[0],B=x[1],F=Object(n.useState)([]),P=Object(m.a)(F,2),H=P[0],z=P[1],_=Object(n.useState)(!1),Y=Object(m.a)(_,2),K=Y[0],G=Y[1],U=Z({isRunning:R});Object(n.useEffect)((function(){var e;if(R){var t=c-102;e=setInterval((function(){l(t)}),102)}return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){var e=function(){L(i.current)},t={countDownTime:localStorage.getItem("countDownTime"),isRunning:localStorage.getItem("isRunning")},a=t.countDownTime,n=t.isRunning;return a&&(l(Number(a)),g(Number(a)),S("true"===n)),window.addEventListener("beforeunload",e),function(){window.removeEventListener("beforeunload",e)}}),[]),Object(n.useEffect)((function(){(i.current=c,R)&&(M-c>=12e4&&e("1 Minute Lap threshold reached",{variant:"warning",preventDuplicate:!0}))}),[c]),Object(n.useEffect)((function(){!function(e){localStorage.setItem("isRunning",e)}(R)}),[R]),Object(n.useEffect)((function(){if(N){var t=H.length||0,a=h()(H)?{}:H[H.length-1],n=a||{},r=n.index,l=n.lapStartTime,o=l-c;h()(a)||(H.splice(r-1,1),H.splice(r-1,0,{lapDuration:o,lapStartTime:l,lapEndTime:c,index:r})),H.push({index:t+1,lapStartTime:c}),z(H),e(t>0?"Lap ".concat(t," Ended, Starting Lap ").concat(t+1):"Lap ".concat(t+1," Started"),{variant:"info",preventDuplicate:!0}),I(!1)}}),[N]);var V=Object(n.useMemo)((function(){return A({number:c%1e3,paddedNumber:3})}),[c]);function J(e){var t=e.columnType,a=e.changeType,n=Math.round(Number(c));"increment"===a?"hours"===t&&n+36e5<216e6?l((function(e){return e+36e5})):"minutes"===t&&n+6e4<216e6?l((function(e){return e+6e4})):"seconds"===t&&n+1e3<216e6&&l((function(e){return e+1e3})):"decrement"===a&&("hours"===t&&n-36e5>=0?l((function(e){return e-36e5})):"minutes"===t&&n-6e4>=0?l((function(e){return e-6e4})):"seconds"===t&&n-1e3>=0&&l((function(e){return e-1e3})))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{isDisabled:!R,handleKeys:["backspace","space"],onKeyEvent:function(t,a){return function(t){var a=t.key;if("space"===a)I(!0),B(c);else if("backspace"===a&&!h()(H)&&H.length>1){var n=(H[H.length-1]||{}).index;e("Deleting Lap ".concat(H.length,", Continuing Lap ").concat(H.length-1),{variant:"success",preventDuplicate:!0}),H.splice(n-1,1),z(H)}}({key:t,event:a})}}),r.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",my:2,ml:9},r.a.createElement(W,{countDownTime:c,columnType:"hours",onChangeCountDownTime:J,isRunning:R}),r.a.createElement(u.a,{mt:3},r.a.createElement(s.a,{variant:"h3"},":")),r.a.createElement(W,{countDownTime:c,columnType:"minutes",onChangeCountDownTime:J,isRunning:R}),r.a.createElement(u.a,{mt:3},r.a.createElement(s.a,{variant:"h3"},":")),r.a.createElement(W,{countDownTime:c,columnType:"seconds",onChangeCountDownTime:J,isRunning:R}),r.a.createElement(u.a,{minWidth:70,mt:5},r.a.createElement(s.a,{variant:"caption"},"miliseconds"),r.a.createElement(s.a,{variant:"h5"},". ",V))),r.a.createElement(u.a,{display:"flex",justifyContent:"center",my:2},!R&&c>0&&c!==E&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){g(c),S(!0)}},r.a.createElement(C.a,{fontSize:"large",classes:{root:U.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Start")),R&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){R&&(g(c),l(c),S(!1))}},r.a.createElement(T.a,{fontSize:"large",classes:{root:U.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Pause")),!R&&c>0&&c===E&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){g(c),S(!0)}},r.a.createElement(C.a,{fontSize:"large",classes:{root:U.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Resume")),R&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){l(0),g(0),S(!1),G(!0),L(0);var e=h()(H)?{}:H[H.length-1],t=e||{},a=t.index,n=t.lapStartTime,r=n-c;h()(e)||(H.splice(a-1,1),H.splice(a-1,0,{lapDuration:r,lapStartTime:n,lapEndTime:c,index:a}))}},r.a.createElement(j.a,{fontSize:"large",classes:{root:U.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Stop")),!R&&c>0&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){l(0),g(0),S(!1),L(0)}},r.a.createElement(w.a,{fontSize:"large",classes:{root:U.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Reset"))),R&&r.a.createElement(s.a,{variant:"body1"},"Press Space Bar to record Laps"),K&&r.a.createElement(Q,{open:K,handleClose:function(){G((function(e){return!e})),z([])},laps:H}))},te=a(239),ae=a(247),ne=a(242),re=a(241),ce={PRIMARY_LIGHT:"#3D9EFF",PRIMARY:"#5C7393",PRIMARY_DARK:"#364C63",SECONDARY:"#FF811D",BACKGROUND_COLOR:"#F0F2F3",BACKGROUND_WHITE:"#FFFFFF",NOTE_TEXT_GRAY:"#909DA9",MAIN_NAV_BUTTON:"#161E29",ACTIVE:"#009A5B",INACTIVE:"#B1876A",BLACK:"#000000"},le=F()((function(){return{listItem:{alignItems:"baseline"},icon:{color:ce.BLACK,minWidth:25}}}));var oe=function(e){var t=e.open,a=e.handleClose,n=le();return r.a.createElement(V.a,{open:t,maxWidth:"sm"},r.a.createElement(J.a,null,"Instructions For Recording Laps:"),r.a.createElement(q.a,{dividers:!0},r.a.createElement(te.a,null,r.a.createElement(ae.a,{className:n.listItem},r.a.createElement(re.a,{className:n.icon},"\u25aa"),r.a.createElement(ne.a,null,r.a.createElement(s.a,{align:"justify"},"You can record a Lap by pressing ",r.a.createElement("strong",null,"Space Bar")," key on the keyboard while the countdown timer is running."))),r.a.createElement(ae.a,{className:n.listItem},r.a.createElement(re.a,{className:n.icon},"\u25aa"),r.a.createElement(ne.a,null,r.a.createElement(s.a,{align:"justify"},"If you pressed ",r.a.createElement("strong",null,"Space Bar")," by mistake while a lap is running then you can press ",r.a.createElement("strong",null,"Back Space")," key to correct that lap and your last lap will continue from there."))))),r.a.createElement(X.a,null,r.a.createElement(u.a,{mx:2},r.a.createElement(D.a,{size:"large",variant:"outlined",onClick:a,color:"primary"},"Got It"))))};var ie=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1];function l(){c((function(e){return!e}))}return r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",my:4},r.a.createElement(s.a,{variant:"h2",color:"primary",style:{fontWeight:500}},"Countdown Timer"),r.a.createElement(d.a,{onClick:l},r.a.createElement(f.a,{fontSize:"large"})),a&&r.a.createElement(oe,{open:a,handleClose:l}),r.a.createElement(ee,null))},me=a(119),ue=ce,se=Object(me.a)({palette:{primary:{light:ue.PRIMARY_LIGHT,main:ue.PRIMARY,dark:ue.PRIMARY_DARK},secondary:{main:ue.SECONDARY},background:{default:ue.BACKGROUND_COLOR}},props:{MuiAppBar:{elevation:0},MuiTabs:{variant:"fullWidth"},MuiTab:{disableRipple:!0}},overrides:{MuiAppBar:{colorPrimary:{backgroundColor:ue.PRIMARY_DARK}},MuiTab:{root:{textTransform:"none",fontWeight:"normal"}}},typography:{subtitle2:{fontSize:"1rem"},fontFamily:"'Montserrat','Roboto',sans-serif",fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:600}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{theme:se},r.a.createElement(o.a,{maxSnack:1,anchorOrigin:{vertical:"bottom",horizontal:"center"}},r.a.createElement(ie,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[136,1,2]]]);
//# sourceMappingURL=main.f53ef4ca.chunk.js.map