import { Box, Button, Container, Link, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import OnionTextField from "../Custom/OnionTextField";
import { useAuth } from "../hooks/useAuth";
import { AuthForm } from "../styled/register.style";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {registerWithEmailAndPassword} =useAuth();
  const navigate=useNavigate();

  const handleRegister = async ({name,email,password}) => {
    
    await registerWithEmailAndPassword(name,email,password,navigate);
    reset();
  };
  console.log(errors );
  return (
    <Box
      sx={{
        height: "90vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <AuthForm
          component="form"
          onSubmit={handleSubmit(handleRegister)}
        >
          <Typography variant="h3" textAlign="center" color="primary">
            Sign Up
          </Typography>
          <OnionTextField
            placeholder="Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            error={errors.name}
            helperText={errors.name && errors.name.message}
          />
          <OnionTextField
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email required",
              },
            })}
            error={errors.email}
            helperText={errors.email && errors.email.message}
          />
          <OnionTextField
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "password should be 6 chaacters long",
              },
            })}
            error={errors.password}
            helperText={errors.password && errors.password.message}
          />
          <Link
            to="/login"
            style={{
              color: "#f91944",
            }}
          >
            Already have an account?
          </Link>
          <Button
            sx={{
              borderRadius: "8px",
            }}
            type="submit"
          >
            Sign Up
          </Button>
        </AuthForm>
      </Container>
    </Box>
  );
};

export default Register;
