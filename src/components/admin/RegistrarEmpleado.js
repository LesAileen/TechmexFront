import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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

function RegistrarEmpleado() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const url = new URL("http://localhost:8090/autentication/registerEmpleado");
      url.searchParams.append("email", email);
      url.searchParams.append("user", user);
      url.searchParams.append("password", password);
      url.searchParams.append("rol", userRole);

      const response = await fetch(url, {
      method: "POST",
  });

      if (response.ok) {
        alert("Registro exitoso");
        setEmail("");
        setUser("");
        setPassword("");
        setRepeatPassword("");
        setUserRole("");
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.log(error);
      alert("Error en el registro");
    }
  };

  return (
    <div className="empleado-container" style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
      <table className="tableEmpleado" style={{background:'white'}}>
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
            REGISTRO
          </Typography>

          <form noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                color: "white",
              }}
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="User"
              name="user"
              type="text"
              autoComplete="user"
              autoFocus
              value={user}
              onChange={(e) => setUser(e.target.value)}
              sx={{
                color: "white",
              }}
            />
            <CssTextField
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              sx={{
                color: "white",
              }}
            />
            <CssTextField
              onChange={(e) => setRepeatPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="repeatPassword"
              label="Repite la contraseña"
              type="password"
              id="repeatPassword"
              autoComplete="current-password"
              value={repeatPassword}
              sx={{
                color: "white",
              }}
            />
            <div>
              <label>Rol:</label>
              <select value={userRole} onChange={(e) => setUserRole(e.target.value)} required>
                <option value="">Seleccionar rol</option>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} style={{backgroundColor:'#896144'}}>
              Registarse
            </Button>
          </form>
        </Box>
      </Container>
      </table>
    </div>
  );
}

export default RegistrarEmpleado;