const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return "User logged in";
};

export const AuthService = {
  loginWithEmailAndPassword,
};
