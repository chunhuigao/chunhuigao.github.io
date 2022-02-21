import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

type Props = {}

export default function Index({}: Props) {
  return (
    <div>
      hi 这里是about页面 <Link to="/home">about</Link>
    </div>
  )
}
