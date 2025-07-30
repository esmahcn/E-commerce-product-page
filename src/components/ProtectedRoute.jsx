import { SignedIn, UserButton } from "@clerk/clerk-react";
import { SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import React from "react";
export default function ProtectedRoute({ children }) {
    return (
        <>
         <SignedIn> {children}
            <UserButton/>
         </SignedIn>
            <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
        </>
    );
}