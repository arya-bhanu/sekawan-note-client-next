import React from 'react';
import Image from 'next/image';
import { IoBookmarkOutline } from 'react-icons/io5';
import { IoBookmark } from 'react-icons/io5';
import { ReadingStatus } from '@/enums/index.enum';
import Link from 'next/link';
export interface IPropsBookmarkedCard {
	id: number;
	imgUrl: string;
	title: string;
	description: string;
	readingStatus: ReadingStatus;
}
const BookBookMarkedCard = (props: IPropsBookmarkedCard) => {
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
				<Link
					href={`/book/${props.id}`}
					className='w-fit '
				>
					<h2 className='card-title hover:underline w-fit '>{props.title}</h2>
				</Link>
				<p>{props.description}</p>
				<div className='dropdown dropdown-end mt-3'>
					<div
						tabIndex={0}
						role='button'
						className='btn'
					>
						Click
					</div>
					<ul
						tabIndex={0}
						className='dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow'
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Item 2</a>
						</li>
					</ul>
				</div>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary px-3'>
						<IoBookmark size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookBookMarkedCard;
