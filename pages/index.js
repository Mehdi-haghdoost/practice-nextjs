import React from "react";
import { useFormik } from "formik";
import connectToDB from '../utils/db'
import userModel from "../models/user"

export default function Home({ users }) {
  console.log(users);
  const form = useFormik({
    initialValues: { Username: '', email: '', password: '' },

    onSubmit: (values, { setSubmitting }) => {

      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    },

    validate: (values) => {
      const errors = {};

      if (values.Username === "") {
        errors.Username = "وارد کردن نام اجباری می‌باشد";
      } else if (values.Username.length < 4) {
        errors.Username = "طول نام حداقل باید ۴ کاراکتر باشد";
      }

      if (values.email === "") {
        errors.email = "وارد کردن ایمیل اجباری می‌باشد";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "ایمیل وارد شده معتبر نیست";
      }

      if (values.password === "") {
        errors.password = "وارد کردن پسورد اجباری می‌باشد";
      } else if (values.password.length < 4) {
        errors.password = "پسورد حداقل باید ۴ کاراکتر باشد";
      }

      return errors;
    },



  })

  const registerNewUser = async (event) => {
    event.preventDefault()

    const newUser = {
      username: form.values.Username,
      email: form.values.email,
      password: form.values.password,
    }


    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    const data = await res.json();



  }

  return (

    <div>
      <div className="main-w3layouts wrapper">
        <h1>Creative SignUp Form</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form onSubmit={form.handleSubmit}>
              <input
                className="text"
                type="text"
                name="Username"
                placeholder="Username"
                value={form.values.Username}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
              />
              {
                form.errors.Username && form.touched.Username && form.errors.Username
              }

              <input
                className="text email"
                type="email"
                name="email"
                placeholder="Email"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.email}
              />
              {
                form.errors.email && form.touched.email && form.errors.email
              }


              <input
                className="text"
                type="password"
                name="password"
                placeholder="Password"
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                value={form.values.password}
              />
              {
                form.errors.password && form.touched.password && form.errors.password
              }

              <button type="submit"
                onClick={registerNewUser}
                className={form.isSubmitting ? 'invalid-btn' : ''}
                disabled={form.isSubmitting}
              >
                {
                  form.isSubmitting ? "Loading ..." : "Register"
                }
              </button>
            </form>
          </div>

          <ul className="colorlib-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )


}

export async function getStaticProps(context) {

  connectToDB();
  const users = await userModel.find({});

  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    }
  }
}
