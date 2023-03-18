import React from 'react';
import PrimarySearchAppBar from './components/Header/Header';
import SIdebar from './components/Sidebar/Sidebar';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import DataTable from './components/dataTable/DataTable';
import NewCompany from './components/NewCompany/NewCompany';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <div className="flex max-w-[1920px] mx-auto overflow-x-hidden">
        <SIdebar />
        <div className="relative borderl-2 ">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <DataTable />
            </Grid>
            <Grid className="border-l border-slate-500 !pl-[2px]	" item xs={4}>
              <NewCompany />
            </Grid>
          </Grid>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
