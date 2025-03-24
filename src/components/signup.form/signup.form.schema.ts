import { z } from 'zod';

export const signupFormSchema = z.object({
  profile: z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    phone: z.string().min(10).max(15),
    email: z.string().email(),
    dateCreated: z.date(),
  }),
  location: z.object({
    streetNumber: z.string().min(2).max(5),
    streetName: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    postCode: z.string().min(2).max(50),
  }),
  membership: z.object({
    type: z.enum(['full', 'social']),
    payment: z.enum(['cash', 'cheque', 'transfer']),
    competitions: z.array(
      z.enum([
        'none',
        'county-evening',
        'nwtl-evening',
        'nansa-evening',
        'nnal-afternoon',
        'nansa-afternoon',
      ])
    ),
    agreeToTerms: z.literal(true).refine((val) => val === true, {
      message: 'You must agree to the terms.',
    }),
  }),
});
