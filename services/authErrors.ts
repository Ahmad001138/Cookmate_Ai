export function getAuthErrorMessage(err: unknown): string {
  const anyErr = err as any;
  const code: string | undefined = anyErr?.code;

  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/missing-password":
      return "Please enter your password.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Incorrect email or password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password is too weak. Use at least 6 characters.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    default:
      return anyErr?.message ?? "Authentication failed. Please try again.";
  }
}

export function isValidEmail(email: string): boolean {
  // Simple, practical email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

