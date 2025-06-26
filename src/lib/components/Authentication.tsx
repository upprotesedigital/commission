import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
const Authentication = () => {
    const { user, isLoaded } = useUser();
    return (
        <>
        <SignedOut>
            <h2>
                Sign-in to access the dashboard
            </h2>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <h2>
            Welcome, {isLoaded ? (user?.fullName || user?.username || "User") : "Loading..."}
            </h2>
            <UserButton />

            <br />
            <button onClick={() => window.location.href = "/user"}>
            Go to User Page
            </button>
        </SignedIn>
        </>
    );
};

export default Authentication;
