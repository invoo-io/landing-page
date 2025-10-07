import Image from "next/image";
import { getImagePath } from "@/lib/utils";

interface HeroImageSectionProps {
  backgroundImage?: string;
  dashboardImage?: string;
  dashboardAlt?: string;
}

export default function HeroImageSection({
  backgroundImage = "/hero-bck.png",
  dashboardImage = "/productdashboard.png",
  dashboardAlt = "Invoo Dashboard",
}: HeroImageSectionProps) {
  return (
    <section className="relative w-full min-h-[100vh] max-lg:min-h-[80vh] max-md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image as absolute element */}
      <div className="absolute inset-0 w-full h-full max-w-[1500px] left-1/2 -translate-x-1/2">
        <Image
          src={getImagePath(backgroundImage)}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Container */}
      <div className="relative max-w-6xl mx-auto z-10 px-6 max-md:px-4">
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
