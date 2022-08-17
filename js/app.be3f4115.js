(function(){var t={495:function(t,n,e){"use strict";var l=e(9242),o=e(2483),a=e(3396),r=e(7139);const u=(0,a._)("h2",null,"Ranking",-1),s=(0,a.Uk)("Begin: "),i=(0,a.Uk)("End: "),c=(0,a._)("br",null,null,-1),d=(0,a.Uk)("Stakeholder Name: "),p=(0,a.Uk)("Type: "),_=(0,a._)("br",null,null,-1),h=(0,a.Uk)("Creator: "),f=(0,a.Uk)("Collector: "),w={key:0},y=(0,a._)("tr",null,[(0,a._)("th",null,"Name"),(0,a._)("th",null,"Creator"),(0,a._)("th",null,"NFT ID"),(0,a._)("th",null,"Description"),(0,a._)("th",null,"Sold Count"),(0,a._)("th",null,"Last Sold Price")],-1),g=(0,a._)("br",null,null,-1),m={key:1};function k(t,n,e,o,k,v){return(0,a.wg)(),(0,a.iD)(a.HY,null,[u,(0,a._)("div",null,[(0,a._)("label",null,[s,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>k.after=t),type:"date"},null,512),[[l.nr,k.after]])]),(0,a._)("label",null,[i,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>k.before=t),type:"date"},null,512),[[l.nr,k.before]])]),c,(0,a._)("label",null,[d,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[2]||(n[2]=t=>k.stakeholder=t),type:"text"},null,512),[[l.nr,k.stakeholder]])]),(0,a._)("label",null,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[3]||(n[3]=t=>k.type=t),type:"text"},null,512),[[l.nr,k.type]])]),_,(0,a._)("label",null,[h,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[4]||(n[4]=t=>k.creator=t),type:"text"},null,512),[[l.nr,k.creator]])]),(0,a._)("label",null,[f,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[5]||(n[5]=t=>k.collector=t),type:"text"},null,512),[[l.nr,k.collector]])]),(0,a._)("button",{onClick:n[6]||(n[6]=(...t)=>v.load&&v.load(...t))}," Search ")]),k.classes?((0,a.wg)(),(0,a.iD)("table",w,[y,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.classes.slice(0,10),(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,(0,r.zw)(t.name),1),(0,a._)("td",null,(0,r.zw)(t.creator),1),(0,a._)("td",null,[(0,a.Uk)((0,r.zw)(t.parent.iscn_id_prefix),1),g,(0,a.Uk)((0,r.zw)(t.id),1)]),(0,a._)("td",null,(0,r.zw)(t.description),1),(0,a._)("td",null,(0,r.zw)(t.soldCount),1),(0,a._)("td",null,(0,r.zw)(t.price),1)])))),128))])):((0,a.wg)(),(0,a.iD)("p",m," No result "))],64)}const{VUE_APP_INDEXER_URL:v}={VUE_APP_INDEXER_URL:"https://like.wancat.cc",NODE_ENV:"production",BASE_URL:"/likecoin-nft-dashboard/"},b=v||"https://mainnet-node.like.co",C="https://api.like.co",z="like13f4glvg80zvfrrs7utft5p68pct4mcq7t5atf6",D="like17m4vwrnhjmd20uu7tst7nv0kap6ee7js69jfrs",U=[D,"like1yney2cqn5qdrlc50yr5l53898ufdhxafqz9gxp"];var V=e(6265),T=e.n(V),x=e(5410),N=e.n(x);const O=new Map,P=T().create({baseURL:b,paramsSerializer:t=>N().stringify(t,{arrayFormat:"repeat"})});function E(t){return O.has(t)||O.set(t,T().get(`${C}/likernft/purchase`,{params:{class_id:t}})),O.get(t)}const S=new Map;function L(t){return S.has(t)||S.set(t,T().get(`${C}/likernft/metadata`,{params:{class_id:t}})),S.get(t)}var j={name:"NftRanking",data(){return{classes:[],after:"",before:"",stakeholder:"",creator:"",collector:"",type:""}},async mounted(){await this.load()},methods:{async load(){const t=new Date(this.after).getTime()/1e3||0,n=new Date(this.before).getTime()/1e3||0,e=await P.get("/likechain/likenft/v1/ranking",{params:{ignore_list:U,after:t,before:n,stakeholder_name:this.stakeholder,creator:this.creator,collector:this.collector,type:this.type,limit:15}});if(this.classes=e.data.classes,!this.classes)return;const l=this.classes.map((t=>E(t.id).then((n=>{const{data:{lastSoldPrice:e,metadata:{creatorWallet:l,soldCount:o}}}=n;return{...t,soldCount:o,price:e,creator:l}})).catch((n=>(console.error(n),{...t,soldCount:0,price:0})))));this.classes=(await Promise.all(l)).sort(((t,n)=>n.soldCount-t.soldCount))}}},A=e(89);const H=(0,A.Z)(j,[["render",k]]);var R=H;e(6699);const Y=(0,a._)("h2",null,"Social Graph",-1),I=(0,a.Uk)(" Get "),K=(0,a._)("option",{value:"creator"},"Creator",-1),M=(0,a._)("option",{value:"collector"},"Collector",-1),q=[K,M],F=(0,a.Uk)(" Of "),G={key:0},Z={key:1},$=(0,a._)("tr",null,[(0,a._)("th",null,"Account"),(0,a._)("th",null,"Total Count"),(0,a._)("th",null,"Collections"),(0,a._)("th",null,"Total Value")],-1),B=["href"],W={key:2};function X(t,n,e,o,u,s){return(0,a.wg)(),(0,a.iD)(a.HY,null,[Y,(0,a._)("div",null,[(0,a._)("label",null,[I,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":n[0]||(n[0]=t=>u.type=t)},q,512),[[l.bM,u.type]]),F,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[1]||(n[1]=t=>u.account=t),type:"text",size:"40"},null,512),[[l.nr,u.account]])]),(0,a._)("button",{onClick:n[2]||(n[2]=(...t)=>s.load&&s.load(...t))}," Load ")]),u.responseType?((0,a.wg)(),(0,a.iD)("h3",G," The "+(0,r.zw)(u.responseType)+" of "+(0,r.zw)(u.account),1)):(0,a.kq)("",!0),u.response?((0,a.wg)(),(0,a.iD)("table",Z,[$,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.response.filter((({account:t})=>!u.ignoreList.includes(t))),(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.account},[(0,a._)("td",null,(0,r.zw)(t.account),1),(0,a._)("td",null,(0,r.zw)(t.count),1),(0,a._)("table",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.collections,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.classId},[(0,a._)("td",null,[(0,a._)("a",{href:t.external_url,target:"_blank"},(0,r.zw)(t.name),9,B)]),(0,a._)("td",null,[(0,a._)("strong",null,(0,r.zw)(t.count),1),(0,a.Uk)(" x "+(0,r.zw)(t.price),1)])])))),128))]),(0,a._)("td",null,(0,r.zw)(t.totalValue)+" LIKE",1)])))),128))])):((0,a.wg)(),(0,a.iD)("p",W," No response "))],64)}const J=new Map([["collector",{param:"creator",responseType:"collectors"}],["creator",{param:"collector",responseType:"creators"}]]);async function Q({iscn_id_prefix:t,class_id:n,count:e}){const l={iscnIdPrefix:t,classId:n,count:e};try{const[t,o]=await Promise.all([E(n),L(n)]),{lastSoldPrice:a}=t.data;return{price:a,totalValue:e*a,...l,...o.data}}catch(o){return console.error(o,t,n),{...l,price:0,totalValue:0}}}var tt={name:"NftSocialGraph",data(){return{type:"collector",account:z,responseType:"",response:[],ignoreList:U}},methods:{async aggregate(t){const n=t.filter((t=>!this.ignoreList.includes(t.account))).map((async t=>{const n={account:t.account,collections:[],count:t.count,totalValue:0};return n.collections=await Promise.all(t.collections.map(Q)),n.totalValue=n.collections.reduce(((t,{totalValue:n})=>t+n),0),n}));return(await Promise.all(n)).sort(((t,n)=>n.totalValue-t.totalValue))},async load(){if(!J.has(this.type))return;const t=J.get(this.type),n={reverse:!0};n[t.param]=this.account;const e=await P.get(`/likechain/likenft/v1/${this.type}`,{params:n});this.response=e.data[t.responseType],this.responseType=t.responseType,this.response=await this.aggregate(this.response)}}};const nt=(0,A.Z)(tt,[["render",X]]);var et=nt;const lt=(0,a._)("h2",null,"Analysis",-1),ot=(0,a._)("td",null,"Nft Count",-1),at=(0,a._)("td",null,"Trade Count",-1),rt=(0,a._)("td",null,"Trade Value",-1),ut=(0,a._)("td",null,"Creator Count",-1),st=(0,a._)("td",null,"Owner Count",-1),it=(0,a._)("h3",null,"Top NFT Owners",-1),ct=(0,a._)("tr",null,[(0,a._)("th",null,"Address"),(0,a._)("th",null,"Count")],-1);function dt(t,n,e,l,o,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[lt,(0,a._)("table",null,[(0,a._)("tr",null,[ot,(0,a._)("td",null,(0,r.zw)(o.nftCount),1)]),(0,a._)("tr",null,[at,(0,a._)("td",null,(0,r.zw)(o.tradeCount),1)]),(0,a._)("tr",null,[rt,(0,a._)("td",null,(0,r.zw)(o.tradeValue)+" LIKE",1)]),(0,a._)("tr",null,[ut,(0,a._)("td",null,(0,r.zw)(o.creatorCount),1)]),(0,a._)("tr",null,[st,(0,a._)("td",null,(0,r.zw)(o.ownerCount),1)])]),it,(0,a._)("table",null,[ct,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.owners,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.owner},[(0,a._)("td",null,(0,r.zw)(t.owner),1),(0,a._)("td",null,(0,r.zw)(t.count),1)])))),128))])],64)}const pt=20;var _t={name:"NftAnalysis",data(){return{nftCount:0,ownerCount:0,tradeCount:0,tradeValue:0,creatorCount:0,owners:[]}},mounted(){P.get("/statistics/nft/nft-count",{params:{ignore_list:U}}).then((t=>{this.nftCount=t.data.count})),P.get("/statistics/nft/trade",{params:{api_address:D}}).then((t=>{this.tradeCount=t.data.count,this.tradeValue=Math.floor(t.data.total_volume/10**9)})),P.get("/statistics/nft/creator-count").then((t=>{this.creatorCount=t.data.count})),P.get("/statistics/nft/owner-count").then((t=>{this.ownerCount=t.data.count})),P.get("/statistics/nft/owners",{params:{limit:pt}}).then((t=>{this.owners=t.data.owners}))}};const ht=(0,A.Z)(_t,[["render",dt]]);var ft=ht;const wt=[{name:"Analysis",path:"/",component:ft},{name:"Ranking",path:"/ranking",component:R},{name:"SocialGraph",path:"/socialgraph",component:et}],yt=(0,o.p7)({history:(0,o.r5)(),routes:wt});var gt=e(4870);const mt=(0,a._)("h1",null,"LikeCoin NFT Dashboard",-1),kt=(0,a._)("div",null,"Select a page",-1),vt=["onClick"],bt={class:"page-container"};var Ct={__name:"App",setup(t){const n=(0,o.tv)();function e(t){const e=wt[t];n.push(e.path)}return(t,n)=>{const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[mt,(0,a._)("div",null,[kt,(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,gt.SU)(wt),((t,n)=>((0,a.wg)(),(0,a.iD)("span",{key:t.name},[(0,a._)("button",{onClick:t=>e(n)},(0,r.zw)(t.name),9,vt)])))),128))]),(0,a._)("div",bt,[(0,a.Wm)(l)])])],64)}}};const zt=Ct;var Dt=zt;const Ut=(0,l.ri)(Dt);Ut.use(yt),Ut.mount("#app")},4654:function(){}},n={};function e(l){var o=n[l];if(void 0!==o)return o.exports;var a=n[l]={exports:{}};return t[l](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,l,o,a){if(!l){var r=1/0;for(c=0;c<t.length;c++){l=t[c][0],o=t[c][1],a=t[c][2];for(var u=!0,s=0;s<l.length;s++)(!1&a||r>=a)&&Object.keys(e.O).every((function(t){return e.O[t](l[s])}))?l.splice(s--,1):(u=!1,a<r&&(r=a));if(u){t.splice(c--,1);var i=o();void 0!==i&&(n=i)}}return n}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[l,o,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,l){var o,a,r=l[0],u=l[1],s=l[2],i=0;if(r.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(s)var c=s(e)}for(n&&n(l);i<r.length;i++)a=r[i],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(c)},l=self["webpackChunklikecoin_nft_dashboard"]=self["webpackChunklikecoin_nft_dashboard"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=e.O(void 0,[998],(function(){return e(495)}));l=e.O(l)})();
//# sourceMappingURL=app.be3f4115.js.map