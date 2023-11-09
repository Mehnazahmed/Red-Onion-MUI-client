import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box, Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import { useAuth } from "../hooks/useAuth";
import { useCart } from '../hooks/useCart';
import { Flexbox } from "../styled/FlexBox";

const Header = () => {
  const {user,logoutUser} =useAuth();
  const {cart}=useCart();

  const navigate=useNavigate();
  console.log(cart);

  const quantity =cart?.reduce((acc,curr)=>(acc +=curr.quantity),0)

  const handleLogOut =()=>{
    logoutUser()
  }
  return (
    <div>
      <Container>
        <Flexbox justifyContent="space-between" sx={{ padding: "2rem 0" }}>
          <Box to="/" component={Link}>
            <img
              src={logo2}
              alt="logo"
              style={{
                width: "160px",
              }}
            />
          </Box>

          <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
            <Badge badgeContent={quantity} color="primary"
            
            sx={{
              cursor:'pointer',
              '&:hover svg': {
                color:'primary.main'
              }
            }}
             onClick={()=>navigate('/checkout')}
            >
              <ShoppingCartOutlinedIcon 
              
             />
            </Badge>
            {!user && (
              <>
                <Button
                  variant="text"
                  sx={{ color: "#191919" }}
                  to="/login"
                  component={Link}
                >
                  Sign In
                </Button>
                <Button to="/register" component={Link}>
                  Sign Up
                </Button>
              </>
            )}
            {
              user && (
                <>
                <Button variant="text" sx={{color: '#191919'}}>
                  {user.displayName}
                </Button>
                <IconButton onClick={handleLogOut}>
                  <LogoutIcon/>
                </IconButton>
                </>
              )
            }
          </Stack>
        </Flexbox>
      </Container>
    </div>
  );
};

export default Header;
