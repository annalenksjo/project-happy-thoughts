import React from 'react'
import moment from 'moment'

import { LikeButton } from './LikeButton'


export const MessageList = ({ messageList, handleLikesIncrease, onDeleteThought }) => {
  return (
    <>
      {messageList.map(message => ( 
        <div key={message._id} className="thought-card">
          <h4>
            {message.message} 
          </h4>
          <div className="card-info">
            <div className="likes">
              < LikeButton 
                message = {message}
                onLikesIncrease = {handleLikesIncrease}
              />
              <p> x {message.hearts}</p>
            </div>
            <p className="post-time">
              {moment(message.createdAt).fromNow()}
            </p>
            <button className="delete-btn" onClick={() => onDeleteThought(message._id)}><span role="img" aria-label="bin emoji">🗑</span></button>
          </div>       
        </div>
      ))}
    </>
  )
}
