'use client';
import { useCallback, useState } from 'react';
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
  Edge,
  MiniMap,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  ReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ThoughtNode from '@/components/graph/thought-node';
import { ThoughtNodeType } from '@/components/graph/graph.types';

const initialNodes: ThoughtNodeType[] = [
  {
    id: 'n1',
    position: { x: 0, y: 0 },
    data: {
      title: 'Blade Runner 2049 Color Palette',
      text: 'The color palette in this movie is perfect for dark ambient music visuals.',
      tags: ['inspiration'],
      date: '1 day ago',
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
    },
    type: 'thought',
  },
];
const initialEdges: Edge[] = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];

const nodeTypes = {
  thought: ThoughtNode,
};

export default function Home() {
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
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
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
}
