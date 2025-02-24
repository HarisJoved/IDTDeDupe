'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-center text-4xl font-bold text-[#2C3E50] mb-8">Our Solution</h1>
          
          {/* Step 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Step 1: Discovery</h2>
            <p className="mb-4">
              During the discovery phase, a sample set of the council's Civica Authority NAR data is analyzed to identify data quality issues and their root causes. Based on this analysis, metrics for data cleansing and deduplication are finalized, and the following comprehensive reports are generated for the council's Authority NAR data:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Data Quality Report</li>
              <li>Data Governance Policy</li>
            </ul>
            <p className="mb-4">
              The Data Quality Report identifies and details various types of quality issues in the NAR data. These issues highlight inconsistencies, errors, and redundancies that need to be addressed to ensure data integrity.
            </p>
            <p className="mb-4">
              The Data Governance Policy outlines the various pre-cleansing procedures applied to the data, along with detailed data entry and creation standards. These standards serve as the single source of truth for maintaining data integrity within source systems.
            </p>
            <div className="flex justify-center">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-center" asChild>
                    <Link href="/login">Upload data for discovery and data quality report</Link>
                </Button>
            </div>

          </section>

          {/* Steps 2-6 */}
          {[
            {
              title: "Step 2: Automation (Authority ERP) NAR Staging",
              content: "The purpose of staging is to create an isolated environment for preparing, analyzing, and validating data before final integration into the system. During the NAR staging process, the raw NAR data undergoes pre-cleansing based on insights from the data quality report to enhance its compatibility for matching. The processed data is then sent to the deduplication service to produce a detailed deduplication report."
            },
            {
              title: "Step 3: Automation (Authority ERP) NAR Match Generation",
              content: "Based on the Data Analysis and Matching Rules, our Deduplication process generates potential match clusters for your data. The Deduplication Process then generates a Match Report and Simulated Merge Report for the council to match, merge, and master their data, providing the most comprehensive view of a record and all associated entities—accessible anywhere, at any time, and on any device."
            },
            {
              title: "Step 4: Automated NAR Cleansing and Maintenance",
              content: "After a thorough review of the initial NAR cleansing in the NAR Staging Environment, the cleansed NAR can be synchronized with the Authority ERP either manually or through automated processes. Once the initial cleansing is complete, routine maintenance processes can be configured to continuously cleanse NAR data within the Authority. This maintenance process can run on a daily, weekly, or monthly schedule to address data quality issues within the council's NAR."
            },
            {
              title: "Step 5: Automated NAR Merging",
              content: "Once the cleansing process is concluded and the Deduplication Process generates match clusters for the council data, the council has control over automatically or manually merging the affected NAR IDs back into Authority. The NAR merging process and associated metrics are collaboratively defined through technical and business analysis (BA) discovery sessions with council staff, ensuring alignment with the Data Governance Policy."
            },
            {
              title: "Step 6: Discovery of Other Customer Facing Systems",
              content: (
                <>
                  <p className="mb-4">
                    In this phase, we integrate resident-facing systems within the council's infrastructure, using the cleaned Authority NAR as a centralized reference point. Councils often rely on multiple systems, such as:
                  </p>
                  <ul className="list-disc list-inside mb-4 ml-4">
                    <li>Attekus Bookable for bookings</li>
                    <li>Civica Spydus for libraries</li>
                    <li>ReadyTech OpenOffice for parking permits</li>
                    <li>Gym management systems for memberships</li>
                  </ul>
                  <p>
                    To ensure data consistency and accuracy, we define Customer Metadata, forming the foundation of a Gold Record that unifies resident information across systems. Through discovery and analysis, we assess data quality, governance policies, and integration feasibility, ensuring compliance while enhancing service delivery and customer experience.
                  </p>
                </>
              )
            }
          ].map((step, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">{step.title}</h2>
              <div className="text-gray-600">{step.content}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
} 