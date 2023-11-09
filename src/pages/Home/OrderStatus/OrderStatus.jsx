import { Avatar, Box, Button, Container, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import { Flexbox } from "../../../components/styled/FlexBox";

const steps = [
  {
    label: "Your Location",
    description: `159/a, Khilgaon, Dhaka`,
  },
  {
    label: "Shop Address",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
];

const OrderStatus = () => {
  return (
    <Box my={8}>
      <Container maxWidth="lg">
        <Flexbox justifyContent="space-between">
          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <img
              src="https://i.ibb.co/tMqhPdK/map.jpg"
              style={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: "#f5f5f5",
              borderRadius: 1,
              p: 4,
            }}
          >
            <img
              src="https://i.ibb.co/MRYPhq8/Group-1151.jpg"
              style={{ width: 100, margin: "0 auto" }}
            />
            <Box
              sx={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: 1,
                bgcolor: "#ffffff",
                p: 2,
                my: 2,
              }}
            >
              <Stepper  orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}
                   completed={true}
                   expanded={true}
                   >
                    <StepLabel
                      optional={
                        index === 2 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography color='primary.greyText'>{step.description}</Typography>
                      
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Typography variant="h6">09:00</Typography>
            <Typography variant="caption"
            color='primary.greyText'
            >
                Estimated delivery time
            </Typography>
            <Flexbox
            sx={{
                maxWidth: '350px',
                width: '100%',
                borderRadius:1,
                bgcolor: "#ffffff",
                gap:2,
                p: 2,
                mt: 2,
            }}
            >
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/delivery-man-with-package-shoulder_23-2148590745.jpg?size=626&ext=jpg"
            sx={{
               width:56,
               height: 56

            }}
            />
            <Box>
            <Typography variant="h6">Your Rider</Typography>
            <Typography variant="caption"
            color='primary.greyText'
            >
                Mr Hero
            </Typography>

            </Box>
            </Flexbox>
            <Button fullWidth sx={{mt:2,borderRadius:'4px'}}>Contact</Button>
          </Box>
        </Flexbox>
      </Container>
    </Box>
  );
};

export default OrderStatus;
