import React from 'react';

const Footer = () => {
	return (
		<footer className="fixed">
			<div className="container">
				<div className="d-flex">
					<div className="p-2">
						<a target="_blank" href="https://lin.ee/AhRyP1wH" rel="noreferrer">
							<img src="/img/line_footer.png" alt="" />
						</a>
					</div>
					<div className="p-2">
						<a href="./contact/">
							<img src="/img/mail_footer.png" alt="" />
						</a>
					</div>
					<div className="p-2">
						<a className="_blank" href="tel:08034383925">
							<img src="/img/tel_footer.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
