'use client';
import CustomNavbar from '../Components/CustomNavbar/CustomNavbar';

type DropdownLayout = 'grid' | 'list' | 'custom';
type ArrowPosition = 'left' | 'center' | 'right';
type ArrowStrategy = 'fixed' | 'dynamic' | 'relative';

export default function CustomNavbarTest() {
  const navItems = [
    { 
      name: "Startup", 
      link: "#startup",
      dropdown: {
        title: "Business Registration",
        width: "900px",
        layout: "grid" as DropdownLayout,
        columns: 3,
        arrowPosition: "left" as ArrowPosition,
        arrowOffset: "25%",
        dropdownPosition: "left" as ArrowPosition,
        arrowStrategy: "fixed" as ArrowStrategy,
        items: [
          {
            name: "Private Limited Company",
            link: "#private-limited",
            icon: "🏢"
          },
          {
            name: "Limited Liability Partnership (LLP)",
            link: "#llp",
            icon: "🤝"
          },
          {
            name: "One Person Company (OPC)",
            link: "#opc",
            icon: "👤"
          },
          {
            name: "Section 8 Company",
            link: "#section8",
            icon: "🎯"
          },
          {
            name: "Partnership Firm",
            link: "#partnership",
            icon: "👥"
          },
          {
            name: "Trust Registration",
            link: "#trust",
            icon: "🤲"
          },
          {
            name: "Public Company",
            link: "#public",
            icon: "🌐"
          },
          {
            name: "Producer Company",
            link: "#producer",
            icon: "🏭"
          },
          {
            name: "Nidhi Company",
            link: "#nidhi",
            icon: "💰"
          }
        ]
      }
    },
    { 
      name: "Trademark", 
      link: "#trademark",
      dropdown: {
        title: "Intellectual Property",
        width: "1000px",
        layout: "grid" as DropdownLayout,
        columns: 4,
        arrowPosition: "left" as ArrowPosition,
        arrowOffset: "30%",
        dropdownPosition: "left" as ArrowPosition,
        arrowStrategy: "fixed" as ArrowStrategy,
        items: [
          // Trademark Section
          {
            name: "Trademark Registration",
            link: "#trademark-registration",
            icon: "📝"
          },
          {
            name: "Trademark Objection",
            link: "#trademark-objection",
            icon: "⚠️"
          },
          {
            name: "Trademark Certificate",
            link: "#trademark-certificate",
            icon: "📜"
          },
          {
            name: "Trademark Opposition",
            link: "#trademark-opposition",
            icon: "⚖️"
          },
          {
            name: "Trademark Hearing",
            link: "#trademark-hearing",
            icon: "👥"
          },
          {
            name: "Trademark Rectification",
            link: "#trademark-rectification",
            icon: "🔄"
          },
          {
            name: "Trademark Infringement Notice",
            link: "#trademark-infringement",
            icon: "🚫"
          },
          {
            name: "Trademark Renewal",
            link: "#trademark-renewal",
            icon: "🔄"
          },
          {
            name: "Trademark Restoration",
            link: "#trademark-restoration",
            icon: "💫"
          },
          {
            name: "Trademark Transfer",
            link: "#trademark-transfer",
            icon: "↔️"
          },
          {
            name: "Expedited Trademark Registration",
            link: "#expedited-trademark",
            icon: "⚡"
          },
          {
            name: "Logo Design + Trademark Protection",
            link: "#logo-trademark",
            icon: "🎨"
          },
          // Design Section
          {
            name: "Design Registration",
            link: "#design-registration",
            icon: "✏️"
          },
          {
            name: "Design Objection",
            link: "#design-objection",
            icon: "❌"
          },
          // Copyright Section
          {
            name: "Copyright Registration",
            link: "#copyright-registration",
            icon: "©️"
          },
          {
            name: "Copyright Objections",
            link: "#copyright-objections",
            icon: "⚠️"
          }
        ]
      }
    },
    { 
      name: "Registrations", 
      link: "#registrations",
      dropdown: {
        title: "Business Registrations & Licenses",
        width: "900px",
        layout: "custom" as DropdownLayout,
        columns: 3,
        arrowPosition: "left" as ArrowPosition,
        arrowOffset: "45%",
        dropdownPosition: "left" as ArrowPosition,
        arrowStrategy: "fixed" as ArrowStrategy,
        items: [
          {
            name: "StartUp Registration",
            link: "#startup-reg",
            icon: "🚀"
          },
          {
            name: "Trade License",
            link: "#trade-license",
            icon: "📜"
          },
          {
            name: "FSSAI Registration",
            link: "#fssai-reg",
            icon: "🍽️"
          },
          {
            name: "FSSAI License",
            link: "#fssai-license",
            icon: "🍴"
          },
          {
            name: "Halal Certification",
            link: "#halal",
            icon: "🕌"
          },
          {
            name: "ICEGATE Registration",
            link: "#icegate",
            icon: "🌐"
          },
          {
            name: "ISO Registration",
            link: "#iso",
            icon: "🏆"
          },
          {
            name: "PF Registration",
            link: "#pf",
            icon: "💰"
          },
          {
            name: "ESI Registration",
            link: "#esi",
            icon: "🏥"
          },
          {
            name: "Professional Tax Registration",
            link: "#pt",
            icon: "📊"
          },
          {
            name: "RCMC Registration",
            link: "#rcmc",
            icon: "🌍"
          },
          {
            name: "WB RERA Registration",
            link: "#rera",
            icon: "🏗️"
          },
          {
            name: "12A and 80G Registration",
            link: "#12a-80g",
            icon: "🎗️"
          },
          {
            name: "Darpan Registration",
            link: "#darpan",
            icon: "🎯"
          },
          {
            name: "Udyam Registration",
            link: "#udyam",
            icon: "🏭"
          },
          {
            name: "Digital Signature",
            link: "#digital-signature",
            icon: "✍️"
          },
          {
            name: "Shop and Establishment Act Registration",
            link: "#shop-establishment",
            icon: "🏪"
          },
          {
            name: "Drug License",
            link: "#drug-license",
            icon: "💊"
          },
          {
            name: "FCRA Registration",
            link: "#fcra",
            icon: "🌐"
          },
          {
            name: "Fire License",
            link: "#fire-license",
            icon: "🔥"
          }
        ]
      }
    },
    { 
      name: "GST", 
      link: "#gst",
      dropdown: {
        title: "Goods & Services Tax",
        width: "900px",
        layout: "grid" as DropdownLayout,
        columns: 3,
        arrowPosition: "center" as ArrowPosition,
        dropdownPosition: "center" as ArrowPosition,
        arrowStrategy: "fixed" as ArrowStrategy,
        items: [
          {
            name: "GST Registration",
            link: "#gst-reg",
            icon: "📝"
          },
          {
            name: "GST Return Filing",
            link: "#gst-return",
            icon: "📊"
          },
          {
            name: "GST Annual Return Filing (GSTR - 9)",
            link: "#gstr-9",
            icon: "📅"
          },
          {
            name: "GST LUT Form",
            link: "#gst-lut",
            icon: "📄"
          },
          {
            name: "GST Tax Notice",
            link: "#gst-notice",
            icon: "⚠️"
          },
          {
            name: "GST Amendment",
            link: "#gst-amendment",
            icon: "✏️"
          },
          {
            name: "GST Revocation",
            link: "#gst-revocation",
            icon: "🔄"
          },
          {
            name: "GSTR-10",
            link: "#gstr-10",
            icon: "📋"
          }
        ]
      }
    },
    { 
      name: "MCA", 
      link: "#mca",
      dropdown: {
        title: "Ministry of Corporate Affairs",
        width: "1000px",
        layout: "grid" as DropdownLayout,
        columns: 4,
        arrowPosition: "center" as ArrowPosition,
        dropdownPosition: "center" as ArrowPosition,
        arrowStrategy: "fixed" as ArrowStrategy,
        items: [
          {
            name: "Company Compliance",
            link: "#company-compliance",
            icon: "✅"
          },
          {
            name: "LLP Compliance",
            link: "#llp-compliance",
            icon: "🤝"
          },
          {
            name: "OPC Compliance",
            link: "#opc-compliance",
            icon: "👤"
          },
          {
            name: "Name Change - Company",
            link: "#name-change",
            icon: "✏️"
          },
          {
            name: "Company Registered Office Change",
            link: "#office-change",
            icon: "🏢"
          },
          {
            name: "DIN eKYC Filing",
            link: "#din-ekyc",
            icon: "📱"
          },
          {
            name: "DIN Reactivation",
            link: "#din-reactivation",
            icon: "🔄"
          },
          {
            name: "Director Change",
            link: "#director-change",
            icon: "👥"
          },
          {
            name: "Remove Director",
            link: "#remove-director",
            icon: "❌"
          },
          {
            name: "Appointment of Auditor",
            link: "#auditor-appointment",
            icon: "📊"
          },
          {
            name: "DPT-3 Filing",
            link: "#dpt-3",
            icon: "📝"
          },
          {
            name: "LLP Form 11 Filing",
            link: "#llp-form-11",
            icon: "📋"
          },
          {
            name: "Dormant Status Filing",
            link: "#dormant",
            icon: "💤"
          },
          {
            name: "MOA Amendment",
            link: "#moa-amendment",
            icon: "📄"
          },
          {
            name: "AOA Amendment",
            link: "#aoa-amendment",
            icon: "📑"
          },
          {
            name: "Authorized Capital Increase",
            link: "#capital-increase",
            icon: "💰"
          },
          {
            name: "Share Transfer",
            link: "#share-transfer",
            icon: "↔️"
          },
          {
            name: "Demat of Shares",
            link: "#demat",
            icon: "💹"
          },
          {
            name: "Winding Up - LLP",
            link: "#winding-up-llp",
            icon: "🔚"
          },
          {
            name: "Winding Up - Company",
            link: "#winding-up-company",
            icon: "🔚"
          }
        ]
      }
    },
    { 
      name: "Compliance", 
      link: "#compliance",
      dropdown: {
        title: "Business Compliance",
        width: "900px",
        layout: "grid" as DropdownLayout,
        columns: 3,
        arrowPosition: "right" as ArrowPosition,
        dropdownPosition: "right" as ArrowPosition,
        arrowStrategy: "fixed" as ArrowStrategy,
        items: [
          {
            name: "FSSAI Renewal",
            link: "#fssai-renewal",
            icon: "🔄"
          },
          {
            name: "FSSAI Return Filing",
            link: "#fssai-return",
            icon: "📊"
          },
          {
            name: "HR & Payroll Services",
            link: "#hr-payroll",
            icon: "👥"
          },
          {
            name: "PF Return Filing",
            link: "#pf-return",
            icon: "💰"
          },
          {
            name: "ESI Return Filing",
            link: "#esi-return",
            icon: "🏥"
          },
          {
            name: "Professional Tax Return Filing",
            link: "#pt-return",
            icon: "📊"
          },
          {
            name: "Partnership Compliance",
            link: "#partnership-compliance",
            icon: "🤝"
          },
          {
            name: "Proprietorship Compliance",
            link: "#proprietorship-compliance",
            icon: "👤"
          },
          {
            name: "Book-keeping",
            link: "#bookkeeping",
            icon: "📚"
          }
        ]
      }
    },
    { 
      name: "Income Tax", 
      link: "#income-tax",
      dropdown: {
        title: "Income Tax Services",
        width: "1000px",
        layout: "grid" as DropdownLayout,
        columns: 4,
        arrowPosition: "right" as ArrowPosition,
        arrowOffset: "30%",
        dropdownPosition: "right" as ArrowPosition,
        arrowStrategy: "fixed" as ArrowStrategy,
        items: [
          {
            name: "ITR-1 Return Filing",
            link: "#itr-1",
            icon: "📝"
          },
          {
            name: "ITR-2 Return Filing",
            link: "#itr-2",
            icon: "📝"
          },
          {
            name: "ITR-3 Return Filing",
            link: "#itr-3",
            icon: "📝"
          },
          {
            name: "ITR-4 Return Filing",
            link: "#itr-4",
            icon: "📝"
          },
          {
            name: "ITR-5 Return Filing",
            link: "#itr-5",
            icon: "📝"
          },
          {
            name: "ITR-6 Return Filing",
            link: "#itr-6",
            icon: "📝"
          },
          {
            name: "ITR-7 Return Filing",
            link: "#itr-7",
            icon: "📝"
          },
          {
            name: "TDS Return Filing",
            link: "#tds",
            icon: "📊"
          },
          {
            name: "Income Tax Notice",
            link: "#tax-notice",
            icon: "⚠️"
          },
          {
            name: "TAN Registration",
            link: "#tan",
            icon: "📄"
          },
          {
            name: "15CA & 15CB Filing",
            link: "#15ca-15cb",
            icon: "📋"
          }
        ]
      }
    },
    { name: "About Us", link: "#about" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <CustomNavbar items={navItems} />
    </div>
  );
}
