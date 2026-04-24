export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

// ✅ Fixed: was { fullName: string } — backend expects firstName + lastName separately
export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
