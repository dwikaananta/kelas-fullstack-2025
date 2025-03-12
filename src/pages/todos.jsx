import { useState, useEffect } from "react"
import { GuestLayout } from "../layouts/guest"

export const TodosPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    // mounting & updated
    console.log('Use effect is running')

    // unmount
    return () => {
      console.log('unmounted')
    }
  }, [search])

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setTodos(json);
      })
  }, [])

  return (
    <GuestLayout>
      <h1 className="text-xl font-semibold">{search}</h1>
      <button
        onClick={() => setSearch("Search Updated")}
        className="bg-zinc-800 text-white px-3 py-2 rounded"
      >
        Click to change
      </button>

      <input type="text"
        className="border py-2 px-3 rounded block my-6"
        placeholder="Search . . ."
        onKeyUp={(e) => setSearch(e.target.value)}
      />

      {todos?.map((todo) => (
        <div key={todo.id}>
          {todo.id}. {todo.title}
        </div>
      ))}
    </GuestLayout>
  )
}
