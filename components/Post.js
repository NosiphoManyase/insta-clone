import React from 'react'

export default function Post({ img, userImg, caption, username, id}) {
  return (
    <div key={id}>
        {username}
    </div>
  )
}
