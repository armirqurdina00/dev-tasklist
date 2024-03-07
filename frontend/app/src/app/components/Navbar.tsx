import Logo from "../../../public/pabau.webp"
import Image from "next/image"
import Link from "next/link";

const Navbar: React.FC = async () => {

    return (
        <div className="w-full mx-auto flex justify-between p-4 items-center border-b border-gray-300">
            <Link href={"/"}><Image src={Logo} alt="Pabau" width={100} quality={100} /></Link>
            <Link href={"/booking/new"} className="text-gray-500 font-bold cursor hover:underline">Add new booking</Link>
        </div>
    );
};

export default Navbar;
