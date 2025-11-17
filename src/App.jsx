import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  const [text, setText] =  useState("Enter Text Here" );

  const handleUpClick= ()=>{
    console.log("UpperCase was clicked" );
    let newText= text.toUpperCase();
    setText(newText);
  }

  const handleonChange= (event)=>{
    console.log("OnChange was clicked");
    setText(event.target.value);
  }
  
   const  [myStyle, setmyStyle] = useState({
    backgroundColor : "white",
    color : "black",
   });
   const  [btnText, setbtnText] = useState("Enable Dark Mode");
  

  const toggleStyle= ()=>{
    if(myStyle.color == "black"){
      setmyStyle({
        backgroundColor : "black",
       color : "white",
      })
      setbtnText("Enable Light Mode");

    }
    else{
     setmyStyle({
        backgroundColor : "white",
       color : "black",
      })
      setbtnText("Enable Dark Mode");
    }
  }

 


  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  </nav>

    <div className="container">
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label" >Example textarea</label>
  <textarea className="form-control" onChange={handleonChange} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
   <button className="btn btn-primery" onClick={handleUpClick}>Convert to Uppercase</button>

  </div>
   <div className="container my-3" >
  <h6>Your Text Summary</h6>
  <p>{text.split(" ").length} word and {text.length} character</p>
  <p>{0.008 * text.split(" ").length}</p>
   </div>


   <div className="container" style={myStyle}>
   <div style={myStyle} className="accordion" id="accordionExample">
  <h1>About Us</h1>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
    </div>
  <div className="btn my-3">
   <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
   </div>
   </div>

    </>
  )
 }

export default App
