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
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
        ) {
            this.setState({ showBackToTop: true });
        } else {
            this.setState({ showBackToTop: false });
        }
    }

    render() {
        return (
            <>
                <Header homepage={this.props.homepage} />
                <div className={styles.wrapper}>
                    <Link
                        to={`${
                            typeof window !== 'undefined'
                                ? window.location.pathname
                                : ''
                        }/#`}
                    >
                        <FontAwesomeIcon
                            className={styles.backToTop}
                            style={{
                                opacity: this.state.showBackToTop ? 1 : 0,
                                pointerEvents: this.state.showBackToTop
                                    ? 'auto'
                                    : 'none',
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
                        <a
                            href="https://www.gatsbyjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby
                        </a>{' '}
                        &{' '}
                        <a
                            href="http://strapi.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
