import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Router.module.scss';
import { TestListPage } from '../../pages/TestListPage';

const Router = () => (
	<div className={styles.router}>
		<Routes>
			<Route path="/" element={<TestListPage />} />
			{/* <Route path="/authorization" element={<AuthorizationPage />} /> */}
			{/* <Route path="/registration" element={<RegistrationPage />} /> */}
		</Routes>
	</div>
);
export default Router;
