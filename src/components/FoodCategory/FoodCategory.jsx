import { Box, Button, Container, Skeleton } from "@mui/material";
import React, { useState } from "react";
import TabButton from "../Custom/TabButton";
import FoodCard from "../FoodCard/FoodCard";
import useMeals from "../hooks/useMeals";

const categories = ["breakfast", "lunch", "dinner"];

const FoodCategory = () => {
  const [value, setValue] = useState(0);

  const { meals, loading } = useMeals(categories[value]);

  console.log(meals);

  return (
    <Box>
      <Container>
        <Box
          sx={{
            maxWidth: 500,
            mx: "auto",
          }}
        >
          <TabButton value={value} setValue={setValue} />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            justifyItems: "center",
            gap: "20px",
            mt: 8,
          }}
        >
          {!loading &&
            meals.map((meal) => (
              <FoodCard key={meal._id} meal={meal}></FoodCard>
            ))}
          {loading &&
            Array.from(new Array(6)).map((item) => (
              <Box
                sx={{
                  width: 350,
                }}
              >
                <Skeleton
                  variant="circular"
                  width={250}
                  height={250}
                  sx={{
                    mx: "auto",
                  }}
                  animation='wave'
                />
                <Skeleton variant="text" width={350} height={50} />
                <Skeleton variant="text" width={350} height={70} />
                <Skeleton
                  variant="text"
                  width={100}
                  height={70}
                  sx={{
                    mx: "auto",
                  }}
                  animation='wave'
                />
              </Box>
            ))}
        </Box>
        <Button
        sx={{
          borderRadius:'4px',
          
        }} 
        >
          CheckOut Your Food
        </Button>
      </Container>
    </Box>
  );
};

export default FoodCategory;
