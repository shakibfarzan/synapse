import React from 'react';
import { Handle, HandleProps } from '@xyflow/react';
import { Circle } from 'lucide-react';

const CustomHandle: React.FC<HandleProps> = (props) => {
  // Color should be dynamic
  return (
    <Handle {...props} className="bg-none! border-none! w-[1em] h-[1em]">
      <div className="bg-white rounded-full w-2 h-2 pointer-events-none absolute bottom-0 shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]" />
    </Handle>
  );
};

export default CustomHandle;
