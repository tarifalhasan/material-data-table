import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PrimarySearchAppBar from './components/Header/Header';
import SIdebar from './components/Sidebar/Sidebar';

import DataTable from './components/dataTable/DataTable';
import NewCompany from './components/NewCompany/NewCompany';
import Footer from './components/Footer/Footer';

const App = () => {
  const isOpenNew = useSelector(state => state.isOpenNew.isOpenNew);

  return (
    <>
      <PrimarySearchAppBar />
      <div className="flex max-w-[1920px] mx-auto overflow-x-hidden">
        <SIdebar />

        {isOpenNew ? (
          <div className="relative borderl-2 ">
            <div className={`flex  `}>
              <div className={`basis-[60%] `}>
                <DataTable />
              </div>

              <div className={`w-full basis-[40%] `}>
                <NewCompany />
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="w-full">
            <DataTable />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
