import React from 'react';
import './style.css';
import Header from './components/Header';
import MainView from './components/MainView';
import Features from './components/Features';
import Nayami from './components/Nayami';
import Sankaku from './components/Sankaku';
import Contact from './components/Contact';
import Jisseki from './components/Jisseki';
import Price from './components/Price';
import Flow from './components/Flow';
import Voice from './components/Voice';
import FAQ from './components/FAQ';
import Company from './components/Company';
import Footer from './components/Footer';
import { ContactForm } from './components/ContactForm';

function App() {
	return (
		<div className="App">
			<Header />
			<MainView />
			<Features />
			<Nayami />
			<Sankaku />
			<Contact />
			<Jisseki />
			<Price />
			<Contact />
			<Flow />
			<Voice />
			<Contact />
			<FAQ />
			<Company />
			<ContactForm />
			<Footer />
		</div>
	);
}

export default App;
