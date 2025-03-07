import "./globals.css";
import Image from "next/image";
import BackgroundImage from "../../public/LaptopBackground.png";
import Image1 from "../../public/image1.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Favicon from './favicon.ico'
export const metadata = {
  title: "CrazyPolls – Create, Vote & Discuss Public & Private Polls",
  description:
    "Curious about your past votes? View all the polls you’ve voted on, track vote counts, and stay engaged with trending discussions!",
    icons : {
      icon : './site_logo.png'
    }
};
export default function Home() {
  // const router = useRouter();
  // useEffect(()=>{
  //     router.push('publicpolls')
  // },[router]);
  return (
    <div className="h-full">
      <Image
        alt="Background Image"
        src={Image1}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw 100vh"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="z-10 h-full w-full flex flex-col justify-evenly">
        <div className="flex flex-col">
          <h1 className="text-gray-600 text-3xl md:text-5xl font-extrabold mx-auto">
            Create & Vote on Polls
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-extrabold mt-2 mx-auto">
            Join Thousands of Users Voting on Trending Topics Daily!
          </p>
          <div className="flex flex-row justify-center">
          <Image
            alt="crazyPolls-logo"
            src={Favicon}
            width={30}
            height={20}
          />
          <p className="text-xl md:text-xl text-green-400 font-extrabold">
            Crazypolls
          </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="mx-auto w-fit h-fit">
            <Link href="/service/create" passHref>
              <Button className="h-14 px-16 md:px-32 mx-auto rounded-full font-bold text-xl">
                Create a Poll
              </Button>
            </Link>
          </div>
          <div className="mx-auto w-fit h-fit mt-10">
            <Link href="/service/publicpolls" passHref>
              <Button className="h-14 px-20 md:px-36 mx-auto rounded-full font-bold text-xl">
                Vote Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
