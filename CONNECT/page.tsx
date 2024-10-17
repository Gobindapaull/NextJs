
import Link from "next/link";

const Navbar = () => {

  return (
    <div className="text-white text-center px-8 py-8 text-2xl flex justify-between ">
      <div>BLOCKCHAIN</div>
      <div className= "flex gap-10">
        <Link href="/connect" className="w-full bg-pink-300 p-2 rounded-lg">CONNECT</Link>
        <Link href="/disconnect" className="w-full bg-red-300 p-2 rounded-lg">DISCONNECT</Link>
      </div>
    </div>
  );
};

export default Navbar;
