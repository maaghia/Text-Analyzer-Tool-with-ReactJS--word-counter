import React, { useState } from 'react';
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import {pronouns} from './/data/pronouns'


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
  const initialBottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: '-',
    },
    {
      title: 'Longest word:',
      value: '-',
    },
  ];

  const [resultBar, setResultBar] = useState(initialResultBar);
  const [bottomResultBar, setBottomResultBar] = useState(initialBottomResultBar);

  const handleTextChange = (text: string) => {
    // Calculate word count
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

    // Calculate character count
    const charCount = text.length;

    // Calculate sentence, paragraph, and pronoun counts 
    const sentenceCount = text.trim().split(/[.!?]/).filter(Boolean).length; 
    const paragraphCount = text.trim().split(/\n/).filter(Boolean).length;; 
    
    const lowercaseText = text.toLowerCase();
    const pronounOccurrences: { [pronoun: string]: number } = {};

    pronouns.forEach(pronoun => {
      const pronounRegExp = new RegExp(`\\b${pronoun.toLowerCase()}\\b`, 'g');
      const matches = lowercaseText.match(pronounRegExp);

      pronounOccurrences[pronoun] = matches ? matches.length : 0;
    });

    const pronounCount =  Object.values(pronounOccurrences).reduce((total, count) => total + count, 0); 

    const avgReadingTime = Math.ceil(wordCount / 255);
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

    setBottomResultBar([
      {
        title: 'Average Reading Time:',
        value: `~${avgReadingTime} minute${avgReadingTime !== 1 ? 's' : ''}`,
      },
      {
        title: 'Longest word:',
        value: '-',
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
          <BottomResultBox bottomResultBar={bottomResultBar} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
