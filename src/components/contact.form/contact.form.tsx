'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { contactFormSchema } from './contact.form.schema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MailOpen } from 'lucide-react';
import { useState } from 'react';

export const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    emailjs
      .send('service_364ohnh', 'template_e00j55m', values, {
        publicKey: process.env.NEXT_PUBLIC_VITE_EMAIL_JS,
      })
      .then(
        () => {
          console.log('Success');
        },
        (error) => {
          console.log('Failed', error);
        }
      );
    setSent(true);
  };

  if (sent) {
    return (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Thank you for contacting us. We will respond as soon as possible.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-5">
          Use the form below to contact us. We will respond as soon as possible.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name..." {...field} />
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
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email address..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number..." {...field} />
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
                      placeholder="Write your message here..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the message you would like to send. We look forward to
                    hearing from you!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              <MailOpen /> Send Message
            </Button>
          </form>
        </Form>
      </div>
    );
  }
};
