import React from 'react';

import styles from './donut.module.css';

class Donut extends React.Component {
    constructor(props) {
        super(props);
        this.animateDonut = this.animateDonut.bind(this);
        this.circle = React.createRef();
    }

    animateDonut() {
        this.circle.current.style.strokeDasharray = `${this.props.data.level *
            63}, 315`;
    }

    render() {
        if (this.props.animate) this.animateDonut();
        return (
            <div className={styles.donut}>
                <svg width="110" height="110">
                    <circle
                        className={styles.background}
                        cx="55"
                        cy="55"
                        r="50"
                    />
                    <circle
                        ref={this.circle}
                        className={styles.full}
                        cx="55"
                        cy="55"
                        r="50"
                        style={{
                            strokeDasharray: '0, 315',
                        }}
                    />
                </svg>
            </div>
        );
    }
}

export default Donut;
