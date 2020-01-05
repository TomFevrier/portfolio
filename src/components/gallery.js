import React from 'react';
import Img from 'gatsby-image';

import LightBox from './lightbox';

import styles from './gallery.module.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightboxOpen: false,
            imgSrc: null,
        };
        this.enlarge = this.enlarge.bind(this);
        this.close = this.close.bind(this);
    }

    enlarge(imgSrc) {
        console.log('enlarging');
        this.setState({
            lightboxOpen: true,
            imgSrc: imgSrc,
        });
    }

    close() {
        console.log('closing');
        this.setState({
            lightboxOpen: false,
        });
    }

    render() {
        return (
            <>
                <ul className={styles.grid}>
                    {this.props.strapiProject.pictures.map(e => (
                        <li
                            key={e.id}
                            className={styles.item}
                            onClick={() => this.enlarge(e.localFile)}
                        >
                            <Img fluid={e.localFile.childImageSharp.fluid} />
                        </li>
                    ))}
                </ul>
                <LightBox
                    lightboxOpen={this.state.lightboxOpen}
                    imgSrc={this.state.imgSrc}
                    onClick={this.close}
                />
            </>
        );
    }
}

export default Gallery;
