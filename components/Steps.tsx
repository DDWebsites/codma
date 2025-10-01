import SectionTitle from "@/components/reusable/SectionTitle";
import { StepsProps } from "@/types";
import { Users, Folders, NotebookPen } from "lucide-react";

export default function Steps() {
  const steps: StepsProps[] = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Beneficiares",
      description:
        "Seuls les médecins inscrits à l'ordre régional d'Alger, de Blida, de Ghardaïa, et activité médicale, appelés à participer uniquement à des congrès de Tizi-Ouzou, en activité professionnels en France.",
    },
    {
      icon: <NotebookPen className="w-8 h-8" />,
      title: "Formulaire en ligne",
      description:
        "Remplir le formulaire en ligne sur le site web: https://france-visas.gouv.fr/",
    },
    {
      icon: <Folders className="w-8 h-8" />,
      title: "Depot de dossier",
      description:
        "Déposer le dossier complet au centre de demande de visa VFS Global à Alger.",
    },
  ];

  return (
    <section className="bg-muted/30 border-t border-b border-border">
      <div className="container">
        <SectionTitle
          tag="Comment ça Marche ?"
          title="Les Étapes à Suivre Pour la Demande de Visa"
          description="Suivez ces étapes simples pour soumettre votre demande de visa en ligne."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-15">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>

              {/* Step Card */}
              <div className="bg-background rounded-2xl p-8 shadow-lg border border-gray-300 hover:shadow-xl h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
