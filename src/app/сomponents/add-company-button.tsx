'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/сomponents/button';

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
}
