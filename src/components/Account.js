import { useState } from 'react';
import { TextField, Button, Grid, Box, Container as MuiContainer } from '@mui/material';

export default function Form() {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
  });
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleBasicInfoChange = (event) => {
    setBasicInfo({
      ...basicInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setPassword({
      ...password,
      [event.target.name]: event.target.value,
    });
  };

  const handlePaymentInfoChange = (event) => {
    setPaymentInfo({
      ...paymentInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Basic Information:', basicInfo);
    console.log('Password:', password);
    console.log('Payment Information:', paymentInfo);
  };

  return (
    <MuiContainer maxWidth="lg">
      <form onSubmit={handleSubmit} style={{ padding: '0 16px' }}>
        <Grid container spacing={2} justifyContent="center">
          {/* Basic Information */}
          <Grid item xs={12} sm={6} mt={2}>
            <Box fontWeight="bold" fontSize={20} textAlign="center">
              Basic Information:
            </Box>
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Name"
              name="name"
              value={basicInfo.name}
              onChange={handleBasicInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Email"
              name="email"
              value={basicInfo.email}
              onChange={handleBasicInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Mobile"
              name="mobile"
              value={basicInfo.mobile}
              onChange={handleBasicInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Date of birth"
              name="dob"
              value={basicInfo.dob}
              onChange={handleBasicInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Gender"
              name="gender"
              value={basicInfo.gender}
              onChange={handleBasicInfoChange}
            />
          </Grid>

          {/* Change Password */}
          <Grid item xs={12} sm={6} mt={2}>
            <Box fontWeight="bold" fontSize={20} textAlign="center">
              Change Password:
            </Box>
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Old Password"
              name="oldPassword"
              type="password"
              value={password.oldPassword}
              onChange={handlePasswordChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="New Password"
              name="newPassword"
              type="password"
              value={password.newPassword}
              onChange={handlePasswordChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={password.confirmPassword}
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>

        {/* Payment Information */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box fontWeight="bold" fontSize={20} textAlign="center">
              Payment Information:
            </Box>
            <Box fontWeight="bold" fontSize={16} textAlign="center">
              Add card details
            </Box>
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Name on card"
              name="nameOnCard"
              value={paymentInfo.nameOnCard}
              onChange={handlePaymentInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Card number"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="Expiry Date"
              name="expiryDate"
              value={paymentInfo.expiryDate}
              onChange={handlePaymentInfoChange}
            />
            <TextField
              fullWidth
              size="small"
              sx={{ mb: 1 }}
              label="CVV"
              name="cvv"
              value={paymentInfo.cvv}
              onChange={handlePaymentInfoChange}
            />
          </Grid>
        </Grid>
        <Box textAlign="center" mt={2} mb={4}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </MuiContainer>
  );
}
