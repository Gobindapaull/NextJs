import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-green-600 text-white font-semibold text-center px-8 py-8 text-2xl flex justify-between ">
      <div>NAVBAR</div>
      <div className= "flex gap-5 text-12">
        <Link href="/">Home</Link>
        <Link href="/service">Services</Link>
        <Link href="/telegram">Telegram</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
