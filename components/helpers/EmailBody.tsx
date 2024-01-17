import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

interface EmailBodyProps {
    name: string;
    message: string;
    senderEmail: string;
}

const EmailBody: React.FC<EmailBodyProps> = (props) => {
    const { name, message, senderEmail } = props;
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                A message from portfolio form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>Sender{`'`}s name: {name}</Text>
                            <Text>Sender{`'`}s email: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailBody;