import clsx from 'clsx';
import React from 'react';
import BookCard, { IPropsBookCard } from './book-card';

const datas: IPropsBookCard[] = [
	{
		id: 1,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		isBookmarked: true,
	},
	{
		id: 2,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		isBookmarked: true,
	},
	{
		id: 3,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		isBookmarked: false,
	},
	{
		id: 4,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		isBookmarked: false,
	},
];

const BooksContainer = ({ className }: { className?: string }) => {
	return (
		<section
			className={clsx(
				className,
				'py-8 px-5 grid gap-4 grid-cols-5 w-full bg-neutral  rounded-lg'
			)}
		>
			{datas.map((book) => {
				return (
					<BookCard
						key={book.id}
						{...book}
					/>
				);
			})}
		</section>
	);
};

export default BooksContainer;
