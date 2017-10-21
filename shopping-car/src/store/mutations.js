import * as types from "./types";

const mutations ={
    [types.SHOW_NAV]:(state)=>{
          state.bNav = true;
  },
     [types.HEAD_NAV]:(state)=>{
          state.bNav = false;
  },
     [types.SHOW_FOOT]:(state) =>{
          state.bFoot = true;
  },
      [types.HEAD_FOOT]:(state) =>{
      state.bFoot = false;
}

};
export default mutations;
