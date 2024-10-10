import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { RootSate } from "@/appStore/store";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { loginFields, registerFields } from "@/utils";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

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
    m: 0,
  };
  const StyledTextField = styled(TextField)(() => ({
    marginBottom: "1rem",
    width: "100%",
  }));

  return (
    <Card sx={cardStyle}>
      <Typography variant="h5" mb="2rem">
        {isRegister ? "Register" : "Login"}
      </Typography>
      <Box
        sx={centerColStyle}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        {(isRegister ? registerFields : loginFields).map((field) => (
          <StyledTextField
            key={field.id}
            {...register(field.id)}
            id="outlined-basic"
            label={field.name}
            variant="outlined"
          />
        ))}
        <Button type="submit" variant="contained" sx={{ my: "1rem" }}>
          Submit
        </Button>
      </Box>
      <Button
        variant="text"
        sx={{ marginTop: "2rem" }}
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? "or login" : "or sign up"}
      </Button>
    </Card>
  );
};
export default Login;
