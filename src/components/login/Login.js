import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
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
import RegistrarEmpleado from "../admin/RegistrarEmpleado";
import Facturas from "../facturas/Facturas";
import CrearProducto from "../products/CrearProducto";
import ImagenInicio from "../../assets/fondo/inicio.jpg";
import Banner from "../home/Banner"; 

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeComponent, setActiveComponent] = useState(""); // Estado para controlar el componente activo

  useEffect(() => {
    // Recuperar el estado de autenticación al cargar la página
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedIsAdmin = localStorage.getItem("isAdmin");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
      if (storedIsAdmin === "true") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

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

  const toggleLogin = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("isAdmin", "false");
  };

  const login = (email, password) => {
    fetch(`http://localhost:8090/autentication/login?email=${email}&password=${password}`)
      .then((response) => response.text())
      .then((data) => {
        if (data === "true") {
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true");
          checkAdmin(email, password);
          alert("Inicio de sesión exitoso");
        } else {
          setIsLoggedIn(false);
          setIsAdmin(false);
          localStorage.setItem("isLoggedIn", "false");
          localStorage.setItem("isAdmin", "false");
          alert("Inicio de sesión fallido");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const checkAdmin = (email, password) => {
    fetch(`http://localhost:8090/autentication/IsAdmin?email=${email}&password=${password}`)
      .then((response) => response.text())
      .then((data) => {
        if (data === "true") {
          setIsAdmin(true);
          localStorage.setItem("isAdmin", "true");
        } else {
          setIsAdmin(false);
          localStorage.setItem("isAdmin", "false");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  if (isLoggedIn) {
    if (isAdmin) {
      return (
        <div>
          <Navbar />
          <Box sx={{ paddingTop: "64px" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" style={{ marginTop: '10px',backgroundColor: '#896144', border: 'none'}} onClick={() => handleComponentChange("registrarEmpleado")}>
                Registrar empleados
              </Button>
              <Button variant="contained" style={{ marginTop: '10px', backgroundColor: '#896144', border: 'none'}} onClick={() => handleComponentChange("facturas")}>
                Facturas
              </Button>
              <Button variant="contained" style={{ marginTop: '10px', backgroundColor: '#896144', border: 'none'}} onClick={() => handleComponentChange("crearProducto")}>
                Crear producto
              </Button>
            </Box>
            {activeComponent === "registrarEmpleado" && <RegistrarEmpleado />}
            {activeComponent === "facturas" && <Facturas />}
            {activeComponent === "crearProducto" && <CrearProducto />}
            <Button variant="contained" style={{ backgroundColor: '#896144', border: 'none'}} onClick={toggleLogin} sx={{ display: "block", margin: "16px auto" }}>
              Cerrar sesión
            </Button>
          </Box>
          <Footer />
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <Box sx={{ paddingTop: "64px"}}>
        <div style={{textAlign:'center', marginTop:'150px'}}>
          <img src={ImagenInicio} alt="Imagen de inicio" style={{ borderRadius: '50%' }}/>
        </div>
        <div style={{backgroundColor:'#FFFFEB', marginTop:'10px', marginLeft:'100px', marginRight:'100px',textAlign:'center'}}>            
          <h1 style={{color:'#452404'}}>
            ¡BIENVENIDO!
          </h1>
        </div>
        <div style={{textAlign:'center'}}>
        <Link to="/Banner">
          <button className="start-order-buttonhome" style={{marginTop:'10px', backgroundColor:'#ece2c6', borderColor:'#452404', color:'#452404'}}>
            Iniciar Pedido
          </button>
        </Link>
        </div>
        <div style={{marginTop: '16px' }}>
        <Button variant="contained" style={{ backgroundColor: '#896144', border: 'none'}} onClick={toggleLogin} sx={{ display: "block", margin: "16px auto" }}>
            Cerrar sesión
        </Button>
        </div>
        </Box>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      
      <Navbar isLoggedIn={isLoggedIn} />
      <Box sx={{ paddingTop: "64px", display: "flex", justifyContent: "center" }}>
        <table style={{marginTop:'30px', backgroundColor:'white'}}>
        <Container className="ContainerRegister" component="main" maxWidth="xs">
            <Box sx={{ paddingTop: "30px", textAlign: "center" }}>
            <Typography
              variant="h3"
              fontFamily="Digitalism"
              noWrap
              component="a"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#452404",
                textDecoration: "none",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Techmex
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{backgroundColor:'#896144'}}
              >
                Continuar
              </Button>
              <Grid container>
                <Grid item>
                  <Link style={{color:'black', textDecoration: 'none'}} to="/Register" variant="body2">
                    {"¿No tienes una cuenta? Registrarse"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        </table>
      </Box>
      <Footer />

    </div>
  );
}

export default Login;