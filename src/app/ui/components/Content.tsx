import '@fontsource-variable/noto-sans';

interface ContentProps {
  children: React.ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <div className="max-w-[800px] font-['Noto_Sans_Variable']">
      <div className="m-5 text-justify text-pretty">{children}</div>
    </div>
  );
}
