import { ContactForm } from '../../components/contact.form/contact.form';

export default function ContactPage(): React.JSX.Element {
  return (
    <>
      <div className="mb-5">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Contact Us
        </h2>
      </div>
      <ContactForm />
    </>
  );
}
