import React, { forwardRef } from 'react';

export const ChartCanvas = forwardRef((props, ref) => {
    const {
        width,
        height,
        margin,
        children
    } = props;

    return (
        <div className="at-row chart">
            <svg width={width} height={height} ref={ref}>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    {children}
                </g>
            </svg>
        </div>
    );
});