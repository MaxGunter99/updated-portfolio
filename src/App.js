import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './css/App.css';

function App() {
	return (
		<div className="app-container">
			<Header />

			<div  className='app-content'>
				<Summary />
				<Skills />
				<Experience />
				<Projects />
			</div>

			<Footer />
		</div>
	);
}

export default App;
