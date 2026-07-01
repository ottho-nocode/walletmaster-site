import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

// Ratio réel des captures de l'app (1206 x 2622).
const SCREEN_RATIO = "1206 / 2622";

export default function PhoneMockup({
  src,
  alt,
  priority = false,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* device body — hauteur = écran + padding, aucune contrainte de ratio */}
      <div className="rounded-[2.6rem] bg-[#05080f] p-[10px] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
        {/* screen — ratio identique à l'image => object-cover sans recadrage */}
        <div
          className="relative w-full overflow-hidden rounded-[2rem] bg-black"
          style={{ aspectRatio: SCREEN_RATIO }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover"
          />
          {/* glare */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent" />
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-b-2xl bg-[#05080f]" />
        </div>
      </div>
      {/* side buttons */}
      <div className="absolute -left-[2px] top-[110px] h-10 w-[3px] rounded-l bg-white/15" />
      <div className="absolute -left-[2px] top-[160px] h-14 w-[3px] rounded-l bg-white/15" />
      <div className="absolute -right-[2px] top-[140px] h-16 w-[3px] rounded-r bg-white/15" />
    </div>
  );
}
