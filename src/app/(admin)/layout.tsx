import React from 'react';
import Sidebar from '@/app/сomponents/sidebar';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <div className='ml-60 '>{children}</div>
    </>
  );
};

export default Layout;
