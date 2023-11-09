import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useCart } from "../hooks/useCart";
import useMealsById from "../hooks/useMealsById";
import { Flexbox } from "../styled/FlexBox";
import { CounterBox } from "../styled/mealDetails.style";

const MealDetails = () => {
  const { mealId } = useParams();
  const { meal, loading } = useMealsById(mealId);
  const { setCart } = useCart();

  const [quantity, setQuantity] = useState(0);
  if (loading) <h2>loading....</h2>;

  const addToCart = () => {
    setCart((cart) => [
      ...cart,
      {
        ...meal,
        quantity,
      },
    ]);
  };

  const adjustQuantity = (type) => {
    setQuantity(type === 'add' ? quantity + 1 : quantity - 1);
    setCart((cart) =>
       cart.map((item) => {
          if (item._id === meal._id) {
             return {
                ...item,
                quantity:
                   type === 'add' ? item.quantity + 1 : item.quantity - 1,
             };
          }

          return item;
       })
    );
 };

  return (
    <Box>
      <Container>
        <Flexbox sx={{ my: 5, gap: 10 }}>
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              <Typography variant="h4" fontWeight={600}>
                {meal.title}
              </Typography>
              <Typography
                variant="body"
                color="primary.greyText"
                sx={{
                  width: 450,
                }}
              >
                {meal.description}
              </Typography>
              <Flexbox>
                <Typography
                  variant="h4"
                  fontWeight={400}
                  marginRight={6}
                  sx={{ width: "25px" }}
                >
                  ${meal.price}
                </Typography>
                <CounterBox>
                  <RemoveIcon onClick={() => adjustQuantity('remove')} />
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    sx={{ width: "20px" }}
                  >
                    {quantity}
                  </Typography>

                  <AddIcon onClick={() => adjustQuantity('add')} />
                </CounterBox>
              </Flexbox>
              <Button
                onClick={() => addToCart()}
                sx={{ width: ["80%", "80%", "40%"] }}
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                {" "}
                Add
              </Button>
            </Stack>
            <Box mt={10}>
              <ImageSlider images={meal?.images} />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <img
              src={meal.defaultImage}
              alt="meal"
              style={{
                width: "500px",
                maxWidth: "100%",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Box>
        </Flexbox>
      </Container>
    </Box>
  );
};

export default MealDetails;
