import React, { useState } from 'react';
import { Grid, Card, Typography, Slider } from '@mui/material';

const MiddleRow = ({ data }) => {
  const [speed, setSpeed] = useState(1);

  return (
    <Grid container spacing={3} style={{ marginBottom: '30px' }}>
      {[
        { label: 'Gear Ratio', value: data.gearRatio },
        { label: 'Battery %', value: `${data.batteryPercentage}%` },
        { label: 'Battery Temp', value: `${data.batteryTemperature}°C` },
        { label: 'Motor RPM', value: `${data.motorRPM} RPM` },
      ].map((item, index) => (
        <Grid item xs={3} key={index}>
          <Card style={{ padding: '20px', textAlign: 'center', backgroundColor: '#2c3135' }}>
            <Typography variant="h6" style={{ color: '#fff', fontWeight: 'bold' }}>{item.label}</Typography>
            <Typography variant="body1" style={{ color: '#fff' }}>{item.value}</Typography>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Card style={{ padding: '20px', textAlign: 'center', backgroundColor: '#2c3135' }}>
          <Typography variant="h6" style={{ color: '#fff' }}>Motor Speed Setting</Typography>
          <Slider
            value={speed}
            onChange={(e, newValue) => setSpeed(newValue)}
            step={1}
            min={1}
            max={4}
            marks
            style={{ color: '#00bcd4' }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default MiddleRow;
