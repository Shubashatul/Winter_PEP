import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const SignupForm=()=>{
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"" 
        
        },
        validationSchema:Yup.object({
            name:Yup.string()
            .min(3,"Name shoul be atleat 3 characters")
            .required("name cannot be blank"),
            email:Yup.string()
            .email("Invalid email address")
            .required("Email cannot be empty"),
            password:Yup.string()
            .min(6,"Password must of six characters ")
            .required("Password cannot be blank")
        }),
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })
    return(
        <div>
            <h1>
                Sign up form
            </h1>
            <form onSubmit={formik.handleSubmit}>
                {/* name */}
                <div>
                    <label>Name: </label>
                    <input id="name"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />

{formik.touched.name && formik.errors.name ?(<div style={{color:'red'}}>{formik.errors.name}</div>):null}
                </div>

                {/* email */}
                <div>
                    <label>Email: </label>
                    <input id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />

{formik.touched.email && formik.errors.email ?(<div style={{color:'red'}}>{formik.errors.email}</div>):null}
                </div>
                {/* pasword */}
                <div>
                    <label>Pasword: </label>
                    <input id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />

{formik.touched.password && formik.errors.password ?(<div style={{color:'red'}}>{formik.errors.password}</div>):null}
                </div>
                {/*Submit button */}
                <button type="submit">Submit</button>
            </form>
             
        </div>
    );
}

export default SignupForm;
