import * as types from './mutation-types.js'
import VueRouter from '../router/routes.js'

export default {
  [types.UPDATE_HEADER_TITLE](state, {nextpage}) {
       VueRouter.push({ path: '/'+ nextpage })

  }
}
