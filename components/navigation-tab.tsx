import clsx from 'clsx';
import React, { Dispatch, SetStateAction } from 'react';

export interface IPropsNavigationTab {
	activeTab: number;
	setActiveTab: Dispatch<SetStateAction<number>>;
}
const NavigationTab = ({
	className,
	props,
}: {
	className?: string;
	props: IPropsNavigationTab;
}) => {
	function handleClickTab(tab: number) {
		props.setActiveTab(tab);
	}
	return (
		<div
			role='tablist'
			className={clsx('tabs tabs-boxed', className)}
		>
			<button
				onClick={() => handleClickTab(0)}
				role='tab'
				className={clsx('tab', props.activeTab == 0 && 'tab-active')}
			>
				Books
			</button>
			<button
				role='tab'
				onClick={() => handleClickTab(1)}
				className={clsx('tab', props.activeTab == 1 && 'tab-active')}
			>
				Bookmark
			</button>
		</div>
	);
};

export default NavigationTab;
