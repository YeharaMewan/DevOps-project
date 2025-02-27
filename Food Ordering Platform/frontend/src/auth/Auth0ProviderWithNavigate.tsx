type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  return <>{children}</>; // Render children without Auth0 provider
};

export default Auth0ProviderWithNavigate;
