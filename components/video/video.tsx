import React, { useState } from 'react';
import styles from '@/components/video/video.module.scss';

interface VideoProps {
  embed: string;
  text: string;
  link: string;
}

const Video: React.FC<VideoProps> = ({ embed, text, link }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p className={styles.embed}>embed {embed}</p>
        <p className={styles.text}>{text}</p>
        <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </div>
      {!showVideo ? (
        <div className={styles.imageWrapper} onClick={handleVideoClick}>
          <div className={styles.imageOverlay}></div>
          <img
            className={styles.image}
            src={`https://img.youtube.com/vi/${embed}/hqdefault.jpg`}
            alt="Video Thumbnail"
          />
          <div className={styles.playButton}></div>
        </div>
      ) : (
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            title="Embedded Video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embed}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Video;
