import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingNewUserWithEmailPassword } from "../../store/auth/thunks";
import { NavBar } from "../../home/components";

const initialForm = {
  email: "",
  password: "",
  displayName: "",
};

export const RegisterPage = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuth = useMemo(() => status === "checking", [status]);

  const formValidations = {
    email: [(value) => value.includes("@"), "Ingrese un correo válido"],
    password: [(value) => value.length >= 6, "Ingrese una contraseña válida"],
    displayName: [
      (value) =>
        value.length > 5 &&
        !value.includes("A") &&
        !value.includes("B") &&
        !value.includes("C") &&
        !value.includes("D") &&
        !value.includes("E") &&
        !value.includes("F") &&
        !value.includes("G") &&
        !value.includes("H") &&
        !value.includes("I") &&
        !value.includes("J") &&
        !value.includes("K") &&
        !value.includes("L") &&
        !value.includes("M") &&
        !value.includes("N") &&
        !value.includes("Ñ") &&
        !value.includes("O") &&
        !value.includes("P") &&
        !value.includes("Q") &&
        !value.includes("R") &&
        !value.includes("S") &&
        !value.includes("T") &&
        !value.includes("U") &&
        !value.includes("V") &&
        !value.includes("W") &&
        !value.includes("X") &&
        !value.includes("Y") &&
        !value.includes("Z") &&
        !value.includes(" ") &&
        !value.includes("@") &&
        !value.includes("/") &&
        !value.includes("(") &&
        !value.includes(")") &&
        !value.includes("!") &&
        !value.includes("|") &&
        !value.includes('"') &&
        !value.includes("·") &&
        !value.includes("#") &&
        !value.includes("$") &&
        !value.includes("%") &&
        !value.includes("&") &&
        !value.includes("=") &&
        !value.includes("?") &&
        !value.includes("'") &&
        !value.includes("¿") &&
        !value.includes("¡") &&
        !value.includes(";") &&
        !value.includes(",") &&
        !value.includes(":") &&
        !value.includes("{") &&
        !value.includes("}") &&
        !value.includes("[") &&
        !value.includes("]") &&
        !value.includes("¨") &&
        !value.includes("Ç") &&
        !value.includes("ñ"),
      "Ingrese un usuario válido (No espacios, no caracteres especiales y no mayúsculas)",
    ],
  };

  const {
    email,
    password,
    displayName,
    formState,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(initialForm, formValidations);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    setFormSubmited(true);

    dispatch(startCreatingNewUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Username"
              type="text"
              placeholder="skrillex"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            {errorMessage && (
              <Grid item xs={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
            )}

            <Grid item xs={12}>
              <h5>No podrás cambiar más adelante esta información</h5>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                disabled={isCheckingAuth}
              >
                Registrarse ahora
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/flow/login">
              login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
