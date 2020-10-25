(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],{135:function(e,t,a){e.exports=a(190)},190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(78),i=a(228),m=a(21),u=a(245),s=a(54),d=a(237),p=a(117),f=a.n(p),E=a(112),g=a.n(E),b=a(26),h=a.n(b),y=a(121),v=a(89),C=a.n(v),R=a(115),T=a.n(R),S=a(116),O=a.n(S),j=a(227),D=a(113),w=a.n(D),I=a(114),N=a.n(I),k=function(e){var t=e.number,a=e.paddedNumber;return String(t).padStart(a,"0")},x=function(e){var t=k({number:Math.floor(e/36e5),paddedNumber:2}),a=k({number:Math.floor(e/6e4)%60,paddedNumber:2}),n=k({number:Math.floor(e/1e3)%60,paddedNumber:2}),r=k({number:Math.floor(e/10)%100,paddedNumber:3});return"".concat(t," : ").concat(a," : ").concat(n," : ").concat(r)},A=function(e){localStorage.setItem("countDownTime",e)};var M=function(e){var t=e.countDownTime,a=e.columnType,c=e.onChangeCountDownTime,l=e.isRunning,o=Object(n.useMemo)((function(){switch(a){case"hours":return k({number:Math.floor(t/36e5%60),paddedNumber:2});case"minutes":return k({number:Math.floor(t/6e4%60),paddedNumber:2});case"seconds":return k({number:Math.floor(t/1e3%60)%60,paddedNumber:2})}}),[a,t]);return r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minWidth:100,m:2},r.a.createElement(u.a,{my:1},r.a.createElement(s.a,{variant:"caption"},a.charAt(0).toUpperCase()+a.slice(1))),r.a.createElement(j.a,{variant:"contained",color:"primary",disabled:l,onClick:function(){return c({columnType:a,changeType:"increment"})}},r.a.createElement(w.a,{fontSize:"large"})),r.a.createElement(u.a,{display:"flex",justifyContent:"center",minWidth:80,my:1},r.a.createElement(s.a,{variant:"h2"},o)),r.a.createElement(j.a,{variant:"contained",color:"primary",disabled:l,onClick:function(){return c({columnType:a,changeType:"decrement"})}},r.a.createElement(N.a,{fontSize:"large"})))},W=a(73),L=a.n(W),B=a(232),F=a(236),P=a(235),H=a(231),z=a(242),_=a(233),Y=a(234),K=a(225),G=a(244),U=a(229),V=a(230),J=a(239),q=L()((function(e){return{paper:{minWidth:900},tableContainer:{maxHeight:440},tableHeader:{fontWeight:500},tableCellHead:{backgroundColor:e.palette.grey[300]},tableFooter:{width:"100%",display:"flex",justifyContent:"flex-end"},tableRow:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}));var X=function(e){var t=e.laps,a=e.open,c=e.handleClose,l=q(),o=Object(n.useState)(0),i=Object(m.a)(o,2),d=i[0],p=i[1],f=Object(n.useState)(5),E=Object(m.a)(f,2),g=E[0],b=E[1];return r.a.createElement(G.a,{maxWidth:"lg",onClose:c,open:a},r.a.createElement(U.a,{onClose:c},"Laps Recorded"),r.a.createElement(V.a,{dividers:!0},h()(t)?r.a.createElement(u.a,{minWidth:500,display:"flex",justifyContent:"center"},r.a.createElement(s.a,null,"No Laps Recorded")):r.a.createElement(K.a,{className:l.paper},r.a.createElement(H.a,{className:l.tableContainer},r.a.createElement(B.a,{stickyHeader:!0},r.a.createElement(_.a,null,r.a.createElement(Y.a,null,r.a.createElement(P.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"No.")),r.a.createElement(P.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"Start Time")),r.a.createElement(P.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"End Time")),r.a.createElement(P.a,{align:"center",className:l.tableCellHead},r.a.createElement(s.a,{variant:"subtitle2",className:l.tableHeader},"Duration")))),r.a.createElement(F.a,null,!h()(t)&&t.slice(d*g,d*g+g).map((function(e){var t=e||{},a=t.index,n=t.lapStartTime,c=t.lapEndTime,o=t.lapDuration;return r.a.createElement(Y.a,{key:a,className:l.tableRow},r.a.createElement(P.a,{align:"center",component:"th",scope:"row"},r.a.createElement(s.a,{variant:"subtitle2"},r.a.createElement("strong",null,a))),r.a.createElement(P.a,{align:"center"},r.a.createElement(s.a,{variant:"subtitle2",color:"primary"},x(n))),r.a.createElement(P.a,{align:"center"},r.a.createElement(s.a,{variant:"subtitle2",color:"primary"},x(c))),r.a.createElement(P.a,{align:"center"},r.a.createElement(s.a,{variant:"subtitle2",color:"primary"},x(o))))}))))),r.a.createElement(z.a,{rowsPerPageOptions:[5,10,25,100],component:"div",count:t.length,rowsPerPage:g,page:d,onChangePage:function(e,t){p(t)},onChangeRowsPerPage:function(e){b(+e.target.value),p(0)}}))),r.a.createElement(J.a,null,r.a.createElement(u.a,{mx:2},r.a.createElement(j.a,{size:"large",variant:"outlined",onClick:c,color:"primary"},"Ok"))))},$=Object(y.a)((function(e){return{gridItemRoot:{padding:e.spacing(1)},iconRoot:{fontSize:50},"@keyframes blink":{from:{opacity:1},to:{opacity:0}}}}));var Q=function(){var e=Object(o.b)().enqueueSnackbar,t=Object(n.useState)(0),a=Object(m.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(0),p=Object(m.a)(i,2),f=p[0],E=p[1],b=Object(n.useState)(!1),y=Object(m.a)(b,2),v=y[0],R=y[1],S=Object(n.useState)(!1),j=Object(m.a)(S,2),D=j[0],w=j[1],I=Object(n.useState)(0),N=Object(m.a)(I,2),x=N[0],W=N[1],L=Object(n.useState)([]),B=Object(m.a)(L,2),F=B[0],P=B[1],H=Object(n.useState)(!1),z=Object(m.a)(H,2),_=z[0],Y=z[1],K=$({isRunning:v});Object(n.useEffect)((function(){var e;if(v){var t=c-18;e=setInterval((function(){l(t)}),10)}return function(){clearInterval(e)}})),Object(n.useEffect)((function(){var e={countDownTime:localStorage.getItem("countDownTime"),isRunning:localStorage.getItem("isRunning")},t=e.countDownTime,a=e.isRunning;t&&(l(t),E(t),R("true"===a))}),[]),Object(n.useEffect)((function(){v?x-c>=12e4&&e("1 Minutes Lap threshold reached",{variant:"warning",preventDuplicate:!0}):c&&A(c)}),[c]),Object(n.useEffect)((function(){!function(e){localStorage.setItem("isRunning",e)}(v)}),[v]),Object(n.useEffect)((function(){if(D){var t=F.length||0,a=h()(F)?{}:F[F.length-1],n=a||{},r=n.index,l=n.lapStartTime,o=l-c;h()(a)||(F.splice(r-1,1),F.splice(r-1,0,{lapDuration:o,lapStartTime:l,lapEndTime:c,index:r})),F.push({index:t+1,lapStartTime:c}),P(F),e(t>0?"Lap ".concat(t," Ended, Starting Lap ").concat(t+1):"Lap ".concat(t+1," Started"),{variant:"info",preventDuplicate:!0}),w(!1)}}),[D]);var G=Object(n.useMemo)((function(){return k({number:c%1e3,paddedNumber:3})}),[c]);function U(e){var t=e.columnType,a=e.changeType;"increment"===a?"hours"===t&&c+36e5<216e6?l((function(e){return e+36e5})):"minutes"===t&&c+6e4<216e6?l((function(e){return e+6e4})):"seconds"===t&&c+1e3<216e6&&l((function(e){return e+1e3})):"decrement"===a&&("hours"===t&&c-36e5>=0?l((function(e){return e-36e5})):"minutes"===t&&c-6e4>=0?l((function(e){return e-6e4})):"seconds"===t&&c-1e3>=0&&l((function(e){return e-1e3})))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{isDisabled:!v,handleKeys:["backspace","space"],onKeyEvent:function(t,a){return function(t){var a=t.key;if("space"===a)w(!0),W(c);else if("backspace"===a&&!h()(F)&&F.length>1){var n=(F[F.length-1]||{}).index;e("Deleting Lap ".concat(F.length,", Continuing Lap ").concat(F.length-1),{variant:"success",preventDuplicate:!0}),F.splice(n-1,1),P(F)}}({key:t,event:a})}}),r.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",my:2,ml:9},r.a.createElement(M,{countDownTime:c,columnType:"hours",onChangeCountDownTime:U,isRunning:v}),r.a.createElement(u.a,{mt:3},r.a.createElement(s.a,{variant:"h3"},":")),r.a.createElement(M,{countDownTime:c,columnType:"minutes",onChangeCountDownTime:U,isRunning:v}),r.a.createElement(u.a,{mt:3},r.a.createElement(s.a,{variant:"h3"},":")),r.a.createElement(M,{countDownTime:c,columnType:"seconds",onChangeCountDownTime:U,isRunning:v}),r.a.createElement(u.a,{minWidth:70,mt:5},r.a.createElement(s.a,{variant:"caption"},"miliseconds"),r.a.createElement(s.a,{variant:"h5"},". ",G))),r.a.createElement(u.a,{display:"flex",justifyContent:"center",my:2},!v&&c>0&&c!==f&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){E(c),R(!0)}},r.a.createElement(C.a,{fontSize:"large",classes:{root:K.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Start")),v&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){v&&(E(c),l(c),R(!1))}},r.a.createElement(T.a,{fontSize:"large",classes:{root:K.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Pause")),!v&&c>0&&c===f&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){E(c),R(!0)}},r.a.createElement(C.a,{fontSize:"large",classes:{root:K.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Resume")),v&&r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},r.a.createElement(d.a,{color:"primary",onClick:function(){l(0),E(0),R(!1),Y(!0),A(0);var e=h()(F)?{}:F[F.length-1],t=e||{},a=t.index,n=t.lapStartTime,r=n-c;h()(e)||(F.splice(a-1,1),F.splice(a-1,0,{lapDuration:r,lapStartTime:n,lapEndTime:c,index:a}))}},r.a.createElement(O.a,{fontSize:"large",classes:{root:K.iconRoot}})),r.a.createElement(s.a,{variant:"subtitle2"},"Stop"))),v&&r.a.createElement(s.a,{variant:"body1"},"Press Space Bar to record Laps"),_&&r.a.createElement(X,{open:_,handleClose:function(){Y((function(e){return!e})),P([])},laps:F}))},Z=a(238),ee=a(246),te=a(241),ae=a(240),ne={PRIMARY_LIGHT:"#3D9EFF",PRIMARY:"#5C7393",PRIMARY_DARK:"#364C63",SECONDARY:"#FF811D",BACKGROUND_COLOR:"#F0F2F3",BACKGROUND_WHITE:"#FFFFFF",NOTE_TEXT_GRAY:"#909DA9",MAIN_NAV_BUTTON:"#161E29",ACTIVE:"#009A5B",INACTIVE:"#B1876A",BLACK:"#000000"},re=L()((function(){return{listItem:{alignItems:"baseline"},icon:{color:ne.BLACK,minWidth:25}}}));var ce=function(e){var t=e.open,a=e.handleClose,n=re();return r.a.createElement(G.a,{open:t,maxWidth:"sm"},r.a.createElement(U.a,null,"Instructions For Recording Laps:"),r.a.createElement(V.a,{dividers:!0},r.a.createElement(Z.a,null,r.a.createElement(ee.a,{className:n.listItem},r.a.createElement(ae.a,{className:n.icon},"\u25aa"),r.a.createElement(te.a,null,r.a.createElement(s.a,{align:"justify"},"You can record a Lap by pressing ",r.a.createElement("strong",null,"Space Bar")," key on the keyboard while the countdown timer is running."))),r.a.createElement(ee.a,{className:n.listItem},r.a.createElement(ae.a,{className:n.icon},"\u25aa"),r.a.createElement(te.a,null,r.a.createElement(s.a,{align:"justify"},"If you pressed ",r.a.createElement("strong",null,"Space Bar")," by mistake while a lap is running then you can press ",r.a.createElement("strong",null,"Back Space")," key to correct that lap and your last lap will continue from there."))))),r.a.createElement(J.a,null,r.a.createElement(u.a,{mx:2},r.a.createElement(j.a,{size:"large",variant:"outlined",onClick:a,color:"primary"},"Got It"))))};var le=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],c=t[1];function l(){c((function(e){return!e}))}return r.a.createElement(u.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",my:4},r.a.createElement(s.a,{variant:"h2",color:"primary",style:{fontWeight:500}},"Countdown Timer"),r.a.createElement(d.a,{onClick:l},r.a.createElement(f.a,{fontSize:"large"})),a&&r.a.createElement(ce,{open:a,handleClose:l}),r.a.createElement(Q,null))},oe=a(118),ie=ne,me=Object(oe.a)({palette:{primary:{light:ie.PRIMARY_LIGHT,main:ie.PRIMARY,dark:ie.PRIMARY_DARK},secondary:{main:ie.SECONDARY},background:{default:ie.BACKGROUND_COLOR}},props:{MuiAppBar:{elevation:0},MuiTabs:{variant:"fullWidth"},MuiTab:{disableRipple:!0}},overrides:{MuiAppBar:{colorPrimary:{backgroundColor:ie.PRIMARY_DARK}},MuiTab:{root:{textTransform:"none",fontWeight:"normal"}}},typography:{subtitle2:{fontSize:"1rem"},fontFamily:"'Montserrat','Roboto',sans-serif",fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:600}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{theme:me},r.a.createElement(o.a,{maxSnack:1,anchorOrigin:{vertical:"bottom",horizontal:"center"}},r.a.createElement(le,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.46e0a27e.chunk.js.map