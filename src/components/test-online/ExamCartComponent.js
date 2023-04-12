import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate } from "react-router-dom";


export default function ExamCartComponent() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 375, cursor: "pointer", marginBottom: "30px" }} onClick={() => navigate("/trang-chu/thi-thu/de-thi-so-16")}>
      <CardHeader
        sx={{
          "& .MuiCardHeader-title": {
            fontSize: "15px",
            fontWeight: "bold",
          },
          "& .MuiCardHeader-subheader": {
            fontSize: "13px",
          },
        }}
        title="ĐỀ THI THỬ THPT QUỐC GIA LẦN 26"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/images/logo-pi.jpeg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <div style={{ textAlign: "right", width: "100%" }}>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.6)",
              marginRight: "10px",
            }}
          >
            <span style={{ color: "#17b978", fontWeight: "bold" }}>1</span> lượt
            thi
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.6)",
              marginRight: "10px",
            }}
          >
            <span style={{ color: "#e53935", fontWeight: "bold" }}>1</span> lượt
            thích
          </span>
        </div>
      </CardActions>
    </Card>
  );
}
