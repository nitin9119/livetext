import {Formik,Form,Field} from "formik";

import React from 'react'

function Login({isLoggedIn, setIsLoggedIn}) {
  return (
    <div className="card" style={{width:"18rem",margin:"auto", padding:"10px"}}>
        <Formik className="card-body"
        initialValues={{name:"",phone:"",password:""}}
        onSubmit={(values)=>{
            console.log(values)
            setIsLoggedIn(true)

        }}
        >
            <Form >
                <label className=".fs-2 text">Name : </label>
                <Field type="text" name="name"/>
                <br/>
                <br/>
                <label className=".fs-2 text">Password : </label>
                <Field type="text" name="password"/>
                <br/>
                <br/>
                <button className=".fs-4 text btn btn-primary" type="submit">Login</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Login