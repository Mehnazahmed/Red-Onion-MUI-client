import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';

export default function TabButton({value,setValue}) {
  console.log(value)

  const CustomTabs =styled(Tabs)(({theme})=>({
    padding: '5px',
    borderRadius: '15px',
    boxShadow: 'rgba(17,17,26, 0.05) 0px 1px 0px,rgba(17,17,26, 0.1) 0px 0px 8px',
    '& .MuiTabs-flexContainer': {
        justifyContent: 'space-between'
    },
    '& .MuiTab-root': {
        textTransform: 'capitalize',
        color: '#000',

        '&: hover': {
            // color: theme.palette.primary.main
        },
    },

        '& .Mui-selected':{
           background: theme.palette.primary.main,
           color: '#ffffff !important',
           borderRadius: '15px'
        },
    '& .MuiTabs-indicator': {
        display: 'none'
    }

  }))

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <CustomTabs value={value} onChange={handleChange} centered>
        <Tab label="Breakfast" />
        <Tab label="Lunch" />
        <Tab label="Dinner" />
      </CustomTabs>
    </Box>
  );
}