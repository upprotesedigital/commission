import { Outlet, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react'; // Assuming you've installed @clerk/clerk-react

const AuthLayout = () => {
  return (
    <>
      <SignedIn>
        {/* If the user is signed in, navigate to the home page */}
        <Navigate to='/' />
      </SignedIn>
      <SignedOut>
        {/* If the user is signed out, show the authentication layout */}
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
        </section>

        <img 
          src="/assets/images/side-image.png"
          alt="logo" className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat pointer-events-none"  
        />
      </SignedOut>
    </>
  )
}

export default AuthLayout;