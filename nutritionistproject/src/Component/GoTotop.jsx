import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

const GoTotop = () => {
    const goToBtn = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };

  return (
    <div className='top-btn' onClick={goToBtn}>
      <button className='bg-lime-600 text-sm text-white rounded float-right mr-20 hover:bg-lime-700 px-4 py-2 mt-3 '>GoToTop<FontAwesomeIcon icon={faArrowUp} /></button>
    </div>
  )
}

export default GoTotop;
