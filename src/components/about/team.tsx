import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Founder & CEO",
    avatar: "https://placehold.co/128x128.png",
    hint: "woman portrait"
  },
  {
    name: "Marcus Chen",
    role: "Head of Operations",
    avatar: "https://placehold.co/128x128.png",
    hint: "man portrait"
  },
  {
    name: "Aisha Khan",
    role: "Chief Technology Officer",
    avatar: "https://placehold.co/128x128.png",
    hint: "woman software"
  },
  {
    name: "David Lee",
    role: "Head of Global Sales",
    avatar: "https://placehold.co/128x128.png",
    hint: "man sales"
  },
];

export function Team() {
  return (
    <section id="team" className="py-12 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
            Meet Our Leadership
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-foreground/80 md:text-lg">
            The driving force behind our success and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center">
              <CardHeader>
                <Avatar className="mx-auto h-24 w-24">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                <p className="text-sm text-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
