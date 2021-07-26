import { useState } from 'react'

const Comments = ({ comments, searchComment, deleteComment, handleSortComments }) => {
    const [ isClicked, setIsclicked ] = useState(true) 
    const [ searchData, setSearchData ] = useState("")
    const [ liked, setLiked ] = useState(0)
    const [ disliked, setDisliked ] = useState(0)


    const toggleComments = () => {
        setIsclicked(!isClicked)
    }

    const handleLiked = (e, id, liked) => {
        console.log(e)
        console.log(id)
        console.log(liked) 
        console.log(comments.find(comment => comment.id === id))
       

    }

    // const handleDisliked = (e, id, disliked) => {
    //     const updateDislikes = comments.map(comment => {
    //         if ( comment.id === id ) {
    //             return setDisliked(disliked + 1)
    //         } else {
    //             return true
    //         }
    //     })
    // }

    const onChangeHandler = (e) => {
        const value = e.target.value
        setSearchData(value)
    }

    const searchUserName = (e) => {
        searchComment(searchData)
    }

    const handleSort = (e) => {
        handleSortComments(e.target.value)
    }


    const RenderComments = () => {
        const commentLists = comments.map(comment =>
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
                <button onClick={(e)=>handleLiked(e, comment.id, liked)} name="liked" style={{margin: "5px"}}>{liked}👍</button>
                <button name="disliked" style={{margin: "5px"}}>{disliked}👎</button>
                <button onClick={()=> deleteComment(comment.id)}>Remove Comment</button>
            </div>           
        )
        return (
            <>
                <hr />
                <h2>{comments.length} Comments</h2>
                {commentLists}
            </>          
        )
    }

    return (
        <div>
            <button style={{margin: "10px"}} onClick={toggleComments}>{ isClicked? "Hide" : "Show" } Comments</button>
            <input onChange={onChangeHandler} placeholder="search user name..."></input>
            <button style={{margin: "10px"}} onClick={searchUserName}>Search</button>
            <select onChange={handleSort}>
                <option>Sort By</option>
                <option>reverse-alphabetical</option>
            </select>
            { isClicked? <RenderComments /> : null }
        </div>
    )

}

export default Comments