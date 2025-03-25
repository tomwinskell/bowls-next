'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

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
import { useState } from 'react';
import { signupFormSchema } from './signup.form.schema';
import { sendSignupEmail, sendSignupReply } from './send.signup';

export const SignupForm = () => {
  const [sent, setSent] = useState(false);

  const competitions = [
    {
      id: 'none',
      label: 'NO, I do not want to participate in compeitions.',
    },
    {
      id: 'county-evening',
      label: 'County - evening league',
    },
    {
      id: 'nwtl-evening',
      label: 'NWTL - evening league',
    },
    {
      id: 'nansa-evening',
      label: 'NANSA - evening league',
    },
    {
      id: 'nnal-afternoon',
      label: 'NNAL - afternoon league',
    },
    {
      id: 'nansa-afternoon',
      label: 'NANSA - afternoon league',
    },
  ] as const;

  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      profile: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
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
        competitions: ['none'],
      },
    },
  });

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    sendSignupEmail(values);
    sendSignupReply(values);
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
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Complete the form and pay your membership fee to become a member. One
          form per person.
        </p>
        <p className="leading-7 mb-6">
          <span>You can also </span>
          <a
            href="/membership.pdf"
            target="_blank"
            className="font-semibold underline"
          >
            click this link
          </a>{' '}
          <span> to download a paper copy of this form.</span>
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
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Competitions
            </h3>
            <FormField
              control={form.control}
              name="membership.competitions"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">
                      Preferences for Competitions
                    </FormLabel>
                    <FormDescription>
                      Participation in League Matches is only available to FULL
                      members.
                    </FormDescription>
                  </div>
                  {competitions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="membership.competitions"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="membership.agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>
                      I agree that my home address, phone number and e-mail
                      address will be shared with members of Mundesley Haig
                      Bowls Club. The information will not be passed to any
                      other persons unless there is a legal requirement or
                      medical emergency.
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit">Submit My Application</Button>
          </form>
        </Form>
      </div>
    );
  }
};
