import Link from "next/link";

interface ContentProps {
  children?: React.ReactNode;
}

export default function FullWidthImage({ children }: ContentProps) {
  return (
    <div className="w-screen h-[400px] flex items-center justify-center bg-cover bg-center overflow-hidden bg-[url(/images/bowls.jpg)]">
              <Link href="/" className="text-lg font-['Noto_Sans_Variable']">
              {children}
        </Link>
    </div>
  );
}
