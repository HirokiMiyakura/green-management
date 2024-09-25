import React from 'react';

const FAQ = () => {
	return (
		<section className="bg-yellow">
			<div className="container pt-5 pb-5">
				<h2 className="text-center">
					<img className="qa-title" src="/img/qa-title.png" alt="FAQタイトル" />
				</h2>
				<div className="accordion mt-4" id="accordionExample">
					{/* Q&A 1 */}
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingOne">
							<button
								className="accordion-button"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								<span className="navy">Q1</span>草刈りはどうやって行うのですか？
							</button>
						</h2>
						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								機械が使えない現場では直接手で草むしりを行う、草払い機を利用する、大型機械を用いるなど、現場に合わせたベストな手段で草刈りをさせていただきます。
							</div>
						</div>
					</div>
					{/* Q&A 2 */}
					<div className="accordion-item mt-3">
						<h2 className="accordion-header" id="headingTwo">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								<span className="navy">Q2</span>法人でも利用は可能ですか？
							</button>
						</h2>
						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="headingTwo"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								はい。不動産会社様、管理会社様、スポーツグラウンドやゴルフ場のオーナー様など、さまざまな方々からのご依頼をお待ちしております。
							</div>
						</div>
					</div>
					{/* Q&A 3 */}
					<div className="accordion-item mt-3">
						<h2 className="accordion-header" id="headingThree">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								<span className="navy">Q3</span>除草剤の指定はできますか？
							</button>
						</h2>
						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								はい。農地などが近隣にある場合には利用できる除草剤も限られますので、相談して決定させていただきます。
							</div>
						</div>
					</div>
					{/* Q&A 4 */}
					<div className="accordion-item mt-3">
						<h2 className="accordion-header" id="headingFour">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFour"
								aria-expanded="false"
								aria-controls="collapseFour"
							>
								<span className="navy">Q4</span>出張料はいくらですか？
							</button>
						</h2>
						<div
							id="collapseFour"
							className="accordion-collapse collapse"
							aria-labelledby="headingFour"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								埼玉県の現場であれば出張料は無料とさせていただいております。県外の方は実費を請求させていただきます。
							</div>
						</div>
					</div>
					{/* Q&A 5 */}
					<div className="accordion-item mt-3">
						<h2 className="accordion-header" id="headingFive">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseFive"
								aria-expanded="false"
								aria-controls="collapseFive"
							>
								<span className="navy">Q5</span>キャンセル料金はかかりますか？
							</button>
						</h2>
						<div
							id="collapseFive"
							className="accordion-collapse collapse"
							aria-labelledby="headingFive"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								キャンセル料は一律¥10,000をいただいております。
							</div>
						</div>
					</div>
					{/* Q&A 6 */}
					<div className="accordion-item mt-3">
						<h2 className="accordion-header" id="headingSix">
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseSix"
								aria-expanded="false"
								aria-controls="collapseSix"
							>
								<span className="navy">Q6</span>夜間の作業は可能ですか？
							</button>
						</h2>
						<div
							id="collapseSix"
							className="accordion-collapse collapse"
							aria-labelledby="headingSix"
							data-bs-parent="#accordionExample"
						>
							<div className="accordion-body">
								夜間は近隣住民の方々の迷惑となることもございますので、機械の利用を控えさせていただいております。原則として草むしりのみ承っております。
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
