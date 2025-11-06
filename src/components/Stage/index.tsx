import { useState } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

// TODO: temporary disable function - remove next line when you start using it
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const generateWord = (size: number): string | null => {
  const sizeIndex = size === undefined
    ? Math.floor(Math.random() * wordList.length)
    : size - 3;
  
  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }
  
  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState<string[]>(['jahoda', 'banán', 'meloun']);
  const [mistakes, setMistakes] = useState<number>(0);

  const handleFinish = () => {
    setWords((prev) => {
      // odstraním první slovo a zbytek mi zůstane
      const [, ...rest] = prev;
  
      // vygeneruju nové slovo 
      const newWord = generateWord(6) || 'jahoda';
  
      // vrátím nové pole = 3 slova
      return [...rest, newWord];
    });
  };

  const handleMistake = () => {
    setMistakes((prev) => prev + 1); //stav mistake o 1
  };
  
  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: 0{mistakes}</div>
      <div className="stage__words">
        {words.map((word, i) => 
        <Wordbox 
          word={word } 
          key={word} 
          onFinish={handleFinish} 
          onMistake={handleMistake}
          active={i === 0} 
          />)}
      </div>
    </div>
  );
};


export default Stage;
