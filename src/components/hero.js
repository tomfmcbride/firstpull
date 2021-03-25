import React from 'react';

import styles from './hero.module.css';

export default ({ data }) => (
  <div className={styles.hero}>
    <video
      class="header-video async-background"
      loop="loop"
      autoplay="autoplay"
      playsinline="playsinline"
      src="https://assets.blz-contentstack.com/v3/assets/blt3452e3b114fab0cd/bltf849b1da51ec1f66/5dbb2f0f24642a3b8da56e97/Shadowlands_Cinematic_Loop_MP4.mp4"
    ></video>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p className={styles.shortBio}>{data.shortBio.shortBio}</p>
    </div>
  </div>
);
