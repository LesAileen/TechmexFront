import React, { useState } from "react";
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
import Navbar from "../home/Navbar";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [leyenda, setLeyenda] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length > 7) {
      setErrorPassword(true);
      setLeyenda("La contraseña tiene más de 8 caracteres");
    } else {
      setErrorPassword(false);
      setLeyenda("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
  };

  const login = (email, password) => {
    // Realiza una llamada a la API para verificar las credenciales del usuario
    fetch(`http://localhost:8090/autentication/login?email=${email}&password=${password}`)
      .then((response) => response.json())
      .then((data) => {
        if (data === true) {
          alert("Inicio de sesión exitoso");
        } else {
          alert("Inicio de sesión fallido");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ paddingTop: "64px" }}>
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
                alignItems: "center",
              }}
            >
              Texchmex
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <CssTextField
                margin="normal"
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
                value={email}
                onChange={handleEmailChange}
              />
              <CssTextField
                onChange={handlePasswordChange}
                error={errorPassword}
                helperText={leyenda}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Continuar
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

      <Footer />
    </div>
  );
}

export default Login;
