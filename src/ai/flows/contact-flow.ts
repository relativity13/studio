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
    // In a real application, you would integrate with an email sending service like SendGrid or Resend.
    // For this example, we'll just log the information to the console.
    console.log(`New contact form submission:
      Name: ${input.name}
      Email: ${input.email}
      Message: ${input.message}
      (This would be sent to hikecorp@gmail.com)`);
    
    return {
      success: true,
      message: 'Your message has been sent successfully.',
    };
  }
);
