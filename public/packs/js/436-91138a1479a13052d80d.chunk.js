(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{1005:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m}));var a=s(0),i=s(2),r=(s(17),s(1)),n=s(25),o=s(10),d=s.n(o),c=s(7),u=s(230);class m extends r.PureComponent{constructor(){super(...arguments),Object(i.a)(this,"state",{loading:!0,data:null})}componentDidMount(){const{limit:e}=this.props;Object(c.b)().get("/api/v1/admin/trends/tags",{params:{limit:e}}).then((e=>{this.setState({loading:!1,data:e.data})})).catch((e=>{console.error(e)}))}render(){const{limit:e}=this.props,{loading:t,data:s}=this.state;let i;return i=t?Object(a.a)("div",{},void 0,Array.from(Array(e)).map(((e,t)=>Object(a.a)(u.a,{},t)))):Object(a.a)("div",{},void 0,s.map((e=>Object(a.a)(u.a,{name:e.name,to:void 0===e.id?void 0:"/admin/tags/".concat(e.id),people:1*e.history[0].accounts+1*e.history[1].accounts,uses:1*e.history[0].uses+1*e.history[1].uses,history:e.history.reverse().map((e=>e.uses)),className:d()(e.requires_review&&"trends__item--requires-review",!e.trendable&&!e.requires_review&&"trends__item--disabled")},e.name)))),Object(a.a)("div",{className:"trends trends--compact"},void 0,Object(a.a)("h4",{},void 0,Object(a.a)(n.a,{id:"trends.trending_now",defaultMessage:"Trending now"})),i)}}}}]);
//# sourceMappingURL=436-91138a1479a13052d80d.chunk.js.map