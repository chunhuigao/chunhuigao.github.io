import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
type Props = {}

export default function Index(props: Props) {
  console.log('this.props', props)
  return (
    <div>
      <header className="color-primary flex-center">新建于2022</header>
    </div>
  )
}
