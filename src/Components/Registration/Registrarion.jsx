import { Box, Button, TextField } from "@mui/material";
import API from "../../requester";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";
import { Login } from "../Login/Login";
import axios from "axios";
import { setRefreshTokenToCookies, setTokenToCookies } from "../../cookies";

export const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      const response = await API.post("/signup/", formData);
      console.log("response data", response.data);

      const getToken = await API.post("/api/token/", formData);
      const { access, refresh } = getToken.data;
      setRefreshTokenToCookies(refresh);
      setTokenToCookies(access);

      // window.location.href = "/main";
    } catch (error) {
      console.error("Ошибка при регистрации: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Имя пользователя"
              variant="outlined"
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          )}
        />
      </Box>
      <Box>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
      </Box>
      <Box>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Пароль"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
      </Box>
      <Box>
        <Controller
          name="password2"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Повторите пароль"
              variant="outlined"
              error={!!errors.password2}
              helperText={errors.password2?.message}
            />
          )}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Зарегистрироваться
      </Button>
    </form>
  );
};

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import { useTheme } from "@mui/material/styles";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import TextField from "@mui/material/TextField";
// import API from "./../../requester";

// const steps = [
//   {
//     label: "Step 1: Personal Information",
//     description: "Enter your email and password.",
//     content: (
//       <div>
//         <TextField label="Email" fullWidth margin="normal" />
//         <TextField label="Password" type="password" fullWidth margin="normal" />
//       </div>
//     ),
//   },
//   {
//     label: "Step 2: Contact Information",
//     description: "Provide your username and name.",
//     content: (
//       <div>
//         <TextField label="Username" fullWidth margin="normal" />
//         <TextField label="Name" fullWidth margin="normal" />
//       </div>
//     ),
//   },
//   {
//     label: "Step 3: Create Account",
//     description: "Upload a profile photo.",
//     content: (
//       <div>
//         <input type="file" accept="image/*" />
//       </div>
//     ),
//   },
// ];

// const RegistrationStepper = () => {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = useState(0);
//   const maxSteps = steps.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 400,
//         flexGrow: 1,
//       }}
//     >
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           height: 50,
//           pl: 2,
//           bgcolor: "#3f51b5", // Background color
//           color: "white", // Text color
//         }}
//       >
//         <Typography variant="h6">{steps[activeStep].label}</Typography>
//       </Paper>
//       <Box
//         sx={{
//           height: 255,
//           maxWidth: 400,
//           width: "100%",
//           p: 2,
//         }}
//       >
//         <Typography>{steps[activeStep].description}</Typography>
//         {steps[activeStep].content}
//       </Box>
//       <MobileStepper
//         variant="text"
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// };

// export default RegistrationStepper;
