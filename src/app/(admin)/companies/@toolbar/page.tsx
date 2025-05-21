import React from 'react';
import Toolbar from '@/app/сomponents/toolbar';
import SearchInput from '@/app/сomponents/search-input';
import AddCompanyButton from '@/app/сomponents/add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
