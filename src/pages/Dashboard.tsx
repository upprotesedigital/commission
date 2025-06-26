import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Dashboard = () => {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

      <br />
    </header>
  );
};

export default Dashboard;
