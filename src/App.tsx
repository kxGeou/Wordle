import { useEffect, useState } from "react"

 function App() {
    const [solution, setSolution] = useState(null);

    useEffect(()=> {
        fetch("/data/db.json")
        .then(res => res.json())
        .then(data => {
            const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)];
            console.log(randomSolution)
            setSolution(randomSolution)
        })
    }, [])

  return (
    <div className="min-h-screen bg-background text-white">
    </div>
  )
}

export default App
