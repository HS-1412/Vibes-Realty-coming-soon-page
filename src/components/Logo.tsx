import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
  priority?: boolean;
}

export default function Logo({ size = 44, className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo-icon.png"
      alt="Vibes Realty logo"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
