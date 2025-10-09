import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-5">
      <Button>Claim Tokens</Button>
      <div className="m-5 text-xl">
        <SignedOut>
          <SignUpButton mode="modal">Sign Up</SignUpButton>
        </SignedOut>

        <SignedIn>
          <SignOutButton>Logout</SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
}
