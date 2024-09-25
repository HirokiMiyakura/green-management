import React from 'react';

const Sankaku = () => {
	return (
		<section className="sankaku">
			<div className="container position-relative">
				<p className="position-absolute man mb-0">
					<img src="/img/man1.png" alt="" />
				</p>
				<p className="position-absolute woman mb-0">
					<img src="/img/woman1.png" alt="" />
				</p>
				<p className="starmessage position-relative text-center w-75 mx-auto pt-4 pb-3 mb-0">
					<img src="/img/starmessage.png" alt="" />
				</p>
			</div>
		</section>
	);
};

export default Sankaku;
