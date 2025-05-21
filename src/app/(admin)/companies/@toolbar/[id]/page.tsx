import React from 'react';
import Toolbar from '@/app/сomponents/toolbar';
import SearchInput from '@/app/сomponents/search-input';
import AddPromotionButton from '@/app/сomponents/add-promotion-button';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
