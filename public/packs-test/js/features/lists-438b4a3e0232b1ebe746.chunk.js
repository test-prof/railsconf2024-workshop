(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{1417:function(t,e,a){"use strict";a.r(e);var s=a(0),i=a(2),o=a(3),n=a.n(o),c=a(9),l=a(25),d=a(55),u=a(112),b=a(130),r=a(20),p=a.n(r),m=a(23),g=a(8),j=a(234),O=a(31),h=a(229),f=a(228),M=a(169),w=a(376),v=a(86),y=a(1408),C=a(1409);const x=Object(c.d)({heading:{id:"column.lists",defaultMessage:"Lists"},subheading:{id:"lists.subheading",defaultMessage:"Your lists"}}),q=Object(b.a)([t=>t.get("lists")],(t=>t?t.toList().filter((t=>!!t)).sort(((t,e)=>t.get("title").localeCompare(e.get("title")))):t));class R extends m.a{UNSAFE_componentWillMount(){this.props.dispatch(Object(O.I)())}render(){const{intl:t,lists:e,multiColumn:a}=this.props;if(!e)return Object(s.a)(h.a,{},void 0,Object(s.a)(M.a,{}));const i=Object(s.a)(l.a,{id:"empty_column.lists",defaultMessage:"You don't have any lists yet. When you create one, it will show up here."});return Object(s.a)(h.a,{bindToDocument:!a,label:t.formatMessage(x.heading)},void 0,Object(s.a)(f.a,{title:t.formatMessage(x.heading),icon:"list-ul",iconComponent:j.a,multiColumn:a}),Object(s.a)(C.a,{}),Object(s.a)(w.a,{scrollKey:"lists",emptyMessage:i,prepend:Object(s.a)(y.a,{text:t.formatMessage(x.subheading)}),bindToDocument:!a},void 0,e.map((t=>Object(s.a)(v.a,{to:"/lists/".concat(t.get("id")),icon:"list-ul",iconComponent:j.a,text:t.get("title")},t.get("id"))))),Object(s.a)(u.a,{},void 0,Object(s.a)("title",{},void 0,t.formatMessage(x.heading)),Object(s.a)("meta",{name:"robots",content:"noindex"})))}}Object(i.a)(R,"propTypes",{params:n.a.object.isRequired,dispatch:n.a.func.isRequired,lists:p.a.list,intl:n.a.object.isRequired,multiColumn:n.a.bool}),e.default=Object(g.connect)((t=>({lists:q(t)})))(Object(d.c)(R))}}]);
//# sourceMappingURL=lists-438b4a3e0232b1ebe746.chunk.js.map