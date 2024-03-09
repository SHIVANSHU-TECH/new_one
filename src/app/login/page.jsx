"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getProviders, signIn, useSession, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  console.log(session);
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handellogout = async () => { 
    await signOut();
    router.push("/login");
  }


  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));


  }, [params]);

  


  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    console.log("User Profile:", session.data.user);
    console.log("User Profile:", session.user);
    router?.push("/");
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

   

    try {
      const res = await fetch("http://localhost:5000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
     if(data.success==true){
      localStorage.setItem("token",data.token);
      console.log("login success",data);
      router.push("/");
     }
     else{

      console.log("error while login",data);
     } 
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.containr}>
      <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && error}
      </form>
      {/* <button
        onClick={() => {
          handleLogin("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      <button
        onClick={() => {
          handleLogin("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/register">
        Create new account
      </Link>
      {/* <button onClick={handellogout}>Logout</button> */}
    </div>
  );
};

export default Login;
