export const siteName = { first: "Beauty", second: "Nails" };

export const navLinks = [
  { label: "Zespół", href: "#zespol" },
  { label: "Cennik", href: "#uslugi" },
  { label: "Galeria", href: "#galeria" },
  { label: "Lokalizacje", href: "#lokalizacje" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export const heroSlides = [
  { label: "Hero — slajd 1: wnętrze salonu" },
  { label: "Hero — slajd 2: manicure hybrydowy" },
  { label: "Hero — slajd 3: pedicure spa" },
  { label: "Hero — slajd 4: stylizacja paznokci" },
  { label: "Hero — slajd 5: laminacja brwi" },
  { label: "Hero — slajd 6: recepcja salonu" },
];

export type TeamMember = {
  name: string;
  location: "Powiśle" | "Port Praski";
  position: string;
  specialization: string;
  experience: string;
};

export const teamMembers: TeamMember[] = [
  { name: "Lena", location: "Powiśle", position: "Specjalistka stylizacji paznokci", specialization: "Manicure hybrydowy, przedłużanie żelem", experience: "10 lat doświadczenia" },
  { name: "Karina", location: "Powiśle", position: "Specjalistka stylizacji paznokci", specialization: "Manicure klasyczny i hybrydowy", experience: "6 lat doświadczenia" },
  { name: "Vicky", location: "Powiśle", position: "Specjalistka stylizacji paznokci", specialization: "Manicure hybrydowy, stylizacja brwi", experience: "6 lat doświadczenia" },
  { name: "Viola", location: "Powiśle", position: "Specjalistka stylizacji paznokci", specialization: "Pedicure hybrydowy i odżywczy", experience: "6 lat doświadczenia" },
  { name: "Aylin", location: "Powiśle", position: "Specjalistka stylizacji paznokci", specialization: "Manicure hybrydowy", experience: "4 lata doświadczenia" },
  { name: "Liza", location: "Powiśle", position: "Specjalistka stylizacji paznokci", specialization: "Przedłużanie paznokci żelem", experience: "8 lat doświadczenia" },
  { name: "Viktoryia", location: "Powiśle", position: "Specjalistka stylizacji paznokci", specialization: "Manicure hybrydowy i klasyczny", experience: "4 lata doświadczenia" },
  { name: "Edyta", location: "Port Praski", position: "Specjalistka paznokci i brwi", specialization: "Manicure hybrydowy, laminacja brwi", experience: "6 lat doświadczenia" },
  { name: "Vasylyna", location: "Port Praski", position: "Specjalistka stylizacji paznokci", specialization: "Pedicure hybrydowy", experience: "6 lat doświadczenia" },
  { name: "Natasza", location: "Port Praski", position: "Specjalistka stylizacji paznokci", specialization: "Manicure hybrydowy i klasyczny", experience: "10 lat doświadczenia" },
  { name: "Liliia", location: "Port Praski", position: "Specjalistka paznokci i brwi", specialization: "Przedłużanie żelem, laminacja brwi", experience: "4 lata doświadczenia" },
  { name: "Zosia", location: "Port Praski", position: "Specjalistka stylizacji paznokci", specialization: "Manicure hybrydowy", experience: "3 lata doświadczenia" },
  { name: "Lena", location: "Port Praski", position: "Specjalistka stylizacji paznokci", specialization: "Pedicure odżywczy, manicure hybrydowy", experience: "12 lat doświadczenia" },
];

export type Service = {
  name: string;
  priceFrom: number;
  icon: "hand" | "foot" | "gel" | "brow" | "sparkle" | "classic";
};

export const services: Service[] = [
  { name: "Manicure hybrydowy", priceFrom: 175, icon: "hand" },
  { name: "Manicure klasyczny", priceFrom: 120, icon: "classic" },
  { name: "Pedicure hybrydowy", priceFrom: 220, icon: "foot" },
  { name: "Pedicure odżywczy", priceFrom: 175, icon: "sparkle" },
  { name: "Przedłużanie żelem", priceFrom: 200, icon: "gel" },
  { name: "Laminacja brwi", priceFrom: 190, icon: "brow" },
];

export type Testimonial = {
  name: string;
  source: "Booksy" | "Google";
  date: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: "Kasia W.", source: "Booksy", date: "czerwiec 2026", quote: "Pani Lena jest bardzo profesjonalna, skrupulatna i sprawna. Manicure trzyma się idealnie już trzeci tydzień." },
  { name: "Ania M.", source: "Google", date: "maj 2026", quote: "Świetne miejsce, miła obsługa i naprawdę wysoka jakość wykonania. Polecam każdej koleżance." },
  { name: "Zofia K.", source: "Booksy", date: "maj 2026", quote: "Pedicure hybrydowy trzyma się już miesiąc bez odprysku. Salon czysty i przytulny." },
  { name: "Magda R.", source: "Google", date: "kwiecień 2026", quote: "Rezerwacja online bardzo wygodna, a efekt zawsze zgodny z inspiracją, którą przynoszę." },
  { name: "Ola S.", source: "Booksy", date: "kwiecień 2026", quote: "Pani Edyta ma złote ręce — laminacja brwi trzyma się idealnie ponad miesiąc." },
  { name: "Natalia P.", source: "Google", date: "marzec 2026", quote: "Najlepszy salon w okolicy Powiśla, wracam regularnie od dwóch lat." },
  { name: "Ewa T.", source: "Booksy", date: "marzec 2026", quote: "Bardzo dokładne wykonanie, miła atmosfera i punktualność." },
  { name: "Julia B.", source: "Google", date: "luty 2026", quote: "Profesjonalna stylizacja paznokci, dużo wzorów do wyboru, super jakość żeli." },
  { name: "Weronika L.", source: "Booksy", date: "luty 2026", quote: "Polecam lokalizację Port Praski — szybka obsługa i piękny efekt manicure." },
  { name: "Dominika G.", source: "Google", date: "styczeń 2026", quote: "Zawsze wychodzę zadowolona, obsługa na najwyższym poziomie." },
  { name: "Marta N.", source: "Booksy", date: "styczeń 2026", quote: "Świetna atmosfera, dokładność co do najmniejszego detalu." },
];

export type Location = {
  name: string;
  address: string;
  hours: string;
  hoursSat: string;
  phone: string;
};

export const locations: Location[] = [
  {
    name: "Powiśle",
    address: "ul. Leszczyńska 12 lok. 2a, 00-339 Warszawa",
    hours: "Pon–Pt 9:00–21:00",
    hoursSat: "Sob 9:00–16:00",
    phone: "+48 22 299 73 75",
  },
  {
    name: "Port Praski",
    address: "ul. Sierakowskiego 5, 00-716 Warszawa",
    hours: "Pon–Pt 9:00–21:00",
    hoursSat: "Sob 9:00–16:00",
    phone: "+48 22 401 71 72",
  },
];

export const promoBlocks = [
  {
    title: "Manicure hybrydowy w Warszawie",
    text: "Wykonujemy manicure hybrydowy przy użyciu najwyższej jakości lakierów marek Luxio, Dark, Crystal i Indigo. Starannie dobrany kolor i precyzyjne wykończenie sprawiają, że stylizacja utrzymuje się bez odprysków nawet trzy tygodnie.",
  },
  {
    title: "Pedicure hybrydowy w Warszawie",
    text: "Zabieg obejmuje pielęgnację stóp, usunięcie zrogowaceń, wygładzenie pięt oraz trwałe malowanie hybrydowe. Efekt utrzymuje się do czterech tygodni, a stopy pozostają miękkie i zadbane na co dzień.",
  },
  {
    title: "Salon manicure i pedicure — dwie lokalizacje",
    text: "Działamy w dwóch punktach Warszawy — na Powiślu oraz na Port Praskim. Rezerwacji wizyty można dokonać online przez system Booksy, wybierając dogodny termin i ulubioną specjalistkę.",
  },
  {
    title: "Profesjonalna stylizacja paznokci",
    text: "Nasze stylistki nieustannie poszerzają swoje umiejętności, śledząc najnowsze trendy i techniki zdobienia paznokci — od klasycznych wzorów po ombre i nail art.",
  },
  {
    title: "Brwi, rzęsy i zabiegi pielęgnacyjne",
    text: "Poza stylizacją paznokci oferujemy laminację brwi, henna brwi oraz manicure i pedicure dla mężczyzn — pełna oferta pielęgnacji w jednym miejscu.",
  },
  {
    title: "Jakość potwierdzona opiniami",
    text: "Zaufało nam już ponad 3200 zadowolonych klientek i klientów, którzy potwierdzają wysoką jakość usług w opiniach na Booksy i Google.",
  },
];

export const faqItems = [
  { question: "Ile kosztuje manicure hybrydowy?", answer: "Cena manicure hybrydowego zaczyna się od 175 zł i zależy od stanu paznokci, wybranego wzoru oraz dodatkowych zdobień." },
  { question: "Jak długo utrzymuje się manicure hybrydowy?", answer: "Przy prawidłowej pielęgnacji manicure hybrydowy utrzymuje się od dwóch do trzech tygodni bez odprysków." },
  { question: "Czym różni się manicure żelowy od hybrydowego?", answer: "Manicure żelowy polega na budowaniu i wzmacnianiu płytki żelem, natomiast hybrydowy to trwałe malowanie lakierem hybrydowym utwardzanym w lampzie UV/LED." },
  { question: "Ile trwa zabieg?", answer: "W zależności od usługi zabieg trwa od 60 do 150 minut." },
  { question: "Jak przygotować się do wizyty?", answer: "Prosimy o przyjście z czystymi, zdjętymi wcześniej starymi stylizacjami, jeśli to możliwe — usprawni to i skróci czas zabiegu." },
  { question: "Na czym polega laminacja brwi i jak długo się utrzymuje?", answer: "Laminacja brwi to zabieg modelujący włoski w wybranym kierunku, nadający efekt gęstszych, ułożonych brwi. Efekt utrzymuje się od czterech do sześciu tygodni." },
  { question: "Jak mogę zarezerwować wizytę?", answer: "Wizytę można umówić online przez Booksy, telefonicznie lub bezpośrednio w salonie. Rezerwacja jest wymagana, aby zapewnić dostępność terminu." },
  { question: "Jak dbać o paznokcie po zabiegu?", answer: "Zalecamy regularne nawilżanie skórek olejkiem oraz unikanie kontaktu z silnymi detergentami bez rękawic ochronnych." },
  { question: "Czy są przeciwwskazania do zabiegów?", answer: "Przeciwwskazaniem mogą być m.in. grzybica paznokci, otwarte rany lub silne podrażnienia skóry — w razie wątpliwości prosimy o kontakt przed wizytą." },
  { question: "Co jeśli stylizacja odpryśnie z winy salonu?", answer: "Oferujemy bezpłatną korektę w przypadku usterek technicznych zgłoszonych w ciągu kilku dni od wizyty." },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
