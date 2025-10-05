import Image from "next/image";
import { getImagePath } from "@/lib/utils";

interface HeroImageSectionProps {
  backgroundImage?: string;
  dashboardImage?: string;
  dashboardAlt?: string;
}

export default function HeroImageSection({
  backgroundImage = "/Bck-Main.png",
  dashboardImage = "/productdashboard.png",
  dashboardAlt = "Invoo Dashboard",
}: HeroImageSectionProps) {
  return (
    <section className="relative w-full min-h-[125vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image as absolute element */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={getImagePath(backgroundImage)}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Container with semi-transparent background */}
      <div
        className="relative max-w-6xl mx-auto z-10"
        style={{
          backgroundColor: "transparent",
          borderRadius: "24px",
          boxShadow: "0 25px 50px -12px var(--system-overlay)",
        }}
      >
        {/* Dashboard Image */}
        <div className="relative w-full">
          <Image
            src={getImagePath(dashboardImage)}
            alt={dashboardAlt}
            width={1350}
            height={700}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
