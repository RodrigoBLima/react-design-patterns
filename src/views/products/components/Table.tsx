import React from 'react'
import IProducts from '../../../entities/products'

function Table(props: TableProps) {
  return (
    <div>Table</div>
  )
}

export default Table

interface TableProps {
  products: IProducts[];
  onDelete: Function
}