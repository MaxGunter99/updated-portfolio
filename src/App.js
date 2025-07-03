import Divider from './components/Divider';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Resume from './components/Resume';
import './css/App.css';

function App() {
	return (
		<div className="app-container">

			<Header />

			<div  className='app-content'>
				<Summary />
				{/* <Divider/> */}
				<Resume returnButton={true} />
				{/* <Divider/> */}
				<Skills />
				<Divider/>
				<Experience />
				<Divider/>
				<Credentials />
				<Divider/>
				<Projects />
			</div>

			<Footer />

		</div>
	);
}

export default App;
