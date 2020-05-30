import React from 'react';
import PropTypes from 'prop-types';

const FaceBook = (props) => {
  const { color, size, stroke, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path
        id="facebook"
        d="M27.99993,5.32469v21.3509a1.32468,1.32468,0,0,1-1.32457,1.32461H20.5595V18.7061h3.11971l.46705-3.6221H20.5595V12.77145c0-1.0487.2912-1.76335,1.79509-1.76335l1.918-.00088V7.76765a25.66255,25.66255,0,0,0-2.79492-.14271c-2.76537,0-4.6586,1.688-4.6586,4.78787V15.084H13.69145v3.6221H16.8191v9.2941H5.32455a1.32452,1.32452,0,0,1-1.32462-1.32461V5.32469A1.32442,1.32442,0,0,1,5.32455,4.00007H26.67536A1.32457,1.32457,0,0,1,27.99993,5.32469Z"
      />
    </svg>
  );
};

FaceBook.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FaceBook.defaultProps = {
  color: 'currentColor',
  size: '24',
  stroke: '1',
};

export default FaceBook;
