import Head from "next/head";
import React from "react";
import {addEntry} from "utils/db";
import styles from "../styles/Home.module.css";


export default function Home({}) {

  const pwd_input = React.createRef();
  const error = React.createRef();
  let [counter, setCounter] = React.useState(0)
  let [showHint, setShowHint] = React.useState(false)

  function formSubmit(event) {
    event.preventDefault();
    const pwd: string = pwd_input.current.value
    pwd_input.current.value = ""
    error.current.innerText = ""

    addEntry(262, pwd)

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
          <input type={process.env.showPwd && "text" || "password"} name="password" ref={pwd_input} autoFocus/>
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
