import React from 'react';
import { Comment } from '@/types/index.type';
const CommentCard = ({ comment, date, name }: Comment) => {
	return (
		<div className='bg-neutral p-3 rounded-md'>
			<h3 className='text-lg font-semibold'>{name}</h3>
			<p className='mt-1'>{comment}</p>
			<p className='text-sm mt-3'>{new Date(date).toLocaleDateString()}</p>
		</div>
	);
};

export default CommentCard;
