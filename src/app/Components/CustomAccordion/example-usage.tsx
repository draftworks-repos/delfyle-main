import React from 'react';
import CustomAccordion, { AccordionItem } from './CustomAccordion';

// Example data for Company Registration Process
const companyRegistrationData: AccordionItem[] = [
  {
    id: 'step-1',
    title: 'Acquire a Digital Signature Certificate (DSC)',
    content: 'All directors and shareholders must obtain a DSC for online document signing. This is a mandatory requirement for all digital transactions with government portals.',
    stepNumber: 1
  },
  {
    id: 'step-2',
    title: 'Obtain a Director Identification Number (DIN)',
    content: 'Essential for company directors, DIN is obtained through the MCA portal. This unique identification number is required for all directors of the company.',
    stepNumber: 2
  },
  {
    id: 'step-3',
    title: 'Name Reservation (SPICe+ Part A)',
    content: 'Choose a unique business name and submit for approval. Specify business activities and industrial classification. The name must comply with MCA guidelines.',
    stepNumber: 3
  },
  {
    id: 'step-4',
    title: 'Submit Company Details (SPICe+ Part B)',
    content: 'Provide company capital details, registered office address, and director information. Apply for PAN and TAN simultaneously through the integrated form.',
    stepNumber: 4
  },
  {
    id: 'step-5',
    title: 'Draft & Submit Incorporation Documents',
    content: 'Memorandum of Association (MOA) & Articles of Association (AOA) digitally signed and submitted. File AGILE-PRO-S form for GST, EPFO, ESIC, and bank account registration.',
    stepNumber: 5
  },
  {
    id: 'step-6',
    title: 'Receive Certificate of Incorporation',
    content: 'Upon approval, MCA issues a Certificate of Incorporation (COI) with CIN, PAN, and TAN. This marks the successful completion of company registration.',
    stepNumber: 6
  }
];

// Example usage component
const CompanyRegistrationAccordion: React.FC = () => {
  return (
    <CustomAccordion
      title="Company Registration Process – How to Register a Company in India with Delfyle?"
      description="Follow these 6 simple steps to register your private limited company in India. Our expert team will guide you through each step of the process."
      items={companyRegistrationData}
      variant="numbered"
      theme="light"
      maxOpenItems={1}
    />
  );
};

// Example with different variants
const IconAccordionExample: React.FC = () => {
  const iconData: AccordionItem[] = [
    {
      id: 'faq-1',
      title: 'What documents are required?',
      content: 'You will need identity proof, address proof, and business-related documents for all directors and shareholders.',
      icon: '📋'
    },
    {
      id: 'faq-2',
      title: 'How long does the process take?',
      content: 'The complete registration process typically takes 15-20 working days from the date of application submission.',
      icon: '⏱️'
    },
    {
      id: 'faq-3',
      title: 'What are the costs involved?',
      content: 'Costs include government fees, professional charges, and optional services. Contact us for a detailed quote.',
      icon: '💰'
    }
  ];

  return (
    <CustomAccordion
      title="Frequently Asked Questions"
      items={iconData}
      variant="icon"
      theme="dark"
      maxOpenItems={2}
    />
  );
};

// Example with simple variant
const SimpleAccordionExample: React.FC = () => {
  const simpleData: AccordionItem[] = [
    {
      id: 'benefit-1',
      title: 'Limited Liability Protection',
      content: 'Shareholders are only liable to the extent of their shareholding, protecting personal assets.'
    },
    {
      id: 'benefit-2',
      title: 'Separate Legal Entity',
      content: 'The company has its own legal identity, independent of its owners.'
    },
    {
      id: 'benefit-3',
      title: 'Ease of Raising Funds',
      content: 'Attracts investments from venture capitalists and angel investors.'
    }
  ];

  return (
    <CustomAccordion
      title="Benefits of Private Limited Company"
      items={simpleData}
      variant="simple"
      theme="light"
      maxOpenItems={3}
    />
  );
};

export default CompanyRegistrationAccordion;
export { IconAccordionExample, SimpleAccordionExample }; 