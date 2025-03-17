import { useState } from "react"

const useWordle = (solution : string | null) => {
    const [turn, setTurn] = useState<number>(0);
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState<boolean>(false)


    const formatGuess = () => {

    }

    const addNewGuess = () => {

    }

    const keyHandler = ({key} : any) => {
        if (/^[A-Za-z]$/.test(key)){
            console.log(key)
        }
    }


    return {
        turn, currentGuess,guesses,isCorrect,keyHandler
    }
}

export default useWordle