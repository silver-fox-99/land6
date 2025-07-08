import React from 'react'
import TableComponent from './table'

import './table-block.scss'

const TableBlock = () => {


  return (
    <div id="trade_view" className='table-block container'>
      <h4 data-aos="fade-right" className="table-block__title title">Trade view</h4>

      <TableComponent />
    </div>
  )
}

export default TableBlock
