import React from 'react';
import Image from 'next/image';
import { IoBookmarkOutline } from 'react-icons/io5';
import { IoBookmark } from 'react-icons/io5';
import Link from 'next/link';
export interface IPropsBookCard {
	id: number;
	imgUrl: string;
	title: string;
	description: string;
	isBookmarked: boolean;
}
const BookCard = (props: IPropsBookCard) => {
	return (
		<div className='card bg-base-100 shadow-xl'>
			<figure>
				<Image
					src={props.imgUrl}
					alt='Book image'
					width={300}
					height={300}
					className='w-full object-cover'
				/>
			</figure>
			<div className='card-body'>
				<Link href={`/book/${props.id}`}>
					<h2 className='card-title underline underline-offset-4 w-fit'>{props.title}</h2>
				</Link>

				<p>{props.description}</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary px-3'>
						{props.isBookmarked ? (
							<IoBookmark size={20} />
						) : (
							<IoBookmarkOutline size={20} />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
