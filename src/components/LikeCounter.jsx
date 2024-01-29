import React,{useState} from 'react'

function LikeCounter() {

    const [like, setLike] = useState(0)

    function likeIncrement(){
        setLike(like+1)
    }

  return (
    <>
    <div style={{fontSize:30}}>{like}</div>
    <button onClick={likeIncrement}>LIKE</button>
    </>
  )
}

export default LikeCounter