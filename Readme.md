Here's an updated version of the README with the necessary adjustments for the OTP-based authentication:

---

# Project README

## Overview

This project implements a user authentication system with email verification using OTP (One-Time Password). The API follows standard practices for user authentication and email verification.

## API Endpoints

### 1. Signup API

**Endpoint:** `POST /api/auth/signup`

**Description:** Registers a new user and sends an OTP for email verification.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}
```

**Response:**

- `201 Created` - User created successfully. Email verification sent.
- `400 Bad Request` - Missing fields or user already exists.

**Notes:**

- OTP-based verification is used for email confirmation.

### 2. Verify Email API

**Endpoint:** `POST /api/auth/verify-email`

**Description:** Verifies the user's email using the OTP received.

**Request Body:**

```json
{
  "otp": "123456"
}
```

**Response:**

- `200 OK` - Email verified successfully.
- `400 Bad Request` - Invalid or expired OTP.

**Notes:**

- The OTP is validated and if correct, the user's email is marked as verified.

### 3. Login API

**Endpoint:** `POST /api/auth/login`

**Description:** Logs in a user with email and password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

- `200 OK` - Login successful, authentication token provided.
- `400 Bad Request` - Invalid credentials or email not verified.

**Notes:**

- Users must verify their email before logging in.

### 4. Logout API

**Endpoint:** `POST /api/auth/logout`

**Description:** Logs out a user by clearing the authentication cookie.

**Response:**

- `200 OK` - Logged out successfully.

### 5. Forgot Password API

**Endpoint:** `POST /api/auth/forgot-password`

**Description:** Sends a password reset link to the user's email.

**Request Body:**

```json
{
  "email": "user@example.com"
}
```

**Response:**

- `200 OK` - Password reset link sent.
- `400 Bad Request` - User not found.

### 6. Reset Password API

**Endpoint:** `POST /api/auth/reset-password/:token`

**Description:** Resets the user's password using the reset token.

**Request Body:**

```json
{
  "password": "newpassword123"
}
```

**Response:**

- `200 OK` - Password reset successful.
- `400 Bad Request` - Invalid or expired reset token.

### 7. Check Auth API

**Endpoint:** `GET /api/auth/check-auth`

**Description:** Checks the authentication status of the user.

**Response:**

- `200 OK` - User is authenticated.
- `400 Bad Request` - User not found.

## Key Points

- **Email Verification:** Users must verify their email using an OTP before logging in.
- **Password Management:** Secure password storage and reset mechanisms are in place.
- **Token Management:** JWT tokens for login and reset tokens for password recovery are used appropriately.
- **Error Handling:** Clear error messages are provided for different failure scenarios.

---

Feel free to adjust any specific details as needed!
