import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

import axios from 'axios'
import { useState } from 'react'

export default function Home() {

  const [data, setData] = useState()

  const api = "dd3590bc9b1e46659007d65a915febc3"
  let tesla = "tesla"
  let date = '2023-05-17'
  let sortBy = 'publishedAt'
  const url = `https://newsapi.org/v2/everything?q=${tesla}&from=${date}$sortBy=${sortBy}&apiKey=${api}`

  const GrabNews = () => {
    axios.get(url)
    .then((response) => {
      console.clear()
      setData(response.data)
      console.log(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
       <button onClick={() => GrabNews()}>Grab Info</button>
       {
        data && data.articles.map((d, i) => {
          return (
             <div key={i}>
              <h2>{d.author}</h2>
              <h3>{d.title}</h3>
              <br />
              <br />
             </div>
          )
        })
       }
      </main>
    </>
  )
}
