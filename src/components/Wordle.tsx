import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

type TWordle = {
    solution : string | null;
}

function Wordle({solution} : TWordle) {
    const { currentGuess, keyHandler} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', keyHandler)


        return () => {
            window.removeEventListener('keyup', keyHandler);
        }
    }, [keyHandler])


  return (
    <main>
        
    </main>
  )
}

export default Wordle
