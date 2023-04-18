import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contex } from '../Contex/Contex';

const Login = () => {

    let [massage, setMassage] = useState("")


    let { handleLogin } = useContext(contex)




    let on = (event) => {

        event.preventDefault()
        let form = event.target

        let email = form.email.value
        let password = form.password.value
        console.log(email, password);

        handleLogin(email, password)

            .then(res => {
                let remaning = res.user
                console.log(remaning);
                setMassage(remaning)
            })
            .catch(err => {
                console.log(err);

            })



    }



    return (

        <div>
            <h1>{massage.email}</h1>
            <section className='w-full h-screen flex items-center justify-center'>
                <form onSubmit={on} className='w-[400px]    h-[400px] border-2 rounded-lg shadow-lg '>
                    <div className='pl-4'>

                        <div className='form-control'>
                            <label className='label'>
                                <span>Email</span>
                            </label>
                            <br />
                            <input required className='input mr-3 input-bordered' name='email' type="email" placeholder='your email here ' />

                        </div>
                        <div className='form-control'>
                            <label className='label' >
                                <span className='text-lg'>Password</span>
                            </label>
                            <br />
                            <input className='input mr-3 input-bordered' name='password' type="password" placeholder='your email here ' />

                        </div>
                    </div>
                    <div className="form-control mt-6 w-11/12 mx-auto">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className='pl-3 mt-4'>
                        <Link className='text-blue-500 link' to="/Register">New in this website</Link>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;