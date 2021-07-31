import React from 'react'

export function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <h1>App 2</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}
