import { get} from'./request';
//获取首页的
export  const getbanners =()=>get('/banner')
export  const getRecommend =()=>get('/personalized?limit=10')
export  const getnewsong =()=>get('/personalized/newsong?limit=10')
export  const getnewmv =()=>get('/personalized/mv')