import React from "react";
import { Grid, Card, Typography } from "@mui/material";

const StatsCard = ({ title, value, color }) => {
  return (
    <Card
      sx={{
        background: `linear-gradient(135deg, ${color}, #7b5fcf)`,
        color: "white",
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "left",
        minWidth: 200,
      }}
    >
      <Typography variant="body2" sx={{ opacity: 0.75, fontSize: 14 }}>
        {title.split(" ")[0]}
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.75, fontSize: 14 }}>
        {title.split(" ")[1]}
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
        {value}
      </Typography>
    </Card>
  );
};

export default StatsCard;