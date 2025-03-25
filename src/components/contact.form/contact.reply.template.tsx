import * as React from 'react';
import { contactFormSchema } from './contact.form.schema';
import { z } from 'zod';

export const ContactReplyTemplate: React.FC<
  Readonly<z.infer<typeof contactFormSchema>>
> = ({ name, message }) => (
  <div>
    <h2>Thank you for your message</h2>
    <p>Dear, {name},</p>
    <p>Thank you for your message. We will respond as soon as possible.</p>
    <p>Kind regards,</p>
    <p>Mundesley Haig Bowls Club</p>
    <p>Your message: {message}</p>
  </div>
);
