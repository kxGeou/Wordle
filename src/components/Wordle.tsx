import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

type TWordle = {
    solution : string | null;
}

function Wordle({solution} : TWordle) {
    const { currentGuess, keyHandler, guesses, isCorrect, turn} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', keyHandler)
        return () => {
            window.removeEventListener('keyup', keyHandler);
        }
    }, [keyHandler])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    },[guesses, turn, isCorrect])

  return (
    <main>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
        <Keypad></Keypad>
    </main>
  )
}

export default Wordle
