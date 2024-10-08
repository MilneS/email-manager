import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { RootSate } from "@/appStore/store";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const centerColStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const cardStyle = {
    width: "25rem",
    height: "fit-content",
    p: "3rem",
    m:0
  };
  const StyledTextField = styled(TextField)(() => ({
    marginBottom: "1rem",
    width: "100%",
  }));

  return (
    <Card sx={cardStyle}>
      <Typography variant="h5" mb="2rem">
        Login
      </Typography>
      <Box
        sx={centerColStyle}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <StyledTextField
          {...register("id")}
          id="outlined-basic"
          label="ID"
          variant="outlined"
        />
        <StyledTextField
          {...register("password")}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <Button type="submit" variant="contained" sx={{ my: "1rem" }}>
          Submit
        </Button>
      </Box>

      <Button type="submit" variant="text" sx={{ marginTop: "2rem" }}>
        or sign up
      </Button>
    </Card>
  );
};
export default Login;
