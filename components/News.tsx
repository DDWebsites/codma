import SectionTitle from "@/components/reusable/SectionTitle";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/constants";

export default function LatestNews() {


  return (
    <section>
      <div className="container">
        <SectionTitle
          tag="Actualités"
          title="Dernières Nouvelles et Articles"
          description="Découvrez les dernières mises à jour et actualités concernant notre organisation et le secteur de la santé."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
          {newsItems.map((news) => (
            <Card
              key={news.id}
              className="group overflow-hidden border-gray-300 bg-background hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden flex-shrink-0">
                <Image
                  src={news.image.src}
                  alt={news.image.alt}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Badge */}
                {news.category && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {news.category}
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                {/* Date and Meta Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 flex-shrink-0">
                  {news.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-1">
                  {news.description}
                </p>

                {/* Author and Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  {news.author && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-2" />
                      {news.author}
                    </div>
                  )}

                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80 hover:bg-transparent group/button ml-auto"
                    asChild
                  >
                    <a href="#" className="flex items-center">
                      Lire plus
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-15">
          <Button variant="primary" size="lg" asChild>
            <Link href="/news">Voir toutes les actualités</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
