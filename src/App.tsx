import React, { useState } from 'react';
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'




const App: React.FC = () => {
  const initialResultBar = [
    {
      title: 'Words',
      value: 0,
    },
    {
      title: 'Characters',
      value: 0,
    },
    {
      title: 'Sentences',
      value: 0,
    },
    {
      title: 'Paragraphs',
      value: 0,
    },
    {
      title: 'Pronouns',
      value: 0,
    },
  ];

  const [resultBar, setResultBar] = useState(initialResultBar);

  const handleTextChange = (text: string) => {
    // Calculate word count
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    // Calculate character count
    const charCount = text.length;

    // Calculate sentence, paragraph, and pronoun counts (placeholders for now)
    const sentenceCount = 0; // Replace with actual sentence count
    const paragraphCount = 0; // Replace with actual paragraph count
    const pronounCount = 0; // Replace with actual pronoun count

    // Update the resultBar array with the new counts
    setResultBar([
      {
        title: 'Words',
        value: wordCount,
      },
      {
        title: 'Characters',
        value: charCount,
      },
      {
        title: 'Sentences',
        value: sentenceCount,
      },
      {
        title: 'Paragraphs',
        value: paragraphCount,
      },
      {
        title: 'Pronouns',
        value: pronounCount,
      },
    ]);
  };


  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox resultBar={resultBar}/>
          <TextArea onTextChange={handleTextChange}/>
          <BottomResultBox />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
