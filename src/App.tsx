import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from './app/router/Router';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './widgets/navbar';
import css from './shared/config/styles/main.scss';

const App = () => (
	<>
		<div className={css.wrapper}>
			<Navbar />
			<Router />
		</div>
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			pauseOnHover
			theme="colored"
		/>
	</>
);

export default App;
