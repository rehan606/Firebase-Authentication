import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const navigate =  useNavigate();
    const {signInUser, signinWithGoogle} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // Login User 
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset(); // Reset Form
            navigate('/cart'); // When User login then redirect to cart page
        })
        .catch(error => {
            console.log('ERROR', error.message)
        });

    }

    // Google Sing in
        const handleGoogleSignIn = () => {
            signinWithGoogle()
            .them(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.log('ERROR', error.message)
            });
        }

    return (
        <div className='bg-base-200 px-32'>
            <div className="container mx-auto hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-6">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center'>Don't have an account? <Link to='/register'><span className='text-blue-600 font-semibold'>Register</span></Link> </p>
                        <button onClick={handleGoogleSignIn} className='btn btn-gost-200 text-center mt-5'>Sign in With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;