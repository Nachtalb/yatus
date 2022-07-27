import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { addEntry } from '../utils/db'

function Input({ name, label, errorState, icon }) {
  const [error, _] = errorState;
  return (
  <div className="input">
    <img className="icon" src={icon} alt={label} />
    <label htmlFor={name}>
      <span>{label}</span>
      <input type="password" name={name} id={name} />
      {error !== "" &&
        <p className="error">{error}</p>
      }
    </label>
  </div>
  )
}

export default function Dashboard({}) {
  const inputs = [
  {
    name: "passcode1",
    label: "Passcode 1",
    password: "420",
    icon: "/search.svg",
    errorState: React.useState(""),
    db: 266,
  },
  {
    name: "passcode2",
    label: "Passcode 2",
    password: "101835",
    icon: "/code.svg",
    errorState: React.useState(""),
    db: 265,
  },
  {
    name: "passcode3",
    label: "Passcode 3",
    password: "hund",
    icon: "/map-pin.svg",
    errorState: React.useState(""),
    db: 263,
  },
  {
    name: "passcode4",
    label: "Passcode 4",
    password: "watermelon",
    icon: "/feather.svg",
    errorState: React.useState(""),
    db: 264,
  },
  ]

  function formSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    let hasErrors = false
    inputs.map((object) => {
      object.errorState[1]("")
      const value: string = data.get(object.name)
      addEntry(object.db, value)
      if (value === "") {
        object.errorState[1]("The passcode cannot be empty")
        hasErrors = true
      } else if (data.get(object.name) !== object.password) {
        object.errorState[1]("The passcode is wrong")
        hasErrors = true
      }
    })
    if (!hasErrors) {
      makeItRain()
    }
  }


  function makeItRain(iteration?: number ) {
    iteration = iteration || 0
    if (iteration == 40) return
    const body = document.getElementsByTagName("body")[0]
    const img = document.createElement("img")
    img.className = "rain"
    img.src = "/watermelon.svg"
    img.style.left = Math.floor(Math.random() * 100) + 'vw';
    img.style.height = 40 + Math.floor(Math.random() * 30) + 'px';
    body.appendChild(img)
    setTimeout(() => makeItRain(iteration + 1), 50)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard - Tactical Watermelon Deployment System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>
          <img src="/watermelon.svg" alt="Tactical Watermelon"/>
          Tactical Watermelon Deployment System
        </h1>
        <p className={styles.description}>
          The best enterprise solution against any mammoth gone wild ~ Swiss Armed Forces
        </p>
      </header>

      <main className={styles.main}>
        <form action="#" onSubmit={formSubmit}>
          {inputs.map((object) => {
            return <Input {...object} key={object.name} />
          })}

          <div className="input">
            <button className="btn" type="submit">Deploy</button>
          </div>
        </form>
      </main>
    </div>
  );
}
