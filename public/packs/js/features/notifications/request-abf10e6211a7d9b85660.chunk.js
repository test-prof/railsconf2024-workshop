(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1439:function(e,t,o){"use strict";o.r(t),o.d(t,"NotificationRequest",(function(){return k}));var c=o(0),n=o(1),i=o(9),s=o(92),a=o(112),l=o(8),u=o(383),r=o(1397),b=o(1401),d=o(28),f=o(229),j=o(228),m=o(26),O=o(376),g=o(505),p=o(1414),h=o(5);const v=Object(i.d)({title:{id:"notification_requests.notifications_from",defaultMessage:"Notifications from {name}"},accept:{id:"notification_requests.accept",defaultMessage:"Accept"},dismiss:{id:"notification_requests.dismiss",defaultMessage:"Dismiss"}}),C=(e,t,o)=>{const c=e.current.node,n=c.querySelector("article:nth-of-type(".concat(t+1,") .focusable"));n&&(o&&c.scrollTop>n.offsetTop?n.scrollIntoView(!0):!o&&c.scrollTop+c.clientHeight<n.offsetTop+n.offsetHeight&&n.scrollIntoView(!1),n.focus())},k=e=>{let{multiColumn:t,params:{id:o}}=e;const i=Object(n.useRef)(),k=Object(s.a)(),q=Object(l.useDispatch)(),I=Object(l.useSelector)((e=>e.getIn(["notificationRequests","current","item","id"])===o?e.getIn(["notificationRequests","current","item"]):null)),w=null==I?void 0:I.get("account"),M=Object(l.useSelector)((e=>e.getIn(["accounts",w]))),_=Object(l.useSelector)((e=>e.getIn(["notificationRequests","current","notifications","items"]))),R=Object(l.useSelector)((e=>e.getIn(["notificationRequests","current","notifications","isLoading"]))),S=Object(l.useSelector)((e=>!!e.getIn(["notificationRequests","current","notifications","next"]))),x=Object(l.useSelector)((e=>e.getIn(["notificationRequests","current","removed"]))),T=Object(n.useCallback)((()=>{var e;null===(e=i.current)||void 0===e||e.scrollTop()}),[i]),D=Object(n.useCallback)((()=>{q(Object(d.J)())}),[q]),y=Object(n.useCallback)((()=>{q(Object(d.G)(o))}),[q,o]),L=Object(n.useCallback)((()=>{q(Object(d.E)(o))}),[q,o]),N=Object(n.useCallback)((e=>{const t=_.findIndex((t=>null!==t&&t.get("id")===e))-1;C(i,t,!0)}),[i,_]),B=Object(n.useCallback)((e=>{const t=_.findIndex((t=>null!==t&&t.get("id")===e))+1;C(i,t,!1)}),[i,_]);Object(n.useEffect)((()=>{q(Object(d.L)(o))}),[q,o]),Object(n.useEffect)((()=>{w&&q(Object(d.N)(w))}),[q,w]);const E=k.formatMessage(v.title,{name:(null==M?void 0:M.get("display_name"))||(null==M?void 0:M.get("username"))});return Object(h.jsxs)(f.a,{bindToDocument:!t,ref:i,label:E,children:[Object(c.a)(j.a,{icon:"archive",iconComponent:r.a,title:E,onClick:T,multiColumn:t,showBackButton:!0,extraButton:!x&&Object(h.jsxs)(h.Fragment,{children:[Object(c.a)(m.a,{className:"column-header__button",iconComponent:b.a,onClick:y,title:k.formatMessage(v.dismiss)}),Object(c.a)(m.a,{className:"column-header__button",iconComponent:u.a,onClick:L,title:k.formatMessage(v.accept)})]})}),Object(c.a)(g.b,{hideMediaByDefault:!0},void 0,Object(c.a)(O.a,{scrollKey:"notification_requests/".concat(o),trackScroll:!t,bindToDocument:!t,isLoading:R,showLoading:R&&0===_.size,hasMore:S,onLoadMore:D},void 0,_.map((e=>e&&Object(c.a)(p.a,{notification:e,accountId:e.get("account"),onMoveUp:N,onMoveDown:B},e.get("id")))))),Object(c.a)(a.a,{},void 0,Object(c.a)("title",{},void 0,E),Object(c.a)("meta",{name:"robots",content:"noindex"}))]})};t.default=k}}]);
//# sourceMappingURL=request-abf10e6211a7d9b85660.chunk.js.map