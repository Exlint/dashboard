import React from 'react';

import EDSvg from '@/ui/EDSvg';
import PolicySidebar from '@/layout/PolicySidebar';

import classes from './Policy.module.scss';

interface IProps {
	readonly isModelOnView: boolean;
	readonly onOpenModal: () => void;
	readonly onCloseModal: () => void;
}

const PolicyView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	console.log(props);

	return (
		<div className={classes['container']}>
			<PolicySidebar
				createdAt={''}
				type={''}
				library={''}
				category={''}
				rules={''}
				policyLabel={''}
				groupLabel={''}
			/>
			<main className={classes['main']}>
				<div className={classes['navigate']}>
					<span className={classes['navigate__text']}>Group Label &gt;</span>
					<span className={classes['navigate__purpleText']}>&nbsp;Policy Label</span>
				</div>
				<section className={classes['mainWrapper']}>
					<div className={classes['leftSide']}>
						<div className={classes['container']}>
							<div className={classes['header']}>
								<span className={classes['header__text']}>File list</span>
								<div className={classes['header__button']}>
									<span className={classes['text']}>Edit</span>
									<EDSvg className={classes['icon']} name="downArrowIcon" />
								</div>
							</div>
							<hr className={classes['divider']} />
							<div className={classes['body']}>
								<span className={classes['body__number']}>3</span>
								<span className={classes['body__text']}>Objects added to the file list</span>
							</div>
						</div>
						<div className={classes['container']}>
							<div className={classes['header']}>
								<span className={classes['header__text']}>Ignore list</span>
								<div className={classes['header__button']}>
									<span className={classes['text']}>Edit</span>
									<EDSvg className={classes['icon']} name="downArrowIcon" />
								</div>
							</div>
							<hr className={classes['divider']} />
							<div className={classes['body']}>
								<span className={classes['body__number']}>3</span>
								<span className={classes['body__text']}>
									Objects added to the ignore list
								</span>
							</div>
						</div>
						<div className={classes['container']}>
							<div className={classes['header']}>
								<span className={classes['header__text']}>Policy Configuration</span>
								<div className={classes['header__button']}>
									<span className={classes['text']}>Edit</span>
									<EDSvg className={classes['icon']} name="downArrowIcon" />
								</div>
							</div>
							<hr className={classes['divider']} />
							<div className={classes['body']}>
								<span className={classes['body__number']}>3</span>
								<span className={classes['body__text']}>Objects configured</span>
							</div>
						</div>
					</div>
					<div className={classes['rightSide']}>cdmicdm</div>
				</section>
			</main>
		</div>
	);
};

PolicyView.displayName = 'PolicyView';
PolicyView.defaultProps = {};

export default React.memo(PolicyView);
