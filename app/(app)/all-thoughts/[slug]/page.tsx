import React from 'react';

const ThoughtDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <div>Thought: {slug}</div>;
};

export default ThoughtDetailPage;
