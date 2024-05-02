(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{1553:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),c=a(3),i=a.n(c),o=a(55),d=a(20),r=a.n(d),l=a(23),u=a(8),b=a(87),p=a.n(b),h=a(31),m=a(120),j=a(9),O=a(382),v=a(44),g=a(45),C=a(52),f=a(26),_=a(41);const I=Object(j.d)({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}});class q extends l.a{render(){const{account:e,intl:t,onRemove:a,onAdd:n,added:c}=this.props;let i;return i=c?Object(s.a)(f.a,{icon:"times",iconComponent:v.a,title:t.formatMessage(I.remove),onClick:a}):Object(s.a)(f.a,{icon:"plus",iconComponent:O.a,title:t.formatMessage(I.add),onClick:n}),Object(s.a)("div",{className:"account"},void 0,Object(s.a)("div",{className:"account__wrapper"},void 0,Object(s.a)("div",{className:"account__display-name"},void 0,Object(s.a)("div",{className:"account__avatar-wrapper"},void 0,Object(s.a)(g.a,{account:e,size:36})),Object(s.a)(C.a,{account:e})),Object(s.a)("div",{className:"account__relationship"},void 0,i)))}}Object(n.a)(q,"propTypes",{account:r.a.record.isRequired,intl:i.a.object.isRequired,onRemove:i.a.func.isRequired,onAdd:i.a.func.isRequired,added:i.a.bool}),Object(n.a)(q,"defaultProps",{added:!1});var w=Object(u.connect)((()=>{const e=Object(_.e)();return(t,a)=>{let{accountId:s,added:n}=a;return{account:e(t,s),added:void 0===n?t.getIn(["listEditor","accounts","items"]).includes(s):n}}}),((e,t)=>{let{accountId:a}=t;return{onRemove:()=>e(Object(h.K)(a)),onAdd:()=>e(Object(h.B)(a))}}))(Object(o.c)(q)),y=(a(17),a(1)),R=a(118);const N=Object(j.d)({title:{id:"lists.edit.submit",defaultMessage:"Change title"}});class k extends y.PureComponent{constructor(){super(...arguments),Object(n.a)(this,"handleChange",(e=>{this.props.onChange(e.target.value)})),Object(n.a)(this,"handleSubmit",(e=>{e.preventDefault(),this.props.onSubmit()})),Object(n.a)(this,"handleClick",(()=>{this.props.onSubmit()}))}render(){const{value:e,disabled:t,intl:a}=this.props,n=a.formatMessage(N.title);return Object(s.a)("form",{className:"column-inline-form",onSubmit:this.handleSubmit},void 0,Object(s.a)("input",{className:"setting-text",value:e,onChange:this.handleChange}),Object(s.a)(f.a,{disabled:t,icon:"check",iconComponent:R.a,title:n,onClick:this.handleClick}))}}var x,M=Object(u.connect)((e=>({value:e.getIn(["listEditor","title"]),disabled:!e.getIn(["listEditor","isChanged"])||!e.getIn(["listEditor","title"])})),(e=>({onChange:t=>e(Object(h.C)(t)),onSubmit:()=>e(Object(h.P)(!1))})))(Object(o.c)(k)),E=a(10),S=a.n(E);function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},T.apply(this,arguments)}var A=function(e){let{title:t,titleId:a,...s}=e;return y.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":a},s),t?y.createElement("title",{id:a},t):null,x||(x=y.createElement("path",{d:"m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"})))},z=a(140),P=a(14);const K=Object(j.d)({search:{id:"lists.search",defaultMessage:"Search among people you follow"}});class U extends y.PureComponent{constructor(){super(...arguments),Object(n.a)(this,"handleChange",(e=>{this.props.onChange(e.target.value)})),Object(n.a)(this,"handleKeyUp",(e=>{13===e.keyCode&&this.props.onSubmit(this.props.value)})),Object(n.a)(this,"handleClear",(()=>{this.props.onClear()}))}render(){const{value:e,intl:t}=this.props,a=e.length>0;return Object(s.a)("div",{className:"list-editor__search search"},void 0,Object(s.a)("label",{},void 0,Object(s.a)("span",{style:{display:"none"}},void 0,t.formatMessage(K.search)),Object(s.a)("input",{className:"search__input",type:"text",value:e,onChange:this.handleChange,onKeyUp:this.handleKeyUp,placeholder:t.formatMessage(K.search)})),Object(s.a)("div",{role:"button",tabIndex:0,className:"search__icon",onClick:this.handleClear},void 0,Object(s.a)(P.a,{id:"search",icon:z.a,className:S()({active:!a})}),Object(s.a)(P.a,{id:"times-circle",icon:A,"aria-label":t.formatMessage(K.search),className:S()({active:a})})))}}var Z=Object(u.connect)((e=>({value:e.getIn(["listEditor","suggestions","value"])})),(e=>({onSubmit:t=>e(Object(h.H)(t)),onClear:()=>e(Object(h.E)()),onChange:t=>e(Object(h.D)(t))})))(Object(o.c)(U));class D extends l.a{componentDidMount(){const{onInitialize:e,listId:t}=this.props;e(t)}componentWillUnmount(){const{onReset:e}=this.props;e()}render(){const{accountIds:e,searchAccountIds:t,onClear:a}=this.props,n=t.size>0;return Object(s.a)("div",{className:"modal-root__modal list-editor"},void 0,Object(s.a)(M,{}),Object(s.a)(Z,{}),Object(s.a)("div",{className:"drawer__pager"},void 0,Object(s.a)("div",{className:"drawer__inner list-editor__accounts"},void 0,e.map((e=>Object(s.a)(w,{accountId:e,added:!0},e)))),n&&Object(s.a)("div",{role:"button",tabIndex:-1,className:"drawer__backdrop",onClick:a}),Object(s.a)(m.a,{defaultStyle:{x:-100},style:{x:p()(n?0:-100,{stiffness:210,damping:20})}},void 0,(e=>{let{x:a}=e;return Object(s.a)("div",{className:"drawer__inner backdrop",style:{transform:0===a?null:"translateX(".concat(a,"%)"),visibility:-100===a?"hidden":"visible"}},void 0,t.map((e=>Object(s.a)(w,{accountId:e},e))))}))))}}Object(n.a)(D,"propTypes",{listId:i.a.string.isRequired,onClose:i.a.func.isRequired,intl:i.a.object.isRequired,onInitialize:i.a.func.isRequired,onClear:i.a.func.isRequired,onReset:i.a.func.isRequired,accountIds:r.a.list.isRequired,searchAccountIds:r.a.list.isRequired});t.default=Object(u.connect)((e=>({accountIds:e.getIn(["listEditor","accounts","items"]),searchAccountIds:e.getIn(["listEditor","suggestions","items"])})),(e=>({onInitialize:t=>e(Object(h.O)(t)),onClear:()=>e(Object(h.E)()),onReset:()=>e(Object(h.M)())})))(Object(o.c)(D))}}]);
//# sourceMappingURL=list_editor-09db50d98b929c61d6f1.chunk.js.map