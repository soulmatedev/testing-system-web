import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Router.module.scss';
import { TestListPage } from '../../pages/test-list';
import { CreateTest } from '../../pages/create-test';
import { PassingTestPage } from '../../pages/passing-test';
import { AuthorizationPage } from '../../pages/auth';

const Router = () => (
	<div className={styles.router}>
		<Routes>
			<Route path="/" element={<AuthorizationPage />} />
			<Route path="/test-list" element={<TestListPage />} />
			<Route path="/create-test" element={<CreateTest />} />
			<Route path="/test/:id" element={<PassingTestPage />} />
			{/* <Route path="/authorization" element={<AuthorizationPage />} /> */}
			{/* <Route path="/registration" element={<RegistrationPage />} /> */}
		</Routes>
	</div>
);
export default Router;
