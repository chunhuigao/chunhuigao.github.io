import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
type Props = {}

export default function Index({}: Props) {
  return (
    <div>
      Home 21321
      <Link to="/about">about</Link>
    </div>
  )
}
