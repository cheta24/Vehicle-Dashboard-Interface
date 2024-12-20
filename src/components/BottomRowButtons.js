import React from 'react';
import { Grid, Button } from '@mui/material';
import { FaPlug } from 'react-icons/fa'; // Importing adapter icon

const BottomRowButtons = ({ data }) => {
  const { isCharging } = data;

  return (
    <Grid container spacing={3} style={{ marginBottom: '30px' }}>
      {['Gear', 'Motor', 'Battery Temp', 'View Menu'].map((label, index) => (
        <Grid item xs={3} key={index}>
          <Button variant="contained" color="primary" style={{ width: '100%', backgroundColor: '#3f51b5' }}>
            {label}
          </Button>
        </Grid>
      ))}
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: '100%',
            backgroundColor: isCharging ? '#4caf50' : '#f44336',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaPlug style={{ marginRight: '8px', fontSize: '20px', color: isCharging ? '#fff' : '#000' }} />
          {isCharging ? "Charging..." : "Start Charging"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default BottomRowButtons;
