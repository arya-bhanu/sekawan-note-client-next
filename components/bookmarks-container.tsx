import clsx from 'clsx';
import React from 'react';
import BookBookMarkedCard, {
	IPropsBookmarkedCard,
} from './book-bookmarked-card';
import { ReadingStatus } from '@/enums/index.enum';
const data: IPropsBookmarkedCard[] = [
	{
		id: 1,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		readingStatus: ReadingStatus.CurrRead,
	},
	{
		id: 2,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		readingStatus: ReadingStatus.CurrRead,
	},
	{
		id: 3,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		readingStatus: ReadingStatus.CurrRead,
	},
	{
		id: 4,
		imgUrl: 'https://placehold.co/600x400',
		description: 'description',
		title: 'Book A',
		readingStatus: ReadingStatus.CurrRead,
	},
];
const BookmarksContainer = ({ className }: { className?: string }) => {
	return (
		<section
			className={clsx(
				'py-8 px-5 grid gap-4 grid-cols-5 w-full bg-neutral rounded-lg',
				className
			)}
		>
			{data.map((bookmark) => {
				return (
					<BookBookMarkedCard
						{...bookmark}
						key={bookmark.id}
					/>
				);
			})}
		</section>
	);
};

export default BookmarksContainer;
