import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';

import {getPosts} from '../actions';
import UserHeader from './UserHeader';

const PostList = (props) =>{

    console.log(props);
    
    
    useEffect(()=>{
        props.getPosts();
     
    },[]);

const renderList = () =>{
    return props.posts.map(post=>{
        return <div className="item" key={post.id}>
            <i className="large middle aligned icon user"></i>
            <div className="content">
                <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                <UserHeader userId={post.userId}></UserHeader>
            </div>
        </div>
    });
}

    return(
        <React.Fragment>
        <div className="ui relaxed divided list">
        {renderList()}
        </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state) =>{
    return {posts:state.posts}
}
export default connect(mapStateToProps,{getPosts})(PostList);