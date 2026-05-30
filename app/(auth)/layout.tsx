import React, { PropsWithChildren } from 'react';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className="flex items-center justify-center w-full h-dvh">{children}</section>;
};

export default AuthLayout;
