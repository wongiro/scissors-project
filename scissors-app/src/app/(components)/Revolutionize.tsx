import React from 'react'

type Props = {}

const Revolutionize = (props: Props) => {
  return (
    <div className='flex-inline flex-col items-center gap-8 bg-[url(/images/Wave.svg)] bg-cover bg-no-repeat h-[299px] w-full'>
      <div className='flex flex-col items-center gap-8 justify-center h-[300px]'>
        <h1 className='text-[#FFF] text-center font-bold items-center  h-[57px] text-xxl'>Revolutionizing Link Optimization</h1>
        <button className='bg-[#005AE2] w-[200px] h-[48px] text-[#FFF] text-lg font-bold py-3 px-6 rounded-full gap-3'>Get Started</button>
      </div>
    </div>
  )
}

export default Revolutionize