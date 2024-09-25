import React from 'react';

const Company = () => {
	return (
		<section className="bg-green company-section">
			<div className="container w-75 mx-auto pt-5 pb-5">
				<h2 className="text-center">
					<img className="company-title" src="/img/company-title.png" alt="" />
				</h2>
				<div className="company text-center mt-4 p-4 bg-white rounded">
					<h3>運営会社</h3>
					<p>株式会社Orfool</p>
					<h3 className="mt-4">電話番号</h3>
					<p>08034383925</p>
					<h3 className="mt-4">所在地</h3>
					<p>東京都渋谷区道玄坂2-15-1ノア道玄坂</p>
				</div>
			</div>
		</section>
	);
};

export default Company;
