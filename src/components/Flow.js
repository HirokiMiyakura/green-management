import React from 'react';

const Flow = () => {
	return (
		<section className="bg-yellow">
			<div className="container pt-5 pb-5">
				<h2 className="text-center pb-4">
					<img
						className="service-title"
						src="/img/service-title.png"
						alt="サービスの流れ"
					/>
				</h2>
				{/* Step1 */}
				<div className="step align-items-center justify-content-center p-3 mt-5 mx-auto rounded">
					<p className="num text-center">
						<img src="/img/n1.png" alt="ステップ1" />
					</p>
					<h3 className="n-txt fs-4 mt-3 text-center">お問い合わせ</h3>
					<p className="b-txt mt-3">
						まずはお気軽にご連絡下さい。現場の状況はお電話や写真・動画でもうけたまわります。
						<br />
						LINEやメールは24時間受付させていただきます。
					</p>
					<p>
						<img src="/img/s1.png" alt="イメージ1" />
					</p>
				</div>
				{/* Step2 */}
				<div className="step align-items-center justify-content-center p-3 mt-5 mx-auto rounded">
					<p className="num text-center">
						<img src="/img/n2.png" alt="ステップ2" />
					</p>
					<h3 className="n-txt fs-4 mt-3 text-center">お見積もりのご提示</h3>
					<p className="b-txt mt-3">
						原則として現地を確認してからのお見積もりのご提示となりますが、写真や動画などで現地の詳細を確認できる場合には、その場でお見積もりをご提示いたします。
					</p>
					<p>
						<img src="/img/s2.png" alt="イメージ2" />
					</p>
				</div>
				{/* Step3 */}
				<div className="step align-items-center justify-content-center p-3 mt-5 mx-auto rounded">
					<p className="num text-center">
						<img src="/img/n3.png" alt="ステップ3" />
					</p>
					<h3 className="n-txt fs-4 mt-3 text-center">ご依頼</h3>
					<p className="b-txt mt-3">
						見積額に納得していただければ、契約となります。天候などを確認し、作業日時を決定いたします。この時点では金銭の支払いはございません。
					</p>
					<p>
						<img src="/img/s3.png" alt="イメージ3" />
					</p>
				</div>
				{/* Step4 */}
				<div className="step align-items-center justify-content-center p-3 mt-5 mx-auto rounded">
					<p className="num text-center">
						<img src="/img/n4.png" alt="ステップ4" />
					</p>
					<h3 className="n-txt fs-4 mt-3 text-center">作業開始</h3>
					<p className="b-txt mt-3">
						実際に現場で作業を開始いたします。記録のために写真を数枚撮影いたします。
					</p>
					<p>
						<img src="/img/s4.png" alt="イメージ4" />
					</p>
				</div>
				{/* Step5 */}
				<div className="step align-items-center justify-content-center p-3 mt-5 mx-auto rounded">
					<p className="num text-center">
						<img src="/img/n5.png" alt="ステップ5" />
					</p>
					<h3 className="n-txt fs-4 mt-3 text-center">確認・お支払い</h3>
					<p className="b-txt mt-3">
						お客様に現場の状況をご確認いただき、作業は終了となります。問題がなければお支払いをしていただきます。
					</p>
					<p>
						<img src="/img/s5.png" alt="イメージ5" />
					</p>
				</div>
			</div>
		</section>
	);
};

export default Flow;
