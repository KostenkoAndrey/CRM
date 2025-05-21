import React from 'react';
import Header from "@/app/сomponents/header";
import Toolbar from "@/app/сomponents/toolbar";
import SearchInput from "@/app/сomponents/search-input";
import AddCompanyButton from "@/app/сomponents/add-company-button";
import CompanyTable from "@/app/сomponents/company-table";
import CompanyRow from "@/app/сomponents/company-row";
import {Status} from "@/app/сomponents/status-label";


const Page = () => {
    return (
      <>
        <Header>Companies</Header>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category={'Product'}
            company={'Costco'}
            status={Status.Pending}
            promotion={true}
            country={'USA'}
            joinedDate={'02.19.2023'}
          />
        </CompanyTable>
      </>
    );

};

export default Page;
