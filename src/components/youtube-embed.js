import React from 'react';

import styles from './youtube-embed.module.css';

const YouTubeEmbed = ({ src }) => (
    <div className={styles.container}>
        <iframe src={`https://youtube.com/embed/${src.split('&')[0].split('?v=')[1]}?autoplay=1`} scrolling="no" allowFullScreen frameBorder="0"></iframe>
    </div>
);
export default YouTubeEmbed;
