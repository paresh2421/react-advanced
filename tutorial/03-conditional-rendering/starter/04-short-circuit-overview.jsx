import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [text, setText] = useState('')
  const [name, setName] = useState('susan')

  const codeExample = text || 'hello world'

  return <h2>short circuit overview</h2>
}
export default ShortCircuitOverview
