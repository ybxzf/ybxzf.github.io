import{d as x,r as f,b as _,e as g,f as v,w as b,o as h,c as I,a as e,g as i,t as a,u as t,_ as w}from"./index-ykslDaou.js";const m=x("store-inform",()=>{const n=f({name:"ybxzf",age:18,sex:"male",email:"xxx@xx.com"}),o=_(()=>new Date().getFullYear()-n.age);function l(r){n.name=r.name,n.age=r.age,n.sex=r.sex,n.email=r.email}return{user:n,birth:o,updateUserInfo:l}}),k={class:"page"},S=g({__name:"PiniaTestView",setup(n){const{user:o,birth:l,updateUserInfo:r}=m(),s=m();v(()=>{}),b(()=>s.birth,(u,c)=>{console.log(u,c)},{deep:!0});function d(){r({name:"张三",age:1,sex:"male",email:"无"})}function p(){s.updateUserInfo({name:"李四",age:2,sex:"male",email:"无"})}return(u,c)=>(h(),I("div",k,[e("div",null,[i(" 姓名： "),e("div",null,"解构:"+a(t(o).name)+"----不解构:"+a(t(s).user.name),1)]),e("div",null,[i(" 年龄： "),e("div",null,"解构:"+a(t(o).age)+"----不解构:"+a(t(s).user.age),1)]),e("div",null,[i(" 出生年份： "),e("div",null,"解构:"+a(t(l))+"----不解构:"+a(t(s).birth),1)]),e("div",null,"性别："+a(t(o).sex)+"----"+a(t(s).user.sex),1),e("div",null,"邮箱："+a(t(o).email)+"----"+a(t(s).user.email),1),e("button",{onClick:d},"解构修改"),e("button",{onClick:p},"不解构修改")]))}}),B=w(S,[["__scopeId","data-v-a87e8378"]]);export{B as default};
