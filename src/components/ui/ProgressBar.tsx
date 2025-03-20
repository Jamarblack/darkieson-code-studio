
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  color: string;
  animate?: boolean;
  label?: string;
  percentage?: boolean;
}

const ProgressBar = ({
  value,
  color,
  animate = true,
  label,
  percentage = true
}: ProgressBarProps) => {
  const [width, setWidth] = useState(animate ? 0 : value);
  
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setWidth(value);
      }, 300);
      
      return () => clearTimeout(timeout);
    }
  }, [value, animate]);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">{label}</span>
          {percentage && <span className="text-sm font-medium">{value}%</span>}
        </div>
      )}
      <div className="progress-bar">
        <div 
          className={cn("progress-bar-fill", color)}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
