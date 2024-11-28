import React from 'react';
import { ToastContainer } from 'react-toastify';
import Router from './app/router/Router';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
	<>
		<Router />
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
