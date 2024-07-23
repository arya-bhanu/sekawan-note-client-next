'use client';
import BookmarksContainer from '@/components/bookmarks-container';
import BooksContainer from '@/components/books-container';
import NavigationTab from '@/components/navigation-tab';
import { useState } from 'react';

export default function Home() {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<main className='flex flex-col items-center'>
			<div className='m-auto text-center'>
				<h1 className='text-4xl font-semibold'>Baca Kita!</h1>
				<h1 className='text-xl'>Welcome, Putu Arya</h1>
			</div>
			<NavigationTab
				className='mt-3'
				props={{ activeTab, setActiveTab }}
			/>
			{activeTab === 0 && <BooksContainer className='mt-10' />}
			{activeTab === 1 && <BookmarksContainer className='mt-10' />}
		</main>
	);
}
