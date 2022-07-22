import React from 'react';
import { CSVLink } from 'react-csv';

import EDSvg from '@/ui/EDSvg';

import classes from './RightSide.module.scss';

interface IProps {
	readonly tokenState: string;
	readonly copyTokenState: boolean;
	readonly onCopyToken: () => void;
	readonly onBackdropClick: () => void;
}

const RightSideView: React.FC<IProps> = (props) => {
	return (
		<section className={classes['mainWrapper']}>
			<div className={classes['mainWrapper__header']}>
				<div className={classes['mainWrapper__header--title']}>Secret Token</div>
				<div className={classes['mainWrapper__header--description']}>
					Warning: This information will disappear as soon as you exit the window.
				</div>
			</div>
			<div className={classes['innerWrapper']}>
				<div className={classes['innerWrapper__copyWrapper']}>
					<div className={classes['innerWrapper__copyWrapper--title']}>Copy</div>
					<div className={classes['innerWrapper__idWrapper']}>
						<span className={classes['innerWrapper__idWrapper--id']}>{props.tokenState}</span>
						<EDSvg
							name="tokenClientId"
							className={classes['innerWrapper__idWrapper--icon']}
							onClick={props.onCopyToken}
						/>
					</div>
					{props.copyTokenState && (
						<div className={classes['innerWrapper__copyWrapper--copied']}>Copied!</div>
					)}
				</div>
				<div className={classes['innerWrapper__downloadCsv']}>
					<div className={classes['innerWrapper__downloadCsv--title']}>Download .csv</div>
					<CSVLink
						className={classes['innerWrapper__downloadCsv--iconWrapper']}
						data={props.tokenState}
						filename="token.csv"
					>
						<EDSvg className={classes['innerWrapper__downloadCsv--icon']} name="dwonloadCsv" />
					</CSVLink>
				</div>
			</div>
			<div className={classes['mainWrapper__button']} onClick={props.onBackdropClick}>
				Done
			</div>
		</section>
	);
};

RightSideView.displayName = 'RightSideView';
RightSideView.defaultProps = {};

export default React.memo(RightSideView);
