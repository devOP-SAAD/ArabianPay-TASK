import React from "react";
import { Grid, Box } from "@mui/material";
import StatsCard from "../Dashboard Component/StatsCard";
import ChartCard from "../Dashboard Component/ChartCard";
import ChartCard2 from "../Dashboard Component/ChartCard2";
import ChartCard3 from "../Dashboard Component/ChartCard3";
const Dashboard = () => {
  return (

    <Box sx={{ flexGrow: 1, maxHeight:"100vh", padding: "20px",background:"gainsboro",minHeight:"700px" ,maxHeight:"100%"}}>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
        <StatsCard title="Total Customers" value="389" color="#3f51b5" />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <StatsCard title="Total Suppliers" value="448" color="#00acc1" />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <StatsCard title="Total Orders" value="2" color="#d81b60" />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <StatsCard title="Total Products" value="31370" color="#DBD934" />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
        <StatsCard title="Total Caterory" value="170" color="#ff9800" />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3}>
      <StatsCard title="Total Brands" value="779" color="rgb(159 161 255)" />
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={3}>
    <StatsCard title="Total Employee" value="26" color="rgb(0 174 255)" />
  </Grid>
  <Grid item xs={12} sm={12} md={4} lg={3}>
  <StatsCard title="Total Ticket" value="1" color="#F314C3" />
</Grid>
      </Grid>




      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        
          <ChartCard title="Products Distribution" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <ChartCard2 title="Sellers Overview" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <ChartCard3 title="Sellers Overview" />
      </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;