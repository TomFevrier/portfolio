import React from 'react';
import { Waypoint } from 'react-waypoint';

import styles from './donut.module.css';

class Donut extends React.Component {
    constructor(props) {
        super(props);
        this.animate = this.animate.bind(this);
    }

    animate() {
        document.getElementById(
            this.props.data.id
        ).style.strokeDasharray = `${this.props.data.level * 63}, 315`;
    }

    render() {
        return (
            <Waypoint onEnter={this.animate}>
                <svg width="110" height="110" className={styles.donut}>
                    <circle
                        className={styles.background}
                        cx="55"
                        cy="55"
                        r="50"
                    />
                    <circle
                        id={this.props.data.id}
                        className={styles.full}
                        cx="55"
                        cy="55"
                        r="50"
                        style={{
                            strokeDasharray: '0, 315',
                        }}
                    />
                </svg>
            </Waypoint>
        );
    }
}

export default Donut;
