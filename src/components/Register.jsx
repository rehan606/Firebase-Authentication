import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e)=> {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)


        // Create User 
        createUser( email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset(); // Reset FOrm
            navigate('/'); // When user create accoutn then redirect to home page
        })
        .catch(error => {
            console.log( 'ERROR', error.message)
        })

    }


    return (
        <div>
            <div className='bg-base-200 px-32'>
                <div className="container mx-auto hero  min-h-screen">
                    <div className="hero-content flex-col  lg:flex-row-reverse gap-6">
                        
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            <p className='text-center'>Already have an account? <Link to='/login'><span className='text-blue-600 font-semibold'>Login</span></Link> </p>
                        </div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;