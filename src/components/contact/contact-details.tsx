
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(1, { message: "Message is required." }),
  access_key: z.string(),
});

export function ContactDetails() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We will get back to you shortly.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: data.message || "There was a problem with your request.",
        });
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-foreground/80 md:text-xl text-justify">
            Have questions? We'd love to hear from you. Fill out the form below, or reach out to us directly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <h2 className="font-headline text-2xl font-bold text-primary text-left">
              Our Information
            </h2>
            <div className="flex flex-col space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-foreground/80 text-justify">G-41, Sector-4, Bawana Industrial Area,DSIIDC, Delhi-110039</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+91-8920912782" className="text-primary hover:underline">+91-8920912782</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M16.75 13.96c.25.13.41.38.41.66v2.37c0 .34-.24.64-.57.71C12.68 18.23 9 14.54 9.5 10.1c.07-.33.37-.58.71-.58h2.37c.28 0 .53.16.66.41l.41 1.23c.14.42-.01.88-.38 1.15l-1.3 1.3c1.39 2.78 3.67 5.06 6.45 6.45l1.3-1.3c.27-.27.73-.42 1.15-.38l1.23.41zM20.12 3.88C18.43 2.19 16.3 1.5 14 1.5s-4.43.69-6.12 2.38c-3.37 3.37-3.37 8.86 0 12.23l2.08-2.08c-2.15-2.15-2.15-5.63 0-7.78l1.41-1.41c1.37-1.37 3.58-1.37 4.95 0l1.41 1.41c2.15 2.15 2.15 5.63 0 7.78l2.08 2.08c3.37-3.37 3.37-8.86 0-12.23z"></path></svg>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a href="https://wa.me/918920912782" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+91-8920912782</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:hikecorp@gmail.com" className="text-primary hover:underline">hikecorp@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="mt-1 h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Website</h3>
                  <a href="https://www.hikecorporation.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.hikecorporation.in</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-left">
            <h2 className="font-headline text-2xl font-bold text-primary mb-8">Contact Form</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} disabled={isSubmitting} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-[150px]"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="access_key"
                  render={({ field }) => (
                    <FormItem className="hidden">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
