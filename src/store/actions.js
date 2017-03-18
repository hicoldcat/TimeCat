// 分发actions，页面的action同意dispatch到此进行逻辑处理

import * as types from './mutation-types.js'

// 首页各个模块跳转
export const  updatePage = ({commit},payload) => {
  if(payload.nextPage && payload.nextTitle){
    commit(types.UPDATE_NEXT_PAGE,{
      nextPage:payload.nextPage
    })
    commit(types.UPDATE_HEADER_TITLE,{
      nextTitle:payload.nextTitle
    })
  }
}

// 点击用户头像进入个人页面
export const  goPersonalPages = ({commit},payload) => {
  if(payload.userId){
    commit(types.GO_PERSONAL_PAGES,{
      userId:payload.userId
    })
  }
}

// 切换关注用户
export const  toggleFollowPerson = ({commit}) => {
  commit(types.TOGGLE_FOLLOW_PERSON)
}
