import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

export default function Footer({ className }) {
	return (
		<div className={className}>
			<p>
				Copyright {getFullYear()} - {getFooterCopy(true)}
			</p>
		</div>
	);
}
