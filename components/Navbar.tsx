import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

export default function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-white rounded-full min-w-[80px] bg-blue-500 hover:bg-blue-700"
        />
      </nav>
    </header>
  );
}
