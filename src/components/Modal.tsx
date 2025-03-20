type Tmodal = {
  isCorrect : boolean;
  turn : number; 
  solution : any;
}
function Modal({isCorrect, turn, solution} : Tmodal) {

  if (!isCorrect) {
    console.log(":_")
  }
  return (
    <div className="modal">

    <div className="modalBox">
        {isCorrect && (
          <div>
            <h1>You win !</h1>
            <p>{solution}</p>
            <p>You found the solution in {turn} guesses</p>
          </div>
        )}
        {!isCorrect && (
          <div>
            <h1>Nevermind</h1>
            <p>{solution}</p>
            <p>Better luck next time</p>
          </div>
        )}
    </div>
    </div>

  )
}

export default Modal
