import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string;
}

const Wordbox : React.FC<IWordboxProp> = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);  
  
  useEffect(
    () => {
      const handleKeyUp = (e: KeyboardEvent) => {
        const key = e.key;
        //console.log(e.key.toUpperCase())
      

        if (key === lettersLeft[0]) {
          console.log("spravně")
          //setLettersLeft(lettersLeft.slice(1)) //chci od prvního znaku až do konce 0,1 ...
          setLettersLeft(x => x.slice(1))
          
        }
      }

      document.addEventListener("keyup", handleKeyUp)
      

      return() => {
        document.removeEventListener("keyup", handleKeyUp)
      }
    }

   
  )
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
  [lettersLeft];
};

export default Wordbox;
