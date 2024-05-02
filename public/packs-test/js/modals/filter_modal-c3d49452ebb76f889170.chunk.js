(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{1559:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(2),l=(a(17),a(3)),o=a.n(l),d=a(9),r=a(25),c=a(55),n=a(23),h=a(8),p=a(44),u=a(223),b=a(34),m=a(26),g=a(1),_=a(30),j=a(387),f=a(5);class O extends g.PureComponent{constructor(){super(...arguments),Object(i.a)(this,"handleCloseClick",(()=>{const{onClose:e}=this.props;e()}))}render(){const{filter:e,contextType:t}=this.props;let a=null;e.get("expires_at")&&e.get("expires_at")<new Date&&(a=Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.expired_title",defaultMessage:"Expired filter!"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.expired_explanation",defaultMessage:"This filter category has expired, you will need to change the expiration date for it to apply."}))]}));let i=null;t&&!e.get("context").includes(Object(j.a)(t))&&(i=Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.context_mismatch_title",defaultMessage:"Context mismatch!"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.context_mismatch_explanation",defaultMessage:"This filter category does not apply to the context in which you have accessed this post. If you want the post to be filtered in this context too, you will have to edit the filter."}))]}));const l=Object(s.a)("a",{href:"/filters/".concat(e.get("id"),"/edit")},void 0,Object(s.a)(r.a,{id:"filter_modal.added.settings_link",defaultMessage:"settings page"}));return Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.title",defaultMessage:"Filter added!"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.short_explanation",defaultMessage:"This post has been added to the following filter category: {title}.",values:{title:e.get("title")}})),a,i,Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.review_and_configure_title",defaultMessage:"Filter settings"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(r.a,{id:"filter_modal.added.review_and_configure",defaultMessage:"To review and further configure this filter category, go to the {settings_link}.",values:{settings_link:l}})),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(_.a,{onClick:this.handleCloseClick},void 0,Object(s.a)(r.a,{id:"report.close",defaultMessage:"Done"})))]})}}var w=Object(h.connect)(((e,t)=>{let{filterId:a}=t;return{filter:e.getIn(["filters",a])}}))(O),v=a(430),N=a.n(v),x=a(382),y=a(14);const C=Object(s.a)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"13",height:"13"},void 0,Object(s.a)("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})),k=Object(s.a)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:"13",height:"13"},void 0,Object(s.a)("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})),S=Object(d.d)({search:{id:"filter_modal.select_filter.search",defaultMessage:"Search or create"},clear:{id:"emoji_button.clear",defaultMessage:"Clear"}});class M extends g.PureComponent{constructor(){super(...arguments),Object(i.a)(this,"state",{searchValue:""}),Object(i.a)(this,"renderItem",(e=>{let t=null;return(e[3]||e[4])&&(t=Object(s.a)("span",{className:"language-dropdown__dropdown__results__item__common-name"},void 0,"(",e[3]&&Object(s.a)(r.a,{id:"filter_modal.select_filter.expired",defaultMessage:"expired"}),e[3]&&e[4]&&", ",e[4]&&Object(s.a)(r.a,{id:"filter_modal.select_filter.context_mismatch",defaultMessage:"does not apply to this context"}),")")),Object(s.a)("div",{role:"button",tabIndex:0,"data-index":e[0],className:"language-dropdown__dropdown__results__item",onClick:this.handleItemClick,onKeyDown:this.handleKeyDown},e[0],Object(s.a)("span",{className:"language-dropdown__dropdown__results__item__native-name"},void 0,e[1])," ",t)})),Object(i.a)(this,"handleSearchChange",(e=>{let{target:t}=e;this.setState({searchValue:t.value})})),Object(i.a)(this,"setListRef",(e=>{this.listNode=e})),Object(i.a)(this,"handleKeyDown",(e=>{const t=Array.from(this.listNode.childNodes).findIndex((t=>t===e.currentTarget));let a=null;switch(e.key){case" ":case"Enter":e.currentTarget.click();break;case"ArrowDown":a=this.listNode.childNodes[t+1]||this.listNode.firstChild;break;case"ArrowUp":a=this.listNode.childNodes[t-1]||this.listNode.lastChild;break;case"Tab":a=e.shiftKey?this.listNode.childNodes[t-1]||this.listNode.lastChild:this.listNode.childNodes[t+1]||this.listNode.firstChild;break;case"Home":a=this.listNode.firstChild;break;case"End":a=this.listNode.lastChild}a&&(a.focus(),e.preventDefault(),e.stopPropagation())})),Object(i.a)(this,"handleSearchKeyDown",(e=>{let t=null;switch(e.key){case"Tab":case"ArrowDown":t=this.listNode.firstChild,t&&(t.focus(),e.preventDefault(),e.stopPropagation())}})),Object(i.a)(this,"handleClear",(()=>{this.setState({searchValue:""})})),Object(i.a)(this,"handleItemClick",(e=>{const t=e.currentTarget.getAttribute("data-index");e.preventDefault(),this.props.onSelectFilter(t)})),Object(i.a)(this,"handleNewFilterClick",(e=>{e.preventDefault(),this.props.onNewFilter(this.state.searchValue)}))}search(){const{filters:e}=this.props,{searchValue:t}=this.state;return""===t?e:N.a.go(t,e,{keys:["1","2"],limit:5,threshold:-1e4}).map((e=>e.obj))}renderCreateNew(e){return Object(s.a)("div",{role:"button",tabIndex:0,className:"language-dropdown__dropdown__results__item",onClick:this.handleNewFilterClick,onKeyDown:this.handleKeyDown},"add-new-filter",Object(s.a)(y.a,{id:"plus",icon:x.a})," ",Object(s.a)(r.a,{id:"filter_modal.select_filter.prompt_new",defaultMessage:"New category: {name}",values:{name:e}}))}render(){const{intl:e}=this.props,{searchValue:t}=this.state,a=""!==t,i=this.search();return Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(r.a,{id:"filter_modal.select_filter.title",defaultMessage:"Filter this post"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(r.a,{id:"filter_modal.select_filter.subtitle",defaultMessage:"Use an existing category or create a new one"})),Object(s.a)("div",{className:"emoji-mart-search"},void 0,Object(s.a)("input",{type:"search",value:t,onChange:this.handleSearchChange,onKeyDown:this.handleSearchKeyDown,placeholder:e.formatMessage(S.search),autoFocus:!0}),Object(s.a)("button",{type:"button",className:"emoji-mart-search-icon",disabled:!a,"aria-label":e.formatMessage(S.clear),onClick:this.handleClear},void 0,a?k:C)),Object(f.jsxs)("div",{className:"language-dropdown__dropdown__results emoji-mart-scroll",role:"listbox",ref:this.setListRef,children:[i.map(this.renderItem),a&&this.renderCreateNew(t)]})]})}}var F=Object(h.connect)(((e,t)=>{let{contextType:a}=t;return{filters:Array.from(e.get("filters").values()).map((e=>{var t;return[e.get("id"),e.get("title"),null===(t=e.get("keywords"))||void 0===t?void 0:t.map((e=>e.get("keyword"))).join("\n"),e.get("expires_at")&&e.get("expires_at")<new Date,a&&!e.get("context").includes(Object(j.a)(a))]}))}}))(Object(c.c)(M));const I=Object(d.d)({close:{id:"lightbox.close",defaultMessage:"Close"}});class D extends n.a{constructor(){super(...arguments),Object(i.a)(this,"state",{step:"select",filterId:null,isSubmitting:!1,isSubmitted:!1}),Object(i.a)(this,"handleNewFilterSuccess",(e=>{this.handleSelectFilter(e.id)})),Object(i.a)(this,"handleSuccess",(()=>{const{dispatch:e,statusId:t}=this.props;e(Object(b.n)(t,!0)),this.setState({isSubmitting:!1,isSubmitted:!0,step:"submitted"})})),Object(i.a)(this,"handleFail",(()=>{this.setState({isSubmitting:!1})})),Object(i.a)(this,"handleNextStep",(e=>{this.setState({step:e})})),Object(i.a)(this,"handleSelectFilter",(e=>{const{dispatch:t,statusId:a}=this.props;this.setState({isSubmitting:!0,filterId:e}),t(Object(u.d)({filter_id:e,status_id:a},this.handleSuccess,this.handleFail))})),Object(i.a)(this,"handleNewFilter",(e=>{const{dispatch:t}=this.props;this.setState({isSubmitting:!0}),t(Object(u.c)({title:e,context:["home","notifications","public","thread","account"],action:"warn"},this.handleNewFilterSuccess,this.handleFail))}))}componentDidMount(){const{dispatch:e}=this.props;e(Object(u.e)())}render(){const{intl:e,statusId:t,contextType:a,onClose:i}=this.props,{step:l,filterId:o}=this.state;let d;switch(l){case"select":d=Object(s.a)(F,{contextType:a,onSelectFilter:this.handleSelectFilter,onNewFilter:this.handleNewFilter});break;case"create":d=null;break;case"submitted":d=Object(s.a)(w,{contextType:a,filterId:o,statusId:t,onClose:i})}return Object(s.a)("div",{className:"modal-root__modal report-dialog-modal"},void 0,Object(s.a)("div",{className:"report-modal__target"},void 0,Object(s.a)(m.a,{className:"report-modal__close",title:e.formatMessage(I.close),icon:"times",iconComponent:p.a,onClick:i,size:20}),Object(s.a)(r.a,{id:"filter_modal.title.status",defaultMessage:"Filter a post"})),Object(s.a)("div",{className:"report-dialog-modal__container"},void 0,d))}}Object(i.a)(D,"propTypes",{statusId:o.a.string.isRequired,contextType:o.a.string,dispatch:o.a.func.isRequired,intl:o.a.object.isRequired});t.default=Object(h.connect)()(Object(c.c)(D))}}]);
//# sourceMappingURL=filter_modal-c3d49452ebb76f889170.chunk.js.map