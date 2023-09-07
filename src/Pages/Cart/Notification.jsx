import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  
  return (
    <Stack spacing={2} sx={{ width: "100%", height: "100vh" }}>
      <Alert severity="info">Your Cart Is Empty...</Alert>
    </Stack>
  );
}
