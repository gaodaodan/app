import * as types from "./types";

const actions ={
    showNav:({commit})=>{
      commit(types.SHOW_NAV)
    },
    headNav:({commit})=>{
        commit(types.HEAD_NAV)
    },
    showFoot:({commit})=>{
      commit(types.SHOW_FOOT)
    },
    headFoot:({commit})=>{
        commit(types.HEAD_FOOT)
    }

}
export default actions;