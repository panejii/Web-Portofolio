import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'remixicon/fonts/remixicon.css'
import PreLoader from './components/PreLoader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader/>
  </StrictMode>,
)
