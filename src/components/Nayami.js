import React from 'react';

const Nayami = () => {
	return (
		<section className="bg-gray">
			<div className="container pt-5 pb-5">
				<h2 className="n-txt nayami-title text-center mb-4">
					こんな<span className="fs-1">“お悩み”</span>ございませんか
				</h2>
				<ul className="nayami-list list-unstyled">
					<li className="fs-5 bg-white pt-2 pb-2 mb-3 ps-3 rounded">
						<img src="/img/checkmark.png" alt="" />
						高齢のため庭の掃除が厳しい・・・
					</li>
					<li className="fs-5 bg-white pt-2 pb-2 mb-3 ps-3 rounded">
						<img src="/img/checkmark.png" alt="" />
						空いている土地の雑草がひどい・・・
					</li>
					<li className="fs-5 bg-white pt-2 pb-2 mb-3 ps-3 rounded">
						<img src="/img/checkmark.png" alt="" />
						費用が心配だ・・・
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Nayami;
