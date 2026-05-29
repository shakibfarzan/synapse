'use client';
import React, { useCallback, useState } from 'react';
import { ThoughtNodeType } from '@/components/graph/graph.types';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  Edge,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  ReactFlow,
} from '@xyflow/react';
import ThoughtNode from '@/components/graph/thought-node';
import CustomEdge from '@/components/graph/custom-edge';
import MiniMap from '@/components/graph/mini-map';

const initialNodes: ThoughtNodeType[] = [
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: {
      title: 'Blade Runner 2049 Color Palette',
      text: 'The color palette in this movie is perfect for dark ambient music visuals.',
      tags: ['inspiration'],
      date: '1 day ago',
      mood: 'idea',
    },
    type: 'thought',
  },
  {
    id: 'n2',
    position: { x: 100, y: 100 },
    data: {
      title: 'Dark Ambient EP Concept',
      text: 'I want to create an EP that feels like a rainy night in a forgotten city.',
      tags: ['idea'],
      date: '1 day ago',
      mood: 'task',
    },
    type: 'thought',
  },
];
const initialEdges: Edge[] = [{ id: 'n1-n2', source: 'n1', target: 'n2', type: 'custom' }];

const nodeTypes = {
  thought: ThoughtNode,
};

const edgeTypes = {
  custom: CustomEdge,
};

const Graph = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange: OnNodesChange<ThoughtNodeType> = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        style={{
          background: `
            radial-gradient(circle at top left, var(--accent), transparent 25%),
            radial-gradient(circle at bottom right, #05422D, transparent 30%)
          `,
        }}
        colorMode="dark"
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Graph;
