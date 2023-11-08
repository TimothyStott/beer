'use client'

import Image from "next/image"
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const path = usePathname()
    console.log(path)
    return (
        <nav className="w-full h-[100px] bg-[#F56600]" style={{display:"grid", gridTemplateColumns:"3fr 2fr 3fr"}}>
            <div className="">
                <Image
                    src='/jr2.png'
                    height={100 * .85}
                    width={388 * .85}
                    alt="Jolly Roger Brewery"
                />

            </div>

            <div className="">
                <ul className="flex flex-row justify-center items-center">
                    <Link
                        href={"/"}>
                        <li className="text-white font-bold mx-4">Home</li>
                    </Link>
                    <Link
                        href={"/about"}>
                        <li className="text-white font-bold mx-4">About</li>
                    </Link>
                    <Link
                        href={"/visit-us"}>
                        <li className="text-white font-bold mx-4">Visit Us</li>
                    </Link>
                    <Link
                        href={"/tap-list"}>
                        <li className="text-white font-bold mx-4">Tap List</li>
                    </Link>
                    <Link
                        href={"/find-our-beers"}>
                        <li className="text-white font-bold mx-4">Find Our Beer</li>
                    </Link>
                    <Link
                        href={"/shop"}>
                        <li className="text-white font-bold mx-4">Shop</li>
                    </Link>
                </ul>
            </div>

            <div className="">
                <div className="grid place-items-center w-[30px] h-[30px] bg-blue-600">
                    <div><FacebookIcon className="text-black" /></div>
                </div>
                <div className="grid place-items-center w-[30px] h-[30px] bg-blue-600">
                    <div><LocationOnIcon className="text-black" /></div>
                </div>
                <div className="grid place-items-center w-[30px] h-[30px] bg-blue-600">
                    <div><TwitterIcon className="text-black" /></div>
                </div>
                <div className="grid place-items-center w-[30px] h-[30px] bg-blue-600">
                    <div><InstagramIcon className="text-black" /></div>
                </div>
            </div>
        </nav>
    )
}