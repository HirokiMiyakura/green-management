import React from 'react';

const Jisseki = () => {
	return (
		<section className="bg-yellow">
			<div className="container pt-5 pb-5">
				<h2 className="text-center">
					<img
						className="jisseki-title"
						src="/img/jisseki-title.png"
						alt="実績タイトル"
					/>
				</h2>
				{/* 実績1 */}
				<div className="d-flex justify-content-center align-items-center mt-4">
					<div className="jisseki-item text-center me-3">
						<p className="mb-0 mt-1">
							現場
							<br />
							01
						</p>
					</div>
					<div>
						<p className="mb-0">
							遊休土地の雑草がお隣さんの敷地にまたがってしまい困っている・・・
						</p>
					</div>
				</div>
				<p className="before mt-4">
					<img src="/img/jisseki_before1.png" alt="ビフォー1" />
				</p>
				<p className="after mt-4">
					<img src="/img/jisseki_after1.png" alt="アフター1" />
				</p>
				{/* 実績2 */}
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="jisseki-item text-center me-3">
						<p className="mb-0 mt-1">
							現場
							<br />
							02
						</p>
					</div>
					<div>
						<p className="mb-0">
							遊休土地の雑草がお隣さんの敷地にまたがってしまい困っている・・・
						</p>
					</div>
				</div>
				<p className="before mt-4">
					<img src="/img/jisseki_before1.png" alt="ビフォー2" />
				</p>
				<p className="after mt-4">
					<img src="/img/jisseki_after1.png" alt="アフター2" />
				</p>
				{/* 実績3 */}
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="jisseki-item text-center me-3">
						<p className="mb-0 mt-1">
							現場
							<br />
							03
						</p>
					</div>
					<div>
						<p className="mb-0">
							遊休土地の雑草がお隣さんの敷地にまたがってしまい困っている・・・
						</p>
					</div>
				</div>
				<p className="before mt-4">
					<img src="/img/jisseki_before1.png" alt="ビフォー3" />
				</p>
				<p className="after mt-4">
					<img src="/img/jisseki_after1.png" alt="アフター3" />
				</p>
			</div>
		</section>
	);
};

export default Jisseki;
