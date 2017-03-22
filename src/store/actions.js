// 分发actions，页面的action同意dispatch到此进行逻辑处理

import * as types from './mutation-types.js'

// 首页各个模块跳转
export const  updatePage = ({commit}) => {
  commit(types.UPDATE_NEXT_PAGE)
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

// 切换侧边栏显示
export const  toggleSlideBar = ({commit}) => {
  commit(types.TOGGLE_SLIDE_BAR)
}

// 切换header
export const  toggleheader = ({commit},payload) => {
  if(payload){
    commit(types.ADD_DETAIL_HEADER_NICKNAME,{
      nickname:payload.nickname
    })
  } else {
    commit(types.DELEATE_DETAIL_HEADER_NICKNAME)
  }
  commit(types.TOGGLE_HEADER)

}
