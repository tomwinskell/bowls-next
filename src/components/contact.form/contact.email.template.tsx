import * as React from 'react';
import { contactFormSchema } from './contact.form.schema';
import { z } from 'zod';

export const ContactEmailTemplate: React.FC<
  Readonly<z.infer<typeof contactFormSchema>>
> = ({ name, email, phone, message }) => (
  <div>
    <h2>New message from {name}</h2>
    <p>Email address: {email}</p>
    <p>Phone number: {phone}</p>
    <p>Message: {message}</p>
  </div>
);
