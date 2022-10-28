import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = React.useState<string[]>([]);
  const [ink, si] = React.useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>MY TODO LIST</h2>
      <input value={ink} onChange={(e) => si(e.target.value)} />
      <button
        className={styles.button}
        onClick={() => {
          setTodoList([...todoList, ink]);
        }}
      >
        Add todolist
      </button>
      {todoList.map((todoitem) => {
        return <li key={todoitem}>{todoitem}</li>;
      })}
    </div>
  );
}
