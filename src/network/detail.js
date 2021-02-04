import {get} from './request'

export const getdetaildata= data =>get('/playlist/detail', data)

export const getsongdetail= ids=>get(`/song/detail?ids=${ids}`)
