import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: '1',
            username: 'ivyaligns',
            userImg: 'https://i.pravatar.cc/150?img=35',
            img: 'https://plus.unsplash.com/premium_photo-1666184129845-ddaf361f9410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            caption: 'hanging with the girlies'
        },
        {
            id: '2',
            username: 'camBam',
            userImg: 'https://i.pravatar.cc/150?img=5',
            img: 'https://images.unsplash.com/photo-1678933632108-0ea1b61b2082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            caption: 'travel life'
        },
        {
            id: '1',
            username: 'Michael_Kool',
            userImg: 'https://i.pravatar.cc/150?img=12',
            img: 'https://plus.unsplash.com/premium_photo-1666184129845-ddaf361f9410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            caption: 'hanging with the girlies'
        },
    ]
    
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id} 
                id={post.id}
                username={post.username}
                useImg={post.userImg}
                img={post.userImg}
                caption={post.caption}
            />
        ))}
    </div>
  )
}
