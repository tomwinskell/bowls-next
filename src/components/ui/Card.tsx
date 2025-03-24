import '@fontsource-variable/noto-sans';
import Link from 'next/link'

interface CardProps {
  content: {
    title: string;
    subtitle?: string;
    text: string;
    link1: { url: string; text: string };
    link2?: { url: string; text: string };
  };
}

export default function Card({ content }: CardProps) {
  const { title, subtitle, text, link1, link2 } = content;

  return (
    <div className="flex flex-col items-center text-center font-['Noto_Sans_Variable'] text-balance m-9">
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      {subtitle && <h5 className="mb-6 text-base">{subtitle}</h5>}
      <p className="">{text}</p>
      <div className="mt-6 rounded-full bg-orange px-8 py-2 text-white transition-colors duration-500 hover:bg-winter hover:text-navy">
        <Link href={link1.url}>{link1.text}</Link>
      </div>
      {link2 && (
        <div className="mt-4 rounded-full bg-orange px-8 py-2 text-white transition-colors duration-500 hover:bg-winter hover:text-navy">
          <Link href={link2.url}>{link2.text}</Link>
        </div>
      )}
    </div>
  );
}
