// Testing
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// Components
import Contact from "../components/contact/Contact";
import ContactForm from "../components/contactForm/ContactForm";
import styles from "../components/contact/Contact.module.css"
import GoogleMap from "../components/googleMap/GoogleMap";

test("renders Contact component with correct elements", () => {
  render(
      <Contact />
  );

  const contactHeading = screen.getByRole("heading", { level: 2 });
  const contactSection = screen.getByRole("region", { name: "Contact Us" });
  const contactForm = screen.getByRole("form");
  const googleMap = screen.getByTestId("google-map");

  expect(contactHeading).toHaveTextContent("Contact Us");
  expect(contactHeading).toHaveAttribute("id", "contact-us-heading");

  expect(contactSection).toHaveClass("contact_section layout_padding");
  expect(contactSection).toHaveAttribute("aria-labelledby", "contact-us-heading")
  
  expect(contactForm).toBeInTheDocument();
  
  expect(googleMap).toBeInTheDocument();
});

test("renders ContactForm with all input fields and button", () => {
  render(<ContactForm styles={styles} />);

  const nameInput = screen.getByLabelText(/name/i);
  const phoneInput = screen.getByLabelText(/phone number/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const sendButton = screen.getByRole("button", { name: /send/i });

  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveAttribute("id", "name");
  expect(nameInput).toHaveAttribute("name", "name");
  expect(nameInput).toHaveAttribute("placeholder", "Name");
  expect(nameInput).toHaveAttribute("autocomplete", "name");

  expect(phoneInput).toBeInTheDocument();
  expect(phoneInput).toHaveAttribute("id", "phone-number");
  expect(phoneInput).toHaveAttribute("name", "phone-number");
  expect(phoneInput).toHaveAttribute("placeholder", "Phone Number");
  expect(phoneInput).toHaveAttribute("autocomplete", "tel");

  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute("id", "email");
  expect(emailInput).toHaveAttribute("name", "email");
  expect(emailInput).toHaveAttribute("placeholder", "Email");
  expect(emailInput).toHaveAttribute("autocomplete", "email");

  expect(messageInput).toBeInTheDocument();
  expect(messageInput).toHaveAttribute("id", "message");
  expect(messageInput).toHaveAttribute("name", "message");
  expect(messageInput).toHaveAttribute("placeholder", "Message");

  expect(sendButton).toBeInTheDocument();
  expect(sendButton).toHaveTextContent("Send")
});

test("renders mocked GoogleMap component", () => {
    render(<GoogleMap styles={styles} />);
    
    // Cannot be accessed using any other selectors, hence 'getByTestId'
    const googleMap = screen.getByTestId("google-map");
    expect(googleMap).toBeInTheDocument();
    expect(googleMap).toHaveTextContent("Mock Google Map");
  });