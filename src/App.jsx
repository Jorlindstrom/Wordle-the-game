import { useEffect, useState } from "react";
import WordleBoard from "./components/WordleBoard";

const API_URL = '/db.json';

export default function App() {
  const [solution, setSolution] = useState('');

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words = await response.json();
      const randomWord = words[Math.floor(Math.random() * words.length)];
      setSolution(randomWord);
      //console.log(randomWord);
    };

    fetchWord();
  }, [setSolution]);

  return (
    <div className="app">
      {solution && <WordleBoard solution={solution}/>}

    </div>
  );
}

