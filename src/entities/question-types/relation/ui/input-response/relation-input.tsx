import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import css from './relation-input.module.scss';
import { RelationCard } from '../card';
import {
	relationChooseActions,
	relationChooseSelectors,
} from '../../model/relationChooseSlice';
import { RelationTransparentCard } from '../relation-transparent-card';

export const RelationInput = () => {
	const dispatch = useDispatch();
	const responses = useSelector(relationChooseSelectors.getResponses);
	const [wrapperHeight, setWrapperHeight] = useState('230px');
	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleAddRelation = () => {
		dispatch(relationChooseActions.addRelation());
	};

	useEffect(() => {
		const wrapperElement = wrapperRef.current;
		if (wrapperElement) {
			const hasScroll = wrapperElement.scrollWidth > wrapperElement.clientWidth;
			setWrapperHeight(hasScroll ? '240px' : '230px');
		}
	}, [responses]);

	return (
		<div className={css.wrapper} style={{ height: wrapperHeight }} ref={wrapperRef}>
			{responses.map((response) => (
				<RelationCard key={response.id} response={response} />
			))}
			<RelationTransparentCard onClick={handleAddRelation} />
		</div>
	);
};
