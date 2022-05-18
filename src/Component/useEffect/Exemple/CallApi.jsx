import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

CallApi.propTypes = {
    
};

const tabs = ['posts','comments','albums'] 

function CallApi(props) {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    },[type])
    return (
        <div>
            {tabs.map((tab, index) =>(
                <button 
                key={index}
                style={type===tab?{
                    color: '#fff',
                    backgroundColor: '#333'
                }: {}}
                onClick={()=>setType(tab)}
                >{tab}
                </button>
            ))}
            <ul>
                {posts.map(post =>(
                    <li key = {post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default CallApi;