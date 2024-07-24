import Link from 'next/link';
import React from 'react';

const SignupPage = () => {
	return (
		<div className='min-h-[80vh] flex'>
			<form className='m-auto w-full max-w-xl'>
				<h1 className='text-xl'>Signup Form</h1>
				<div className='mt-5 flex flex-col gap-y-3'>
					<label className='form-control w-full'>
						<div className='label'>
							<span className='label-text'>What is your email</span>
						</div>
						<input
							type='email'
							placeholder='Type here'
							className='input input-bordered w-full '
						/>
					</label>
					<label className='form-control w-full'>
						<div className='label'>
							<span className='label-text'>What is your password</span>
						</div>
						<input
							type='password'
							placeholder='Type here'
							className='input input-bordered w-full '
						/>
					</label>
					<label className='form-control w-full'>
						<div className='label'>
							<span className='label-text'>Re-type your password</span>
						</div>
						<input
							type='password'
							placeholder='Type here'
							className='input input-bordered w-full '
						/>
					</label>
					<Link href={'/login'} className='underline text-blue-100'>Already have an account?</Link>
					<button className='btn btn-primary mt-2'>Signup</button>
				</div>
			</form>
		</div>
	);
};

export default SignupPage;
