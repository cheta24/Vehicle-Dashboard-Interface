import React from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// Custom style for the meter and overall layout
const meterStyle = {
  width: '200px',  // Increased size
  height: '200px', // Increased size
  margin: 'auto',
  position: 'relative',
};

const valueStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '24px',  // Increased font size for better visibility
  fontWeight: 'bold',
  color: '#fff',
};

const Gauges = ({ data }) => {
  return (
    <Grid container spacing={3} justifyContent="center" style={{ marginBottom: '30px' }}>
      {/* Power Consumption Gauge */}
      <Grid item xs={6} md={3}>
        <Card style={{ padding: '20px', textAlign: 'center', backgroundColor: '#2c3135', borderRadius: '12px' }}>
          <Typography variant="h6" style={{ color: '#fff', marginBottom: '10px' }}>Power Consumption</Typography>
          <Box position="relative" style={meterStyle}>
            <CircularProgressbar
              value={data.powerConsumption}
              maxValue={100}
              styles={buildStyles({
                pathColor: data.powerConsumption > 80 ? '#f44336' : '#4caf50', // Red if high, green if low
                textColor: '#fff',
                trailColor: '#616161',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                strokeWidth: 12,
              })}
              counterClockwise
            />
            <Typography variant="body1" style={valueStyle}>
              {data.powerConsumption} kW
            </Typography>
          </Box>
        </Card>
      </Grid>

      {/* Motor RPM Gauge */}
      <Grid item xs={6} md={3}>
        <Card style={{ padding: '20px', textAlign: 'center', backgroundColor: '#2c3135', borderRadius: '12px' }}>
          <Typography variant="h6" style={{ color: '#fff', marginBottom: '10px' }}>Motor RPM</Typography>
          <Box position="relative" style={meterStyle}>
            <CircularProgressbar
              value={data.motorRPM}
              maxValue={5000}
              styles={buildStyles({
                pathColor: data.motorRPM > 4000 ? '#f44336' : '#4caf50', // Red if high RPM, green if low RPM
                textColor: '#fff',
                trailColor: '#616161',
                textSize: '16px',
                pathTransitionDuration: 0.5,
                strokeWidth: 12,
              })}
              counterClockwise
            />
            <Typography variant="body1" style={valueStyle}>
              {data.motorRPM} RPM
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Gauges;
