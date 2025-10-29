import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail = ({ name, email, message }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-50 text-gray-800 p-8">
          <Container className="bg-white p-6 rounded-lg shadow-xl">
            <Text className="text-xl font-bold text-indigo-600">
              New Contact Form Submission
            </Text>
            <Hr className="my-4 border-t border-gray-200" />

            <Section className="mb-4">
              <Text className="text-lg font-semibold">Sender Name:</Text>
              <Text className="text-base font-medium text-gray-700">
                {name}
              </Text>
            </Section>

            <Section className="mb-4">
              <Text className="text-lg font-semibold">Email:</Text>
              <Text className="text-base font-medium text-gray-700">
                {email}
              </Text>
            </Section>

            <Section>
              <Text className="text-lg font-semibold">Message:</Text>
              <Text className="text-base text-gray-600 leading-relaxed p-4 bg-gray-100 rounded-md">
                {message}
              </Text>
            </Section>

            <Hr className="my-4 border-t border-gray-200" />
            <Text className="text-sm text-gray-400">
              Sent via your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
