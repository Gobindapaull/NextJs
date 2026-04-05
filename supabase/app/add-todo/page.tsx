'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
)

export default function AddTodo() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const addTodo = async () => {
    setLoading(true)

    const { error } = await supabase.from('todos').insert([
      { name }
    ])

    if (error) {
      alert('Error: ' + error.message)
    } else {
      alert('Added successfully ✅')
      setName('')
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Todo</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter todo"
        style={{ padding: 10, marginRight: 10 }}
      />

      <button onClick={addTodo} disabled={loading}>
        {loading ? 'Adding...' : 'Add'}
      </button>
    </div>
  )
}
