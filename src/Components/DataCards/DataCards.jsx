import React from 'react'
import './DataCards.css'
function DataCards({typeOfData, dataInNumber}) {
  return (
    <div className='DataCards__mainContainer'>
        <h4 className='DataCard__DataType'>{typeOfData}</h4>
        <h3 className='DataCard__dataNumber'>{dataInNumber}</h3>
    </div>
  )
}

export default DataCards