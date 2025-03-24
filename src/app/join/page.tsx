import { SignupForm } from '@/components/signup.form/signup.form';

export default function SignupPage(): React.JSX.Element {
  return (
    <>
      <div className="mb-5">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Become a Member
        </h2>
      </div>
      <SignupForm />
    </>
  );
}