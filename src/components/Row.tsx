import '../index.css';
function Row({ guess , currentGuess}: { guess?: any, currentGuess?: undefined | string } ) {
  
  if (guess) {
    return (
      <div className="flex justify-center text-center row">
          {guess.map((g : any, index : number) => (
            <div key={index} className={`flex justify-center items-center w-[4rem] h-[4rem] m-1 text-center uppercase font-bold text-3xl ${g.color}`}>{g.key}</div>
          ))}
      </div>
    )
  }
  
  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="flex justify-center text-center row current">
          {letters.map((l, index) => (
            <div key={index} className={`flex justify-center items-center border border-white/30  w-[4rem] h-[4rem] m-1 text-center uppercase font-bold text-3xl filled`}>{l}</div>
          ))}

          {[...Array(5 - letters.length)].map((_, index) => (
            <div key={index} className="flex justify-center items-center border border-white/30 w-[4rem] h-[4rem] m-1 text-center uppercase font-bold text-3xl "></div>
          ))}
      </div>
    )
  }
  
  
  return (
    <div className="flex justify-center text-center row">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`flex justify-center border border-white/30 items-center w-[4rem] h-[4rem] m-1 text-center uppercase font-bold text-3xl ${guess?.color || ''}`}
        ></div>
      ))}
    </div>
  );
}

export default Row;



      {/* {Array.isArray(guess) ? (
        guess.map((g, index) => (
          <div
            key={index}
            className={`flex justify-center  items-center w-[4rem] h-[4rem]  m-1 text-center uppercase font-bold text-3xl ${g.color}`}
          >
            {g.key}
          </div>
        ))
      ) : (
        Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="block w-[4rem] h-[4rem] border border-gray-700 m-1 text-center uppercase font-bold text-4xl"
            ></div>
          ))
      )} */}