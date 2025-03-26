'use server';
import { Resend } from 'resend';
import { z } from 'zod';
import { signupFormSchema } from './signup.form.schema';
import { SignupEmailTemplate } from './signup.email.template';

const resend = new Resend(process.env.RESEND);

export const sendSignupEmail = async (
  values: z.infer<typeof signupFormSchema>
) => {
  await resend.emails.send({
    from: 'Mundesley Haig Bowls Club <no-reply@mundesleybowlsclub.co.uk>',
    to: 'mundesleyhaigbowlsclub@gmail.com',
    replyTo: values.profile.email,
    subject: `Membership application from ${values.profile.firstName} ${values.profile.lastName}`,
    react: SignupEmailTemplate(values) as React.ReactNode,
  });
};
export const sendSignupReply = async (
  values: z.infer<typeof signupFormSchema>
) => {
  await resend.emails.send({
    from: 'Mundesley Haig Bowls Club <no-reply@mundesleybowlsclub.co.uk>',
    to: values.profile.email,
    replyTo: 'mundesleyhaigbowlsclub@gmail.com',
    subject: `Completed membership form for Mundesley Haig Bowls Club`,
    react: SignupEmailTemplate(values) as React.ReactNode,
  });
};
