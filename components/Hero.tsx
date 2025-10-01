import { ArrowRight, Inbox, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-10 py-30 rounded-4xl bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/hero.jpg')] bg-cover bg-center bg-no-repeat text-white px-6 md:px-12 lg:px-24">
          <div className="inline-flex items-center rounded-full border border-gray-300 bg-gray-200/50 px-4 py-2 text-sm font-semibold text-foreground">
            <HeartPulse className="text-red-500 mr-2" /> Bienvenue sur notre
            site !
          </div>
          <h1 className="text-4xl tracking-tight lg:text-6xl text-shadow-lg font-bold text-center leading-tight max-w-3xl">
            Conseil regionale de l&apos;ordre des médecins d&apos;alger
          </h1>
          <p className="text-sm md:text-xl text-center text-shadow-lg leading-relaxed max-w-lg md:max-w-xl">
            Institution régie par la loi 90/17 du 31 juillet 1990 et le décret
            exécutif N°92-276 du 06 juillet 1992
          </p>
          <div className="flex items-center gap-5">
            <Button asChild variant="primary" size={"lg"}>
              <Link href="/about">
                Savoir Plus
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary" size={"lg"}>
              <Link href="/contact">
                Contact <Inbox />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
