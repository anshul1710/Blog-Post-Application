import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import {getUser} from '../actions';
const UserHeader =(props) =>{

            
        useEffect(()=>{
        props.getUser(props.userId);
        },[]);
if(!props.user)
{
    return null;
}
    return(

        <div className="header">{props.user.name}</div>
    );
}
const mapStateToProps = (state,ownProps) =>{
    return {user:state.users.find(user => user.id===ownProps.userId)}
}
export default connect(mapStateToProps,{getUser})(UserHeader);