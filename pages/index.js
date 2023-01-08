  import { useState } from 'react'
  import Head from 'next/head';
  import Image from 'next/image';
  import buildspaceLogo from '../assets/buildspace-logo.png';

  const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false)
  const [apiOutput, setApiOutput] = useState('')

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }  
  
  const onUserChangedText = (event) => {console.log(event.target.value);
    setUserInput(event.target.value);
  };




  return (
  <div className="root">
    <div className="container">
      <div className="header">
        <div className="header-title">
          <h1>Super AI Findr</h1>
        </div>
        <div className="header-subtitle">
          <h2>Example: I'm looking for a restaurant that serves vegan food in the downtown area.</h2>
        </div>
      </div>

  {/* Text Area*/}
  <textarea className="prompt-box" placeholder="start typing here" value={userInput} onChange={onUserChangedText}
  />
  {/* New Code */}
  <div className="prompt-buttons">
    <a className="generate-button" onClick={callGenerateEndpoint}>
      <div className="generate">
        <p>Search</p>
      </div>
    </a>
  </div>


  
  
  <div className="prompt-container">
  <div className="prompt-buttons">

  {/* Generate Button */}
  <a className="generate-button" onClick={callGenerateEndpoint}>
    <div className="generate">
      <p>Generate</p>
    </div>
  </a>

  {/* Button loading animation */ }
  <div className="prompt-buttons">
  <a
  className={isGenerating ? 'generate-button loading' : 'generate-button'}
  onClick={callGenerateEndpoint}
  >
  <div className="generate">
  {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
  </div>
  </a>
  </div>


  {/* API OUTPUT */}
  <div className="output">
  <div className="output-header-container">
    <div className="output-header">
      <h3>Output</h3>
    </div>
  </div>
  <div className="output-content">
    <p>{apiOutput}</p>
  </div>
  </div>
  )


{/* Buildspace Logo */}
  </div>
      </div>
    </div>
    <div className="badge-container grow">
      <a
        href="https://christophercelaya.com"
        target="_blank"
        rel="noreferrer"
      >
        <div className="badge">
          <Image src={buildspaceLogo} alt="buildspace logo" />
          <p>by chriscelaya</p>
        </div>
      </a>
    </div>
  </div>
  );
  };

  export default Home;
