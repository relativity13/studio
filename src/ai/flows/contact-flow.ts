'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - submitContactForm - A function that handles the contact form submission.
 * - ContactFormInput - The input type for the submitContactForm function.
 * - ContactFormOutput - The return type for the submitContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';


const ContactFormInputSchema = z.object({
  name: z.string().describe("The user's name."),
  email: z.string().email().describe("The user's email address."),
  message: z.string().describe('The message content.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function submitContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFormSubmitFlow(input);
}

const contactFormSubmitFlow = ai.defineFlow(
  {
    name: 'contactFormSubmitFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!toEmail) {
      console.error('Resend "to" email is not configured. Please set RESEND_TO_EMAIL in your environment variables.');
      return {
        success: false,
        message: 'The server is not configured to send emails correctly. Please contact support.',
      };
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Hike Corporation <onboarding@resend.dev>',
        to: toEmail,
        subject: `New message from ${input.name}`,
        react: ContactFormEmail({
          name: input.name,
          email: input.email,
          message: input.message,
        })
      });

      if (error) {
        console.error('Resend error:', error);
        return {
          success: false,
          message: 'There was an error sending your message. Please try again later.',
        };
      }

      return {
        success: true,
        message: 'Your message has been sent successfully.',
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        success: false,
        message: 'There was a critical error. Please contact support.',
      };
    }
  }
);
