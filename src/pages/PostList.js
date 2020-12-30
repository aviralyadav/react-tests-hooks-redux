import React from 'react';
import { Consumer } from '../context';

const PostList = props => {
    return (
        <Consumer>
            {(value)=>(<div>{value.name}</div>)}
        </Consumer>
    )
}

export default PostList;