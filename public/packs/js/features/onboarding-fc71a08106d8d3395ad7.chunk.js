(window.webpackJsonp=window.webpackJsonp||[]).push([[476],{1548:function(e,t,a){"use strict";a.r(t);var o,i=a(0),n=a(1),s=a(9),c=a(92),l=a(25),d=a(112),r=a(35),b=a(19),u=a(8),p=a(567);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},g.apply(this,arguments)}var h,m=function(e){let{title:t,titleId:a,...i}=e;return n.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":a},i),t?n.createElement("title",{id:a},t):null,o||(o=n.createElement("path",{d:"M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"})))};function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},j.apply(this,arguments)}var v,O=function(e){let{title:t,titleId:a,...o}=e;return n.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":a},o),t?n.createElement("title",{id:a},t):null,h||(h=n.createElement("path",{d:"m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"})))},f=a(396);function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},_.apply(this,arguments)}var y=function(e){let{title:t,titleId:a,...o}=e;return n.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":a},o),t?n.createElement("title",{id:a},t):null,v||(v=n.createElement("path",{d:"M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"})))},w=a(379),M=a(13),k=a(14),N=a(1381),x=a(6),C=a(47),T=a(105),q=a(383),S=a(5);const I=e=>{let{label:t,description:a,icon:o,iconComponent:n,completed:s,onClick:c,href:l,to:d}=e;const r=Object(S.jsxs)(S.Fragment,{children:[Object(i.a)("div",{className:"onboarding__steps__item__icon"},void 0,Object(i.a)(k.a,{id:o,icon:n})),Object(i.a)("div",{className:"onboarding__steps__item__description"},void 0,Object(i.a)("h6",{},void 0,t),Object(i.a)("p",{},void 0,a)),Object(i.a)("div",{className:s?"onboarding__steps__item__progress":"onboarding__steps__item__go"},void 0,s?Object(i.a)(k.a,{icon:q.a}):Object(i.a)(k.a,{icon:O}))]});return l?Object(i.a)("a",{href:l,onClick:c,target:"_blank",rel:"noopener",className:"onboarding__steps__item"},void 0,r):d?Object(i.a)(b.a,{to:d,className:"onboarding__steps__item"},void 0,r):Object(i.a)("button",{onClick:c,className:"onboarding__steps__item"},void 0,r)};var Z=a(142),E=a(24),L=a(1388),D=a(447),R=a(204);const B=()=>{const e=Object(u.useDispatch)(),t=Object(C.c)((e=>e.getIn(["suggestions","isLoading"]))),a=Object(C.c)((e=>e.getIn(["suggestions","items"])));let o;return Object(n.useEffect)((()=>(e(Object(Z.f)(!0)),()=>{e(Object(E.F)("home"))})),[e]),o=t?new Array(8).fill().map(((e,t)=>Object(i.a)(D.a,{},t))):a.isEmpty()?Object(i.a)("div",{className:"follow-recommendations__empty"},void 0,Object(i.a)(l.a,{id:"onboarding.follows.empty",defaultMessage:"Unfortunately, no results can be shown right now. You can try using search or browsing the explore page to find people to follow, or try again later."})):a.map((e=>Object(i.a)(R.a,{id:e.get("account"),withBio:!0},e.get("account")))),Object(S.jsxs)(S.Fragment,{children:[Object(i.a)(L.a,{}),Object(i.a)("div",{className:"scrollable privacy-policy"},void 0,Object(i.a)("div",{className:"column-title"},void 0,Object(i.a)("h3",{},void 0,Object(i.a)(l.a,{id:"onboarding.follows.title",defaultMessage:"Popular on Mastodon"})),Object(i.a)("p",{},void 0,Object(i.a)(l.a,{id:"onboarding.follows.lead",defaultMessage:"You curate your own home feed. The more people you follow, the more active and interesting it will be. These profiles may be a good starting point—you can always unfollow them later!"}))),Object(i.a)("div",{className:"follow-recommendations"},void 0,o),Object(i.a)("p",{className:"onboarding__lead"},void 0,Object(i.a)(l.a,{id:"onboarding.tips.accounts_from_other_servers",defaultMessage:"<strong>Did you know?</strong> Since Mastodon is decentralized, some profiles you come across will be hosted on servers other than yours. And yet you can interact with them seamlessly! Their server is in the second half of their username!",values:{strong:e=>Object(i.a)("strong",{},void 0,e)}})),Object(i.a)("div",{className:"onboarding__footer"},void 0,Object(i.a)(b.a,{className:"link-button",to:"/start"},void 0,Object(i.a)(l.a,{id:"onboarding.actions.back",defaultMessage:"Take me back"}))))]})};a(32),a(17),a(170),a(171),a(172),a(173);var F,H=a(10),P=a.n(H),Y=a(380),U=a.n(Y);function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},A.apply(this,arguments)}var W=function(e){let{title:t,titleId:a,...o}=e;return n.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":a},o),t?n.createElement("title",{id:a},t):null,F||(F=n.createElement("path",{d:"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm480-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160Zm-40-480v560-560Z"})))},z=a(248),K=a(15),J=a(30),G=a(169),Q=a(159);const V=Object(s.d)({uploadHeader:{id:"onboarding.profile.upload_header",defaultMessage:"Upload profile header"},uploadAvatar:{id:"onboarding.profile.upload_avatar",defaultMessage:"Upload profile picture"}}),X=e=>e.endsWith("missing.png")?null:e,$=()=>{const e=Object(C.c)((e=>e.getIn(["accounts",x.o]))),[t,a]=Object(n.useState)(e.get("display_name")),[o,s]=Object(n.useState)(Object(Q.a)(e.get("note"))),[d,b]=Object(n.useState)(null),[p,g]=Object(n.useState)(null),[h,m]=Object(n.useState)(e.get("discoverable")),[j,v]=Object(n.useState)(!1),[O,f]=Object(n.useState)(),_=Object(n.createRef)(),y=Object(n.createRef)(),w=Object(u.useDispatch)(),M=Object(c.a)(),N=Object(r.g)(),T=Object(n.useCallback)((e=>{a(e.target.value)}),[a]),q=Object(n.useCallback)((e=>{s(e.target.value)}),[s]),I=Object(n.useCallback)((e=>{m(e.target.checked)}),[m]),Z=Object(n.useCallback)((e=>{var t;b(null===(t=e.target)||void 0===t||null===(t=t.files)||void 0===t?void 0:t[0])}),[b]),E=Object(n.useCallback)((e=>{var t;g(null===(t=e.target)||void 0===t||null===(t=t.files)||void 0===t?void 0:t[0])}),[g]),D=Object(n.useMemo)((()=>d?URL.createObjectURL(d):X(e.get("avatar"))),[d,e]),R=Object(n.useMemo)((()=>p?URL.createObjectURL(p):X(e.get("header"))),[p,e]),B=Object(n.useCallback)((()=>{v(!0),w(Object(K.R)({displayName:t,note:o,avatar:d,header:p,discoverable:h,indexable:h})).then((()=>N.push("/start/follows"))).catch((e=>{v(!1),f(e.response.data.details)}))}),[w,t,o,d,p,h,N]);return Object(S.jsxs)(S.Fragment,{children:[Object(i.a)(L.a,{}),Object(i.a)("div",{className:"scrollable privacy-policy"},void 0,Object(i.a)("div",{className:"column-title"},void 0,Object(i.a)("h3",{},void 0,Object(i.a)(l.a,{id:"onboarding.profile.title",defaultMessage:"Profile setup"})),Object(i.a)("p",{},void 0,Object(i.a)(l.a,{id:"onboarding.profile.lead",defaultMessage:"You can always complete this later in the settings, where even more customization options are available."}))),Object(i.a)("div",{className:"simple_form"},void 0,Object(i.a)("div",{className:"onboarding__profile"},void 0,Object(i.a)("label",{className:P()("app-form__header-input",{selected:!!R,invalid:!(null==O||!O.header)}),title:M.formatMessage(V.uploadHeader)},void 0,Object(S.jsx)("input",{type:"file",hidden:!0,ref:y,accept:"image/*",onChange:E}),R&&Object(i.a)("img",{src:R,alt:""}),Object(i.a)(k.a,{icon:R?z.a:W})),Object(i.a)("label",{className:P()("app-form__avatar-input",{selected:!!D,invalid:!(null==O||!O.avatar)}),title:M.formatMessage(V.uploadAvatar)},void 0,Object(S.jsx)("input",{type:"file",hidden:!0,ref:_,accept:"image/*",onChange:Z}),D&&Object(i.a)("img",{src:D,alt:""}),Object(i.a)(k.a,{icon:D?z.a:W}))),Object(i.a)("div",{className:P()("input with_block_label",{field_with_errors:!(null==O||!O.display_name)})},void 0,Object(i.a)("label",{htmlFor:"display_name"},void 0,Object(i.a)(l.a,{id:"onboarding.profile.display_name",defaultMessage:"Display name"})),Object(i.a)("span",{className:"hint"},void 0,Object(i.a)(l.a,{id:"onboarding.profile.display_name_hint",defaultMessage:"Your full name or your fun name…"})),Object(i.a)("div",{className:"label_input"},void 0,Object(i.a)("input",{id:"display_name",type:"text",value:t,onChange:T,maxLength:30}))),Object(i.a)("div",{className:P()("input with_block_label",{field_with_errors:!(null==O||!O.note)})},void 0,Object(i.a)("label",{htmlFor:"note"},void 0,Object(i.a)(l.a,{id:"onboarding.profile.note",defaultMessage:"Bio"})),Object(i.a)("span",{className:"hint"},void 0,Object(i.a)(l.a,{id:"onboarding.profile.note_hint",defaultMessage:"You can @mention other people or #hashtags…"})),Object(i.a)("div",{className:"label_input"},void 0,Object(i.a)("textarea",{id:"note",value:o,onChange:q,maxLength:500}))),Object(i.a)("label",{className:"app-form__toggle"},void 0,Object(i.a)("div",{className:"app-form__toggle__label"},void 0,Object(i.a)("strong",{},void 0,Object(i.a)(l.a,{id:"onboarding.profile.discoverable",defaultMessage:"Make my profile discoverable"}))," ",Object(i.a)("span",{className:"recommended"},void 0,Object(i.a)(l.a,{id:"recommended",defaultMessage:"Recommended"})),Object(i.a)("span",{className:"hint"},void 0,Object(i.a)(l.a,{id:"onboarding.profile.discoverable_hint",defaultMessage:"When you opt in to discoverability on Mastodon, your posts may appear in search results and trending, and your profile may be suggested to people with similar interests to you."}))),Object(i.a)("div",{className:"app-form__toggle__toggle"},void 0,Object(i.a)("div",{},void 0,Object(i.a)(U.a,{checked:h,onChange:I}))))),Object(i.a)("div",{className:"onboarding__footer"},void 0,Object(i.a)(J.a,{block:!0,onClick:B,disabled:j},void 0,j?Object(i.a)(G.a,{}):Object(i.a)(l.a,{id:"onboarding.profile.save_and_continue",defaultMessage:"Save and continue"}))))]})};var ee=a(2),te=a(390),ae=a.n(te);const oe=Object(s.d)({shareableMessage:{id:"onboarding.share.message",defaultMessage:"I'm {username} on #Mastodon! Come follow me at {url}"}});class ie extends n.PureComponent{constructor(){super(...arguments),Object(ee.a)(this,"state",{copied:!1,focused:!1}),Object(ee.a)(this,"setRef",(e=>{this.input=e})),Object(ee.a)(this,"handleInputClick",(()=>{this.setState({copied:!1}),this.input.focus(),this.input.select(),this.input.setSelectionRange(0,this.props.value.length)})),Object(ee.a)(this,"handleButtonClick",(e=>{e.stopPropagation();const{value:t}=this.props;navigator.clipboard.writeText(t),this.input.blur(),this.setState({copied:!0}),this.timeout=setTimeout((()=>this.setState({copied:!1})),700)})),Object(ee.a)(this,"handleFocus",(()=>{this.setState({focused:!0})})),Object(ee.a)(this,"handleBlur",(()=>{this.setState({focused:!1})}))}componentWillUnmount(){this.timeout&&clearTimeout(this.timeout)}render(){const{value:e}=this.props,{copied:t,focused:a}=this.state;return Object(i.a)("div",{className:P()("copy-paste-text",{copied:t,focused:a}),tabIndex:"0",role:"button",onClick:this.handleInputClick},void 0,Object(S.jsx)("textarea",{readOnly:!0,value:e,ref:this.setRef,onClick:this.handleInputClick,onFocus:this.handleFocus,onBlur:this.handleBlur}),Object(i.a)("button",{className:"button",onClick:this.handleButtonClick},void 0,Object(i.a)(k.a,{id:"copy",icon:f.a})," ",t?Object(i.a)(l.a,{id:"copypaste.copied",defaultMessage:"Copied"}):Object(i.a)(l.a,{id:"copypaste.copy_to_clipboard",defaultMessage:"Copy to clipboard"})))}}class ne extends n.PureComponent{constructor(){super(...arguments),Object(ee.a)(this,"state",{index:0}),Object(ee.a)(this,"handleSwipe",(e=>{this.setState({index:e})})),Object(ee.a)(this,"handleChangeIndex",(e=>{this.setState({index:Number(e.currentTarget.getAttribute("data-index"))})})),Object(ee.a)(this,"handleKeyDown",(e=>{switch(e.key){case"ArrowLeft":e.preventDefault(),this.setState(((e,t)=>{let{index:a}=e,{children:o}=t;return{index:Math.abs(a-1)%o.length}}));break;case"ArrowRight":e.preventDefault(),this.setState(((e,t)=>{let{index:a}=e,{children:o}=t;return{index:(a+1)%o.length}}))}}))}render(){const{children:e}=this.props,{index:t}=this.state;return Object(i.a)("div",{className:"tip-carousel",tabIndex:"0",onKeyDown:this.handleKeyDown},void 0,Object(i.a)(ae.a,{onChangeIndex:this.handleSwipe,index:t,enableMouseEvents:!0,tabIndex:"-1"},void 0,e),Object(i.a)("div",{className:"media-modal__pagination"},void 0,e.map(((e,a)=>Object(i.a)("button",{className:P()("media-modal__page-dot",{active:a===t}),"data-index":a,onClick:this.handleChangeIndex},a,a+1)))))}}const se=()=>{const e=Object(C.c)((e=>e.getIn(["accounts",x.o]))),t=Object(c.a)(),a=new URL("/@".concat(e.get("username")),document.baseURI).href;return Object(S.jsxs)(S.Fragment,{children:[Object(i.a)(L.a,{}),Object(i.a)("div",{className:"scrollable privacy-policy"},void 0,Object(i.a)("div",{className:"column-title"},void 0,Object(i.a)("h3",{},void 0,Object(i.a)(l.a,{id:"onboarding.share.title",defaultMessage:"Share your profile"})),Object(i.a)("p",{},void 0,Object(i.a)(l.a,{id:"onboarding.share.lead",defaultMessage:"Let people know how they can find you on Mastodon!"}))),Object(i.a)(ie,{value:t.formatMessage(oe.shareableMessage,{username:"@".concat(e.get("username"),"@").concat(x.i),url:a})}),Object(i.a)(ne,{},void 0,Object(i.a)("div",{},void 0,Object(i.a)("p",{className:"onboarding__lead"},void 0,Object(i.a)(l.a,{id:"onboarding.tips.verification",defaultMessage:"<strong>Did you know?</strong> You can verify your account by putting a link to your Mastodon profile on your own website and adding the website to your profile. No fees or documents necessary!",values:{strong:e=>Object(i.a)("strong",{},void 0,e)}}))),Object(i.a)("div",{},void 0,Object(i.a)("p",{className:"onboarding__lead"},void 0,Object(i.a)(l.a,{id:"onboarding.tips.migration",defaultMessage:"<strong>Did you know?</strong> If you feel like {domain} is not a great server choice for you in the future, you can move to another Mastodon server without losing your followers. You can even host your own server!",values:{domain:x.i,strong:e=>Object(i.a)("strong",{},void 0,e)}}))),Object(i.a)("div",{},void 0,Object(i.a)("p",{className:"onboarding__lead"},void 0,Object(i.a)(l.a,{id:"onboarding.tips.2fa",defaultMessage:"<strong>Did you know?</strong> You can secure your account by setting up two-factor authentication in your account settings. It works with any TOTP app of your choice, no phone number necessary!",values:{strong:e=>Object(i.a)("strong",{},void 0,e)}})))),Object(i.a)("p",{className:"onboarding__lead"},void 0,Object(i.a)(l.a,{id:"onboarding.share.next_steps",defaultMessage:"Possible next steps:"})),Object(i.a)("div",{className:"onboarding__links"},void 0,Object(i.a)(b.a,{to:"/home",className:"onboarding__link"},void 0,Object(i.a)(l.a,{id:"onboarding.actions.go_to_home",defaultMessage:"Take me to my home feed"}),Object(i.a)(k.a,{icon:O})),Object(i.a)(b.a,{to:"/explore",className:"onboarding__link"},void 0,Object(i.a)(l.a,{id:"onboarding.actions.go_to_explore",defaultMessage:"Take me to trending"}),Object(i.a)(k.a,{icon:O}))),Object(i.a)("div",{className:"onboarding__footer"},void 0,Object(i.a)(b.a,{className:"link-button",to:"/start"},void 0,Object(i.a)(l.a,{id:"onboarding.action.back",defaultMessage:"Take me back"}))))]})},ce=Object(s.d)({template:{id:"onboarding.compose.template",defaultMessage:"Hello #Mastodon!"}});t.default=()=>{const e=Object(C.c)((e=>e.getIn(["accounts",x.o]))),t=Object(u.useDispatch)(),a=Object(c.a)(),o=Object(r.g)(),s=Object(n.useCallback)((()=>{t(Object(M.lb)(o,a.formatMessage(ce.template)))}),[t,a,o]);return Object(i.a)(N.a,{},void 0,Object(i.a)(r.d,{},void 0,Object(i.a)(r.b,{path:"/start",exact:!0},void 0,Object(i.a)("div",{className:"scrollable privacy-policy"},void 0,Object(i.a)("div",{className:"column-title"},void 0,Object(i.a)("img",{src:p.default,alt:"",className:"onboarding__illustration"}),Object(i.a)("h3",{},void 0,Object(i.a)(l.a,{id:"onboarding.start.title",defaultMessage:"You've made it!"})),Object(i.a)("p",{},void 0,Object(i.a)(l.a,{id:"onboarding.start.lead",defaultMessage:"Your new Mastodon account is ready to go. Here's how you can make the most of it:"}))),Object(i.a)("div",{className:"onboarding__steps"},void 0,Object(i.a)(I,{to:"/start/profile",completed:!e.get("avatar").endsWith("missing.png")||e.get("display_name").length>0&&e.get("note").length>0,icon:"address-book-o",iconComponent:m,label:Object(i.a)(l.a,{id:"onboarding.steps.setup_profile.title",defaultMessage:"Customize your profile"}),description:Object(i.a)(l.a,{id:"onboarding.steps.setup_profile.body",defaultMessage:"Others are more likely to interact with you with a filled out profile."})}),Object(i.a)(I,{to:"/start/follows",completed:1*e.get("following_count")>=1,icon:"user-plus",iconComponent:w.a,label:Object(i.a)(l.a,{id:"onboarding.steps.follow_people.title",defaultMessage:"Find at least {count, plural, one {one person} other {# people}} to follow",values:{count:7}}),description:Object(i.a)(l.a,{id:"onboarding.steps.follow_people.body",defaultMessage:"You curate your own home feed. Let's fill it with interesting people."})}),Object(i.a)(I,{onClick:s,completed:1*e.get("statuses_count")>=1,icon:"pencil-square-o",iconComponent:y,label:Object(i.a)(l.a,{id:"onboarding.steps.publish_status.title",defaultMessage:"Make your first post"}),description:Object(i.a)(l.a,{id:"onboarding.steps.publish_status.body",defaultMessage:"Say hello to the world.",values:{emoji:Object(i.a)("img",{className:"emojione",alt:"🐘",src:"".concat(T.a,"/emoji/1f418.svg")})}})}),Object(i.a)(I,{to:"/start/share",icon:"copy",iconComponent:f.a,label:Object(i.a)(l.a,{id:"onboarding.steps.share_profile.title",defaultMessage:"Share your profile"}),description:Object(i.a)(l.a,{id:"onboarding.steps.share_profile.body",defaultMessage:"Let your friends know how to find you on Mastodon!"})})),Object(i.a)("p",{className:"onboarding__lead"},void 0,Object(i.a)(l.a,{id:"onboarding.start.skip",defaultMessage:"Don't need help getting started?"})),Object(i.a)("div",{className:"onboarding__links"},void 0,Object(i.a)(b.a,{to:"/explore",className:"onboarding__link"},void 0,Object(i.a)(l.a,{id:"onboarding.actions.go_to_explore",defaultMessage:"Take me to trending"}),Object(i.a)(k.a,{icon:O})),Object(i.a)(b.a,{to:"/home",className:"onboarding__link"},void 0,Object(i.a)(l.a,{id:"onboarding.actions.go_to_home",defaultMessage:"Take me to my home feed"}),Object(i.a)(k.a,{icon:O}))))),Object(i.a)(r.b,{path:"/start/profile",component:$}),Object(i.a)(r.b,{path:"/start/follows",component:B}),Object(i.a)(r.b,{path:"/start/share",component:se})),Object(i.a)(d.a,{},void 0,Object(i.a)("meta",{name:"robots",content:"noindex"})))}}}]);
//# sourceMappingURL=onboarding-fc71a08106d8d3395ad7.chunk.js.map