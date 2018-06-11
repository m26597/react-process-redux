import * as constFileType from './ConstFileType';

export function login(data){
    return {
        type : constFileType.LOGINTYPE,
        data
    }
}


export function updateCityName(data){
    return {
        type : constFileType.UPDATECITYNAME,
        data
    }
}