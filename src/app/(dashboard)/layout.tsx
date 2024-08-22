import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {/* Left Section*/}
      <div className="l w-[14%] md:w-[8%] lg:w-[16%]  xl:w-[14%]  p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" width={32} height={32} alt="School Logo" />
          <span className="hidden lg:block">skyline</span>
        </Link>
        <Menu />
      </div>
      {/* Right Section */}
      <div className="r w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86 %] bg-[#F7F8FA] overflow-y-auto"> </div>
    </div>
  );
}
