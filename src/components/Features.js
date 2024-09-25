import React from 'react';

const Features = () => {
	return (
		<section className="bg-green">
			<div className="container ue">
				<div className="row">
					<div className="col">
						<p>
							<img src="/img/features1.png" alt="即日対応" />
						</p>
					</div>
					<div className="col">
						<p>
							<img src="/img/features2.png" alt="追加料金不要" />
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p>
							<img src="/img/features3.png" alt="クレジット可" />
						</p>
					</div>
					<div className="col">
						<p>
							<img src="/img/features4.png" alt="定期便対応" />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
