import {Formik,Form,Field} from "formik";

import React from 'react'

function Register() {
  return (
    <div className="card" style={{width:"18rem",margin:"auto", padding:"10px"}}>
        <Formik
        initialValues={{name:"",phone:"",password:""}}
        onSubmit={(values)=>{
            console.log(values)
        }}
        >
            <Form>
                <label>Name :</label>
                <Field type="text" name="name"/>
                <br/>
                <br/>
                <label>Phone :</label>
                <Field type="text" name="phone"/>
                <br/>
                <br/>
                <label>password :</label>
                <Field type="text" name="password"/>
                <br/>
                <br/>
                <button  className=".fs-4 text btn btn-primary" type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Register