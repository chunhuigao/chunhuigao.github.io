import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home/index.jsx'
import List from './List/index.tsx'
import './utils/style/index.scss'
import 'antd/dist/antd.less'
export default function Index() {
  return <div>博客测试,测试：GitHub是否自动打包</div>
}

const root = document.getElementById('root')
// root.textContent = "webpackwqewq2"
ReactDOM.render(<Index />, root)
