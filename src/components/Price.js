import React from 'react';

const Price = () => {
	return (
		<section className="bg-green">
			<div className="container pt-5 pb-5">
				<h2 className="text-center">
					<img className="price-title" src="/img/price-title.png" alt="" />
				</h2>
				<p className="mt-4">
					<img src="/img/basic-price.png" alt="" />
				</p>
				<p className="mt-4">
					<img src="/img/other-price.png" alt="" />
				</p>
			</div>
		</section>
	);
};

export default Price;
