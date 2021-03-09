import React from 'react';
import Img from 'gatsby-image';

import styles from './lightbox.module.css';

const LightBox = props => (
    <div
        className={styles.container}
        onClick={props.onClick}
        style={{
            opacity: props.lightboxOpen ? 1 : 0,
            pointerEvents: props.lightboxOpen ? 'auto' : 'none',
        }}
    >
		<div className={styles.cache}></div>
        <div
            className={styles.lightbox}
            onClick={event => event.stopPropagation()}
            style={{
                transform: props.lightboxOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.8)',
                width: `calc(90vh * ${props.imgSrc ? props.imgSrc.childImageSharp.fluid.aspectRatio : 1})`,
            }}
        >
            {props.imgSrc && <Img fluid={props.imgSrc.childImageSharp.fluid} />}
            <span className={styles.close} onClick={props.onClick}>
                &times;
            </span>
        </div>
    </div>
);

export default LightBox;
