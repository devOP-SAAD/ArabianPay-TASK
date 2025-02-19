import React from "react";
import BasicTable from "../Financial Component/BasicTable";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const FinancialInfo = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "#f5f6fa", minHeight: "100vh"}}>
      {/* Header Navigation Tabs */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          borderBottom: "2px solid #ddd",
          pb: 1,
          mb: 3,
          overflowX: "auto",
        }}
      >
        {[
          "Information",
          "Business Information",
          "Simah report",
          "Financial information",
          "Transactions List",
          "Orders List",
          "Payments List",
          "Internal procedures",
        ].map((tab, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: "14px",
              fontWeight: index === 3 ? "bold" : "normal",
              color: index === 3 ? "#000" : "#666",
              cursor: "pointer",
              borderBottom: index === 3 ? "3px solid #5a49d6" : "none",
              pb: 1,
              whiteSpace: "nowrap",
            }}
          >
            {tab}
          </Typography>
        ))}
      </Box>

      <Grid container spacing={3}>
        {/* Left Side (Card Section) */}
        <Grid item xs={12} md={6} lg={6}>
          <Card
            sx={{
              borderRadius: 3,
              color: "#fff",
              background: "linear-gradient(to right, #5a49d6, #873ccb)",
              
            }}
          style={{minHeight:"250px",maxHeight:"500px"}}
          >
            <CardContent>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                    Total Limit
                  </Typography>
                  <Typography
                    sx={{ fontSize: 32, fontWeight: "bold" }}
                  >
                    SR 5,000.00
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#d32f2f",
                      textTransform: "none",
                      fontSize: "12px",
                    }}
                  >
                    X ban
                  </Button>
                </Box>
              </Grid>

              <Grid
                container
                sx={{
                  display: { md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop:"10px"
                }}
                md={12}
              >
                <Grid item md={4}>
                  <Typography sx={{ fontSize: 14 }}>Simah Limit:</Typography>
                  <Typography sx={{ fontSize: 18 }}> 600</Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography sx={{ fontSize: 14, mt: 1 }}>
                    Used Limit:
                  </Typography>
                  <Typography sx={{ fontSize: 18 }}> SR 0.00</Typography>
                </Grid>
                <Grid item md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: 16 }}>
                        User Package
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 18,
                          fontWeight: "bold",
                          color: "#ddd",
                          mt: 0.5,
                        }}
                      >
                        Silver Package
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#42be65",
                          mt: 1,
                          textTransform: "none",
                          fontSize: "12px",
                        }}
                      >
                        Package Upgrade
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Financial Statistics */}
          <Card sx={{ mt: 3, borderRadius: 3}}>
            <Box>
            
            <Box sx={{ borderBottom: "0.5px solid lightgray", padding: 1 }}>
                <Typography
                  sx={{
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Financial Statistics
                </Typography>
              </Box>


              <Box sx={{ padding: 1 }}>
                <Typography
                  sx={{ fontSize: 14, mt: 2, borderBottom: "1px solid lightgray", p: 1 }}
                >
                  Total Payment Due Amount: <strong style={{float:"right",paddingRight:"20px"}}>SR 0.00</strong>
                </Typography>
                <Typography
                  sx={{ fontSize: 14, mt: 1, borderBottom: "1px solid lightgray", p: 1 }}
                >
                  Total Payment Due: <strong style={{float:"right",paddingRight:"20px"}}>0</strong>
                </Typography>
                <Typography
                  sx={{ fontSize: 14, mt: 1,  p: 1 }}
                >
                  Total Late Payments: <strong style={{float:"right",paddingRight:"20px"}}>0</strong>
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Right Side (Table Section) */}
        <Grid item xs={12} md={6} lg={6}>
          <Card sx={{ borderRadius: 3, border: "1px solid #ddd" }}>
            <CardContent>
            <Box sx={{ borderBottom: "0.5px solid lightgray", padding: 1 }}>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
                Log Changes to Limit the Customer
              </Typography>
              </Box>
              {/* Table */}
             <BasicTable/>
            </CardContent>
          </Card>
        </Grid>




      </Grid>
    </Box>
  );
};

export default FinancialInfo;