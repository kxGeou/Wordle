import { useEffect, useState } from 'react'

function Keypad({usedKeys} : any) {
   
      const [letters, setLetters] = useState<any[]>([]);
      
     useEffect(()=> {
            fetch("/data/db.json")
            .then(res => res.json())
            .then(json => {
                setLetters(json.letters)
            })
        }, [])

    return (
    <div className='max-w-[500px] text-center flex flex-wrap justify-center mt-8 keypad'>
        {letters && letters.map((l, index) => {
            const color = usedKeys[l.key]
           return ( 
           <div key={index} className={`flex justify-center items-center m-[5px] cursor-pointer w-10 h-12 bg-typing rounded leading-10 ${color}`}>
                {l.key}
           </div>
        )
        })}
    </div>
  )
}

export default Keypad
