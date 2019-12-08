import React from 'react';
import '../css/Loading.css';

import rDaiLogo from '../assets/rDai.svg';

class Loading extends React.Component
{
	render()
	{
		return (
			<div id='Loading'>
				<img src={rDaiLogo} alt='logo'/>
			</div>
		);
	}
}
				// <svg xmlns='http://www.w3.org/2000/svg' width='100' viewBox='0 0 250 250' preserveAspectRatio='xMidYMid meet'>
				// 	<path className='path' stroke='#FAE900' strokeWidth='3' strokeLinejoin='round' strokeLinecap='round' strokeMiterlimit='10' strokeDasharray='200' strokeDashoffset='400' fill='none' d='M125,237.6c-15.2,0-29.9-3-43.8-8.9c-13.4-5.7-25.5-13.8-35.8-24.1c-10.3-10.3-18.5-22.4-24.1-35.8
				// 		c-5.9-13.9-8.9-28.6-8.9-43.8s3-29.9,8.9-43.8C26.9,67.8,35,55.7,45.4,45.4C55.7,35,67.8,26.9,81.2,21.3
				// 		c13.9-5.9,28.6-8.9,43.8-8.9s29.9,3,43.8,8.9c13.4,5.7,25.5,13.8,35.8,24.1c10.3,10.3,18.5,22.4,24.1,35.8
				// 		c5.9,13.9,8.9,28.6,8.9,43.8s-3,29.9-8.9,43.8c-5.7,13.4-13.8,25.5-24.1,35.8c-10.3,10.3-22.4,18.5-35.8,24.1
				// 		C154.9,234.6,140.2,237.6,125,237.6z M125,45.8c-21.2,0-41.1,8.2-56,23.2s-23.2,34.9-23.2,56c0,21.2,8.2,41.1,23.2,56
				// 		c15,15,34.9,23.2,56,23.2c21.2,0,41.1-8.2,56-23.2c15-15,23.2-34.9,23.2-56c0-21.2-8.2-41.1-23.2-56C166.1,54,146.2,45.8,125,45.8
				// 		z' />
				// 	<path className='path' stroke='#FAE900' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' strokeMiterlimit='10' strokeDasharray='500' strokeDashoffset='500' fill='none' d='M103.7,175.4c-7.9-0.1-14.2-6.5-14.1-14.4c0.1-7.1,5.4-13.1,12.5-14c0.6-0.1,1.1-0.1,1.7-0.1
				// 		c2.7,0,5.3,0.8,7.6,2.2c0.8,0.5,1.8,0.8,2.7,0.8c1,0,2-0.3,2.9-0.8c1.7-1,2.8-2.9,2.7-5c-0.5-7.6,5-14.4,12.7-15.2
				// 		c0.5-0.1,1-0.1,1.6-0.1c2.7,0,5.3,0.8,7.6,2.2c0.8,0.5,1.8,0.8,2.8,0.8c1,0,2-0.3,2.9-0.8l0.1,0c1.7-1,2.7-2.9,2.6-4.9
				// 		c-0.5-7.7,5.2-14.5,12.9-15.2c0.5,0,0.9-0.1,1.4-0.1c7.9,0.1,14.2,6.5,14.1,14.4c-0.1,7.1-5.4,13.1-12.5,14
				// 		c-0.6,0.1-1.1,0.1-1.7,0.1l0,0c-2.7,0-5.3-0.8-7.6-2.2c-0.8-0.5-1.8-0.8-2.7-0.8c-1,0-2,0.3-2.9,0.8c-1.7,1-2.8,2.9-2.7,5
				// 		c0.1,0.7,0.1,1.5,0,2.3c-0.6,6.8-5.9,12.2-12.7,12.9c-0.5,0.1-1.1,0.1-1.6,0.1c-2.7,0-5.3-0.8-7.6-2.2c-0.8-0.5-1.8-0.8-2.8-0.8
				// 		c-1,0-2,0.3-2.9,0.8l-0.1,0c-1.7,1-2.7,2.9-2.6,4.9c0.1,0.8,0,1.5,0,2.3c-0.6,6.8-6,12.3-12.8,12.9
				// 		C104.7,175.4,104.2,175.4,103.7,175.4z' />
				// 	<path className='path' stroke='#FAE900' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' strokeMiterlimit='10' strokeDasharray='500' strokeDashoffset='500' fill='none' d='M103.7,139.3c-7.9-0.1-14.2-6.6-14.1-14.5c0.1-7.1,5.4-13,12.4-13.9c0.6-0.1,1.1-0.1,1.7-0.1
				// 		c2.7,0,5.3,0.8,7.6,2.2c0.8,0.5,1.8,0.8,2.7,0.8c1,0,2-0.3,2.9-0.8c1.7-1,2.8-2.9,2.7-5c-0.5-7.7,5.2-14.5,12.9-15.2
				// 		c0.5,0,0.9-0.1,1.4-0.1c7.9,0.1,14.2,6.5,14.1,14.4c-0.1,7.1-5.4,13.1-12.5,14c-0.6,0.1-1.1,0.1-1.7,0.1c-2.7,0-5.3-0.8-7.6-2.2
				// 		c-0.8-0.5-1.8-0.8-2.7-0.8c-1,0-2,0.3-2.9,0.8c-1.7,1-2.8,2.9-2.7,5c0.1,0.8,0,1.5,0,2.3c-0.6,6.8-6,12.3-12.8,12.9
				// 		C104.7,139.3,104.2,139.3,103.7,139.3L103.7,139.3L103.7,139.3z' />
				// 	<circle className='path' stroke='#FAE900' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' strokeMiterlimit='10' strokeDasharray='500' strokeDashoffset='500' fill='none' cx='103.7' cy='88.9' r='14.3' />
				// </svg>

export default Loading;
