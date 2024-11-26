/* eslint-disable no-unused-vars */
import { useState } from 'react'
import explorerdata from "./data"
import FileExplorer from './components/FileExplorer';

function App() {
  const [explorer, setExplorer] = useState(explorerdata)
  
  return (
    <div>
      <FileExplorer explorer={explorer} />
    </div>
  )
}

export default App
