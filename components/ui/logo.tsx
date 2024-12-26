import Link from "next/link";
import BlueChestnutLogo from "@/public/images/BlueChestnutLogo.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image src={BlueChestnutLogo} alt="Blue Chestnut Logo" width={28} height={28} />
    </Link>
  );
}
