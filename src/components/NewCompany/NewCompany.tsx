import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BasicInfo from './BasicInfo';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ContactPerson from './ContactPerson';
export default function NewCompany() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box className="flex my-5 px-5 justify-between">
        <Typography variant="h6" component="h6">
          New Company
        </Typography>
        <Stack spacing={2} direction="row">
          <Button size="small" variant="outlined">
            Cancel
          </Button>
          <Button size="small" color="success" variant="contained">
            Save
          </Button>
        </Stack>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Basic Info" value="1" />
            <Tab label="Contact Person" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <BasicInfo />
        </TabPanel>
        <TabPanel value="2">
          <ContactPerson />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
