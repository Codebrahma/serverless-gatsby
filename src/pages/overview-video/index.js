import React from 'react';

export default () => (
  <Modal
    active
    onEscKeyDown={this.loadHome}
    onOverlayClick={this.loadHome}
  >
    <div>
      <iframe className={styles.videoModal}
        src="https://player.vimeo.com/video/282028201?autoplay=1&color=f15953&title=0&byline=0&portrait=0"
        frameBorder="0"
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      >
      </iframe>
    </div>
  </Modal>
);
