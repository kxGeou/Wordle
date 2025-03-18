
function Row({ guess }: { guess?: any }) {
  return (
    <div className="flex justify-center text-center">
      {Array.isArray(guess) ? (
        guess.map((g, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-[4rem] h-[4rem] border border-gray-700 m-1 text-center uppercase font-bold text-4xl"
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
      )}
    </div>
  );
}

export default Row;
