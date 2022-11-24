import React from 'react'
import { useParams } from 'react-router-dom'

export default function TestProductDetail() {
    const {productId} = useParams()
    console.log("productId", productId)
  return (
    <div>TestProductDetail {productId}</div>
  )
}
