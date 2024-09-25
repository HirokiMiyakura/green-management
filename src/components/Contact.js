import React from 'react';

const Contact = () => {
	return (
		<section className="bg-naname">
			<div className="container pt-5 pb-5">
				<h2 className="cv-title text-center w-75 mx-auto pt-2 pb-2 mb-4 rounded">
					無料お問い合わせ窓口はこちら
				</h2>
				<ul className="list-unstyled">
					<li className="mb-3">
						<a href="tel:08034383925">
							<img src="/img/tel_CV.png" alt="" />
						</a>
					</li>
					<li className="mb-3">
						<a href="#contact-cv">
							<img src="/img/mail_CV.png" alt="" />
						</a>
					</li>
					<li>
						<a target="_blank" href="https://lin.ee/AhRyP1wH" rel="noreferrer">
							<img src="/img/line_CV.png" alt="" />
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Contact;
