// CSS
import '../css/header.css';

import config from '../config.js';

import { Navigation, Phone, Mail } from 'react-feather';

export default function Header() {
	return (
		<div className="header-container">
			<div className="header-title-container">
				<h1>{config['NAME']}</h1>
				<p>{config['JOB_TITLE']}</p>
				<br />
				{/* <div className="header-subsection">
                </div> */}

				<div className="header-subsection">

					<div className="item-group">
						<Navigation className='icon'/>
						<p className="item"> Fredericksburg, TX</p>
					</div>

					<div className='item-group'>
						<Mail className='icon'/>
						<p className="item">Michael.Alex.Gunter@gmail.com</p>
					</div>

					<div className='item-group'>
						<Phone className='icon'/>
						<p className="item">830.998.9770</p>
					</div>

				</div>
			</div>
		</div>
	);
}
