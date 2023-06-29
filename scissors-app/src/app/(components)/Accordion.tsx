import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'


type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    id: number
}

const Accordion = ({question, answer, turn, setTurn, id}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![id] ? `${contentRef.current.scrollHeight}px`:"0px"
        }

    },[contentRef, turn, id])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[id] = !newTurn[id]
        setTurn!(newTurn)
    }
  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
      <button onClick={toggleAccordion}
       className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${turn![id]}`}>
        <div className='py-3'>
           <div className='flex items-center justify-between h-14 text-left'>
              <span className='ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-sky-600'>{question}</span>
              <div>
               { turn![id] ? <Image src='/images/minus.png' alt="" width={20} height={20}/> :
                <Image src='/images/plus.png' alt="" width={20} height={20}/>}

              </div>
           </div>
           <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
              <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg'>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion