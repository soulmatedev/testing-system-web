import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Router from './app/router/Router';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './widgets/navbar';
import css from './shared/config/styles/main.scss';

const App = () => {
	const location = useLocation();

	const hiddenNavbarRoutes = ['/', '/registration'];

	const shouldHideNavbar = hiddenNavbarRoutes.includes(location.pathname);

	return (
		<>
			<div className={css.wrapper}>
				{!shouldHideNavbar && <Navbar />}
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
};

export default App;
