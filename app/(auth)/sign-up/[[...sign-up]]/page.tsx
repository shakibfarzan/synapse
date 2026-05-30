import { SignUp } from '@clerk/nextjs';
import React from 'react';
import { shadcn } from '@clerk/themes';

const SignUpPage: React.FC = () => {
  return (
    <SignUp
      appearance={{
        theme: shadcn,
      }}
    />
  );
};

export default SignUpPage;
