'use client';
import { useParams } from 'next/navigation';
import React from 'react';
import { Comment } from '@/types/index.type';
import Image from 'next/image';
import { IoBookmarkOutline } from 'react-icons/io5';
import { IoBookmark } from 'react-icons/io5';
import CommentCard from '@/components/comment-card';
export interface IBookDetail {
	id: number;
	imgUrl: string;
	title: string;
	description: string;
	comments: Comment[] | [];
}

const BookDetail = () => {
	const params = useParams<{ id: string }>();
	const data: IBookDetail = {
		id: 1,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		comments: [
			{
				comment: 'This is comment',
				name: 'Profile 1',
				id: 1,
				date: new Date(),
			},
			{
				comment: 'This is comment',
				name: 'Profile 2',
				id: 2,
				date: new Date(),
			},
			{
				comment: 'This is comment',
				name: 'Profile 3',
				id: 3,
				date: new Date(),
			},
			{
				comment: 'This is comment',
				name: 'Profile 4',
				id: 4,
				date: new Date(),
			},
			{
				comment: 'This is comment',
				name: 'Profile 5',
				id: 5,
				date: new Date(),
			},
		],
	};
	return (
		<section>
			<div className='flex items-stretch gap-10'>
				<Image
					alt='image book'
					src={data.imgUrl}
					width={400}
					height={500}
					className='h-96 w-72 object-cover rounded-lg'
				/>
				<div className='flex flex-col justify-between'>
					<div>
						<h1 className='text-3xl'>{data.title}</h1>
						<p className='text-lg'>{data.description}</p>
					</div>
					<button className='btn btn-primary'>
						<IoBookmarkOutline size={20} /> <span>Bookmark</span>
					</button>
				</div>
			</div>
			<form
				action=''
				className='mt-10 w-full'
			>
				<textarea
                    rows={5}
					className='textarea textarea-bordered w-full'
					placeholder='Your Opinion'
				></textarea>
				<button className='btn btn-primary btn-sm mt-1'>Submit</button>
			</form>
			<section className='mt-12 flex flex-col gap-3'>
				{data.comments.map((comment) => {
					return (
						<CommentCard
							{...comment}
							key={comment.id}
						/>
					);
				})}
			</section>
		</section>
	);
};

export default BookDetail;
