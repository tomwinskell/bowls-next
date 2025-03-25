import * as React from 'react';
import { z } from 'zod';
import { signupFormSchema } from './signup.form.schema';

export const SignupEmailTemplate: React.FC<
  Readonly<z.infer<typeof signupFormSchema>>
> = ({ profile, location, membership }: z.infer<typeof signupFormSchema>) => (
  <div>
    <h2>
      New membership application from ${profile.firstName} ${profile.lastName}
    </h2>
    <p>Name: {profile.firstName} {profile.lastName}</p>
    <p>Phone number: {profile.phone}</p>
    <p>Email address: {profile.email}</p>

    <p>Address: {location.streetNumber}, {location.streetName}, {location.city}, {location.postCode}</p>

    <p>Membership type: {membership.type} | Will pay by: {membership.payment}</p>
    <p>{membership.competitions}</p>
    <p>Agrees to terms: {membership.agreeToTerms}</p>
  </div>
);
