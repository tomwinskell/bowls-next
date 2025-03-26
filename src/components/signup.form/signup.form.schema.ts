import { z } from 'zod';

export const signupFormSchema = z.object({
  profile: z.object({
    firstName: z.string().min(2, 'First name is required.').max(50),
    lastName: z.string().min(2, 'Last name is required.').max(50),
    phone: z.string().min(10, 'Phone number is required.').max(15),
    email: z.string().email('An email address is required.'),
    dateCreated: z.date().optional(),
  }),
  location: z.object({
    streetNumber: z.string().min(2, 'A street number is required.').max(5),
    streetName: z.string().min(2, 'A street name is required.').max(50),
    city: z.string().min(2, 'A city is required.').max(50),
    postCode: z.string().min(2, 'A post code is required.').max(50),
  }),
  membership: z.object({
    type: z.enum(['full', 'social']),
    payment: z.enum(['cash', 'cheque', 'transfer']),
    competitions: z
      .array(
        z.enum([
          'county-evening',
          'nwtl-evening',
          'nansa-evening',
          'nnal-afternoon',
          'nansa-afternoon',
        ])
      ),
    agreeToTerms: z.literal(true, {
      errorMap: () => ({ message: 'You must agree to the terms to submit.' }),
    }),
  }),
});
