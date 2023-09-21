import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const ProductDetails = (props: Props) => {
    const params = useParams();
    const {name} = params;
  return (
    <div>{name}</div>
  )
}

export default ProductDetails