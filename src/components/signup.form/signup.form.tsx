'use client';

// import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { MailOpen } from 'lucide-react';
import { useState } from 'react';
import { signupFormSchema } from './signup.form.schema';

export const SignupForm = () => {
  const [sent, setSent] = useState(false);

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      profile: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        dateCreated: undefined,
      },
      location: {
        streetNumber: '',
        streetName: '',
        city: '',
        postCode: '',
      },
      membership: {
        type: 'full',
        payment: 'cash',
        competitions: undefined,
        agreeToTerms: undefined,
      },
    },
  });

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values);
    // emailjs
    //   .send('service_364ohnh', 'template_e00j55m', values, {
    //     publicKey: process.env.NEXT_PUBLIC_VITE_EMAIL_JS,
    //   })
    //   .then(
    //     () => {
    //       console.log('Success');
    //     },
    //     (error) => {
    //       console.log('Failed', error);
    //     }
    //   );
    setSent(true);
  };

  if (sent) {
    return (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Thank you for submitting your membership application. Please proceed
          to pay as soon as possible.
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            Cheques - Make payable to Mundesley Haig Bowls Club. Deliver to:
            Treasurer, 18 Warren Drive, Mundesley, Norfolk, NR11 8AS.
          </li>
          <li>
            Bank Transfer - Use your Surname as the reference. Sort Code:
            20-03-26. Account Number: 30654043.
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-5">
          Complete the form and pay your membership fee to become a member. One
          form per person.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="columns-2">
              <FormField
                control={form.control}
                name="profile.firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profile.lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="profile.phone"
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
              name="profile.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Email address..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Please consider getting your own e-mail address. This helps
                    the club reduce postage costs.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Address
            </h3>
            <div className="columns-1 md:columns-2">
              <FormField
                control={form.control}
                name="location.streetNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Street number..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.streetName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Street name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="columns-1 md:columns-2">
              <FormField
                control={form.control}
                name="location.city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="City..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location.postCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Post code..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Membership Details
            </h3>
            <div className="columns-1 md:columns-2">
              <FormField
                control={form.control}
                name="membership.type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Membership</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a membership type..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="full">
                          Full - £30 per person
                        </SelectItem>
                        <SelectItem value="social">
                          Social - £5 per person
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="membership.payment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a payment method..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                        <SelectItem value="transfer">Bank Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">
              <MailOpen /> Submit My Application
            </Button>
          </form>
        </Form>
      </div>
    );
  }
};
