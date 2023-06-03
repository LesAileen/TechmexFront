import React from "react";
import { useEffect, useState } from 'react';
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Navbar from "../home/Navbar"
import Footer from "../home/Footer";

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "primary",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "primary",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#2196f3",
      },
    },
  });

function Login() {
  const [password, setPassword] = React.useState("");
  const [leyenda, setLeyenda] = React.useState("");
  const [errorpassword, setErrorPassword] = React.useState(false);

  const [status, setStatus] = useState([false]);
  return (
    <div >
        <Navbar />
            <Box sx={{ paddingTop: '64px' }}>
            <Container className="ContainerRegister" component="main" maxWidth="xs">
                <Box>
                    <Typography
                        variant="h3"
                        fontFamily="Digitalism"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        flexGrow: 1,
                        display: { xs: "none", md: "flex" },
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        alignItems: "center"
                        }}
                    >Texchmex 
                    </Typography>

                    <Box component="form"
                        
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <CssTextField margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                            sx={{
                                color: "white",
                            }}
                        />
                        <CssTextField 
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (password.length > 7) {
                                setErrorPassword(true);
                                setLeyenda("La contraseña tiene mas de 8 caracteres");
                                } else {
                                setErrorPassword(false);
                                setLeyenda("");
                                }
                            }}
                            error={errorpassword}
                            helperText={leyenda}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                            label="Recordarme"
                        />
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >Continuar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Olvidó la contraseña?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/Register" variant="body2">
                                    {"No tienes una cuenta? Registrarse"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>

        <Footer></Footer>
    </div>
  );
}

export default Login;