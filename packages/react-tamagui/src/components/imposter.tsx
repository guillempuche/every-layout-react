import React, { useEffect, useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { ImposterProps } from './imposter_type';

/**
 * The Imposter component creates a modal overlay, which can be positioned over any element.
 * If no `targetRef` is provided, the Imposter will cover the entire visible screen.
 */
export const Imposter: React.FC<ImposterProps> = ({
  children,
  visible,
  margin = 0,
  // targetRef,
  onClose,
  ...props
}) => {
  // const imposterRef = useRef(targetRef);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Process margin prop
  const processMargin = useCallback(() => {
    let horizontal = 0;
    let vertical = 0;

    if (typeof margin === 'number') {
      horizontal = vertical = margin;
    } else if (typeof margin === 'string') {
      const values = margin.split(' ').map((value) => parseFloat(value));
      [horizontal, vertical] =
        values.length === 2 ? values : [values[0], values[0]];
    }

    return { horizontal, vertical };
  }, [margin]);

  const { horizontal, vertical } = processMargin();

  // Update modal dimensions
  useEffect(() => {
    const updateDimensions = () => {
      const updatedWidth = window.innerWidth - 2 * horizontal;
      const updatedHeight = window.innerHeight - 2 * vertical;
      setDimensions({ width: updatedWidth, height: updatedHeight });
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, [horizontal, vertical]);

  const modalContent = visible && (
    <div
      // ref={imposterRef}
      onClick={onClose}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: dimensions.width,
        height: dimensions.height,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        display: 'flex',
      }}
      {...props}
    >
      {children}
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
