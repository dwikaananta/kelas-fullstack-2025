import { useState, useEffect } from "react"
import { GuestLayout } from "../layouts/guest"

export const TodosPage = () => {
  const [search, setSearch] = useState("Test Value");

  useEffect(() => {
    // mounting & updated
    console.log('Use effect is running')

    // unmount
    return () => {
      console.log('unmounted')
    }
  }, [search])

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
    </GuestLayout>
  )
}
