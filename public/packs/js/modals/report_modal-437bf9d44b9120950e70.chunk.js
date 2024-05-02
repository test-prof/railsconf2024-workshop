(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{1549:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a(2),i=(a(17),a(3)),l=a.n(i),c=a(9),d=a(25),r=a(55),n=a(4),u=a(20),b=a.n(u),g=a(23),h=a(8),p=a(44),m=a(261),j=a(63),O=a(24),v=a(26),_=a(1),f=a(30),k=a(1395),y=a(5);const C=Object(c.d)({dislike:{id:"report.reasons.dislike",defaultMessage:"I don't like it"},dislike_description:{id:"report.reasons.dislike_description",defaultMessage:"It is not something you want to see"},spam:{id:"report.reasons.spam",defaultMessage:"It's spam"},spam_description:{id:"report.reasons.spam_description",defaultMessage:"Malicious links, fake engagement, or repetitive replies"},legal:{id:"report.reasons.legal",defaultMessage:"It's illegal"},legal_description:{id:"report.reasons.legal_description",defaultMessage:"You believe it violates the law of your or the server's country"},violation:{id:"report.reasons.violation",defaultMessage:"It violates server rules"},violation_description:{id:"report.reasons.violation_description",defaultMessage:"You are aware that it breaks specific rules"},other:{id:"report.reasons.other",defaultMessage:"It's something else"},other_description:{id:"report.reasons.other_description",defaultMessage:"The issue does not fit into other categories"},status:{id:"report.category.title_status",defaultMessage:"post"},account:{id:"report.category.title_account",defaultMessage:"profile"}});class S extends _.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"handleNextClick",(()=>{const{onNextStep:e,category:t}=this.props;switch(t){case"dislike":e("thanks");break;case"violation":e("rules");break;default:e("statuses")}})),Object(o.a)(this,"handleCategoryToggle",((e,t)=>{const{onChangeCategory:a}=this.props;t&&a(e)}))}render(){const{category:e,startedFrom:t,rules:a,intl:o}=this.props,i=a.size>0?["dislike","spam","legal","violation","other"]:["dislike","spam","legal","other"];return Object(y.jsxs)(y.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(d.a,{id:"report.category.title",defaultMessage:"Tell us what's going on with this {type}",values:{type:o.formatMessage(C[t])}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(d.a,{id:"report.category.subtitle",defaultMessage:"Choose the best match"})),Object(s.a)("div",{},void 0,i.map((t=>Object(s.a)(k.a,{name:"category",value:t,checked:e===t,onToggle:this.handleCategoryToggle,label:o.formatMessage(C[t]),description:o.formatMessage(C["".concat(t,"_description")])},t)))),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(f.a,{onClick:this.handleNextClick,disabled:null===e},void 0,Object(s.a)(d.a,{id:"report.next",defaultMessage:"Next"})))]})}}var M=Object(h.connect)((e=>({rules:e.getIn(["server","server","rules"],Object(n.List)())})))(Object(r.c)(S)),N=a(92),x=a(130),w=a(380),I=a.n(w),T=a(15),R=a(47);const D=Object(c.d)({placeholder:{id:"report.placeholder",defaultMessage:"Type or paste additional comments"}}),F=Object(x.a)([e=>e.get("statuses"),(e,t)=>t],((e,t)=>t.map((t=>e.getIn([t,"in_reply_to_account_id"])))),{resultEqualityCheck:h.shallowEqual});var q=e=>{let{comment:t,domain:a,statusIds:o,isRemote:i,isSubmitting:l,selectedDomains:c,onSubmit:r,onChangeComment:u,onToggleDomain:b}=e;const g=Object(N.a)(),h=Object(R.b)(),p=Object(_.useRef)(!1),m=Object(_.useCallback)((()=>r()),[r]),j=Object(_.useCallback)((e=>u(e.target.value)),[u]),O=Object(_.useCallback)((e=>b(e.target.value,e.target.checked)),[b]),v=Object(_.useCallback)((e=>{13===e.keyCode&&(e.ctrlKey||e.metaKey)&&m()}),[m]),k=Object(R.c)((e=>a?F(e,o):Object(n.List)())),C=Object(R.c)((e=>e.get("accounts"))),S=a?Object(n.OrderedSet)([a]).union(k.map((e=>C.getIn([e,"acct"],"").split("@")[1])).filter((e=>!!e))):Object(n.OrderedSet)();return Object(_.useEffect)((()=>{if(p.current)return;p.current=!0,S.forEach((e=>{b(e,!0)}));Object(n.OrderedSet)(k.filter((e=>e&&!C.has(e)))).forEach((e=>{h(Object(T.A)(e))}))})),Object(y.jsxs)(y.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(d.a,{id:"report.comment.title",defaultMessage:"Is there anything else you think we should know?"})),Object(s.a)("textarea",{className:"report-dialog-modal__textarea",placeholder:g.formatMessage(D.placeholder),value:t,onChange:j,onKeyDown:v,disabled:l}),i&&Object(y.jsxs)(y.Fragment,{children:[Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(d.a,{id:"report.forward_hint",defaultMessage:"The account is from another server. Send an anonymized copy of the report there as well?"})),S.map((e=>Object(s.a)("label",{className:"report-dialog-modal__toggle"},"toggle-".concat(e),Object(s.a)(I.a,{checked:c.includes(e),disabled:l,onChange:O,value:e}),Object(s.a)(d.a,{id:"report.forward",defaultMessage:"Forward to {target}",values:{target:e}}))))]}),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(f.a,{onClick:m,disabled:l},void 0,Object(s.a)(d.a,{id:"report.submit",defaultMessage:"Submit report"})))]})};class z extends _.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"handleNextClick",(()=>{const{onNextStep:e}=this.props;e("statuses")})),Object(o.a)(this,"handleRulesToggle",((e,t)=>{const{onToggle:a}=this.props;a(e,t)}))}render(){const{rules:e,selectedRuleIds:t}=this.props;return Object(y.jsxs)(y.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(d.a,{id:"report.rules.title",defaultMessage:"Which rules are being violated?"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(d.a,{id:"report.rules.subtitle",defaultMessage:"Select all that apply"})),Object(s.a)("div",{},void 0,e.map((e=>Object(s.a)(k.a,{name:"rule_ids",value:e.get("id"),checked:t.includes(e.get("id")),onToggle:this.handleRulesToggle,label:e.get("text"),multiple:!0},e.get("id"))))),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(f.a,{onClick:this.handleNextClick,disabled:t.size<1},void 0,Object(s.a)(d.a,{id:"report.next",defaultMessage:"Next"})))]})}}var A=Object(h.connect)((e=>({rules:e.getIn(["server","server","rules"])})))(z),B=a(169),E=a(41),L=a(45),P=a(52),Y=a(1412),U=a(78),K=a(184),H=a(253);class J extends _.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"handleStatusesToggle",((e,t)=>{const{onToggle:a}=this.props;a(e,t)}))}render(){const{status:e,checked:t}=this.props;if(e.get("reblog"))return null;const a=Object(s.a)("div",{className:"status-check-box__status poll__option__text"},void 0,Object(s.a)("div",{className:"detailed-status__display-name"},void 0,Object(s.a)("div",{className:"detailed-status__display-avatar"},void 0,Object(s.a)(L.a,{account:e.get("account"),size:46})),Object(s.a)("div",{},void 0,Object(s.a)(P.a,{account:e.get("account")})," · ",Object(s.a)("span",{className:"status__visibility-icon"},void 0,Object(s.a)(H.a,{visibility:e.get("visibility")}))," ",Object(s.a)(U.a,{timestamp:e.get("created_at")}))),Object(s.a)(K.a,{status:e}),Object(s.a)(Y.a,{status:e,visible:!1}));return Object(s.a)(k.a,{name:"status_ids",value:e.get("id"),checked:t,onToggle:this.handleStatusesToggle,label:e.get("search_index"),labelComponent:a,multiple:!0})}}var W=J;var G=Object(h.connect)((()=>{const e=Object(E.i)();return(t,a)=>{let{id:s}=a;return{status:e(t,{id:s})}}}))(W);class Q extends _.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"handleNextClick",(()=>{const{onNextStep:e}=this.props;e("comment")}))}render(){const{availableStatusIds:e,selectedStatusIds:t,onToggle:a,isLoading:o}=this.props;return Object(y.jsxs)(y.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(d.a,{id:"report.statuses.title",defaultMessage:"Are there any posts that back up this report?"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(d.a,{id:"report.statuses.subtitle",defaultMessage:"Select all that apply"})),Object(s.a)("div",{className:"report-dialog-modal__statuses"},void 0,o?Object(s.a)(B.a,{}):e.union(t).map((e=>Object(s.a)(G,{id:e,checked:t.includes(e),onToggle:a},e)))),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(f.a,{onClick:this.handleNextClick},void 0,Object(s.a)(d.a,{id:"report.next",defaultMessage:"Next"})))]})}}var V=Object(h.connect)(((e,t)=>{let{accountId:a}=t;return{availableStatusIds:Object(n.OrderedSet)(e.getIn(["timelines","account:".concat(a,":with_replies"),"items"])),isLoading:e.getIn(["timelines","account:".concat(a,":with_replies"),"isLoading"])}}))(Q);class X extends _.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"handleCloseClick",(()=>{const{onClose:e}=this.props;e()})),Object(o.a)(this,"handleUnfollowClick",(()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(T.N)(t.get("id"))),a()})),Object(o.a)(this,"handleMuteClick",(()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(T.H)(t.get("id"))),a()})),Object(o.a)(this,"handleBlockClick",(()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(T.v)(t.get("id"))),a()}))}render(){const{account:e,submitted:t}=this.props;return Object(y.jsxs)(y.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,t?Object(s.a)(d.a,{id:"report.thanks.title_actionable",defaultMessage:"Thanks for reporting, we'll look into this."}):Object(s.a)(d.a,{id:"report.thanks.title",defaultMessage:"Don't want to see this?"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,t?Object(s.a)(d.a,{id:"report.thanks.take_action_actionable",defaultMessage:"While we review this, you can take action against @{name}:",values:{name:e.get("username")}}):Object(s.a)(d.a,{id:"report.thanks.take_action",defaultMessage:"Here are your options for controlling what you see on Mastodon:"})),e.getIn(["relationship","following"])&&Object(y.jsxs)(y.Fragment,{children:[Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(d.a,{id:"report.unfollow",defaultMessage:"Unfollow @{name}",values:{name:e.get("username")}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(d.a,{id:"report.unfollow_explanation",defaultMessage:"You are following this account. To not see their posts in your home feed anymore, unfollow them."})),Object(s.a)(f.a,{secondary:!0,onClick:this.handleUnfollowClick},void 0,Object(s.a)(d.a,{id:"account.unfollow",defaultMessage:"Unfollow"})),Object(s.a)("hr",{})]}),Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(d.a,{id:"account.mute",defaultMessage:"Mute @{name}",values:{name:e.get("username")}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(d.a,{id:"report.mute_explanation",defaultMessage:"You will not see their posts. They can still follow you and see your posts and will not know that they are muted."})),Object(s.a)(f.a,{secondary:!0,onClick:this.handleMuteClick},void 0,e.getIn(["relationship","muting"])?Object(s.a)(d.a,{id:"account.muted",defaultMessage:"Muted"}):Object(s.a)(d.a,{id:"report.mute",defaultMessage:"Mute"})),Object(s.a)("hr",{}),Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(d.a,{id:"account.block",defaultMessage:"Block @{name}",values:{name:e.get("username")}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(d.a,{id:"report.block_explanation",defaultMessage:"You will not see their posts. They will not be able to see your posts or follow you. They will be able to tell that they are blocked."})),Object(s.a)(f.a,{secondary:!0,onClick:this.handleBlockClick},void 0,e.getIn(["relationship","blocking"])?Object(s.a)(d.a,{id:"account.blocked",defaultMessage:"Blocked"}):Object(s.a)(d.a,{id:"report.block",defaultMessage:"Block"})),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(f.a,{onClick:this.handleCloseClick},void 0,Object(s.a)(d.a,{id:"report.close",defaultMessage:"Done"})))]})}}var Z=Object(h.connect)((()=>({})))(X);const $=Object(c.d)({close:{id:"lightbox.close",defaultMessage:"Close"}});class ee extends g.a{constructor(){super(...arguments),Object(o.a)(this,"state",{step:"category",selectedStatusIds:Object(n.OrderedSet)(this.props.statusId?[this.props.statusId]:[]),selectedDomains:Object(n.OrderedSet)(),comment:"",category:null,selectedRuleIds:Object(n.OrderedSet)(),isSubmitting:!1,isSubmitted:!1}),Object(o.a)(this,"handleSubmit",(()=>{const{dispatch:e,accountId:t}=this.props,{selectedStatusIds:a,selectedDomains:s,comment:o,category:i,selectedRuleIds:l}=this.state;this.setState({isSubmitting:!0}),e(Object(m.b)({account_id:t,status_ids:a.toArray(),forward_to_domains:s.toArray(),comment:o,forward:s.size>0,category:i,rule_ids:l.toArray()},this.handleSuccess,this.handleFail))})),Object(o.a)(this,"handleSuccess",(()=>{this.setState({isSubmitting:!1,isSubmitted:!0,step:"thanks"})})),Object(o.a)(this,"handleFail",(()=>{this.setState({isSubmitting:!1})})),Object(o.a)(this,"handleStatusToggle",((e,t)=>{const{selectedStatusIds:a}=this.state;t?this.setState({selectedStatusIds:a.add(e)}):this.setState({selectedStatusIds:a.remove(e)})})),Object(o.a)(this,"handleDomainToggle",((e,t)=>{t?this.setState((t=>({selectedDomains:t.selectedDomains.add(e)}))):this.setState((t=>({selectedDomains:t.selectedDomains.remove(e)})))})),Object(o.a)(this,"handleRuleToggle",((e,t)=>{t?this.setState((t=>({selectedRuleIds:t.selectedRuleIds.add(e)}))):this.setState((t=>({selectedRuleIds:t.selectedRuleIds.remove(e)})))})),Object(o.a)(this,"handleChangeCategory",(e=>{this.setState({category:e})})),Object(o.a)(this,"handleChangeComment",(e=>{this.setState({comment:e})})),Object(o.a)(this,"handleNextStep",(e=>{this.setState({step:e})}))}componentDidMount(){const{dispatch:e,accountId:t}=this.props;e(Object(O.u)(t,{withReplies:!0})),e(Object(j.o)())}render(){const{accountId:e,account:t,intl:a,onClose:o}=this.props;if(!t)return null;const{step:i,selectedStatusIds:l,selectedRuleIds:c,selectedDomains:r,comment:n,category:u,isSubmitting:b,isSubmitted:g}=this.state,h=t.get("acct").split("@")[1],m=!!h;let j;switch(i){case"category":j=Object(s.a)(M,{onNextStep:this.handleNextStep,startedFrom:this.props.statusId?"status":"account",category:u,onChangeCategory:this.handleChangeCategory});break;case"rules":j=Object(s.a)(A,{onNextStep:this.handleNextStep,selectedRuleIds:c,onToggle:this.handleRuleToggle});break;case"statuses":j=Object(s.a)(V,{onNextStep:this.handleNextStep,accountId:e,selectedStatusIds:l,onToggle:this.handleStatusToggle});break;case"comment":j=Object(s.a)(q,{onSubmit:this.handleSubmit,isSubmitting:b,isRemote:m,comment:n,domain:h,onChangeComment:this.handleChangeComment,statusIds:l,selectedDomains:r,onToggleDomain:this.handleDomainToggle});break;case"thanks":j=Object(s.a)(Z,{submitted:g,account:t,onClose:o})}return Object(s.a)("div",{className:"modal-root__modal report-dialog-modal"},void 0,Object(s.a)("div",{className:"report-modal__target"},void 0,Object(s.a)(v.a,{className:"report-modal__close",title:a.formatMessage($.close),icon:"times",iconComponent:p.a,onClick:o,size:20}),Object(s.a)(d.a,{id:"report.target",defaultMessage:"Report {target}",values:{target:Object(s.a)("strong",{},void 0,t.get("acct"))}})),Object(s.a)("div",{className:"report-dialog-modal__container"},void 0,j))}}Object(o.a)(ee,"propTypes",{accountId:l.a.string.isRequired,statusId:l.a.string,dispatch:l.a.func.isRequired,intl:l.a.object.isRequired,account:b.a.record.isRequired});t.default=Object(h.connect)((()=>{const e=Object(E.e)();return(t,a)=>{let{accountId:s}=a;return{account:e(t,s)}}}))(Object(r.c)(ee))}}]);
//# sourceMappingURL=report_modal-437bf9d44b9120950e70.chunk.js.map