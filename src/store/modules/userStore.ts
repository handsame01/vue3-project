import { Commit } from 'vuex'

  const state:any= {
    userName:'管理员',
  },
  mutations:any= {
      updatUserName(states:any,params:string){
        states.userName=params
      }
  },
  actions:any= {
      changeUserName(context:{commit:Commit},params:string){
        context.commit('updatUserName',params)
      }

  }

export default {
    namespaced: true, // namespaced为false的时候，state,mutations,actions全局可以调用，为true，生成作用域，引用时要声明模块名称
    state,
    mutations,
    actions
}