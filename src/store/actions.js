import * as types from './mutation-types.js'

export const  geNextPage = ({commit},payload) => {
  if(payload.nextpage){
    commit(types.UPDATE_HEADER_TITLE,{
      nextpage:payload.nextpage
    })
  }
}
