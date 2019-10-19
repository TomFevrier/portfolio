import React from 'react';

import styles from './donut.module.css';

const Donut = ({ data }) => (
	<svg width="110" height="110" className={styles.donut}>
		<circle className={styles.background} cx="55" cy="55" r="50" />
		<circle
			className={styles.full}
			cx="55"
			cy="55"
			r="50"
			style={{ strokeDasharray: `${data.level * 63}, 315` }}
		/>
	</svg>
);

export default Donut;
