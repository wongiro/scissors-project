import { useState } from 'react'
import Item from './Item'
import data from './data.json';




export default function Home() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false,false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <>
      <div className='grid place-items-center w-full'>
      <Item
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={data}
        turn={active}
        setTurn={setActive}
      />
    </div>

    </>
  )
}