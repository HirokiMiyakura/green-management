import React from 'react';

const Voice = () => {
	return (
		<section className="bg-green">
			<div className="container pt-5 pb-5">
				<h2 className="text-center">
					<img
						className="voice-title"
						src="/img/voice-title.png"
						alt="お客様の声タイトル"
					/>
				</h2>
				{/* ボイス1 */}
				<div className="voice p-3 mx-auto rounded mt-4">
					<div className="d-flex justify-content-center align-items-center">
						<div className="voice-item">
							<img src="/img/v1.png" alt="ボイス1" />
						</div>
						<div className="voice-item ms-3">
							<h3 className="n-txt fs-5">
								丁寧な仕事をしていただき本当に助かりました。
							</h3>
							<p className="mb-0">埼玉県日高市 Sさん</p>
						</div>
					</div>
					<p className="b-txt mt-4">
						近年の猛暑もあり、庭の掃除が厳しいと感じることが増えてきたところで、グリーンマネイジメントさんのことを知りました。
						<br />
						電話の対応もしっかりしていたので、安心して仕事を頼むことができました。
						<br />
						来年もまた頼もうと考えております。
					</p>
				</div>
				{/* ボイス2 */}
				<div className="voice p-3 mx-auto rounded mt-4">
					<div className="d-flex justify-content-center align-items-center">
						<div className="voice-item">
							<img src="/img/v2.png" alt="ボイス2" />
						</div>
						<div className="voice-item ms-3">
							<h3 className="n-txt fs-5">希望通りの仕事に感謝しております。</h3>
							<p className="mb-0">埼玉県川越市 Mさん</p>
						</div>
					</div>
					<p className="b-txt mt-4">
						お隣さんとの距離が近く、できるだけ大きな音を出さない方法での作業を希望したのですが、希望通りに作業を行なっていただき大変感謝しております。
					</p>
				</div>
				{/* ボイス3 */}
				<div className="voice p-3 mx-auto rounded mt-4">
					<div className="d-flex justify-content-center align-items-center">
						<div className="voice-item">
							<img src="/img/v3.png" alt="ボイス3" />
						</div>
						<div className="voice-item ms-3">
							<h3 className="n-txt fs-5">
								ホームページの価格表がわかりやすくてよかったです。
							</h3>
							<p className="mb-0">埼玉県日高市 Sさん</p>
						</div>
					</div>
					<p className="b-txt mt-4">
						初めは「地域最安」をうたっている他社様に見積もりを依頼したのですが、ホームページの値段よりも高額な見積もりに驚いてしまいました。
						<br />
						グリーンマネイジメントさんはホームページ通りの見積もりでしたので、安心して依頼ができました。
					</p>
				</div>
			</div>
		</section>
	);
};

export default Voice;
