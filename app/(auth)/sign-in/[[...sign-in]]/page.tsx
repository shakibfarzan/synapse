import React from 'react';
import { shadcn } from '@clerk/themes';
import { SignIn } from '@clerk/nextjs';

const SignInPage: React.FC = () => {
  return (
    <SignIn
      appearance={{
        theme: shadcn,
      }}
    />
  );
};

export default SignInPage;
