(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{1547:function(t,e,i){"use strict";i.r(e);var n,a=i(0),o=i(2),s=i(61),l=i.n(s),c=(i(17),i(3)),r=i.n(c),d=i(1),b=i(9),f=i(25),g=i(55),h=i(112),u=i(130),p=i(4),O=i(8);function j(){return j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},j.apply(this,arguments)}var m=function(t){let{title:e,titleId:i,...a}=t;return d.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":i},a),e?d.createElement("title",{id:i},e):null,n||(n=d.createElement("path",{d:"M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"})))},v=i(394),_=i(40),w=i(14),C=i(1406),M=i(203),P=i(90),y=i(28),k=i(229),x=i(228),N=i(529),I=i(376),q=i(19),F=i(1397),T=i(185);const S=()=>{const t=Object(O.useDispatch)(),e=Object(O.useSelector)((t=>t.get("notificationPolicy")));return Object(d.useEffect)((()=>{t(Object(y.K)());const e=setInterval((()=>{t(Object(y.K)())}),12e4);return()=>{clearInterval(e)}}),[t]),null===e||0===e.getIn(["summary","pending_notifications_count"])?null:Object(a.a)(q.a,{className:"filtered-notifications-banner",to:"/notifications/requests"},void 0,Object(a.a)(w.a,{icon:F.a}),Object(a.a)("div",{className:"filtered-notifications-banner__text"},void 0,Object(a.a)("strong",{},void 0,Object(a.a)(f.a,{id:"filtered_notifications_banner.title",defaultMessage:"Filtered notifications"})),Object(a.a)("span",{},void 0,Object(a.a)(f.a,{id:"filtered_notifications_banner.pending_requests",defaultMessage:"Notifications from {count, plural, =0 {no one} one {one person} other {# people}} you may know",values:{count:e.getIn(["summary","pending_requests_count"])}}))),Object(a.a)("div",{className:"filtered-notifications-banner__badge"},void 0,Object(a.a)("div",{className:"filtered-notifications-banner__badge__badge"},void 0,Object(T.d)(e.getIn(["summary","pending_notifications_count"]))),Object(a.a)(f.a,{id:"filtered_notifications_banner.mentions",defaultMessage:"{count, plural, one {mention} other {mentions}}",values:{count:e.getIn(["summary","pending_notifications_count"])}})))};var L;function A(){return A=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},A.apply(this,arguments)}var U=function(t){let{title:e,titleId:i,...n}=t;return d.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",height:20,viewBox:"0 -960 960 960",width:20,"aria-labelledby":i},n),e?d.createElement("title",{id:i},e):null,L||(L=d.createElement("path",{d:"m403-96-22-114q-23-9-44.5-21T296-259l-110 37-77-133 87-76q-2-12-3-24t-1-25q0-13 1-25t3-24l-87-76 77-133 110 37q19-16 40.5-28t44.5-21l22-114h154l22 114q23 9 44.5 21t40.5 28l110-37 77 133-87 76q2 12 3 24t1 25q0 13-1 25t-3 24l87 76-77 133-110-37q-19 16-40.5 28T579-210L557-96H403Zm59-72h36l19-99q38-7 71-26t57-48l96 32 18-30-76-67q6-17 9.5-35.5T696-480q0-20-3.5-38.5T683-554l76-67-18-30-96 32q-24-29-57-48t-71-26l-19-99h-36l-19 99q-38 7-71 26t-57 48l-96-32-18 30 76 67q-6 17-9.5 35.5T264-480q0 20 3.5 38.5T277-406l-76 67 18 30 96-32q24 29 57 48t71 26l19 99Zm18-168q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102q0 60 42 102t102 42Zm0-144Z"})))},E=i(44),D=i(46),R=i(30),Z=i(26);const B=Object(b.d)({close:{id:"lightbox.close",defaultMessage:"Close"}});class H extends d.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"handleClick",(()=>{this.props.dispatch(Object(y.S)())})),Object(o.a)(this,"handleClose",(()=>{this.props.dispatch(Object(D.c)(["notifications","dismissPermissionBanner"],!0))}))}render(){const{intl:t}=this.props;return Object(a.a)("div",{className:"notifications-permission-banner"},void 0,Object(a.a)("div",{className:"notifications-permission-banner__close"},void 0,Object(a.a)(Z.a,{icon:"times",iconComponent:E.a,onClick:this.handleClose,title:t.formatMessage(B.close)})),Object(a.a)("h2",{},void 0,Object(a.a)(f.a,{id:"notifications_permission_banner.title",defaultMessage:"Never miss a thing"})),Object(a.a)("p",{},void 0,Object(a.a)(f.a,{id:"notifications_permission_banner.how_to_control",defaultMessage:"To receive notifications when Mastodon isn't open, enable desktop notifications. You can control precisely which types of interactions generate desktop notifications through the {icon} button above once they're enabled.",values:{icon:Object(a.a)(w.a,{id:"sliders",icon:U})}})),Object(a.a)(R.a,{onClick:this.handleClick},void 0,Object(a.a)(f.a,{id:"notifications_permission_banner.enable",defaultMessage:"Enable desktop notifications"})))}}var z=Object(O.connect)()(Object(g.c)(H)),W=i(49),G=i(21),K=i(163),Y=i(60),J=i(380),Q=i.n(J);const V=t=>{let{checked:e,disabled:i,children:n,onChange:o}=t;const s=Object(d.useCallback)((t=>{let{target:e}=t;o(e.checked)}),[o]);return Object(a.a)("label",{className:"app-form__toggle"},void 0,Object(a.a)("div",{className:"app-form__toggle__label"},void 0,n),Object(a.a)("div",{className:"app-form__toggle__toggle"},void 0,Object(a.a)("div",{},void 0,Object(a.a)(Q.a,{checked:e,onChange:s,disabled:i}))))};var X;function $(){return $=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},$.apply(this,arguments)}var tt=function(t){let{title:e,titleId:i,...n}=t;return d.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 -960 960 960",width:24,"aria-labelledby":i},n),e?d.createElement("title",{id:i},e):null,X||(X=d.createElement("path",{d:"m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"})))};class et extends d.PureComponent{render(){return Object(a.a)("button",{className:"text-btn column-header__setting-btn",tabIndex:0,onClick:this.props.onClick},void 0,Object(a.a)(w.a,{id:"eraser",icon:tt})," ",Object(a.a)(f.a,{id:"notifications.clear",defaultMessage:"Clear notifications"}))}}class it extends d.PureComponent{render(){return Object(a.a)("button",{className:"text-btn column-header__permission-btn",tabIndex:0,onClick:this.props.onClick},void 0,Object(a.a)(f.a,{id:"notifications.grant_permission",defaultMessage:"Grant permission."}))}}var nt=i(1389);class at extends d.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"onPushChange",((t,e)=>{this.props.onChange(["push",...t],e)})),Object(o.a)(this,"handleFilterNotFollowing",(t=>{this.props.onChangePolicy("filter_not_following",t)})),Object(o.a)(this,"handleFilterNotFollowers",(t=>{this.props.onChangePolicy("filter_not_followers",t)})),Object(o.a)(this,"handleFilterNewAccounts",(t=>{this.props.onChangePolicy("filter_new_accounts",t)})),Object(o.a)(this,"handleFilterPrivateMentions",(t=>{this.props.onChangePolicy("filter_private_mentions",t)}))}render(){const{settings:t,pushSettings:e,onChange:i,onClear:n,alertsEnabled:o,browserSupport:s,browserPermission:l,onRequestNotificationPermission:c,notificationPolicy:r}=this.props,d=Object(a.a)(f.a,{id:"notifications.column_settings.filter_bar.advanced",defaultMessage:"Display all categories"}),b=Object(a.a)(f.a,{id:"notifications.column_settings.unread_notifications.highlight",defaultMessage:"Highlight unread notifications"}),g=Object(a.a)(f.a,{id:"notifications.column_settings.alert",defaultMessage:"Desktop notifications"}),h=Object(a.a)(f.a,{id:"notifications.column_settings.show",defaultMessage:"Show in column"}),u=Object(a.a)(f.a,{id:"notifications.column_settings.sound",defaultMessage:"Play sound"}),p=e.get("browserSupport")&&e.get("isSubscribed"),O=p&&Object(a.a)(f.a,{id:"notifications.column_settings.push",defaultMessage:"Push notifications"});return Object(a.a)("div",{className:"column-settings"},void 0,o&&s&&"denied"===l&&Object(a.a)("span",{className:"warning-hint"},void 0,Object(a.a)(f.a,{id:"notifications.permission_denied",defaultMessage:"Desktop notifications are unavailable due to previously denied browser permissions request"})),Object(a.a)("section",{},void 0,Object(a.a)(et,{onClick:n})),o&&s&&"default"===l&&Object(a.a)("section",{},void 0,Object(a.a)("span",{className:"warning-hint"},void 0,Object(a.a)(f.a,{id:"notifications.permission_required",defaultMessage:"Desktop notifications are unavailable because the required permission has not been granted."})," ",Object(a.a)(it,{onClick:c}))),Object(a.a)("section",{},void 0,Object(a.a)("h3",{},void 0,Object(a.a)(f.a,{id:"notifications.policy.title",defaultMessage:"Filter out notifications from…"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(V,{checked:r.get("filter_not_following"),onChange:this.handleFilterNotFollowing},void 0,Object(a.a)("strong",{},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_not_following_title",defaultMessage:"People you don't follow"})),Object(a.a)("span",{className:"hint"},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_not_following_hint",defaultMessage:"Until you manually approve them"}))),Object(a.a)(V,{checked:r.get("filter_not_followers"),onChange:this.handleFilterNotFollowers},void 0,Object(a.a)("strong",{},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_not_followers_title",defaultMessage:"People not following you"})),Object(a.a)("span",{className:"hint"},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_not_followers_hint",defaultMessage:"Including people who have been following you fewer than {days, plural, one {one day} other {# days}}",values:{days:3}}))),Object(a.a)(V,{checked:r.get("filter_new_accounts"),onChange:this.handleFilterNewAccounts},void 0,Object(a.a)("strong",{},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_new_accounts_title",defaultMessage:"New accounts"})),Object(a.a)("span",{className:"hint"},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_new_accounts.hint",defaultMessage:"Created within the past {days, plural, one {one day} other {# days}}",values:{days:30}}))),Object(a.a)(V,{checked:r.get("filter_private_mentions"),onChange:this.handleFilterPrivateMentions},void 0,Object(a.a)("strong",{},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_private_mentions_title",defaultMessage:"Unsolicited private mentions"})),Object(a.a)("span",{className:"hint"},void 0,Object(a.a)(f.a,{id:"notifications.policy.filter_private_mentions_hint",defaultMessage:"Filtered unless it's in reply to your own mention or if you follow the sender"}))))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-unread-markers"},void 0,Object(a.a)("h3",{id:"notifications-unread-markers"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.unread_notifications.category",defaultMessage:"Unread notifications"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{id:"unread-notification-markers",prefix:"notifications",settings:t,settingPath:["showUnread"],onChange:i,label:b}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-filter-bar"},void 0,Object(a.a)("h3",{id:"notifications-filter-bar"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.filter_bar.category",defaultMessage:"Quick filter bar"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{id:"advanced-filter-bar",prefix:"notifications",settings:t,settingPath:["quickFilter","advanced"],onChange:i,label:d}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-follow"},void 0,Object(a.a)("h3",{id:"notifications-follow"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.follow",defaultMessage:"New followers:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","follow"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","follow"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","follow"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","follow"],onChange:i,label:u}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-follow-request"},void 0,Object(a.a)("h3",{id:"notifications-follow-request"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.follow_request",defaultMessage:"New follow requests:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","follow_request"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","follow_request"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","follow_request"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","follow_request"],onChange:i,label:u}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-favourite"},void 0,Object(a.a)("h3",{id:"notifications-favourite"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.favourite",defaultMessage:"Favorites:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","favourite"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","favourite"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","favourite"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","favourite"],onChange:i,label:u}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-mention"},void 0,Object(a.a)("h3",{id:"notifications-mention"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.mention",defaultMessage:"Mentions:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","mention"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","mention"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","mention"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","mention"],onChange:i,label:u}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-reblog"},void 0,Object(a.a)("h3",{id:"notifications-reblog"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.reblog",defaultMessage:"Boosts:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","reblog"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","reblog"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","reblog"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","reblog"],onChange:i,label:u}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-poll"},void 0,Object(a.a)("h3",{id:"notifications-poll"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.poll",defaultMessage:"Poll results:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","poll"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","poll"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","poll"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","poll"],onChange:i,label:u}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-status"},void 0,Object(a.a)("h3",{id:"notifications-status"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.status",defaultMessage:"New posts:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","status"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","status"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","status"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","status"],onChange:i,label:u}))),Object(a.a)("section",{role:"group","aria-labelledby":"notifications-update"},void 0,Object(a.a)("h3",{id:"notifications-update"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.update",defaultMessage:"Edits:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","update"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","update"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","update"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","update"],onChange:i,label:u}))),(this.context.identity.permissions&Y.d)===Y.d&&Object(a.a)("section",{role:"group","aria-labelledby":"notifications-admin-sign-up"},void 0,Object(a.a)("h3",{id:"notifications-status"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.admin.sign_up",defaultMessage:"New sign-ups:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","admin.sign_up"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","admin.sign_up"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","admin.sign_up"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","admin.sign_up"],onChange:i,label:u}))),(this.context.identity.permissions&Y.c)===Y.c&&Object(a.a)("section",{role:"group","aria-labelledby":"notifications-admin-report"},void 0,Object(a.a)("h3",{id:"notifications-status"},void 0,Object(a.a)(f.a,{id:"notifications.column_settings.admin.report",defaultMessage:"New reports:"})),Object(a.a)("div",{className:"column-settings__row"},void 0,Object(a.a)(nt.a,{disabled:"denied"===l,prefix:"notifications_desktop",settings:t,settingPath:["alerts","admin.report"],onChange:i,label:g}),p&&Object(a.a)(nt.a,{prefix:"notifications_push",settings:e,settingPath:["alerts","admin.report"],onChange:this.onPushChange,label:O}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["shows","admin.report"],onChange:i,label:h}),Object(a.a)(nt.a,{prefix:"notifications",settings:t,settingPath:["sounds","admin.report"],onChange:i,label:u}))))}}Object(o.a)(at,"contextTypes",{identity:r.a.object});const ot=Object(b.d)({clearMessage:{id:"notifications.clear_confirmation",defaultMessage:"Are you sure you want to permanently clear all your notifications?"},clearConfirm:{id:"notifications.clear",defaultMessage:"Clear notifications"},permissionDenied:{id:"notifications.permission_denied_alert",defaultMessage:"Desktop notifications can't be enabled, as browser permission has been denied before"}});var st=Object(g.c)(Object(O.connect)((t=>({settings:t.getIn(["settings","notifications"]),pushSettings:t.get("push_notifications"),alertsEnabled:t.getIn(["settings","notifications","alerts"]).includes(!0),browserSupport:t.getIn(["notifications","browserSupport"]),browserPermission:t.getIn(["notifications","browserPermission"]),notificationPolicy:t.get("notificationPolicy")})),((t,e)=>{let{intl:i}=e;return{onChange(e,i){"push"===e[0]?i&&void 0!==window.Notification&&"granted"!==Notification.permission?t(Object(y.S)((n=>{t("granted"===n?Object(K.changeAlerts)(e.slice(1),i):Object(W.e)({message:ot.permissionDenied}))}))):t(Object(K.changeAlerts)(e.slice(1),i)):"quickFilter"===e[0]?(t(Object(D.c)(["notifications",...e],i)),t(Object(y.U)("all"))):"alerts"===e[0]&&i&&void 0!==window.Notification&&"granted"!==Notification.permission&&i&&void 0!==window.Notification&&"granted"!==Notification.permission?t(Object(y.S)((n=>{t("granted"===n?Object(D.c)(["notifications",...e],i):Object(W.e)({message:ot.permissionDenied}))}))):t(Object(D.c)(["notifications",...e],i))},onClear(){t(Object(G.b)({modalType:"CONFIRM",modalProps:{message:i.formatMessage(ot.clearMessage),confirm:i.formatMessage(ot.clearConfirm),onConfirm:()=>t(Object(y.F)())}}))},onRequestNotificationPermission(){t(Object(y.S)())},onChangePolicy(e,i){t(Object(y.Y)({[e]:i}))}}}))(at)),lt=i(233),ct=i(530),rt=i(379),dt=i(117),bt=i(252),ft=i(176);const gt=Object(b.d)({mentions:{id:"notifications.filter.mentions",defaultMessage:"Mentions"},favourites:{id:"notifications.filter.favourites",defaultMessage:"Favorites"},boosts:{id:"notifications.filter.boosts",defaultMessage:"Boosts"},polls:{id:"notifications.filter.polls",defaultMessage:"Poll results"},follows:{id:"notifications.filter.follows",defaultMessage:"Follows"},statuses:{id:"notifications.filter.statuses",defaultMessage:"Updates from people you follow"}});class ht extends d.PureComponent{onClick(t){return()=>this.props.selectFilter(t)}render(){const{selectedFilter:t,advancedMode:e,intl:i}=this.props;return e?Object(a.a)("div",{className:"notification__filter-bar"},void 0,Object(a.a)("button",{className:"all"===t?"active":"",onClick:this.onClick("all")},void 0,Object(a.a)(f.a,{id:"notifications.filter.all",defaultMessage:"All"})),Object(a.a)("button",{className:"mention"===t?"active":"",onClick:this.onClick("mention"),title:i.formatMessage(gt.mentions)},void 0,Object(a.a)(w.a,{id:"reply-all",icon:bt.a})),Object(a.a)("button",{className:"favourite"===t?"active":"",onClick:this.onClick("favourite"),title:i.formatMessage(gt.favourites)},void 0,Object(a.a)(w.a,{id:"star",icon:ft.a})),Object(a.a)("button",{className:"reblog"===t?"active":"",onClick:this.onClick("reblog"),title:i.formatMessage(gt.boosts)},void 0,Object(a.a)(w.a,{id:"retweet",icon:dt.a})),Object(a.a)("button",{className:"poll"===t?"active":"",onClick:this.onClick("poll"),title:i.formatMessage(gt.polls)},void 0,Object(a.a)(w.a,{id:"tasks",icon:ct.a})),Object(a.a)("button",{className:"status"===t?"active":"",onClick:this.onClick("status"),title:i.formatMessage(gt.statuses)},void 0,Object(a.a)(w.a,{id:"home",icon:lt.a})),Object(a.a)("button",{className:"follow"===t?"active":"",onClick:this.onClick("follow"),title:i.formatMessage(gt.follows)},void 0,Object(a.a)(w.a,{id:"user-plus",icon:rt.a}))):Object(a.a)("div",{className:"notification__filter-bar"},void 0,Object(a.a)("button",{className:"all"===t?"active":"",onClick:this.onClick("all")},void 0,Object(a.a)(f.a,{id:"notifications.filter.all",defaultMessage:"All"})),Object(a.a)("button",{className:"mention"===t?"active":"",onClick:this.onClick("mention")},void 0,Object(a.a)(f.a,{id:"notifications.filter.mentions",defaultMessage:"Mentions"})))}}var ut=Object(g.c)(ht);var pt=Object(O.connect)((t=>({selectedFilter:t.getIn(["settings","notifications","quickFilter","active"]),advancedMode:t.getIn(["settings","notifications","quickFilter","advanced"])})),(t=>({selectFilter(e){t(Object(y.U)(e))}})))(ut),Ot=i(1414),jt=i(5);const mt=Object(b.d)({title:{id:"column.notifications",defaultMessage:"Notifications"},markAsRead:{id:"notifications.mark_as_read",defaultMessage:"Mark every notification as read"}}),vt=Object(u.a)([t=>t.getIn(["settings","notifications","shows"])],(t=>Object(p.List)(t.filter((t=>!t)).keys()))),_t=Object(u.a)([t=>t.getIn(["settings","notifications","quickFilter","show"]),t=>t.getIn(["settings","notifications","quickFilter","active"]),vt,t=>t.getIn(["notifications","items"])],((t,e,i,n)=>t&&"all"!==e?n.filter((t=>null===t||e===t.get("type"))):n.filterNot((t=>null!==t&&i.includes(t.get("type"))))));class wt extends d.PureComponent{constructor(){super(...arguments),Object(o.a)(this,"handleLoadGap",(t=>{this.props.dispatch(Object(y.I)({maxId:t}))})),Object(o.a)(this,"handleLoadOlder",l()((()=>{const t=this.props.notifications.last();this.props.dispatch(Object(y.I)({maxId:t&&t.get("id")}))}),300,{leading:!0})),Object(o.a)(this,"handleLoadPending",(()=>{this.props.dispatch(Object(y.O)())})),Object(o.a)(this,"handleScrollToTop",l()((()=>{this.props.dispatch(Object(y.T)(!0))}),100)),Object(o.a)(this,"handleScroll",l()((()=>{this.props.dispatch(Object(y.T)(!1))}),100)),Object(o.a)(this,"handlePin",(()=>{const{columnId:t,dispatch:e}=this.props;e(t?Object(M.h)(t):Object(M.e)("NOTIFICATIONS",{}))})),Object(o.a)(this,"handleMove",(t=>{const{columnId:e,dispatch:i}=this.props;i(Object(M.g)(e,t))})),Object(o.a)(this,"handleHeaderClick",(()=>{this.column.scrollTop()})),Object(o.a)(this,"setColumnRef",(t=>{this.column=t})),Object(o.a)(this,"handleMoveUp",(t=>{const e=this.props.notifications.findIndex((e=>null!==e&&e.get("id")===t))-1;this._selectChild(e,!0)})),Object(o.a)(this,"handleMoveDown",(t=>{const e=this.props.notifications.findIndex((e=>null!==e&&e.get("id")===t))+1;this._selectChild(e,!1)})),Object(o.a)(this,"handleMarkAsRead",(()=>{this.props.dispatch(Object(y.P)()),this.props.dispatch(Object(P.b)({immediate:!0}))}))}UNSAFE_componentWillMount(){this.props.dispatch(Object(y.Q)())}componentWillUnmount(){this.handleLoadOlder.cancel(),this.handleScrollToTop.cancel(),this.handleScroll.cancel(),this.props.dispatch(Object(y.T)(!1)),this.props.dispatch(Object(y.W)())}_selectChild(t,e){const i=this.column.node,n=i.querySelector("article:nth-of-type(".concat(t+1,") .focusable"));n&&(e&&i.scrollTop>n.offsetTop?n.scrollIntoView(!0):!e&&i.scrollTop+i.clientHeight<n.offsetTop+n.offsetHeight&&n.scrollIntoView(!1),n.focus())}render(){const{intl:t,notifications:e,isLoading:i,isUnread:n,columnId:o,multiColumn:s,hasMore:l,numPending:c,lastReadId:r,canMarkAsRead:d,needsNotificationPermission:b}=this.props,g=!!o,u=Object(a.a)(f.a,{id:"empty_column.notifications",defaultMessage:"You don't have any notifications yet. When other people interact with you, you will see it here."}),{signedIn:p}=this.context.identity;let O=null;const j=p?Object(a.a)(pt,{}):null;let M;O=i&&this.scrollableContent?this.scrollableContent:e.size>0||l?e.map(((t,n)=>null===t?Object(a.a)(N.a,{disabled:i,maxId:n>0?e.getIn([n-1,"id"]):null,onClick:this.handleLoadGap},"gap:"+e.getIn([n+1,"id"])):Object(a.a)(Ot.a,{notification:t,accountId:t.get("account"),onMoveUp:this.handleMoveUp,onMoveDown:this.handleMoveDown,unread:"0"!==r&&Object(_.a)(t.get("id"),r)>0},t.get("id")))):null,this.scrollableContent=O,M=p?Object(a.a)(I.a,{scrollKey:"notifications-".concat(o),trackScroll:!g,isLoading:i,showLoading:i&&0===e.size,hasMore:l,numPending:c,prepend:b&&Object(a.a)(z,{}),alwaysPrepend:!0,emptyMessage:u,onLoadMore:this.handleLoadOlder,onLoadPending:this.handleLoadPending,onScrollToTop:this.handleScrollToTop,onScroll:this.handleScroll,bindToDocument:!s},void 0,O):Object(a.a)(C.a,{});let P=null;return d&&(P=Object(a.a)("button",{"aria-label":t.formatMessage(mt.markAsRead),title:t.formatMessage(mt.markAsRead),onClick:this.handleMarkAsRead,className:"column-header__button"},void 0,Object(a.a)(w.a,{id:"done-all",icon:m}))),Object(jt.jsxs)(k.a,{bindToDocument:!s,ref:this.setColumnRef,label:t.formatMessage(mt.title),children:[Object(a.a)(x.a,{icon:"bell",iconComponent:v.a,active:n,title:t.formatMessage(mt.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:g,multiColumn:s,extraButton:P},void 0,Object(a.a)(st,{})),j,Object(a.a)(S,{}),M,Object(a.a)(h.a,{},void 0,Object(a.a)("title",{},void 0,t.formatMessage(mt.title)),Object(a.a)("meta",{name:"robots",content:"noindex"}))]})}}Object(o.a)(wt,"contextTypes",{identity:r.a.object}),Object(o.a)(wt,"defaultProps",{trackScroll:!0});e.default=Object(O.connect)((t=>({notifications:_t(t),isLoading:t.getIn(["notifications","isLoading"],0)>0,isUnread:t.getIn(["notifications","unread"])>0||t.getIn(["notifications","pendingItems"]).size>0,hasMore:t.getIn(["notifications","hasMore"]),numPending:t.getIn(["notifications","pendingItems"],Object(p.List)()).size,lastReadId:t.getIn(["settings","notifications","showUnread"])?t.getIn(["notifications","readMarkerId"]):"0",canMarkAsRead:t.getIn(["settings","notifications","showUnread"])&&"0"!==t.getIn(["notifications","readMarkerId"])&&_t(t).some((e=>null!==e&&Object(_.a)(e.get("id"),t.getIn(["notifications","readMarkerId"]))>0)),needsNotificationPermission:t.getIn(["settings","notifications","alerts"]).includes(!0)&&t.getIn(["notifications","browserSupport"])&&"default"===t.getIn(["notifications","browserPermission"])&&!t.getIn(["settings","notifications","dismissPermissionBanner"])})))(Object(g.c)(wt))}}]);
//# sourceMappingURL=notifications-1155ec6eee3223aabf32.chunk.js.map