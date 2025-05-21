import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/сomponents/summary-table';
import SummaryTableHeader from '@/app/сomponents/summary-table-header';
import SummaryTableCell from '@/app/сomponents/summary-table-cell';
import DashboardCard from '@/app/сomponents/dashboard-card';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard label='Sales details'>
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align='center'>Sold</SummaryTableHeader>
            <SummaryTableHeader align='center'>Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align='center'>{sold}</SummaryTableCell>
            <SummaryTableCell align='center'>{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
