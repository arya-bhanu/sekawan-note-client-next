'use client';
import React, { useState } from 'react';
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
	const [selectedStatus, setSelectedStatus] = useState<string>(
		props.readingStatus
	);
	const options = Object.values(ReadingStatus).map((status) => (
		<option
			key={status}
			value={status}
		>
			{status}
		</option>
	));
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedStatus(event.target.value);
	};
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
				<select
					value={selectedStatus}
					onChange={handleChange}
					className='select select-bordered w-full max-w-xs my-4'
				>
					{options}
				</select>
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
