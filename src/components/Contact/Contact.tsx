import React, { useState } from "react";
import AppWrapper from "../AppWrapper/AppWrapper";
import { BugInput, ContactWrapper } from "./Contact.styles";
import Button from "../../common/Button/Button";

const Contact = () => {
    const [bugReport, setBugReport] = useState<string>('');
    
    const sendBugReport = () => {
        // send bug reports to email
        console.log(bugReport);
    }

    return (
    <AppWrapper>
        <ContactWrapper>
            <h3>Contact Us</h3>
            <span>Email: pinklemonade.rollerdisco@gmail.com</span>
            <h6>Got a bug to report?</h6>
            <BugInput
                placeholder="Tell us about it here"
                onChange={(e) => setBugReport(e.target.value)}
            />
            <Button onClick={() => sendBugReport}>Submit</Button>
        </ContactWrapper>
    </AppWrapper>
)};

export default Contact;
