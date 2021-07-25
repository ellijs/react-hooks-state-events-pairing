import { useState } from "react"

const VideoInfo = ({ title, views, createdAt, upvotes, downvotes }) => {
    const [ liked, setliked ] = useState(upvotes)
    const [ disliked, setDisliked ] = useState(downvotes)
    
    const increaseLiked = () => setliked((liked)=> liked + 1)   
    const increaseDisliked = () => setDisliked((disliked) => disliked + 1)
    
    return(
        <div>
            <h1>{title}</h1>
            <h3>{views} views | Uploaded {createdAt}</h3>
            <div>
                <button onClick={increaseLiked} style={{margin: "5px"}}>
                    {liked} 👍
                </button>
                <button onClick={increaseDisliked} style={{margin: "10px"}}>
                    {disliked} 👎
                </button>
            </div>
            
        </div>
    )
}

export default VideoInfo