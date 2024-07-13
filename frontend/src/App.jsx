import React,{useEffect,useState} from 'react'

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5100/api/data')
     .then(response => response.json())
     .then(data => setData(data.Data))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}
