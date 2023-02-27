import React, { useEffect, useState } from 'react'
import data from './data'
function App() {
  const [input, setInput] = useState('')
  const [text, setText] = useState([])
  const onChangeHandler = (e) => {
    const { value } = e.target
    let amount = parseInt(value)
    setInput(amount)
  }

  // useEffect(() => {}, [input])

  const onClickHandler = () => {
    console.log('This is working')

    const getWords = () => {
      if (input <= 0) {
        return data.filter((each, index) => {
          return index === 0
        })
      }
      if (input > data.length - 1) {
        return data.filter((each, index) => {
          return index <= data.length
        })
      }

      return data.filter((each, index) => {
        return index <= input - 1
      })
    }

    setText(getWords)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    let amount = parseInt(input)

    if (amount <= 0) {
      amount = 1
    }

    if (amount > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }

  useEffect(() => {
    console.log(text)
  }, [text])

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={onSubmitHandler}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          value={input}
          onChange={onChangeHandler}
          style={{ border: 'solid black 1px', width: '20%' }}
        />
        <button type="button" className="btn" onClick={onClickHandler}>
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((each, index) => {
          return <p key={index}>{each}</p>
        })}
      </article>
    </section>
  )
}

export default App
