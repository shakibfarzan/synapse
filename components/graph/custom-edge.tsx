import React from 'react';
import { CustomEdgeType } from '@/components/graph/graph.types';
import { BaseEdge, EdgeProps, getBezierPath } from '@xyflow/react';

const CustomEdge: React.FC<EdgeProps<CustomEdgeType>> = (props) => {
  const [edgePath] = getBezierPath(props);
  return (
    <BaseEdge
      style={{
        stroke: '#fff',
        strokeWidth: 2,
        filter: 'drop-shadow(0 0 8px #fff)',
      }}
      id={props.id}
      path={edgePath}
    />
  );
};

export default CustomEdge;
