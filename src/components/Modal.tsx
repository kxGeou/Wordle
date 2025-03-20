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
            <h2>You win !</h2>
            <p className="opacity-75 mb-6">Odpowiedź to: <span className="uppercase font-bold text-emerald-400 ">{solution}</span></p>
            <p className="opacity-75 mb-12">You found the solution in <span className="uppercase font-bold text-xl text-emerald-400 ">{turn}</span> guesses</p>
            <a href="/" className="bg-green/50 px-6 py-2 rounded transition-all duration-300 hover:bg-green">Zagraj ponownie</a>
          </div>
        )}
        {!isCorrect && (
          <div>
            <h2 >Nevermind</h2>
            <p className="opacity-75 mb-6">Odpowiedź to: <span className="uppercase font-bold text-emerald-400 ">{solution}</span></p>
            <p className="opacity-75 mb-12">Better luck next time</p>
            <a href="/" className="bg-green/50 px-6 py-2 rounded transition-all duration-300 hover:bg-green">Zagraj ponownie</a>
          </div>
        )}
    </div>
    </div>

  )
}

export default Modal
