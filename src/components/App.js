import video from "../data/video.js";
import VideoInfo from "./VideoInfo"
import Comments from "./Comments"
import { useState } from 'react'

function App() {
  // console.log("Here's your data:", video);
  const [ searchByUserName, setSearchByUserName ] = useState(video.comments)
  const [ sortBy, setSortBy ] = useState("")
  
  const searchComment = (value) => {
      console.log(value)
      const searchItem = video.comments.filter(comment=> comment.user.includes(value))
      setSearchByUserName(searchItem) 
  }

  const deleteComment = (id) => {
    console.log("Hi")
      setSearchByUserName(searchByUserName.filter((comment=> comment.id !== id)))
  }

  const handleSortComments = (value) => {
      console.log(value)
      setSortBy(value)
      switch (value) {
        case "reverse-alphabetical" : 
            setSearchByUserName(searchByUserName.sort((a, b)=> a.user > b.user ? -1 : 1))
          break;
        case "Sort By" :
          return true
          break;
        default:
      }
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <div>
        <VideoInfo title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>
        <Comments comments={searchByUserName} searchComment={searchComment} deleteComment={deleteComment} handleSortComments={handleSortComments}/>
      </div>
    </div>
    
  );
}

export default App;
