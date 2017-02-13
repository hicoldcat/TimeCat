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
