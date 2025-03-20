import Row from "./Row";

 type TGrid = {
  currentGuess : string;
  guesses : string[]; 
  turn : number;
}
function Grid({currentGuess, guesses, turn} : TGrid) {
  return (
    <div>
      {guesses.map((guess, index)  => {
        if(turn === index) {
          return <Row key={index} currentGuess={currentGuess}></Row>
        } 
        return <Row key={index} guess={guess} ></Row>
      })}
    </div>
  )
}

export default Grid
