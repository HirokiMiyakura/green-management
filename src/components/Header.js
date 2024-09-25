import React from 'react';

const Header = () => {
	return (
		<header>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-6">
						<h1 className="title">
							<a className="text-decoration-none" href="./">
								グリーンマネイジメント
							</a>
						</h1>
						<p className="sub-title mb-0">草刈りのプロが丁寧に対応いたします</p>
					</div>
					<div className="col-6">
						<ul className="list-unstyled text-end mb-0">
							<li className="align-items-center">
								<a className="text-decoration-none" href="tel:08034383925">
									<span>
										<img
											className="tel-icon me-1"
											src="/img/tel_icon.png"
											alt=""
										/>
									</span>
									08034383925
								</a>
							</li>
							<li className="time">営業時間 9:00~18:00</li>
							<li>
								<img src="/img/card_5brand.png" alt="" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
