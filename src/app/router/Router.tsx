import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Router.module.scss';
import { TestList } from '../../pages/test-list';
import { CreateTest } from '../../pages/create-test';

const Router = () => (
	<div className={styles.router}>
		<Routes>
			<Route path="/" element={<TestList />} />
			<Route path="/create-test" element={<CreateTest />} />
			{/* <Route path="/authorization" element={<AuthorizationPage />} /> */}
			{/* <Route path="/registration" element={<RegistrationPage />} /> */}
		</Routes>
	</div>
);
export default Router;
