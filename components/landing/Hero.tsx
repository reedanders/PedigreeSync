import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { BackgroundIllustration } from "./BackgroundIllustration";
import { AppStoreButton } from "@/components/ui/Button/AppStoreButton";
import { Button } from "@/components/ui/Button/Button";
import heroImg from "@/public/images/sheep_ear_tag_tiny.png";

export const Hero = () => {
  return (
    <Container className="flex flex-wrap px-0 sm:px-4 md:px-6 py-4 relative">
      <BackgroundIllustration className="absolute inset-0 -z-10" />
      <div className="flex items-center w-full lg:w-1/2 p-2 sm:p-4 lg:p-6">
        <div className="w-full mb-6 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-gray-900 lg:text-6xl xl:text-7xl dark:text-white">
            Scan Ear Tags with Just Your iPhone
          </h1>
          <p className="text-xl leading-relaxed text-gray-600 lg:text-2xl dark:text-gray-300">
            Built for everyone in the field. An open-source animal welfare tool that empowers digital recordkeeping.
          </p>

          <div className="flex items-center space-x-4 md:space-x-6">
            <AppStoreButton />
            <Button
              href="/demo"
              variant="outline"
              color="gray"
              className="w-full sm:w-auto"
            >
              Launch Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-1/2 px-2 sm:px-0">
        <div className="relative w-full max-w-xl">
          <Image
            src={heroImg}
            width={616}
            height={617}
            className="w-full object-cover rounded-xl shadow-xl"
            alt="Sheep in a pasture with NFC tag"
            priority
          />
        </div>
      </div>

    </Container>
  );
};
