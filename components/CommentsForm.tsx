'use client';

import { useState, useRef, useEffect } from 'react';
import { postComment } from '@/services';

interface CommentsFormProps {
	slug: string;
}

const CommentsForm = ({ slug }: CommentsFormProps) => {
	const [error, setError] = useState<boolean>(false);
	const [showSuccess, setShowSuccess] = useState<boolean>(false);
	const commentRef = useRef<HTMLTextAreaElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!nameRef.current || !emailRef.current) return;

		nameRef.current.value = localStorage.getItem('name') ?? '';
		emailRef.current.value = localStorage.getItem('email') ?? '';
	}, []);

	const handleSubmit = async () => {
		setError(false);

		const { value: comment } = commentRef.current ?? { value: '' };
		const { value: name } = nameRef.current ?? { value: '' };
		const { value: email } = emailRef.current ?? { value: '' };

		if (!comment || !name || !email) {
			setError(true);
			return;
		}

		const data = { name, email, comment, slug };

		localStorage.setItem('name', name);
		localStorage.setItem('email', email);

		try {
			await postComment(data);

			if (commentRef.current) {
				commentRef.current.value = '';
			}

			setShowSuccess(true);
			setTimeout(() => setShowSuccess(false), 3000);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='mb-8 rounded-lg bg-slate-100 p-8 pb-12 shadow-lg'>
			<h3 className='mb-8 border-b pb-4 text-xl font-bold'>Leave a Reply</h3>
			<div className='mb-4 grid grid-cols-1 gap-4'>
				<textarea
					ref={commentRef}
					name='comment'
					placeholder='Leave a comment...'
					className='w-full rounded-lg bg-gray-200 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-300'
				/>
			</div>
			<div className='mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2'>
				<input
					type='text'
					ref={nameRef}
					name='name'
					placeholder='Name'
					className='w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-300'
				/>
				<input
					type='email'
					ref={emailRef}
					name='email'
					placeholder='Email'
					className='w-full rounded-lg bg-gray-200 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-300'
				/>
			</div>
			<div className='mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2'>
				<div className='mt-8 flex items-center gap-4'>
					<button
						type='submit'
						onClick={handleSubmit}
						className='ease inline-block rounded-full bg-indigo-500 px-8 py-2 text-lg text-white transition duration-500 hover:bg-indigo-900'>
						Post Comment
					</button>
					{showSuccess && (
						<span className='text-lg font-semibold text-green-500'>
							Comment posted!
						</span>
					)}
				</div>
			</div>
			{error && (
				<p className='ml-2 text-sm text-red-500'>All fields are required.</p>
			)}
		</div>
	);
};

export default CommentsForm;
