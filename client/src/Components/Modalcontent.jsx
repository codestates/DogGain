import { useState, useEffect } from "react";
import axios from "axios"
import LoadingIndicator from "./LoadingIndicator";

const url = "https://jsonplaceholder.typicode.com/"

function Modalcontent({postId, comments, setIsModalOpen}) {

  const [selectedPost, setSelectedPost] = useState({})
  const [isGetPost, setIsGetPost] = useState(false)

  async function getClickedPost(){
    const res = await axios.get(url + "posts/" +`${postId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      HttpOnly: true,
      samesite: "Secure",
    }).then(data => {
      setSelectedPost(data.data)
      setIsGetPost(true)
    })
    .catch(err => alert(err))
  }

  useEffect(() => {
    getClickedPost()
  }, [])

  return (
    <>
      {isGetPost?  
      
      <div id="MainPost-Container">

          <div id="X-Container" className="ml-80 text-end font-bold text-2xl">
              <span className="rounded-lg text-black hover:bg-grey-70" onClick={() => {
                setIsModalOpen(false)
                setSelectedPost({})
              }
                }>X</span>
          </div>

          <div id="Post-Container">
              <div className="text-center text-xl text-ment-3 font-bold"> {selectedPost.title} </div>
              <div className="text-center text-sm mt-4"> {selectedPost.body} </div>
          </div>

          <div id="Information-Container">
              <div className="text-end text-sm font-semibold mt-4 mr-16"> 작성자 : {selectedPost.userId} </div>
              <hr className="my-4 mx-16 text-grey-50"/>
              <div className="text-end text-sm font-semibold mr-16"> 댓글 {comments.length}개</div>
              <hr className="my-4 mx-16 text-grey-50"/>
          </div>
      
          {comments.map(comment => {
            return (
              <div id="Comments-Container" key={comment.id}>
                <div className="mx-32 my-2 border-solid border-2 border-grey-70">
                <div className="text-sm font-semibold"> {comment.name}</div>
                <div className="text-xs"> ✉️ : {comment.email}</div>
                <div className="text-sm mt-1">{comment.body}</div>
                </div>
                <hr className="mx-24 text-grey-50"/>
              </div>
            )
          })}

          <div className="mt-8 text-center">
          <span 
              className="cursor-pointer font-semibold text-center text-xl mx-6 py-2 px-4  rounded-lg shadow-md text-black hover:bg-blue"
              onClick={() => {
                setIsModalOpen(false)
                setSelectedPost({})
              }}
              >목록으로</span>
          </div>

        </div> : <LoadingIndicator/>
      }

    </>
  );
}


export default Modalcontent;