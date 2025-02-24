'use client';
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Case Study: Merging Duplicate Records in a Council's Name and Address Register (NAR)",
    scenario: "A local council's Name and Address Register (NAR) contained duplicate records for the same individual, identified through matching name, mobile number, and address variations. These inconsistencies arose due to manual data entry errors, system migrations, or incomplete updates across different council departments.",
    entries: [
      {
        title: "Entry A Included:",
        items: [
          "Name: John A. Smith",
          "Mobile number",
          "Residential address",
          "Linked Rates Module",
          "Customer service request history"
        ]
      },
      {
        title: "Entry B Included:",
        items: [
          "Name: John Smith",
          "Same mobile number",
          "Same residential address (with minor formatting differences)",
          "Animal registration details",
          "Parking permit application"
        ]
      }
    ],
    process: [
      {
        step: "Step 1: Identify & Validate Duplicates",
        items: [
          "System flagged the two records as potential duplicates based on shared personal details.",
          "Council staff reviewed and verified that both entries referred to the same individual."
        ]
      },
      {
        step: "Step 2: Determine the Primary Record",
        items: [
          "Entry A was selected as the primary record due to its Rates Module association, a critical element in council operations.",
          "Entry B was merged into Entry A, ensuring all essential data remained intact."
        ]
      },
      {
        step: "Step 3: Data Consolidation & Integrity Check",
        items: [
          "Mobile number remained unchanged as both records had the same information.",
          "Residential address discrepancies were standardized to match official council formatting.",
          "Customer service history, animal registration, and parking permit details were merged into the primary record, ensuring the resident's full interaction history was retained.",
          "Duplicate home phone numbers were consolidated, and an additional field was created for any secondary contact details."
        ]
      }
    ],
    outcomes: [
      "Eliminated redundant records, ensuring a single, accurate resident profile.",
      "Improved council service efficiency by maintaining a unified interaction history.",
      "Reduced errors in billing, permits, and notifications, enhancing resident experience.",
      "Strengthened data governance, ensuring compliance with council policies and regulatory standards."
    ]
  },
  {
    title: "Case Study: Merging Resident Records Across Multiple Council Services",
    scenario: "A council database review identified two records belonging to the same resident, flagged due to matching name, mobile number, and minor address discrepancies across council services.",
    entries: [
      {
        title: "Entry A Included:",
        items: [
          "Full name: Katherine M. Dawson",
          "Mobile number",
          "Residential address",
          "Waste management service registration",
          "Community center membership"
        ]
      },
      {
        title: "Entry B Included:",
        items: [
          "Name variation: Kathy Dawson",
          "Same mobile number",
          "Same residential address (with minor formatting differences)",
          "Library membership",
          "Parking permit"
        ]
      }
    ],
    process: [
      {
        step: "Step 1: Verification & Data Review",
        items: [
          "System flagged the two records as potential duplicates.",
          "Council staff verified that both belonged to the same resident."
        ]
      },
      {
        step: "Step 2: Selecting the Primary Record",
        items: [
          "Entry A was selected as the primary record because it contained critical service registrations.",
          "Entry B was merged into Entry A, ensuring no loss of library and parking permit data."
        ]
      },
      {
        step: "Step 3: Data Consolidation & Updates",
        items: [
          "Mobile number remained unchanged.",
          "Address discrepancies were standardized for council-wide consistency.",
          "Library membership and parking permit records were merged into the primary profile.",
          "The resident was notified and provided with a consolidated council services account."
        ]
      }
    ],
    outcomes: [
      "Eliminated duplicate records while retaining all essential council services.",
      "Created a single, complete resident profile for efficient service management.",
      "Improved resident communication and billing accuracy."
    ]
  },
  {
    title: "Case Study: Address Standardization & Deduplication for a Housing Development Project",
    scenario: "A large housing development submitted multiple applications for permits and inspections, leading to duplicate entries in the NAR due to inconsistent address formatting.",
    entries: [
      {
        title: "Entry A Included:",
        items: [
          "Developer: Future Homes Ltd",
          "Address: 100A Green Street",
          "Development Application (DA) Approved",
          "Inspection Request Logged"
        ]
      },
      {
        title: "Entry B Included:",
        items: [
          "Developer: Future Homes Pty Ltd",
          "Address: 100-A Green St",
          "Building Permit Issued",
          "Infrastructure Contribution Fee Paid"
        ]
      }
    ],
    process: [
      {
        step: "Step 1: Address & Developer Verification",
        items: [
          "System flagged both entries as duplicates due to minor address formatting inconsistencies.",
          "The developer was contacted for confirmation."
        ]
      },
      {
        step: "Step 2: Selecting the Primary Record",
        items: [
          "Entry A was selected as the primary record due to its Development Application (DA) approval.",
          "Entry B was merged into Entry A, ensuring building permit and financial contributions were linked correctly."
        ]
      },
      {
        step: "Step 3: Standardizing Address & Permit Information",
        items: [
          "Address was reformatted to council-approved standards.",
          "All permits, payments, and requests were consolidated under a single developer profile.",
          "Future applications would automatically align to the updated, verified profile."
        ]
      }
    ],
    outcomes: [
      "Standardized address data, reducing errors in permit approvals & inspections.",
      "Merged all development-related applications, ensuring project efficiency.",
      "Improved coordination between council planning, finance, and infrastructure departments."
    ]
  }
];

export default function ScenariosPage() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % caseStudies.length);
  };

  const previousPage = () => {
    setCurrentPage((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentPage];

  return (
    <div className="min-h-screen w-full bg-[#2C3E50]">
      <main className="pt-20 w-full">
        <div className="w-full max-w-4xl mx-auto px-4 py-12 text-white">
          <h1 className="text-4xl font-bold mb-12 text-center">
            IDT Governance Scenarios and Examples
          </h1>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">{currentCase.title}</h2>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Scenario:</h3>
              <p className="text-lg leading-relaxed">{currentCase.scenario}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {currentCase.entries.map((entry, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">{entry.title}</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {entry.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Deduplication & Merging Process:</h3>
              <div className="space-y-6">
                {currentCase.process.map((step, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold mb-2">{step.step}</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Outcome:</h3>
              <ul className="list-disc list-inside space-y-2">
                {currentCase.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12">
            <Button
              onClick={previousPage}
              className="bg-white/20 hover:bg-white/30"
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous Case
            </Button>
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    currentPage === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={nextPage}
              className="bg-white/20 hover:bg-white/30"
            >
              Next Case <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
} 