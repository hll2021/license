<template>
  <!-- 头部导航栏 -->
  <van-nav-bar left-text="返回" left-arrow @click-left="$router.back()">
    <template #title>
      科目{{ examSubject == 1 ? '一' : '四' }} {{examType}}
    </template>
  </van-nav-bar>

  <!-- 得分 -->
  <h1 class="title">答对题数: 
      <span class="score">{{ examScore }} / 10</span>
  </h1>

  <!-- 试卷详情 -->
  <van-cell class="result-wrap" v-for="(item, index) in examRes" :key="index">
     <template #title>
        <!-- 题目 -->
        <QuestionItem :page="index + 1" :correct="item.answer === item.choice"/>
        <!-- 答案 -->
        <p class="answer">正确答案:
          <span style="color: #17C162">{{item.answer}}</span>, 
          你的答案:
          <span :style="{color: item.answer === item.choice ? '#17C162': 'red'}">
            {{item.choice}}
          </span>
        </p>
          <!-- 解析 -->
        <p class="explain">解析：{{ item.explain }}</p>
    </template>
  </van-cell>
</template>

<script>
import QuestionItem from '@/components/QuestionItem'
export default {
  computed: {
    examSubject() {
      return this.$store.state.examSubject
    },
    examType() {
      return this.$store.state.examType
    },
    examRes() {
      return this.$store.state.examRes
    },
    examIng() {
      return this.$store.state.examIng
    },
    examScore() {
      return this.$store.getters.examScore
    }
  },
  components: {
    QuestionItem
  },
  methods: {
    //保存本次答卷信息到历史记录中
    saveInfo() {
      const info = {
        examSubject: this.examSubject,
        examType: this.examType,
        examRes: this.examRes,
        examScore: this.examScore,
        examInfo: this.$store.state.examInfo
      }
      const arr = (this.examSubject == 1) ? this.$store.state.historyOneArr : 
        this.$store.state.historyFourArr;
      if(arr.length === 30) {
        arr.pop();
      }
      arr.unshift(info);
      
      if (this.examSubject == 1) {
        this.$store.commit('setHistoryOneArr', arr);
      } else {
        this.$store.commit('setHistoryFourArr', arr);
      }
    }
  },
  unmounted() {
    //保存本次答卷信息到历史记录中
    console.log(this.examIng)
    if(this.examIng === 'true') {
      this.saveInfo();
      //结束考试状态
      this.$store.commit('setExamIng', false);
    } 
    //清理试题信息
    this.$store.commit('delExamRes');
    this.$store.commit('delExamInfo');
  }
}
</script>

<style>
.score {
  color: red;
  font-size: 18px;
  font-weight: bold;
}
.result-wrap{
  border-bottom: 1px solid #ccc;
  margin-top: 15px ;
}

.answer {
  position: relative;
  padding-top: 5px;
}
.answer .van-icon-success,
.answer .van-icon-cross
{
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px;
  color: #17C162;
}
.answer .van-icon-cross {
  color: red;
}
.explain {
  width: 80%;
  border: 1px solid #ccc;
  margin: 15px 0 0 10px;
  padding: 15px;
  background-color: #F5FCF7;
}
</style>