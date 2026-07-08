import { teamMembers } from "@/data/content";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const locations = ["Powiśle", "Port Praski"] as const;

export default function Team() {
  return (
    <section id="zespol" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-accent-dark sm:text-4xl">
            Umów się do swojej ulubionej kosmetyczki
          </h2>
          <p className="mt-4 text-muted">
            Poznaj nasz zespół specjalistek stylizacji paznokci w obu lokalizacjach.
          </p>
        </Reveal>

        {locations.map((location) => (
          <div key={location} className="mt-14">
            <Reveal>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                {location}
              </h3>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {teamMembers
                .filter((m) => m.location === location)
                .map((member, i) => (
                  <Reveal key={`${location}-${member.name}-${i}`} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                      <ImagePlaceholder
                        label={`Zespół — ${member.name}`}
                        icon="user"
                        aspect="aspect-square"
                        rounded={false}
                        bordered={false}
                      />
                      <div className="flex flex-1 flex-col gap-1 p-4">
                        <p className="font-serif text-lg font-semibold text-foreground">
                          {member.name}
                        </p>
                        <p className="text-xs font-medium uppercase tracking-wide text-accent">
                          {member.location}
                        </p>
                        <p className="mt-1 text-sm text-muted">{member.position}</p>
                        <p className="text-sm text-muted">{member.specialization}</p>
                        <p className="mt-1 text-xs text-muted/80">{member.experience}</p>
                        <a
                          href="#rezerwuj"
                          className="mt-3 inline-block rounded-full bg-blush-light px-4 py-2 text-center text-xs font-semibold text-accent-dark transition-colors hover:bg-blush"
                        >
                          Zarezerwuj wizytę
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
