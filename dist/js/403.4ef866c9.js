"use strict";(self["webpackChunklicense"]=self["webpackChunklicense"]||[]).push([[403],{8096:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var r=s(4250),o=(s(7461),s(8842)),a=s(9420),n=(s(2097),s(311));const c={class:"title"},i={class:"score"},m={class:"answer"},l={style:{color:"#17C162"}},x={class:"explain"};function h(e,t,s,h,u,p){const d=a.l,y=o.Z,S=r.b;return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(d,{"left-arrow":"",onClickLeft:t[0]||(t[0]=t=>e.$router.back())},{title:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" 科目"+(0,n.toDisplayString)(1==p.examSubject?"一":"四")+" "+(0,n.toDisplayString)(p.examType),1)])),_:1}),(0,n.createElementVNode)("h1",c,[(0,n.createTextVNode)("答对题数: "),(0,n.createElementVNode)("span",i,(0,n.toDisplayString)(p.examScore)+" / 10",1)]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(p.examRes,((e,t)=>((0,n.openBlock)(),(0,n.createBlock)(S,{class:"result-wrap",key:t},{title:(0,n.withCtx)((()=>[(0,n.createVNode)(y,{page:t+1,correct:e.answer===e.choice},null,8,["page","correct"]),(0,n.createElementVNode)("p",m,[(0,n.createTextVNode)("正确答案: "),(0,n.createElementVNode)("span",l,(0,n.toDisplayString)(e.answer),1),(0,n.createTextVNode)(", 你的答案: "),(0,n.createElementVNode)("span",{style:(0,n.normalizeStyle)({color:e.answer===e.choice?"#17C162":"red"})},(0,n.toDisplayString)(e.choice),5)]),(0,n.createElementVNode)("p",x,"解析："+(0,n.toDisplayString)(e.explain),1)])),_:2},1024)))),128))],64)}s(541);var u={computed:{examSubject(){return this.$store.state.examSubject},examType(){return this.$store.state.examType},examRes(){return this.$store.state.examRes},examIng(){return this.$store.state.examIng},examScore(){return this.$store.getters.examScore}},components:{QuestionItem:o.Z},methods:{saveInfo(){const e={examSubject:this.examSubject,examType:this.examType,examRes:this.examRes,examScore:this.examScore,examInfo:this.$store.state.examInfo},t=1==this.examSubject?this.$store.state.historyOneArr:this.$store.state.historyFourArr;30===t.length&&t.pop(),t.unshift(e),1==this.examSubject?this.$store.commit("setHistoryOneArr",t):this.$store.commit("setHistoryFourArr",t)}},created(){this.examIng&&(this.saveInfo(),this.$store.commit("setExamIng",0),this.$store.commit("setRemainTime",240))},unmounted(){this.$store.commit("delExamRes"),this.$store.commit("delExamInfo")}},p=s(89);const d=(0,p.Z)(u,[["render",h]]);var y=d}}]);