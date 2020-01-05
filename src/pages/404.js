import React, { useState, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styles from './404.module.css';

import giphyCredit from '../assets/Poweredby_100px_Badge.gif';

const NotFoundPage = () => {
    // const apiKey = "yZU2hgBqmoUoXvIpMX3YIBumjsClQjk2"
    const apiKey = 'jvjCjXkPx48kZBGlqGK0D71l21QcYkMf';
    const [initialized, setInitialized] = useState(false);
    const [state, setState] = useState({ url: null });
    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
            window
                .fetch(
                    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=sad`
                )
                .then(response => response.json())
                .then(data => {
                    const url = data.data.image_original_url
                        .replace(/media[0-9]/, 'i')
                        .replace('gif', 'webp');
                    //console.log(url)
                    setState({ url });
                });
        }
    });

    return (
        <Layout>
            <SEO title="404" />
            <div className={styles.container}>
                <h2>Erreur 404</h2>
                <p>Snif snif... Cette page n'existe pas.</p>
                <div>
                    <img src={state.url} alt="Sad GIF" />
                    <img src={giphyCredit} alt="Giphy logo" />
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
