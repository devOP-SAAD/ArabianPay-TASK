import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Avatar,
  IconButton,
  Chip,
} from "@mui/material";
import { MoreVert, Notifications, Language } from "@mui/icons-material";

// Sample data
const sellers = [
  {
    id: 1,
    supplier: "example1@example.com",
    registry: "123456",
    location: "منطقة الرياض - الرياض",
    status: "active",
    due: "SR 0.00",
    registerDate: "2025-02-06 15:09:55",
  },
  {
    id: 2,
    supplier: "example2@example.com",
    registry: "789012",
    location: "منطقة الرياض - الرياض",
    status: "active",
    due: "SR 0.00",
    registerDate: "2025-02-03 18:45:45",
  },
  {
    id: 3,
    supplier: "example3@example.com",
    registry: "345678",
    location: "منطقة الرياض - الرياض",
    status: "pending",
    due: "SR 0.00",
    registerDate: "2025-01-28 14:49:33",
  },
];

const AllSuppliers = () => {
  return (
    <Box sx={{ bgcolor: "#f8f9fc", minHeight: "100vh", p: 2 }}>
      {/* Navbar */}
      

      {/* Title */}
      <Typography sx={{ fontSize: 22, fontWeight: "bold", mb: 2 }}>
        All Sellers
      </Typography>

      {/* Sellers Section */}
      <Card sx={{ p: 2, borderRadius: 2, boxShadow: 1, mb: 3 }}>
        <CardContent>

          <Grid container spacing={2} alignItems="center">
          <Typography sx={{ fontSize: 18, fontWeight: "bold", mb: 2 }}>
            Sellers
          </Typography>
            <Grid sx={{ml:"500px"}} item xs={12} sm={2.3}>
              <TextField fullWidth select label="Filter by Approval">
                <MenuItem value="approved">Approved</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="rejected">Rejected</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={2.3}>
              <TextField fullWidth type="date" label="From" InputLabelProps={{ shrink: true }} />
            </Grid>

            <Grid item xs={12} sm={2.3}>
              <TextField fullWidth type="date" label="To" InputLabelProps={{ shrink: true }} />
            </Grid>

            <Grid item xs={12} sm={3.7}>
              <TextField fullWidth select label="Select State">
                <MenuItem value="state1">State 1</MenuItem>
                <MenuItem value="state2">State 2</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField fullWidth select label="Select City">
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Type name or email & Enter" />
            </Grid>

            {/* Button Alignment Fix */}
            <Grid item xs={12} sm={2} sx={{ display: "flex", gap: 1, mt: 1 }}>
              <Button variant="contained" sx={{ bgcolor: "#3725cd", width: "100%" }}>
                Filtering
              </Button>
              <Button variant="contained" sx={{ bgcolor: "#e63946", width: "100%" }}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Sellers Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#f4f6fb" }}>
              {["#", "Supplier data", "Commercial registry", "Location", "Status", "Due to seller", "Register date", "Options"].map((head) => (
                <TableCell key={head} sx={{ fontWeight: "bold", borderBottom: "2px solid #ddd" }}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller) => (
              <TableRow key={seller.id}>
                <TableCell>{seller.id}</TableCell>
                <TableCell>{seller.supplier}</TableCell>
                <TableCell>{seller.registry}</TableCell>
                <TableCell>{seller.location}</TableCell>
                <TableCell>
                  <Chip
                    label={seller.status}
                    sx={{
                      bgcolor: seller.status === "active" ? "#28a745" : "#007bff",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                </TableCell>
                <TableCell>{seller.due}</TableCell>
                <TableCell>{seller.registerDate}</TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllSuppliers;
