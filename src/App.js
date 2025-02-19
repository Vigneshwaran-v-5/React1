import { useState } from 'react';
import './App.css';

const quizData =[
  {
    question:"What does HTML stands for ?",
    options:[
      "Hypertext Markup Language",
      "Hydrotext Markup Language",
      "Hypertext Medium Language"
    ],
    answer:"Hypertext Markup Language"
  },
  {
    question:"Choose the correct HTML tag for the largest heading.",
    options:[
      "<heading></heading>",
      "<h1></h1>",
      "<h6></h6>"
    ],
    answer:"<h1></h1>"
  },
  {
    question:"What is the correct HTML tag for inserting a line break ?",
    options:[
      "<br>",
      "<lb>",
      "<break>"
    ],
    answer:"<br>"
  },
  {
    question:"Which of these tags are all <table> tags ?",
    options:[
      "<table><tr><td>",
      "<thead><body><tr>",
      "<table><tr><tt>"
    ],
    answer:"<table><tr><td>"
  },
  {
    question:"In CSS, what is the universal selector ?",
    options:[
      "#",
      "*",
      "$"
    ],
    answer:"*"
  },
  {
    question:"How do you create a Flexbox container in CSS Flexbox ?",
    options:[
      "display:flex;",
      "display:flexbox",
      "display:flexcontainer;"
    ],
    answer:"display:flex;"
  },
  {
    question:"In JavaScript, what is the classification for a 'function' and 'class' ?",
    options:[
      "keywords",
      "declaration",
      "variable"
    ],
    answer:"declaration"
  },
  {
    question:"Which programming language is mainly used for adding interactivity to websites ?",
    options:[
      "css",
      "python",
      "javascript"
    ],
    answer:"javascript"
  },
  {
    question:"What is the purpose of a front-end web development framework like React or Angular ?",
    options:[
      "To create a visually appealing user interface",
      "To handle server-side routing",
      "To interact with web servers"
    ],
    answer:"To create a visually appealing user interface"
  },
  {
    question:"Which part of web development is responsible for handling data storage and retrieval ?",
    options:[
      "Middleware development",
      "Front-end development",
      "Back-end development"
    ],
    answer:"Back-end development"
  },
  {
    question:"What is the primary function of a web server in the context of web development ?",
    options:[
      "Rendering web pages on the client’s browser",
      "Storing user data",
      "Handling HTTP requests and serving web pages"
    ],
    answer:"Handling HTTP requests and serving web pages"
  },
  {
    question:"What is the purpose of the script tag in HTML ?",
    options:[
      "To include external JavaScript code",
      "To define the page’s structure",
      "To create hyperlinks"
    ],
    answer:"To include external JavaScript code"
  },
  {
    question:"Which of the following is used to store and query data in a tabular format in web development ?",
    options:[
      " JSON",
      "Database",
      "XML"
    ],
    answer:"Database"
  },
  {
    question:"Which JavaScript function is used to change the content of an HTML element ?",
    options:[
      "change()",
      "update()",
      "innerHTML()"
    ],
    answer:"innerHTML()"
  },
  {
    question:"Which HTTP method is typically used to retrieve data from a web server ?",
    options:[
      "GET",
      "PUT",
      "POST"
    ],
    answer:"GET"
  },
  {
    question:"Which of the following is an example of a front-end web development framework/library ?",
    options:[
      "Express.js",
      "Django",
      "React.js"
    ],
    answer:"React.js"
  },
  {
    question:"What is the purpose of the “cookie” in web development ?",
    options:[
      "To encrypt sensitive information during transmission",
      "To store data on the client’s browser for future use",
      "To create user authentication systems"
    ],
    answer:"To store data on the client’s browser for future use"
  },
  {
    question:"Which of the following is NOT a commonly used web development framework for Python ?",
    options:[
      "Pyramid",
      "Django",
      "Express.js"
    ],
    answer:"Express.js"
  },
  {
    question:"What is the purpose of the “viewport” meta tag in HTML ?",
    options:[
      "To set the width and initial scale of the web page for different devices",
      "To specify the default language of the web page",
      "To define the font style and size"
    ],
    answer:"To set the width and initial scale of the web page for different devices"
  },
  {
    question:"Which CSS property is used to create rounded corners for an HTML element ?",
    options:[
      "rounded-corners",
      "border-radius",
      "corner-radius"
    ],
    answer:"border-radius"
  }
];
function App() {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const [result, setResult] = useState(false);

   const handleAnswer = (selectedOption) =>{
    if(selectedOption ===quizData[currentQuestion].answer){
      setScore(score+1);
    }
    document.getElementById("hd").innerHTML="";
    const nextQuestion =currentQuestion + 1;
    if(nextQuestion<quizData.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setResult(true);
    }
   };
  return (
    <div className="App">
    <div class="container">
      <h1 id="hd">Welcome to Quiz App</h1>
      {result ? (
      <>
     <h2>Quiz Completed</h2>
     <p>your score: {score}/{quizData.length}</p>
     <button id="rst" onClick={()=>window.location.reload()}>Restart</button>
     </>
      ) : (
        <>
        <h1 id="question">{quizData[currentQuestion].question}</h1>
        <div id="opt">
          {quizData[currentQuestion].options.map((Option)=>(
            <button id="opts" key={Option} onClick={()=>handleAnswer(Option)}>{Option}</button>
          ))}
        </div>
        </>
      )}
      </div>
    </div>
  );
}

export default App;

