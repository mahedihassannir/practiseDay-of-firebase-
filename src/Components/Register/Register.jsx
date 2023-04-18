import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contex } from '../Contex/Contex';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    let { handleRegister } = useContext(contex)

    let [err, setErr] = useState("")
    let on = (event) => {


        event.preventDefault()
        let form = event.target

        let name = form.name.value
        let email = form.email.value
        let password = form.password.value
        let Confirm = form.confirm.value

        console.log(name, password, email, Confirm);

        handleRegister(email, password)
            .then(res => {
                let remaning = res.user
                console.log(remaning);
                setErr(remaning)

                verifaction(res.user)
            })
            .catch(error => {
                console.error(error);
                setErr(error)
            })

        let verifaction = (user) => {
            sendEmailVerification(user)
            alert("verify your email")

        }

        if (password !== Confirm) {
            alert("password is not match")

            return

        }

        else if (password.length < 6) {

            alert("password must be 6 charecter")

            return

        }



    }


    return (






        <div>

            <section className='w-full h-screen flex items-center justify-center'>
                <form onSubmit={on} className='w-[400px]    py-5 border-2 rounded-lg shadow-lg '>
                    <div className='pl-4'>

                        <div className='form-control'>
                            <label className='label'>
                                <span>name</span>
                            </label>
                            <br />
                            <input className='input mr-3 input-bordered' name='name' type="text" placeholder='your name here ' />

                        </div>

                        <div className='form-control'>
                            <label className='label'>
                                <span>Email</span>
                            </label>
                            <br />
                            <input className='input mr-3 input-bordered' name='email' type="email" placeholder='your email here ' />

                        </div>

                        <div className='form-control'>
                            <label className='label' >
                                <span className='text-lg'>Password</span>
                            </label>
                            <br />
                            <input className='input mr-3 input-bordered' name='password' type="password" placeholder='your email here ' />

                        </div>

                        <div className='form-control'>
                            <label className='label' >
                                <span className='text-lg'>Confirm Password</span>
                            </label>
                            <br />
                            <input className='input mr-3 input-bordered' name='confirm' type="password" placeholder='your email here ' />

                        </div>

                    </div>
                    <div className="form-control mt-6 w-11/12 mx-auto">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className='pl-3 mt-4'>
                        <Link className='text-blue-500 link' to="/Login">Already have an account</Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Register;