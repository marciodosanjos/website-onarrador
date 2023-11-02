import { Box, Container, Grid, Typography } from "@mui/material";

export default function HeaderArticle(props: {
  title: string;
  category?: string;
  excerpt: string;
  srcImg: string;
  altText: string;
  copyrightPhoto: string;
  authorName: string;
  authorAvatar: string;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${props.srcImg})`,
        height: "25em",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 70%",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: 6,
        zIndex: 0
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 2),  rgba(0, 0, 0, 0))",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      ></div>

      <Container
        sx={{
          zIndex: 1
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "white", lineHeight: 1, marginBottom: 2 }}
        >
          {props.title}
        </Typography>

        <Typography variant="body1" sx={{ color: "white", maxWidth: "600px" }}>
          {props.excerpt}
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1
          }}
        >
          <img
            src={props.authorAvatar}
            alt=""
            width="50"
            height="50"
            style={{ borderRadius: "50%" }}
          />
          <Typography variant="subtitle2" sx={{ color: "white" }}>
            {props.authorName}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
