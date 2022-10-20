import { createStore } from 'vuex'
import { getTestAPI } from '@/api';
import router from '@/router'
export default createStore({
  state: {
    examSubject: localStorage.getItem('examSubject') || '1',
    examType: localStorage.getItem('examType') || 'C1',
    examIng: localStorage.getItem('examIng') || 'false', //是否正在考试
    remainTime: localStorage.getItem('remainTime') || '240', //倒计时 
    examInfo: JSON.parse(localStorage.getItem('examInfo')) || {}, //试卷信息
    examRes: JSON.parse(localStorage.getItem('examRes')) || [], //答卷信息
    historyOneArr: JSON.parse(localStorage.getItem('historyOneArr')) || [],
    historyFourArr: JSON.parse(localStorage.getItem('historyFourArr')) || []
  },
  getters: {
    //获取试卷分数
    examScore(state) {
      return state.examRes.reduce((pre, cur) => {
        cur = +(cur.answer == cur.choice)
        return pre + cur
      }, 0)
    }
  },
  mutations: {
    //设置考试科目
    setExamSubject(state, subject) {
      state.examSubject = subject;
      localStorage.setItem('examSubject', subject);
    },
    //设置考试类型
    setExamType(state, type) {
      state.examType = type;
      localStorage.setItem('examType', type);
    },
    //设置倒计时
    setRemainTime(state, time) {
      state.remainTime = time;
      localStorage.setItem('remainTime', time);
    },
    //设置是否正在考试
    setExamIng(state, status) {
      state.examIng = status;
      localStorage.setItem('examIng', status);
    },
    //设置试卷信息
    setExamInfo(state, info) {
      state.examInfo = info;
      localStorage.setItem('examInfo', JSON.stringify(info));
    },
    //清除试卷信息
    delExamInfo(state) {
      state.examInfo = {};
      localStorage.removeItem('examInfo');
    },
    //设置答卷信息
    setExamRes(state, res) {
      state.examRes = res;
      if (!state.examEnd) {
        localStorage.setItem('examRes', JSON.stringify(res));
      }
    },
    //清除答卷信息
    delExamRes(state) {
      state.examRes = [];
      localStorage.removeItem('examRes');
    },
    //设置历史科目一答卷信息
    setHistoryOneArr(state, arr) {
      state.historyOneArr = arr;
      localStorage.setItem('historyOneArr', JSON.stringify(arr));
    },
    //设置历史科目四答卷信息
    setHistoryFourArr(state, arr) {
      state.historyFourArr = arr;
      localStorage.setItem('historyFourArr', JSON.stringify(arr));
    }
  },
  actions: {
    //获取试卷信息
    async getQuestion({ commit, state }) {
      await getTestAPI({
        type: state.examType,
        subject: state.examSubject
      }).then((res) => {
        commit('setExamInfo', res.data.result);
        commit('setExamIng', 'true');
        router.push('/exam');
      });
    },

    // saveInfo({commit, state}) {

    // }

  }
})
