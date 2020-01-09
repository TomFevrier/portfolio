import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import Header from './header';
import styles from './layout.module.css';

if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]');
}

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBackToTop: false,
            keystrokesHistory: [],
            konami: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.startListeningKeystrokes = this.startListeningKeystrokes.bind(this);
        this.checkKonami = this.checkKonami.bind(this);
        this.launchKonami = this.launchKonami.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.startListeningKeystrokes();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    startListeningKeystrokes() {
        document.addEventListener('keydown', e => {
            this.state.keystrokesHistory.push(e.keyCode);
            if (this.state.keystrokesHistory.length > 10) this.state.keystrokesHistory.shift();
            this.checkKonami();
        });
    }

    checkKonami() {
        const konamiStr = '38,38,40,40,37,39,37,39,66,65';
        if (this.state.keystrokesHistory.join(',') === konamiStr) {
            this.launchKonami();
        }
    }

    launchKonami() {
        this.setState({ konami: true });
        document.querySelectorAll('h2, h3, span, footer, button, label, input').forEach(e => {
            e.innerHTML = e.innerHTML.replace(/[^\x00-\x7F]+/g, 'ë');
            e.style.fontFamily = 'Aurebesh, sans-serif';
        });
        document.querySelectorAll('p, a').forEach(e => {
            e.innerHTML = e.innerHTML.replace(/[^\x00-\x7F]+/g, 'ë');
            e.style.fontFamily = 'Aurebesh, sans-serif';
        });
        document.querySelectorAll('li').forEach(e => {
            e.innerHTML = e.innerHTML.replace(/[^\x00-\x7F]+/g, 'ë');
            e.style.fontFamily = 'Aurebesh, sans-serif';
        });
    }

    handleScroll() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            this.setState({ showBackToTop: true });
        } else {
            this.setState({ showBackToTop: false });
        }
    }

    render() {
        return (
            <>
                <Header homepage={this.props.homepage} konami={this.state.konami} />
                <div className={styles.wrapper}>
                    <Link to={`${typeof window !== 'undefined' ? window.location.pathname : ''}/#`}>
                        <FontAwesomeIcon
                            className={styles.backToTop}
                            style={{
                                opacity: this.state.showBackToTop ? 1 : 0,
                                pointerEvents: this.state.showBackToTop ? 'auto' : 'none',
                            }}
                            icon={faChevronCircleUp}
                            size="2x"
                        />
                    </Link>

                    <main>{this.props.children}</main>
                    <footer>
                        © {new Date().getFullYear()} - Tom Février
                        <br />
                        Propulsé par{' '}
                        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
                            Gatsby
                        </a>{' '}
                        &{' '}
                        <a href="http://strapi.io" target="_blank" rel="noopener noreferrer">
                            Strapi
                        </a>
                    </footer>
                </div>
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
