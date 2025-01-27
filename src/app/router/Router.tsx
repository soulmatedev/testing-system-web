import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './Router.module.scss';
import { TestListPage } from '../../pages/test-list';
import { QuestionConstructorPage } from '../../pages/question-constructor';
import { PassingTestPage } from '../../pages/passing-test';
import { AuthorizationPage } from '../../pages/auth/login';
import { RegistrationPage } from '../../pages/auth/registration';
import { TestConstructorPage } from '../../pages/test-constructor';

const Router = () => {
	const location = useLocation();

	const isAuthRoute = location.pathname === '/' || location.pathname === '/registration';

	return (
		<div className={isAuthRoute ? styles.router : styles.authorization}>
			<Routes>
				<Route path="/" element={<AuthorizationPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
				<Route path="/test-list" element={<TestListPage />} />
				<Route path="/question-constructor" element={<QuestionConstructorPage />} />
				<Route path="/test-constructor" element={<TestConstructorPage />} />
				<Route path="/test/:id" element={<PassingTestPage />} />
			</Routes>
		</div>
	);
};

export default Router;
