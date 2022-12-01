import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


const TrelloCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day from TrelloCard
        </Typography>
    </Card>
  );
};

export default TrelloCard;