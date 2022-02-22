import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
type Props = {}

export default function Index({}: Props) {
  return (
    <div>
      个人博客测试版本
      <Link to="/about">about</Link>
    </div>
  )
}
