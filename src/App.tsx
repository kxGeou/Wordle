import { useEffect, useState } from "react"
import Wordle from "./components/Wordle";


 function App() {
    const [solution, setSolution] = useState(null);

    useEffect(()=> {
        fetch("/data/db.json")
        .then(res => res.json())
        .then(data => {
            const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)];
            console.log(randomSolution)
            setSolution(randomSolution.word)
        })
    }, [setSolution])

  return (
    <div className="min-h-screen bg-background text-white">
        {
            solution && <Wordle solution={solution}></Wordle>
        }
    </div>
  )
}

export default App
