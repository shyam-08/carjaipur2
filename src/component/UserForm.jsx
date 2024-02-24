import React, { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PhoneIcon from '@mui/icons-material/Phone';
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const defaultTheme = createTheme();

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Number: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const database = getFirestore();
    const collectionRef = collection(database, "contact data");
    const docRef = doc(collectionRef);
    setDoc(docRef, {
      name: formData.name,
      email: formData.email,
      Number: formData.Number
    }).then(() => {
      alert("Sent Successfully")
    }).catch((error) => {
      console.error("Error writing document: ", error);
      alert("Error, Please check")
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 0, bgcolor: "primary.main" }}>
            <PhoneIcon />
          </Avatar>
          <Typography component="h6" variant="h6">
            Car consultancy services
          </Typography>
          <Typography component="h6" variant="p">
            We will advice you to buy and sell your call. Request a call.
          </Typography>
          <Box
            component="form"
            noValidate
            method="post"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  required
                  type="text"
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={formData.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Number"
                  label="Number"
                  type="number"
                  id="Number"
                  autoComplete="new-Number"
                  value={formData.Number}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
