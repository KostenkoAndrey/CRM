import React from 'react';
import SummaryTable from '@/app/сomponents/summary-table';
import SummaryTableHeader from '@/app/сomponents/summary-table-header';
import SummaryTableCell from '@/app/сomponents/summary-table-cell';
import DashboardCard from '@/app/сomponents/dashboard-card';
import { getPromotions } from '@/lib/api';

export interface PageProps {}

export const dynamic = 'force-dynamic';
export default async function Page({}: PageProps) {
  const data = await getPromotions();

  return (
    <DashboardCard label='Promotions'>
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align='center'>%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align='center'>{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
