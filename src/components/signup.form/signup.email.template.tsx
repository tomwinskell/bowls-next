import * as React from 'react';
import { z } from 'zod';
import { signupFormSchema } from './signup.form.schema';

export const SignupEmailTemplate: React.FC<
  Readonly<z.infer<typeof signupFormSchema>>
> = ({ profile, location, membership }: z.infer<typeof signupFormSchema>) => (
  <div>
    <h2>
      Membership application from {profile.firstName} {profile.lastName}
    </h2>
    <p>
      Name: {profile.firstName} {profile.lastName}
    </p>
    <p>Phone number: {profile.phone}</p>
    <p>Email address: {profile.email}</p>
    <p>Agrees to terms: {membership.agreeToTerms ? 'YES' : 'NO'}</p>

    <h3>Address</h3>
    <p>
      {location.streetNumber}, {location.streetName}, {location.city},{' '}
      {location.postCode}
    </p>

    <h3>Membership details</h3>
    <p>Membership type: {membership.type.toUpperCase()}</p>
    <p>Will pay by: {membership.payment.toUpperCase()}</p>
    <h3>Competition preferences</h3>
    {membership.competitions.length === 0 ? (
      <p>I do not wish to participate in any competitions.</p>
    ) : (
      <ul>
        {membership.competitions.map((value: string) => (
          <li key={value}>{value.toUpperCase()}</li>
        ))}
      </ul>
    )}
  </div>
);
