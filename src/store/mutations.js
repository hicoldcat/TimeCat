import * as types from './mutation-types.js'
import VueRouter from '../router/routes.js'

export default {
  [types.UPDATE_NEXT_PAGE](state, {nextPage}) {
    VueRouter.push({
      path: '/' + nextPage
    })
  },

  [types.UPDATE_HEADER_TITLE](state, {nextTitle}) {
    state.headerTitle = nextTitle
  }

}
