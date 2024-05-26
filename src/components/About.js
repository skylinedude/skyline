

export default function About(props) {
let myStyle={
  color:props.mode==='dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'black':'white',
}
  
  return (
    <>
<div className="container my-3" style={myStyle}>
<h1 style={myStyle}>About Us</h1>
<div className="accordion accordion-flush" id="accordionFlushExample"   style={{color:props.mode==='dark'?'white':'black'}}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>A text utilities (text utils) app is a versatile tool designed to perform a variety of text processing and manipulation tasks. These apps can range from simple tools that handle basic text editing to more complex applications that perform advanced text analysis and transformation.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Skyline Utils is a comprehensive, free-to-use application designed to simplify and enhance your text processing and management tasks. Whether you are a developer, writer, data analyst, or everyday user, Skyline Utils offers a wide array of tools to handle all your text-related needs with ease and efficiency.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Browser Compatibility
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}>Skyline Utils is a powerful web application designed to provide users with a suite of utilities for various tasks. To ensure that all users have a seamless experience, regardless of their browser choice, it is crucial to focus on browser compatibility. </div>
    </div>
  </div>
</div>
</div>
      
    </>
  )
}
