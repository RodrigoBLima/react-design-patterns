import React from 'react'

function CreateProducts(props: CreateProductsProps) {
  return (
    <div>CreateProducts</div>
  )
}

export default CreateProducts

interface CreateProductsProps {
  onCreate: Function
}