import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import dashboardStyles from "../styles/Dashboard.module.css";

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
    icon: "public/search.svg",
    errorState: React.useState("")
  },
  {
    name: "passcode2",
    label: "Passcode 2",
    password: "101835",
    icon: "public/code.svg",
    errorState: React.useState("")
  },
  {
    name: "passcode3",
    label: "Passcode 3",
    password: "hund",
    icon: "public/map-pin.svg",
    errorState: React.useState("")
  },
  {
    name: "passcode4",
    label: "Passcode 4",
    password: "watermelon",
    icon: "public/feather.svg",
    errorState: React.useState("")
  },
  ]

  function formSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    let hasErrors = false
    inputs.map((object) => {
      object.errorState[1]("")
      const value = data.get(object.name)
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


  function makeItRain() {
    const body = document.getElementsByTagName("body")[0]
    const img = document.createElement("img")
    img.className = "rain"
    img.src = "public/watermelon.svg"
    img.style.left = Math.floor(Math.random() * 100) + 'vw';
    body.appendChild(img)
    setTimeout(makeItRain, 50)
  }

  return (
    <div className={dashboardStyles.container}>
      <Head>
        <title>Dashboard - Tactical Watermelon Deployment System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>
          <img src="public/watermelon.svg" alt="Tactical Watermelon"/>
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
            <button type="submit">Deploy</button>
          </div>
        </form>
      </main>
    </div>
  );
}
