import axios from 'axios'

const instance =axios.create({
    baseURL:'https://api.mtnhao.com',//baseURL会在发送请求的时候拼接在url参数的前面
    timeout:5000
})

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export function get(url,params) {
    return instance.get(url,{
        params
    })
}

export function post(url,data) {
    return instance.post(url,data)
}

export  function del(url) {
    return instance.delete(url)
}

export  function put(url,data) {
    return instance.put(url,data)
}