import { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

type TWordle = {
    solution : string | null;
}

function Wordle({solution} : TWordle) {
    const { currentGuess, keyHandler, guesses, isCorrect, turn, usedKeys} = useWordle(solution);
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener('keyup', keyHandler)


        if (isCorrect) {
            setTimeout(() => {
                setShow(true)
            }, 2000)
            window.removeEventListener('keyup', keyHandler)
        }


        if(turn > 5 && !isCorrect) {
            setTimeout(() => {
                setShow(true)
            }, 2000)
            window.removeEventListener('keyup', keyHandler)
        }

        return () => {
            window.removeEventListener('keyup', keyHandler);
        }
    }, [keyHandler, isCorrect, turn])



  return (
    <main className="relative flex flex-col justify-center items-center">
        <h1 className="mb-6 absolute top-[-5%] uppercase font-bold opacity-35 tracking-widest ">Wordle </h1>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
        <Keypad usedKeys={usedKeys}></Keypad>
        {show && <Modal isCorrect={isCorrect} turn={turn} solution={solution}></Modal>}
    </main>
  )
}

export default Wordle
