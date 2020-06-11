import React, { useEffect, useState } from 'react';

import {
  addActionListener,
  removeListener
} from 'websockets';

import './ProgressBar.css';

export const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const listener = addActionListener('progress', ({ id, progress }) => {
      if (id !== props.id) return;

      const toPercent = () => (parseInt(done) / parseInt(total) * 100).toFixed(2);
      const { finished, done, total } = progress;
      const progressPercentage = finished ? 0 : toPercent();

      setFinished(finished);
      setProgress(progressPercentage);
    });
    return () => removeListener(listener);
  });

  return (
    <div className={`progress-wrapper ${props.className}`}>
      {finished ? null : <progress max="100" value={progress}></progress>}
    </div>
  );
}
