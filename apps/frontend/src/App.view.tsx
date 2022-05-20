import React from 'react';

interface Props {}

const AppView: React.FC<Props> = () => <div>JAZIF</div>;

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
