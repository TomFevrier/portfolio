import React from 'react';

import styles from './donut.module.css';

class Donut extends React.Component {
    constructor(props) {
        super(props);
        this.animateDonut = this.animateDonut.bind(this);
        this.circle = React.createRef();
        this.size = 80;
    }

    animateDonut() {
        this.circle.current.style.strokeDasharray = `${this.props.data.level *
            Math.ceil((Math.PI * this.size) / 5)}, ${Math.ceil(
            Math.PI * this.size
        )}`;
    }

    render() {
        if (this.props.animate) this.animateDonut();
        return (
            <div className={styles.donut}>
                <svg width={this.size + 10} height={this.size + 10}>
                    <circle
                        className={styles.background}
                        cx={this.size / 2 + 5}
                        cy={this.size / 2 + 5}
                        r={this.size / 2}
                    />
                    <circle
                        ref={this.circle}
                        className={styles.full}
                        cx={this.size / 2 + 5}
                        cy={this.size / 2 + 5}
                        r={this.size / 2}
                        style={{
                            strokeDasharray: `0, ${Math.ceil(
                                Math.PI * this.size
                            )}`,
                        }}
                    />
                </svg>
            </div>
        );
    }
}

export default Donut;
