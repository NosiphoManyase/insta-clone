import React, { useEffect, useState } from 'react'
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment';

export default function Post({ img, userImg, caption, username, id}) {
    const { data: session } = useSession()
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState('')
    const [likes, setLikes] = useState([])
    const [hasLiked, setHasLiked] = useState(false)

    useEffect(() => {
        const unsubscribe = onSnapshot(
        query(
            collection(db, 'posts', id, 'comments'),
            orderBy('timestamp', 'desc')), 
            snapshot => setComments(snapshot.docs)
        )
    }, [db, id])

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'posts', id, 'likes'),
            snapshot => setLikes(snapshot.docs)
        )
    
    }, [db])

    useEffect(() => {
        setHasLiked(
            //check if logged in user has liked
            likes.findIndex(like => like.id === session?.user.uid) !== -1
        )
    }, [likes])

    const likedPost = async () => {
        if(hasLiked){
            await deleteDoc(doc(db, 'posts', id , 'likes', session.user.uid))
        }
        else{
            await setDoc(doc(db, 'posts', id , 'likes', session.user.uid), {
                username: session.user.username, 
            })
        }
        
        
    }

    const sendComment = async (e) => {
        e.preventDefault()
        const commentToSend = comment
        setComment('')
        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        })
    }

  return (
    <div key={id} className='bg-white my-7 border rounded-md'>
        {/* Post Header */}
        <div className='flex items-center p-5'>
            <img src={userImg} alt={username}
            className='h-12 rounded-full object-cover border p-1
            mr-3' />
            <p className='font-bold flex-1'>{username}</p>
            <EllipsisHorizontalIcon className='h-5' /> 
        </div>

        {/* Post Image */}
        <img src={img} alt={caption} className='object-cover w-full' />

        {/* Post buttons */}
        {session && (
            <div className='flex justify-between px-4 pt-14'>
            <div className='flex space-x-4'>
                {hasLiked? <HeartIconFilled onClick={likedPost} className='btn text-red-400'/>
                :<HeartIcon onClick={likedPost} className='btn'/>}
                <ChatBubbleOvalLeftEllipsisIcon className='btn' />
            </div>
            <BookmarkIcon className='btn' />
        </div>
        )}
        

        {/* Post Comments */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-2'>{username}</span>
        {caption}</p>
        {comments.length > 0 && (
            <div className='mx-10 max-h-24 overflow-y-scroll scrollbar-none'>
                {comments.map(comment =>(
                    <div className='flex items-center space-x-2 mb-2'>
                        <img src={comment.data().userImage} alt='user image'
                        className='h-7 rounded-full object-cover'/>
                        <p className='font-semibold'>{comment.data().username}</p>
                        <p className='flex-1 truncate'>{comment.data().comment}</p>
                        <Moment fromNow date={comment.data().timestamp?.toDate()} />
                    </div>
                ))}
            </div>
        )}

        {/* Post Comment input */}
        {session && (
            <form className='flex items-center p-4'>
            <FaceSmileIcon className='h-7'/>
            <input 
                value={comment}
                onChange={e => setComment(e.target.value)}
                type='text' 
                placeholder='Enter comment here' 
                className='border-none flex-1 focus:ring-0'/>
            <button type='submit' disabled={!comment.trim()} 
            className='text-blue-400 font-bold disabled:text-blue-200'
            onClick={sendComment}>Post</button>
        </form>
        )}
        
    </div>

  )
}
