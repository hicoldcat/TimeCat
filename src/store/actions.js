import * as types from './mutation-types.js'

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

export const  goPersonalPages = ({commit},payload) => {
  if(payload.userId){
    commit(types.GO_Personal_Pages,{
      userId:payload.userId
    })
  }
}
