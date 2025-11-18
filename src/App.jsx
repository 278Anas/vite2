import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import { Alert } from 'bootstrap';
import Alert from './component/Alert.jsx';
import Navbar from './component/Navbar.jsx';
import TextArea from './component/TextArea.jsx';
import Accorian from './component/Accorian.jsx';


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
   

       <Navbar/>

       <Alert alert = "This is Alert"/>
       <TextArea/>
       <Accorian/>

    

  

    </>
  )
 }

export default App
