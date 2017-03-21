import * as types from './mutation-types.js'
import VueRouter from '../router/routes.js'

export default {
  [types.UPDATE_NEXT_PAGE](state) {
    if (state.pageIndex < state.pageArray.length -1) {
      state.pageIndex ++
    } else {
      state.pageIndex = 0
    }
    VueRouter.push({
      path: '/' + state.pageArray[state.pageIndex].routename
    })

  },

  [types.GO_PERSONAL_PAGES](state, {userId}) {
    VueRouter.push({ name: 'personal', params: { userId: userId }})
  },

  [types.TOGGLE_FOLLOW_PERSON](state) {
    // 正常的逻辑应该是将是否关注提交到数据库，更改数据库的字段并返回前端，现在是mock环境，只能在state中加了一个临时变量
    if (state.isfollow) {
      state.followcount --
    } else {
        state.followcount ++
    }
    state.isfollow = !state.isfollow
  }

}
