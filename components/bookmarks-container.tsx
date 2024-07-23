import clsx from 'clsx';
import React from 'react';

const BookmarksContainer = ({ className }: { className?: string }) => {
	return (
		<div
			className={clsx(
				'py-8 px-5 grid gap-4 grid-cols-5 w-full bg-neutral rounded-lg',
				className
			)}
		>
			BookmarksContainer
		</div>
	);
};

export default BookmarksContainer;
