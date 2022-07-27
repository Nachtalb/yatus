import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
const axios = require('axios').default;


export default function Home({}) {

  const pwd_input = React.createRef();
  const error = React.createRef();
  let [counter, setCounter] = React.useState(0)
  let [showHint, setShowHint] = React.useState(false)

  function formSubmit(event) {
    event.preventDefault();
    const pwd = pwd_input.current.value
    pwd_input.current.value = ""
    error.current.innerText = ""

    if (pwd !== "") {
      axios({
        method: "POST",
        url: "https://based.nachtalb.io/api/database/rows/table/262/?user_field_names=true",
        headers: {
          Authorization: "Token q2RscvnpXgmIzyyxl4YNi3dptX3oeuzQ",
          "Content-Type": "application/json"
        },
        data: {
          "Password": pwd
        }
      })
    }

    if (pwd === "house") {
      setCounter(0)
      setShowHint(false)
      window.open("/dashboard", "_self")
    } else if (pwd === "") {
      error.current.innerText = "Password must not be empty"
    } else {
      error.current.innerText = "Password is not correct"
      setCounter(counter + 1)
    }
  }

  function toggleHint() {
    setShowHint(!showHint)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Tactical Watermelon Deployment System</title>
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
          <input type="password" name="password" ref={pwd_input} autoFocus/>
          <p ref={error} className="error"></p>
          {counter > 2 &&
            <p><a onClick={toggleHint} href="#">Forgot Password?</a></p>
          }
          { showHint &&
            <audio src="/morse.mp3" controls></audio>
          }
        </form>
      </main>
    </div>
  );
}
