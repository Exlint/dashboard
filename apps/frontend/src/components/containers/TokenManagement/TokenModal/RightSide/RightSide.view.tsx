import React from 'react';
import { CSVLink } from 'react-csv';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';

import classes from './RightSide.module.scss';

interface IProps {
	readonly tokenState: string;
	readonly copyTokenState: boolean;
	readonly onCopyToken: () => void;
	readonly onCloseModal: () => void;
}

const RightSideView: React.FC<IProps> = (props) => {
	const copyTokenClasses = props.copyTokenState
		? concatClasses(classes, 'idWrapper__icon', 'idWrapper__icon--disabled')
		: classes['idWrapper__icon'];

	return (
		<section className={classes['container']}>
			<div className={classes['header']}>
				<div className={classes['header__title']}>Secret Token</div>
				<div className={classes['header__description']}>
					Warning: This information will disappear as soon as you exit the window.
				</div>
			</div>
			<div className={classes['innerWrapper']}>
				<div className={classes['copyWrapper']}>
					<div className={classes['copyWrapper__title']}>Copy</div>
					<div className={classes['idWrapper']}>
						<span className={classes['idWrapper__id']}>{props.tokenState}</span>
						<EDSvg
							name="tokenClientId"
							className={copyTokenClasses}
							onClick={props.onCopyToken}
						/>
					</div>
					{props.copyTokenState && <div className={classes['copyWrapper__copied']}>Copied!</div>}
				</div>
				<div className={classes['downloadCsv']}>
					<div className={classes['downloadCsv__title']}>Download .csv</div>
					<CSVLink
						className={classes['downloadCsv__iconWrapper']}
						data={props.tokenState}
						filename="token.csv"
					>
						<EDSvg className={classes['downloadCsv__icon']} name="dwonloadCsv" />
					</CSVLink>
				</div>
			</div>
			<div className={classes['container__button']} onClick={props.onCloseModal}>
				Done
			</div>
		</section>
	);
};

RightSideView.displayName = 'RightSideView';
RightSideView.defaultProps = {};

export default React.memo(RightSideView);
