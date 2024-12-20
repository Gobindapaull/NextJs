"use client";

import React from 'react'
import { Button } from './ui/button'
import toast from 'react-hot-toast'

const Demo = () => {
  return (
    <div>
        <Button onClick={() => toast.success("Button clicked successfully")} className="mt-2">Click Me</Button>
    </div>
  )
}

export default Demo
