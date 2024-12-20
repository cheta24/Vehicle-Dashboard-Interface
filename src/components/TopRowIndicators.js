import React from 'react';
import { Grid, Card, Typography } from '@mui/material';
import ParkingIcon from '@mui/icons-material/LocalParking'; // Updated to ParkingIcon
import WarningIcon from '@mui/icons-material/Warning';
import SpeedIcon from '@mui/icons-material/Speed';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

const TopRowIndicators = ({ data }) => {
  return (
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      {[
        {
          label: 'Parking Brake',
          value: data.parkingBreakIndicator ? 'Engaged' : 'Released',
          icon: (
            <ParkingIcon
              style={{
                fontSize: '40px',
                color: data.parkingBreakIndicator ? 'red' : 'green', // Red if engaged, green if released
              }}
            />
          ),
        },
        {
          label: 'Check Engine',
          value: data.checkEngineIndicator ? 'Active' : 'Normal',
          icon: (
            <WarningIcon
              style={{
                fontSize: '40px',
                color: data.checkEngineIndicator ? 'red' : 'green', // Red if active, green if normal
              }}
            />
          ),
        },
        {
          label: 'Motor Status',
          value: data.motorRPM > 4000 ? 'High Speed' : 'Normal',
          icon: (
            <SpeedIcon
              style={{
                fontSize: '40px',
                color: data.motorRPM > 4000 ? 'red' : 'green', // Red if high speed, green if normal
              }}
            />
          ),
        },
        {
          label: 'Battery Low',
          value: data.batteryPercentage < 20 ? 'Low' : 'Good',
          icon: (
            <BatteryChargingFullIcon
              style={{
                fontSize: '40px',
                color: data.batteryPercentage < 20 ? 'red' : 'green', // Red if battery low, green if good
              }}
            />
          ),
        },
      ].map((indicator, index) => (
        <Grid item xs={3} key={index}>
          <Card
            style={{
              padding: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                indicator.value === 'High Speed' || indicator.value === 'Low'
                  ? '#ffebee'
                  : '#e8f5e9',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {indicator.icon}
            <Typography variant="h6" style={{ marginTop: '10px' }}>
              {indicator.label}
            </Typography>
            <Typography
              variant="body1"
              style={{
                color:
                  indicator.value === 'High Speed' || indicator.value === 'Low'
                    ? 'red'
                    : 'green',
                marginTop: '5px',
                fontWeight: 'bold',
              }}
            >
              {indicator.value}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopRowIndicators;
