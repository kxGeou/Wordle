import { useState } from "react"

const useWordle = (solution : any) => {
    const [turn, setTurn] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>("");
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean>(false)


    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
                return {key: letter , color: "grey"}
        })

        formattedGuess.forEach((letter, index ) => {
            if(solutionArray[index] === letter.key) {
                formattedGuess[index].color = 'green'
                solutionArray[index] = null
            }
        })
        formattedGuess.forEach((letter, index ) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null  
            }
        })


        return formattedGuess
    }

    const addNewGuess = () => {
        
    }

    const keyHandler = ({key} : any) => {

        if( key === 'Enter') {
            if (turn > 5 ) { 
                console.log("You Lost")
                return
            }

            if(history.includes(currentGuess)) {
                console.log("You used this word")
                return
            }

            if (currentGuess.length !== 5) {
                console.log("Word is too short")
                return
            }
            const formatted = formatGuess()
            console.log(formatted)
        }

        if (key === 'Backspace') {
            setCurrentGuess((prev)=> {
                return prev.slice(0, -1)
            })
            return 
        }
        if (/^[A-Za-z]$/.test(key)){
            if ( currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
             }
        }
    }


    return {
        turn, currentGuess,guesses,isCorrect,keyHandler
    }
}

export default useWordle