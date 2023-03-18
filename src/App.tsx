import React from 'react';
import PrimarySearchAppBar from './components/Header/Header';
import SIdebar from './components/Sidebar/Sidebar';
import { Grid } from '@mui/material';
import DataTable from './components/dataTable/DataTable';
import NewCompany from './components/NewCompany/NewCompany';
const App = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <div style={{ display: 'flex' }}>
        <SIdebar />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <DataTable />
          </Grid>
          <Grid item xs={4}>
            <NewCompany />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
