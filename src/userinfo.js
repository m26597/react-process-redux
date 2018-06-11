import * as ConstFileType from './ConstFileType';

//userinfo是一个reducer
const initialState = {};

function userinfo(state = initialState, action){
    switch(action.type){
        case ConstFileType.LOGINTYPE:
            return action.data;

        case ConstFileType.LOGOUTTYPE:
            return action.data;
        default : 
            return state;
    }
}

export default userinfo;