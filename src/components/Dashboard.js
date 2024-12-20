import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopRowIndicators from './TopRowIndicators';
import Gauges from './Gauges';
import MiddleRow from './MiddleRow';
import BottomRowButtons from './BottomRowButtons';
import { Container, Paper } from '@mui/material';

const Dashboard = () => {
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-vehicle-dashboard-445301.as.r.appspot.com/api/vehicle-data');
        setVehicleData(response.data);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };
    fetchData();
  }, []);

  if (!vehicleData) return <div>Loading...</div>;

  return (
    <Container style={{ padding: '20px', backgroundColor: '#282c34', minHeight: '100vh' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#3c3f41', borderRadius: '8px' }}>
        <TopRowIndicators data={vehicleData} />
        <Gauges data={vehicleData} />
        <MiddleRow data={vehicleData} />
        <BottomRowButtons data={vehicleData} />
      </Paper>
    </Container>
  );
};

export default Dashboard;
