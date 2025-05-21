'use client';
import React, { useEffect } from 'react';
import Header from '@/app/сomponents/header';
import notFound from '@/app/(admin)/companies/[...id]/not-found';
export const revalidate = false;

export interface PageProps {
  params: { id: string[] };
}


const Page = ({ params }: PageProps) => {
  useEffect(() => {
const id = Number.parseInt(params.id);
if(Number.isNaN(id)){
  notFound();
}
  }, [params.id]);
  return (
    <>
      <Header>Company ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;