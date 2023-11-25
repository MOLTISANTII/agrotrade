import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat_500 = Montserrat({
    subsets: ['latin'],
    weight: '500'
})

export default function NavBar () {
    return (
        <div>
            <nav className="h-[58px] flex items-center px-4 sm:px-20 justify-between">
                {/* mobile navbar */}
                <div className="w-full flex flex-row justify-between items-center sm:hidden">
                    <ul className="flex flex-row items-center gap-4">
                        <li>
                            <Image width={38} height={38} src='/AGROTRADE.png' alt="logo"/>
                        </li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}><Link href='/products'>Products</Link></li>
                    
                    </ul>
                    <div>
                        <Link href='/auth/signup'>Sign up</Link>
                    </div>
                </div>

                {/* desktop navbar */}
                <div className="hidden sm:flex flex-row items-center gap-12">
                    <ul className="flex flex-row items-center gap-12">
                        <li>
                            <Image width={38} height={38} src='/AGROTRADE.png' alt="logo"/>
                        </li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}><Link href='/'>Home</Link></li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}><Link href='/about-us'>About Us</Link></li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}><Link href='/contact-us'>Contact Us</Link></li>
                        <li className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}><Link href='/products'>Products</Link></li>
                    </ul>

                    <Link href='/auth/signup'>Sign up</Link>
                </div>

            </nav>

            <div className="grid grid-cols-3">
                <div className="h-[4px] bg-green-500"></div>
                <div className="h-[4px] bg-yellow-500"></div>
                <div className="h-[4px] bg-red-500"></div>
            </div>
        </div>
    )
}