import getData from '../apis/getData';
import _ from 'lodash';
export const getPosts =  () =>{
    return async (dispatch) =>{
    const res= await getData.get('/posts');
    dispatch({
        type:'FETCH_POSTS',
        payload:res.data
    });
    
}
}
// export const getUser =  (id) =>{
//     return async (dispatch) =>{
//     const res= await getData.get(`/users/${id}`);
//     dispatch({
//         type:'FETCH_USER',
//         payload:res.data
//     });
    
// }
// }
export const getUser =  (id) =>{
    return (dispatch) =>{
   
    _getUser(id,dispatch);
}
}
const _getUser= _.memoize(async (id,dispatch)=>{
    const res= await getData.get(`/users/${id}`);
    dispatch({
        type:'FETCH_USER',
        payload:res.data
    });
});
