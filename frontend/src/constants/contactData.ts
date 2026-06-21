// src/constants/contactData.ts

export const CONTACT_HERO = {
  label: "Home",
  current: "Contact",
  title: "GET IN TOUCH",
  description: "For more information on any aspect of URM's training and consultancy services, please get in touch. We look forward to hearing from you.",
  bgImage: "https://images.unsplash.com/photo-1423662055902-359430b05107?auto=format&fit=crop&w=1920&q=80"
};

export const CONTACT_SECTIONS = {
  office: {
    title: "Corporate Office",
    name: "URM Consulting Services Limited",
    addressLines: [
      "Blake House, Manor Park",
      "Manor Farm Road",
      "Reading, Berkshire",
      "RG2 0JH"
    ]
  },
  comms: {
    title: "Direct Communications",
    phoneLabel: "Call Us Directly",
    phone: "+44 (0)118 206 5410",
    phoneRaw: "01182065410",
    emailLabel: "Email Our Desk",
    email: "info@urmconsulting.com"
  },
  feedback: {
    title: "Feedback Welcomed",
    description: "We welcome feedback on any experience you have had with URM. Connect with our teams directly via telephone, email, or our verified enterprise social handles."
  },
  form: {
    title: "Quick Enquiry Form",
    description: "Fill out the parameters below and our matching technical department will respond shortly.",
    successTitle: "Thank You!",
    successMessage: "Your message has been safely logged. A team member will respond shortly.",
    successButton: "Submit another response"
  }
};

export const FORM_LABELS = {
  name: "Your Name",
  namePlaceholder: "John Doe",
  email: "Email Address",
  emailPlaceholder: "john@company.com",
  subject: "Subject",
  subjectPlaceholder: "e.g., ISO 27001 Certification Consultancy",
  message: "Message",
  messagePlaceholder: "Detail your operational or compliance requirements here...",
  submitButton: "Send Enquiry"
};

// Client-side validation message rules
export const VALIDATION_ERRORS = {
  nameMin: "Name must be at least 2 characters.",
  nameMax: "Name cannot exceed 50 characters.",
  emailInvalid: "Please enter a valid business email address.",
  subjectMin: "Subject must be at least 5 characters.",
  messageMin: "Please include a message of at least 10 characters."
};