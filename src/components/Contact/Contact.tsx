import React, { useState } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import { BugInput, ContactWrapper, Text } from "./Contact.styles";
import Button from "../../common/Button/Button";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [bugReport, setBugReport] = useState<string>('');
    
    const sendBugReport = () => {
        // send bug reports to email
        // emailjs.sendForm('service_9vwocsi', 'template_6n0ytz4', bugReport, {
        //         publicKey: 'GoTgpslua8pCvkR3s',
        //     })
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //             },
        //             (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );
          console.log(bugReport);
    }

    return (
        <AppWrapper>
            <ContactWrapper>
                <h3>Contact Us</h3>
                <Text>Email: pinklemonade.rollerdisco@gmail.com</Text>
                <Text><b>Got a bug to report?</b></Text>
                <BugInput
                    placeholder="Tell us about it here"
                    onChange={(e) => setBugReport(e.target.value)}
                />
                <Button
                    onClick={() => sendBugReport()}
                    style={{ width: '50px' }}
                >Submit</Button>
            </ContactWrapper>
        </AppWrapper>
    )
};

export default Contact;
