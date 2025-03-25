'use server';
import { Resend } from 'resend';
import { signupFormSchema } from './signup.form.schema';
import { z } from 'zod';

export const resend = async (values: z.infer<typeof signupFormSchema>) => {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND);
  resend.emails.send({
    from: 'Mundesley Bowls Club <no-reply@mundesleybowlsclub.co.uk>',
    to: values.profile.email,
    subject: 'Test email',
    html: JSON.stringify(values),
  });
};
