import { SignOutButton, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className=" bg-black text-center text-white p-4">
      <div className="flex flex-col gap-4">
      <SignUpButton />
      <SignOutButton /> 
      </div>
    </div>
  );
}
