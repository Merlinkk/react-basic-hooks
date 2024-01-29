import React,{useState} from 'react'

function Content() {

    const [show, setShow] = useState(true)

    function toggleContent(){
        alert("Content Button Clicked!")
        setShow(!show)
    }

  return (
    <>
    
    {show ? <div>
        In the quiet solitude of the forest, sunlight filtered through the dense canopy, creating a mosaic of dancing shadows on the forest floor. The air was filled with the soothing symphony of rustling leaves and distant bird songs, creating a harmonious melody that seemed to encapsulate the serenity of nature. As a gentle breeze whispered through the towering trees, it carried with it the earthy scent of moss and the sweet fragrance of wildflowers. In this tranquil haven, time seemed to slow, allowing one to momentarily escape the hustle and bustle of the outside world and immerse themselves in the timeless beauty of the natural world.
    </div> : null}
    
        <button style={{padding:10, margin:10}} onClick={toggleContent}> {show ? "Hide Content" : "Show Content"} </button>

    </>
  )
}

export default Content