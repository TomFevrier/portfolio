import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import classnames from 'classnames';

import styles from './header.module.css';

const Header = ({ siteTitle, homepage }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        menuPaths {
                            name
                            path
                        }
                    }
                }
            }
        `
    );

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const ref = React.createRef();

    const toggleMobileMenu = () => {
        console.log('test');
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <header>
            <div>
                <h1 style={{ margin: '-0.2rem 0 0' }}>
                    <AniLink fade to="/">
                        {
                            <svg
                                className={
                                    homepage ? styles.animated : styles.still
                                }
                                width="265"
                                height="47"
                                viewBox="0 0 265 47"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.01672 23.56H1.29672V17.48H22.0567V23.56H16.3367V45H7.01672V23.56Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M38.4014 45.64C35.5214 45.64 32.9614 45.0267 30.7214 43.8C28.5081 42.5733 26.7747 40.88 25.5214 38.72C24.2947 36.5333 23.6814 34.0533 23.6814 31.28C23.6814 28.48 24.2947 25.9867 25.5214 23.8C26.7747 21.6133 28.5081 19.92 30.7214 18.72C32.9614 17.4933 35.5214 16.88 38.4014 16.88C41.2814 16.88 43.8281 17.4933 46.0414 18.72C48.2814 19.92 50.0147 21.6133 51.2414 23.8C52.4947 25.96 53.1214 28.4533 53.1214 31.28C53.1214 34.0533 52.4947 36.5333 51.2414 38.72C50.0147 40.88 48.2814 42.5733 46.0414 43.8C43.8014 45.0267 41.2547 45.64 38.4014 45.64ZM38.4014 38.36C40.0814 38.36 41.4547 37.7067 42.5214 36.4C43.6147 35.0933 44.1614 33.3733 44.1614 31.24C44.1614 29.8267 43.9081 28.5733 43.4014 27.48C42.9214 26.36 42.2414 25.4933 41.3614 24.88C40.4814 24.24 39.4814 23.92 38.3614 23.92C37.2681 23.92 36.2814 24.24 35.4014 24.88C34.5214 25.4933 33.8414 26.36 33.3614 27.48C32.8814 28.5733 32.6414 29.8267 32.6414 31.24C32.6414 33.3733 33.1747 35.0933 34.2414 36.4C35.3081 37.7067 36.6947 38.36 38.4014 38.36Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M56.9555 17.48H65.2755L72.1555 30.84L78.8755 17.48H87.1955V45H78.8755V30.32L73.7955 39.92H70.3955L65.2755 30.32V45H56.9555V17.48Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M99.8852 17.48H118.845V23.56H108.485V29.12H118.085V34.16H108.485V45H99.8852V17.48Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M122.698 17.48H142.018V23.56H132.418V28.56H141.178V33.6H132.418V38.92H142.018V45H122.698V17.48ZM127.498 10.2L139.218 2L143.258 9.16L129.938 14.48L127.498 10.2Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M143.967 17.48H153.007L157.247 34.64L161.487 17.48H170.927L162.327 45H152.127L143.967 17.48Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M194.202 45.64C189.188 45.64 186.122 43.32 185.002 38.68L184.002 34.56H182.122V45H173.362V17.48H185.482C187.775 17.48 189.788 17.8267 191.522 18.52C193.282 19.1867 194.642 20.1333 195.602 21.36C196.562 22.5867 197.042 24 197.042 25.6C197.042 27.3867 196.602 28.8933 195.722 30.12C194.868 31.32 193.535 32.3067 191.722 33.08C191.908 34.0933 192.122 35.0133 192.362 35.84C192.682 36.8533 193.122 37.56 193.682 37.96C194.242 38.36 195.055 38.56 196.122 38.56C196.495 38.56 197.082 38.5067 197.882 38.4V44.92C196.628 45.4 195.402 45.64 194.202 45.64ZM183.642 28.96C185.615 28.96 187.002 28.7467 187.802 28.32C188.628 27.8667 189.042 27.1067 189.042 26.04C189.042 25.1333 188.708 24.48 188.042 24.08C187.375 23.6533 186.322 23.44 184.882 23.44H182.122V28.96H183.642Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M201.291 17.48H210.531V45H201.291V17.48Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M215.745 17.48H235.065V23.56H225.465V28.56H234.225V33.6H225.465V38.92H235.065V45H215.745V17.48Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M260.374 45.64C255.36 45.64 252.294 43.32 251.174 38.68L250.174 34.56H248.294V45H239.534V17.48H251.654C253.947 17.48 255.96 17.8267 257.694 18.52C259.454 19.1867 260.814 20.1333 261.774 21.36C262.734 22.5867 263.214 24 263.214 25.6C263.214 27.3867 262.774 28.8933 261.894 30.12C261.04 31.32 259.707 32.3067 257.894 33.08C258.08 34.0933 258.294 35.0133 258.534 35.84C258.854 36.8533 259.294 37.56 259.854 37.96C260.414 38.36 261.227 38.56 262.294 38.56C262.667 38.56 263.254 38.5067 264.054 38.4V44.92C262.8 45.4 261.574 45.64 260.374 45.64ZM249.814 28.96C251.787 28.96 253.174 28.7467 253.974 28.32C254.8 27.8667 255.214 27.1067 255.214 26.04C255.214 25.1333 254.88 24.48 254.214 24.08C253.547 23.6533 252.494 23.44 251.054 23.44H248.294V28.96H249.814Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        }
                    </AniLink>
                </h1>
                <nav className={showMobileMenu ? styles.active : ''}>
                    <ul>
                        {site.siteMetadata.menuPaths.map(e => (
                            <li key={e.path}>
                                <AniLink
                                    paintDrip
                                    color="rebeccapurple"
                                    to={e.path}
                                >
                                    {e.name}
                                </AniLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className={classnames(
                        styles.burger,
                        showMobileMenu ? styles.close : ''
                    )}
                    onClick={toggleMobileMenu}
                    ref={ref}
                >
                    <div className={styles.line}></div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
