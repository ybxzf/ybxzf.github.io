import{d as I,r as C,c as y,a as f,o as k,w,b as S,e as x,f as v,g as t,h as l,t as e,u as a,i as u,j as _,_ as g}from"./index-Fjtc17ZP.js";const p=I("store-inform",()=>{const n=C({name:"ybxzf",age:18,sex:"male",email:"xxx@xx.com"}),s=y(()=>new Date().getFullYear()-n.age);function c(r){n.name=r.name,n.age=r.age,n.sex=r.sex,n.email=r.email}return{user:n,birth:s,updateUserInfo:c}}),B={class:"page"},N=f({__name:"valueChange",setup(n){const{user:s,birth:c,updateUserInfo:r}=p(),o=p();k(()=>{}),w(()=>o.birth,(i,d)=>{console.log(i,d)},{deep:!0});function h(){r({name:"张三",age:1,sex:"male",email:"无"})}function b(){o.updateUserInfo({name:"李四",age:2,sex:"male",email:"无"})}return(i,d)=>{const m=S("el-button");return x(),v("div",B,[t("div",null,[l(" 姓名： "),t("div",null,"解构:"+e(a(s).name)+"----不解构:"+e(a(o).user.name),1)]),t("div",null,[l(" 年龄： "),t("div",null,"解构:"+e(a(s).age)+"----不解构:"+e(a(o).user.age),1)]),t("div",null,[l(" 出生年份： "),t("div",null,"解构:"+e(a(c))+"----不解构:"+e(a(o).birth),1)]),t("div",null,"性别："+e(a(s).sex)+"----"+e(a(o).user.sex),1),t("div",null,"邮箱："+e(a(s).email)+"----"+e(a(o).user.email),1),t("div",null,[u(m,{type:"primary",onClick:h},{default:_(()=>[l("解构修改")]),_:1}),u(m,{type:"primary",onClick:b},{default:_(()=>[l("不解构修改")]),_:1})])])}}}),U=g(N,[["__scopeId","data-v-c829ff9f"]]),V={class:"page"},D=f({__name:"index",setup(n){return(s,c)=>(x(),v("div",V,[u(U)]))}}),j=g(D,[["__scopeId","data-v-0dc890c3"]]);export{j as default};
