"use strict";(self["webpackChunklicense"]=self["webpackChunklicense"]||[]).push([[636],{4502:function(e,t,o){o.d(t,{Z:function(){return N}});var n=o(2544),a=(o(4839),o(1404)),s=o(311),c=o(610),r=o(5323),l=o(5322);const[i,m]=(0,c["do"])("cell-group"),u={title:String,inset:Boolean,border:r.J5};var d=(0,s.defineComponent)({name:i,inheritAttrs:!1,props:u,setup(e,{slots:t,attrs:o}){const n=()=>{var n;return(0,s.createVNode)("div",(0,s.mergeProps)({class:[m({inset:e.inset}),{[l.r5]:e.border&&!e.inset}]},o),[null==(n=t.default)?void 0:n.call(t)])},a=()=>(0,s.createVNode)("div",{class:m("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?(0,s.createVNode)(s.Fragment,null,[a(),n()]):n()}});const p=(0,a.n)(d);o(1958);var h=o(4250),g=(o(7461),o(1120)),k=(o(2323),o(168)),f=(o(4165),o(3));o(6171);const v={class:"question-wrap"},x={class:"img-wrap"};function V(e,t,o,a,c,r){const l=f.E,i=k.J,m=g.Y,u=h.b,d=p,V=n.E;return(0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,null,[(0,s.createElementVNode)("div",v,[(0,s.createElementVNode)("p",null,(0,s.toDisplayString)(o.page)+". "+(0,s.toDisplayString)(r.question),1),(0,s.withDirectives)((0,s.createElementVNode)("div",x,[(0,s.createVNode)(l,{width:"70%",height:"4.2rem",src:r.imgUrl},null,8,["src"])],512),[[s.vShow,r.imgUrl]])]),(0,s.createVNode)(V,{modelValue:c.checkedArr[o.page-1],"onUpdate:modelValue":t[4]||(t[4]=e=>c.checkedArr[o.page-1]=e)},{default:(0,s.withCtx)((()=>[(0,s.createVNode)(d,{inset:""},{default:(0,s.withCtx)((()=>[(0,s.createVNode)(u,{class:"option-wrap",clickable:"",title:r.option1??"对",onClick:t[0]||(t[0]=e=>c.checkedArr[o.page-1]=this.option1?"A":"对")},{icon:(0,s.withCtx)((()=>[(0,s.createVNode)(m,{class:"option-radio",name:this.option1?"A":"对"},{icon:(0,s.withCtx)((e=>[o.correct?((0,s.openBlock)(),(0,s.createBlock)(i,{key:0,name:e.checked?"success":""},null,8,["name"])):((0,s.openBlock)(),(0,s.createBlock)(i,{key:1,name:e.checked?"cross":"",class:(0,s.normalizeClass)(e.checked?"wrong-color":"")},null,8,["name","class"]))])),_:1},8,["name"])])),_:1},8,["title"]),(0,s.createVNode)(u,{class:"option-wrap",clickable:"",title:r.option2??"错",onClick:t[1]||(t[1]=e=>c.checkedArr[o.page-1]=this.option2?"B":"错")},{icon:(0,s.withCtx)((()=>[(0,s.createVNode)(m,{class:"option-radio",name:this.option1?"B":"错"},{icon:(0,s.withCtx)((e=>[o.correct?((0,s.openBlock)(),(0,s.createBlock)(i,{key:0,name:e.checked?"success":""},null,8,["name"])):((0,s.openBlock)(),(0,s.createBlock)(i,{key:1,name:e.checked?"cross":"",class:(0,s.normalizeClass)(e.checked?"wrong-color":"")},null,8,["name","class"]))])),_:1},8,["name"])])),_:1},8,["title"]),(0,s.withDirectives)((0,s.createVNode)(u,{class:"option-wrap",title:r.option3,clickable:"",onClick:t[2]||(t[2]=e=>c.checkedArr[o.page-1]="C")},{icon:(0,s.withCtx)((()=>[(0,s.createVNode)(m,{class:"option-radio",name:"C","checked-color":this.correct?"#17C162":"red"},{icon:(0,s.withCtx)((e=>[o.correct?((0,s.openBlock)(),(0,s.createBlock)(i,{key:0,name:e.checked?"success":""},null,8,["name"])):((0,s.openBlock)(),(0,s.createBlock)(i,{key:1,name:e.checked?"cross":"",class:(0,s.normalizeClass)(e.checked?"wrong-color":"")},null,8,["name","class"]))])),_:1},8,["checked-color"])])),_:1},8,["title"]),[[s.vShow,r.option3]]),(0,s.withDirectives)((0,s.createVNode)(u,{class:"option-wrap",title:r.option4,clickable:"",onClick:t[3]||(t[3]=e=>c.checkedArr[o.page-1]="D")},{icon:(0,s.withCtx)((()=>[(0,s.createVNode)(m,{class:"option-radio",name:"D"},{icon:(0,s.withCtx)((e=>[o.correct?((0,s.openBlock)(),(0,s.createBlock)(i,{key:0,name:e.checked?"success":""},null,8,["name"])):((0,s.openBlock)(),(0,s.createBlock)(i,{key:1,name:e.checked?"cross":"",class:(0,s.normalizeClass)(e.checked?"wrong-color":"")},null,8,["name","class"]))])),_:1})])),_:1},8,["title"]),[[s.vShow,r.option4]])])),_:1})])),_:1},8,["modelValue"])],64)}var w={props:{page:{type:[Number,String],default:1},correct:{type:Boolean,default:!0}},data(){return{checkedArr:this.getLocalRes()||new Array(10).fill("")}},computed:{imgUrl(){return this.$store.state.examInfo.result.list[this.page-1].pic||""},question(){return this.$store.state.examInfo.result.list[this.page-1].question},option1(){return this.$store.state.examInfo.result.list[this.page-1].option1},option2(){return this.$store.state.examInfo.result.list[this.page-1].option2},option3(){return this.$store.state.examInfo.result.list[this.page-1].option3},option4(){return this.$store.state.examInfo.result.list[this.page-1].option4}},methods:{getLocalRes(){if(!localStorage.getItem("examRes"))return;let e=JSON.parse(localStorage.getItem("examRes"));return e.map((e=>e.choice))}},beforeUnmount(){this.$store.commit("setExamRes",this.checkedArr.map(((e,t)=>({choice:e,answer:this.$store.state.examInfo.result.list[t].answer,explain:this.$store.state.examInfo.result.list[t].explain}))))}},C=o(89);const S=(0,C.Z)(w,[["render",V]]);var N=S},8636:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}});var n=o(3989),a=(o(9237),o(1404)),s=o(311),c=o(610),r=o(5323),l=o(6048);function i(e,t){const{days:o}=t;let{hours:n,minutes:a,seconds:s,milliseconds:c}=t;if(e.includes("DD")?e=e.replace("DD",(0,l.Bd)(o)):n+=24*o,e.includes("HH")?e=e.replace("HH",(0,l.Bd)(n)):a+=60*n,e.includes("mm")?e=e.replace("mm",(0,l.Bd)(a)):s+=60*a,e.includes("ss")?e=e.replace("ss",(0,l.Bd)(s)):c+=1e3*s,e.includes("S")){const t=(0,l.Bd)(c,3);e=e.includes("SSS")?e.replace("SSS",t):e.includes("SS")?e.replace("SS",t.slice(0,2)):e.replace("S",t.charAt(0))}return e}var m=o(253),u=o(3444);const[d,p]=(0,c["do"])("count-down"),h={time:(0,r.SI)(0),format:(0,r.SQ)("HH:mm:ss"),autoStart:r.J5,millisecond:Boolean};var g=(0,s.defineComponent)({name:d,props:h,emits:["change","finish"],setup(e,{emit:t,slots:o}){const{start:n,pause:a,reset:c,current:r}=(0,m.hk)({time:+e.time,millisecond:e.millisecond,onChange:e=>t("change",e),onFinish:()=>t("finish")}),l=(0,s.computed)((()=>i(e.format,r.value))),d=()=>{c(+e.time),e.autoStart&&n()};return(0,s.watch)((()=>e.time),d,{immediate:!0}),(0,u.F)({start:n,pause:a,reset:d}),()=>(0,s.createVNode)("div",{role:"timer",class:p()},[o.default?o.default(r.value):l.value])}});const k=(0,a.n)(g);o(1958);var f=o(4502),v=(o(7658),o(541),o(5322));const[x,V,w]=(0,c["do"])("pagination"),C=(e,t,o)=>({number:e,text:t,active:o}),S={mode:(0,r.SQ)("multi"),prevText:String,nextText:String,pageCount:(0,r.SI)(0),modelValue:(0,r.qM)(0),totalItems:(0,r.SI)(0),showPageSize:(0,r.SI)(5),itemsPerPage:(0,r.SI)(10),forceEllipses:Boolean};var N=(0,s.defineComponent)({name:x,props:S,emits:["change","update:modelValue"],setup(e,{emit:t,slots:o}){const n=(0,s.computed)((()=>{const{pageCount:t,totalItems:o,itemsPerPage:n}=e,a=+t||Math.ceil(+o/+n);return Math.max(1,a)})),a=(0,s.computed)((()=>{const t=[],o=n.value,a=+e.showPageSize,{modelValue:s,forceEllipses:c}=e;let r=1,l=o;const i=a<o;i&&(r=Math.max(s-Math.floor(a/2),1),l=r+a-1,l>o&&(l=o,r=l-a+1));for(let e=r;e<=l;e++){const o=C(e,e,e===s);t.push(o)}if(i&&a>0&&c){if(r>1){const e=C(r-1,"...");t.unshift(e)}if(l<o){const e=C(l+1,"...");t.push(e)}}return t})),c=(o,a)=>{o=(0,l.uZ)(o,1,n.value),e.modelValue!==o&&(t("update:modelValue",o),a&&t("change",o))};(0,s.watchEffect)((()=>c(e.modelValue)));const r=()=>(0,s.createVNode)("li",{class:V("page-desc")},[o.pageDesc?o.pageDesc():`${e.modelValue}/${n.value}`]),i=()=>{const{mode:t,modelValue:n}=e,a=o["prev-text"],r=1===n;return(0,s.createVNode)("li",{class:[V("item",{disabled:r,border:"simple"===t,prev:!0}),v._K]},[(0,s.createVNode)("button",{type:"button",disabled:r,onClick:()=>c(n-1,!0)},[a?a():e.prevText||w("prev")])])},m=()=>{const{mode:t,modelValue:a}=e,r=o["next-text"],l=a===n.value;return(0,s.createVNode)("li",{class:[V("item",{disabled:l,border:"simple"===t,next:!0}),v._K]},[(0,s.createVNode)("button",{type:"button",disabled:l,onClick:()=>c(a+1,!0)},[r?r():e.nextText||w("next")])])},u=()=>a.value.map((e=>(0,s.createVNode)("li",{class:[V("item",{active:e.active,page:!0}),v._K]},[(0,s.createVNode)("button",{type:"button","aria-current":e.active||void 0,onClick:()=>c(e.number,!0)},[o.page?o.page(e):e.text])])));return()=>(0,s.createVNode)("nav",{role:"navigation",class:V()},[(0,s.createVNode)("ul",{class:V("items")},[i(),"simple"===e.mode?r():u(),m()])])}});const B=(0,a.n)(N);const b={class:"submit-exam-wrap"};function I(e,t,o,a,c,r){const l=B,i=f.Z,m=k,u=n.z;return(0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,null,[(0,s.createVNode)(l,{modelValue:c.currentPage,"onUpdate:modelValue":t[0]||(t[0]=e=>c.currentPage=e),"page-count":10,mode:"simple","prev-text":"上一题","next-text":"下一题"},null,8,["modelValue"]),(0,s.createVNode)(i,{page:c.currentPage},null,8,["page"]),(0,s.createElementVNode)("div",b,[(0,s.createVNode)(m,{time:r.time,ref:"countDown",format:"倒计时: mm : ss",class:"count-down",onChange:r.warning,onFinish:t[1]||(t[1]=e=>this.$router.replace("/result"))},null,8,["time","onChange"]),(0,s.createVNode)(u,{class:"submit-exam-button",round:"",type:"success",onClick:r.handIn},{default:(0,s.withCtx)((()=>[(0,s.createTextVNode)("提交")])),_:1},8,["onClick"])])],64)}var y={data(){return{currentPage:1,remain:this.time}},computed:{time(){return 1e3*+this.$store.state.remainTime},examIng(){return this.$store.state.examIng}},components:{QuestionItem:f.Z},methods:{handIn(){vant.Dialog.confirm({title:"提示",message:"是否确认提交？"}).then((()=>{this.$store.commit("setRemainTime",240),this.$router.replace("/result")})).catch((()=>{}))},warning(e){if(this.remain=Math.floor(e.total/1e3),!e.minutes&&e.seconds<=10){const e=document.querySelector(".count-down");e.style.color="red"}}},beforeUnmount(){"true"===this.examIng&&this.$store.commit("setRemainTime",this.remain)}},$=o(89);const D=(0,$.Z)(y,[["render",I]]);var _=D},7461:function(e,t,o){o(1958),o(368),o(6742),o(3094)}}]);