import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_cmgm80c', 'template_07bwz7l', form.current, {
				publicKey: 'T1QU1xZNUrSUeoH6c',
			})
			.then(
				() => {
					console.log('SUCCESS!');
					alert('お問い合わせありがとうございます');
					form.current.reset(); // フォームのリセット
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<section id="contact-cv" className="bg-yellow">
			<div className="container form pt-5 pb-5">
				<h2 className="text-center">
					<img
						className="contact-title"
						src="/img/contact-title.png"
						alt="お問い合わせタイトル"
					/>
				</h2>
				<form className="mt-4 p-4" ref={form} onSubmit={sendEmail}>
					<label className="w-100 mb-2">
						<span className="hissu px-2">必須</span>お名前
					</label>
					<input className="w-100 mb-4" type="text" name="user_name" required />
					<label className="w-100 mb-2">
						<span className="hissu px-2">必須</span>電話番号
					</label>
					<input
						className="w-100 mb-4"
						type="tel"
						name="user_number"
						required
					/>
					<label className="w-100 mb-2">メールアドレス</label>
					<input className="w-100 mb-4" type="email" name="user_email" />
					<label className="w-100 mb-2">
						<span className="hissu px-2">必須</span>住所
					</label>
					<input
						className="w-100 mb-4"
						type="text"
						name="user_address"
						required
					/>
					<label className="w-100 mb-2">メッセージ</label>
					<textarea className="w-100 mb-4" rows="7" name="message" />
					<input
						className="w-100 btn btn-primary bg-navy"
						type="submit"
						value="送信"
					/>
				</form>
			</div>
		</section>
	);
};
