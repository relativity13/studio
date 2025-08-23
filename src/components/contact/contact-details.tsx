"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

const contactDetails = [
  {
    title: "Address",
    icon: <MapPin className="h-8 w-8 text-primary" />,
    value: "G-41, Sector-4, Bawana Industrial Area,DSIIDC, Delhi-110039",
  },
  {
    title: "Phone",
    icon: <Phone className="h-8 w-8 text-primary" />,
    value: "+91-8920912782",
    href: "tel:+91-8920912782",
  },
    {
    title: "WhatsApp",
    icon:  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M16.75 13.96c.25.13.41.38.41.66v2.37c0 .34-.24.64-.57.71C12.68 18.23 9 14.54 9.5 10.1c.07-.33.37-.58.71-.58h2.37c.28 0 .53.16.66.41l.41 1.23c.14.42-.01.88-.38 1.15l-1.3 1.3c1.39 2.78 3.67 5.06 6.45 6.45l1.3-1.3c.27-.27.73-.42 1.15-.38l1.23.41zM20.12 3.88C18.43 2.19 16.3 1.5 14 1.5s-4.43.69-6.12 2.38c-3.37 3.37-3.37 8.86 0 12.23l2.08-2.08c-2.15-2.15-2.15-5.63 0-7.78l1.41-1.41c1.37-1.37 3.58-1.37 4.95 0l1.41 1.41c2.15 2.15 2.15 5.63 0 7.78l2.08 2.08c3.37-3.37 3.37-8.86 0-12.23z"></path></svg>,
    value: "Chat on WhatsApp",
    href: "https://wa.me/918920912782",
  },
  {
    title: "Email",
    icon: <Mail className="h-8 w-8 text-primary" />,
    value: "hikecorp@gmail.com",
    href: "mailto:hikecorp@gmail.com",
  },
  {
    title: "Website",
    icon: <Globe className="h-8 w-8 text-primary" />,
    value: "www.hikecorporation.in",
    href: "https://www.hikecorporation.in",
  },
];

export function ContactDetails() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-foreground/80 md:text-xl">
            Have questions? We'd love to hear from you. Reach out to us directly.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map((detail) => (
            <Card key={detail.title} className="transition-all hover:shadow-xl">
              <CardContent className="flex items-center gap-4 p-6">
                <div>{detail.icon}</div>
                <div className="flex-grow">
                  <CardTitle className="font-headline text-xl">{detail.title}</CardTitle>
                  <div className="mt-1 text-foreground/80">
                    {detail.href ? (
                      <a href={detail.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {detail.value}
                      </a>
                    ) : (
                      <p>{detail.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
