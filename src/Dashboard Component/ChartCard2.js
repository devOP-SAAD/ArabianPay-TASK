import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Card, Typography, CardContent } from "@mui/material";

const ChartCard2 = () => {
  const [series, setSeries] = useState([30,20,50]);

  const options = {
    chart: {
      type: "donut",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF4081", "#26A69A", "#3F51B5"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div>
      <Card style={{ borderRadius: "10px" }}>
        <div style={{ borderBottom: "1px solid lightgray" }}>
          <Typography style={{ fontWeight: "bold", padding: "20px" }}>
            Seller
          </Typography>
        </div>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Chart options={options} series={series} type="donut" width={330} />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
              <span style={{ width: 10, height: 10, backgroundColor: "#FF4081", borderRadius: "50%", display: "inline-block", marginRight: "5px" }}></span>
              <Typography style={{ fontSize: "9px" }}>Total published products</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", marginRight: "15px" }}>
              <span style={{ width: 10, height: 10, backgroundColor: "#26A69A", borderRadius: "50%", display: "inline-block", marginRight: "5px" }}></span>
              <Typography style={{ fontSize: "9px" }}>Total sellers products</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ width: 10, height: 10, backgroundColor: "#3F51B5", borderRadius: "50%", display: "inline-block", marginRight: "5px" }}></span>
              <Typography style={{ fontSize: "9px" }}>Total admin products</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartCard2;
