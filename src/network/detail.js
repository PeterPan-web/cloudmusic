import {get} from './request'

export const getdetaildata= data =>get('/playlist/detail', data)

export const getsonglist= data=>get('/song/detail?ids=',data)
