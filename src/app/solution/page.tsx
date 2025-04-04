'use client';

export default function SolutionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Add padding to account for fixed header */}
      <div className="pt-[64px] md:pt-[68px]">
        <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] mb-6 md:mb-8">Our Solution</h1>
          
          {/* Step 1 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-3 md:mb-4">Step 1: Discovery</h2>
            <p className="mb-4">
              During the discovery phase, a sample set of the council&apos;s Civica Authority NAR data is analyzed to identify data quality issues and their root causes. Based on this analysis, metrics for data cleansing and deduplication are finalized, and the following comprehensive reports are generated for the council&apos;s Authority NAR data:
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
          </section>

          {/* Step 2 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-3 md:mb-4">Step 2: Automation (Authority ERP) NAR Staging</h2>
            <p className="mb-4">
              The purpose of staging is to create an isolated environment for preparing, analyzing, and validating data before final integration into the system. During the NAR staging process, the raw NAR data undergoes pre-cleansing based on insights from the data quality report to enhance its compatibility for matching. The processed data is then sent to the deduplication service to produce a detailed deduplication report.
            </p>
          </section>

          {/* Step 3 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-3 md:mb-4">Step 3: Automation (Authority ERP) NAR Match Generation</h2>
            <p className="mb-4">
              Based on the Data Analysis and Matching Rules, our Deduplication process generates potential match clusters for your data. The Deduplication Process then generates a Match Report and Simulated Merge Report for the council to match, merge, and master their data, providing the most comprehensive view of a record and all associated entities—accessible anywhere, at any time, and on any device.
            </p>
          </section>

          {/* Step 4 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-3 md:mb-4">Step 4: Automated NAR Cleansing and Maintenance</h2>
            <p className="mb-4">
              After a thorough review of the initial NAR cleansing in the NAR Staging Environment, the cleansed NAR can be synchronized with the Authority ERP either manually or through automated processes. Once the initial cleansing is complete, routine maintenance processes can be configured to continuously cleanse NAR data within the Authority. This maintenance process can run on a daily, weekly, or monthly schedule to address data quality issues within the council&apos;s NAR.
            </p>
          </section>

          {/* Step 5 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-3 md:mb-4">Step 5: Automated NAR Merging</h2>
            <p className="mb-4">
              Once the cleansing process is concluded and the Deduplication Process generates match clusters for the council data, the council has control over automatically or manually merging the affected NAR IDs back into Authority. The NAR merging process and associated metrics are collaboratively defined through technical and business analysis (BA) discovery sessions with council staff, ensuring alignment with the Data Governance Policy.
            </p>
          </section>

          {/* Step 6 */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2C3E50] mb-3 md:mb-4">Step 6: Discovery of Other Customer Facing Systems</h2>
            <p className="mb-4">
              In this phase, we integrate resident-facing systems within the council&apos;s infrastructure, using the cleaned Authority NAR as a centralized reference point. Councils often rely on multiple systems, such as:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Attekus Bookable for bookings</li>
              <li>Civica Spydus for libraries</li>
              <li>ReadyTech OpenOffice for parking permits</li>
              <li>Gym management systems for memberships</li>
            </ul>
            <p className="mb-4">
              To ensure data consistency and accuracy, we define Customer Metadata, forming the foundation of a Gold Record that unifies resident information across systems. Through discovery and analysis, we assess data quality, governance policies, and integration feasibility, ensuring compliance while enhancing service delivery and customer experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 