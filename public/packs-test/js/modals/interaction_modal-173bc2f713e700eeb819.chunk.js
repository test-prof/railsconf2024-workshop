(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{1435:function(e,t,a){"use strict";a.r(t);var o=a(0),i=a(2),n=a(1628),s=a.n(n),r=a(73),c=a.n(r),l=(a(65),a(17),a(170),a(171),a(172),a(173),a(1)),d=a.n(l),u=a(9),h=a(25),p=a(55),m=a(10),b=a.n(m),g=a(8),O=a(379),f=a(117),v=a(134),_=a(176),j=a(21),w=a(7),y=a(30),S=a(14),M=a(6),k=a(5);const C=Object(u.d)({loginPrompt:{id:"interaction_modal.login.prompt",defaultMessage:"Domain of your home server, e.g. mastodon.social"}}),R="mastodon_home",L=e=>{if(/^https?:\/\//.test(e))try{const t=new URL(e);return t.pathname.length>1?"":t.host}catch{return}else if(e.includes("@")){if(e.replace(/^@/,"").split("@").length>2)return;return""}return e},x=(e,t)=>(e=e.trim()).includes(".")&&(e=>{const t=new URL("https:///path");return t.hostname=e,t.hostname===e})(e)?[e].concat(t.filter((t=>t!==e))):t;class N extends d.a.PureComponent{constructor(){super(...arguments),Object(i.a)(this,"state",{value:localStorage&&localStorage.getItem(R)||"",expanded:!1,selectedOption:-1,isLoading:!1,isSubmitting:!1,error:!1,options:[],networkOptions:[]}),Object(i.a)(this,"setRef",(e=>{this.input=e})),Object(i.a)(this,"isValueValid",(e=>{let t=!1,a=null;if(e.startsWith("/"))return!1;if(e.startsWith("@")&&(e=e.slice(1),t=!0),""===e)return!0;a=/^https?:\/\//.test(e)&&!t?e:"https://".concat(e);try{return new URL(a),!0}catch(e){return!1}})),Object(i.a)(this,"handleChange",(e=>{let{target:t}=e;const a=!this.isValueValid(t.value);this.setState((e=>({error:a,value:t.value,isLoading:!0,options:x(t.value,e.networkOptions)})),(()=>this._loadOptions()))})),Object(i.a)(this,"handleMessage",(e=>{var t,a;const{resourceUrl:o}=this.props;if(e.origin===window.origin&&e.source===this.iframeRef.contentWindow)if("fetchInteractionURL-failure"===(null===(t=e.data)||void 0===t?void 0:t.type))this.setState({isSubmitting:!1,error:!0});else if("fetchInteractionURL-success"===(null===(a=e.data)||void 0===a?void 0:a.type))if(/^https?:\/\//.test(e.data.template))try{const t=new URL(e.data.template.replace("{uri}",encodeURIComponent(o)));localStorage&&localStorage.setItem(R,e.data.uri_or_domain),window.location.href=t}catch(e){console.error(e),this.setState({isSubmitting:!1,error:!0})}else this.setState({isSubmitting:!1,error:!0})})),Object(i.a)(this,"handleSubmit",(()=>{const{value:e}=this.state;this.setState({isSubmitting:!0}),this.iframeRef.contentWindow.postMessage({type:"fetchInteractionURL",uri_or_domain:e.trim()},window.origin)})),Object(i.a)(this,"setIFrameRef",(e=>{this.iframeRef=e})),Object(i.a)(this,"handleFocus",(()=>{this.setState({expanded:!0})})),Object(i.a)(this,"handleBlur",(()=>{this.setState({expanded:!1})})),Object(i.a)(this,"handleKeyDown",(e=>{const{options:t,selectedOption:a}=this.state;switch(e.key){case"ArrowDown":e.preventDefault(),t.length>0&&this.setState({selectedOption:Math.min(a+1,t.length-1)});break;case"ArrowUp":e.preventDefault(),t.length>0&&this.setState({selectedOption:Math.max(a-1,-1)});break;case"Enter":e.preventDefault(),-1===a?this.handleSubmit():t.length>0&&this.setState({value:t[a],error:!1},(()=>this.handleSubmit()))}})),Object(i.a)(this,"handleOptionClick",(e=>{const t=Number(e.currentTarget.getAttribute("data-index")),a=this.state.options[t];e.preventDefault(),this.setState({selectedOption:t,value:a,error:!1},(()=>this.handleSubmit()))})),Object(i.a)(this,"_loadOptions",c()((()=>{const{value:e}=this.state,t=L(e.trim());void 0!==t?0!==t.length?Object(w.b)().get("/api/v1/peers/search",{params:{q:t}}).then((e=>{let{data:t}=e;t||(t=[]),this.setState((e=>({networkOptions:t,options:x(e.value,t),isLoading:!1})))})).catch((()=>{this.setState({isLoading:!1})})):this.setState({options:[],networkOptions:[],isLoading:!1}):this.setState({options:[],networkOptions:[],isLoading:!1,error:!0})}),200,{leading:!0,trailing:!0}))}componentDidMount(){window.addEventListener("message",this.handleMessage)}componentWillUnmount(){window.removeEventListener("message",this.handleMessage)}render(){const{intl:e}=this.props,{value:t,expanded:a,options:i,selectedOption:n,error:r,isSubmitting:c}=this.state,l=(L(t)||"").trim(),d=new RegExp("(".concat(s()(l),")"),"gi"),u=l.length>0&&i.length>0;return Object(o.a)("div",{className:b()("interaction-modal__login",{focused:a,expanded:u,invalid:r})},void 0,Object(k.jsx)("iframe",{ref:this.setIFrameRef,style:{display:"none"},src:"/remote_interaction_helper",sandbox:"allow-scripts allow-same-origin",title:"remote interaction helper"}),Object(o.a)("div",{className:"interaction-modal__login__input"},void 0,Object(k.jsx)("input",{ref:this.setRef,type:"text",value:t,placeholder:e.formatMessage(C.loginPrompt),"aria-label":e.formatMessage(C.loginPrompt),autoFocus:!0,onChange:this.handleChange,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,autoComplete:"off",autoCapitalize:"off",spellCheck:"false"}),Object(o.a)(y.a,{onClick:this.handleSubmit,disabled:c||r},void 0,Object(o.a)(h.a,{id:"interaction_modal.login.action",defaultMessage:"Take me home"}))),u&&Object(o.a)("div",{className:"search__popout"},void 0,Object(o.a)("div",{className:"search__popout__menu"},void 0,i.map(((e,t)=>Object(o.a)("button",{onMouseDown:this.handleOptionClick,"data-index":t,className:b()("search__popout__menu__item",{selected:n===t})},e,e.split(d).map(((e,t)=>e.toLowerCase()===l.toLowerCase()?Object(o.a)("mark",{},t,e):Object(o.a)("span",{},t,e)))))))))}}const I=Object(p.c)(N);class U extends d.a.PureComponent{constructor(){super(...arguments),Object(i.a)(this,"handleSignupClick",(()=>{this.props.onSignupClick()}))}render(){const{url:e,type:t,displayNameHtml:a,signupUrl:i}=this.props,n=Object(o.a)("bdi",{dangerouslySetInnerHTML:{__html:a}});let s,r,c,l;switch(t){case"reply":c=Object(o.a)(S.a,{id:"reply",icon:v.a}),s=Object(o.a)(h.a,{id:"interaction_modal.title.reply",defaultMessage:"Reply to {name}'s post",values:{name:n}}),r=Object(o.a)(h.a,{id:"interaction_modal.description.reply",defaultMessage:"With an account on Mastodon, you can respond to this post."});break;case"reblog":c=Object(o.a)(S.a,{id:"retweet",icon:f.a}),s=Object(o.a)(h.a,{id:"interaction_modal.title.reblog",defaultMessage:"Boost {name}'s post",values:{name:n}}),r=Object(o.a)(h.a,{id:"interaction_modal.description.reblog",defaultMessage:"With an account on Mastodon, you can boost this post to share it with your own followers."});break;case"favourite":c=Object(o.a)(S.a,{id:"star",icon:_.a}),s=Object(o.a)(h.a,{id:"interaction_modal.title.favourite",defaultMessage:"Favorite {name}'s post",values:{name:n}}),r=Object(o.a)(h.a,{id:"interaction_modal.description.favourite",defaultMessage:"With an account on Mastodon, you can favorite this post to let the author know you appreciate it and save it for later."});break;case"follow":c=Object(o.a)(S.a,{id:"user-plus",icon:O.a}),s=Object(o.a)(h.a,{id:"interaction_modal.title.follow",defaultMessage:"Follow {name}",values:{name:n}}),r=Object(o.a)(h.a,{id:"interaction_modal.description.follow",defaultMessage:"With an account on Mastodon, you can follow {name} to receive their posts in your home feed.",values:{name:n}})}return l=M.y?Object(o.a)("a",{href:M.y,"data-method":"post",className:"link-button"},void 0,Object(o.a)(h.a,{id:"sign_in_banner.create_account",defaultMessage:"Create account"})):M.t?Object(o.a)("a",{href:i,className:"link-button"},void 0,Object(o.a)(h.a,{id:"sign_in_banner.create_account",defaultMessage:"Create account"})):Object(o.a)("button",{className:"link-button",onClick:this.handleSignupClick},void 0,Object(o.a)(h.a,{id:"sign_in_banner.create_account",defaultMessage:"Create account"})),Object(o.a)("div",{className:"modal-root__modal interaction-modal"},void 0,Object(o.a)("div",{className:"interaction-modal__lead"},void 0,Object(o.a)("h3",{},void 0,Object(o.a)("span",{className:"interaction-modal__icon"},void 0,c)," ",s),Object(o.a)("p",{},void 0,r," ",Object(o.a)("strong",{},void 0,Object(o.a)(h.a,{id:"interaction_modal.sign_in",defaultMessage:"You are not logged in to this server. Where is your account hosted?"})))),Object(o.a)(I,{resourceUrl:e}),Object(o.a)("p",{className:"hint"},void 0,Object(o.a)(h.a,{id:"interaction_modal.sign_in_hint",defaultMessage:"Tip: That's the website where you signed up. If you don't remember, look for the welcome e-mail in your inbox. You can also enter your full username! (e.g. @Mastodon@mastodon.social)"})),Object(o.a)("p",{},void 0,Object(o.a)(h.a,{id:"interaction_modal.no_account_yet",defaultMessage:"Not on Mastodon?"})," ",l))}}t.default=Object(g.connect)(((e,t)=>{let{accountId:a}=t;return{displayNameHtml:e.getIn(["accounts",a,"display_name_html"]),signupUrl:e.getIn(["server","server","registrations","url"],null)||"/auth/sign_up"}}),(e=>({onSignupClick(){e(Object(j.a)({modalType:void 0,ignoreFocus:!1})),e(Object(j.b)({modalType:"CLOSED_REGISTRATIONS"}))}})))(U)},1628:function(e,t,a){var o=a(569),i=/[\\^$.*+?()[\]{}|]/g,n=RegExp(i.source);e.exports=function(e){return(e=o(e))&&n.test(e)?e.replace(i,"\\$&"):e}}}]);
//# sourceMappingURL=interaction_modal-173bc2f713e700eeb819.chunk.js.map