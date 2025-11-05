import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string;
  onFinish: () => void;
}

const Wordbox : React.FC<IWordboxProp> = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);  
  const [mistake, setMistake] = useState<boolean>(false);
  
  useEffect(() => {
    setLettersLeft(word);
    setMistake(false);
  }, [word]);
  
  useEffect(() => {
      const handleKeyUp = (e: KeyboardEvent) => {
        const key = e.key;
        //console.log(e.key.toUpperCase())
      
        if (key === lettersLeft[0]) {
          setMistake(false);
          //console.log("spravně")
            if(lettersLeft.length === 1) {
              onFinish();
            }
            else {
          //setLettersLeft(lettersLeft.slice(1)) //chci od prvního znaku až do konce 0,1 ...
          setLettersLeft(x => x.slice(1));
            }
          
        } else {
        setMistake(true);
        setTimeout(() => setMistake(false), 300); 
      }
    };
    
      document.addEventListener("keyup", handleKeyUp)
      return() => {
        document.removeEventListener("keyup", handleKeyUp)
      };
    },
[lettersLeft, onFinish]);

    const wordboxClass = mistake ? 'wordbox mistake' : 'wordbox';

  return (
  <div className={wordboxClass}>{lettersLeft}</div>
  );

};

export default Wordbox;


//Tady nám stale state nehrozí. Mistake jen přenastavuju, nikde ji nečtu, takže se mi nemá co „zaseknout“.