'use server';
import { Resend } from 'resend';
import { z } from 'zod';
import { contactFormSchema } from './contact.form.schema';
import { ContactEmailTemplate } from './contact.email.template';
import { ContactReplyTemplate } from './contact.reply.template';

const resend = new Resend(process.env.RESEND);

export const sendContactEmail = async (
  values: z.infer<typeof contactFormSchema>
) => {
  await resend.emails.send({
    from: 'Mundesley Haig Bowls Club <no-reply@mundesleybowlsclub.co.uk>',
    to: 'mundesleyhaigbowlsclub@gmail.com',
    replyTo: values.email,
    subject: `New message from ${values.name}`,
    react: ContactEmailTemplate(values) as React.ReactNode,
  });
};
export const sendContactReply = async (
  values: z.infer<typeof contactFormSchema>
) => {
  await resend.emails.send({
    from: 'Mundesley Haig Bowls Club <no-reply@mundesleybowlsclub.co.uk>',
    to: values.email,
    replyTo: 'mundesleyhaigbowlsclub@gmail.com',
    subject: `Thank you for your message to Mundesley Haig Bowls Club`,
    react: ContactReplyTemplate(values) as React.ReactNode,
  });
};
