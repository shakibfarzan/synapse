import React from 'react';
import { ThoughtNodeType } from '@/components/graph/graph.types';
import { MiniMap as RFMiniMap } from '@xyflow/react';
const MiniMap = () => {
  // colors should be changed
  return (
    <RFMiniMap
      nodeBorderRadius={30}
      nodeColor={(node: ThoughtNodeType) => {
        switch (node.data.mood) {
          case 'idea':
            return '#a855f7';

          case 'task':
            return '#06b6d4';

          default:
            return '#ffffff';
        }
      }}
    />
  );
};

export default MiniMap;
