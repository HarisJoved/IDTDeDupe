import React from "react"

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#2C3E50]">
      <main className="pt-20 w-full">
        <div className="w-full w-11/12 mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">
            What Do We Do?
          </h1>
          
          <div className="space-y-8 text-white/90">
            <p className="leading-relaxed text-lg">
              Our deduplication system is built around a centralized Name and Address Register (NAR), 
              ensuring that records of individuals and entities interacting with your organization 
              remain accurate and up to date. We aim to create a golden customer record and a unique 
              digital identity for each customer, laying the foundation for a technology-agnostic, 
              data-driven digital transformation of council services.
            </p>

            <p className="leading-relaxed text-lg">
              The NAR seamlessly integrates with third-party applications such as electronic document 
              and records management systems (EDRMS), provided that proper data management protocols 
              are followed when adding new records.
            </p>

            <p className="leading-relaxed text-lg">
              However, in many cases, best practices are overlooked, leading to duplicate or inconsistent 
              records caused by minor formatting or spelling variations. Data migration can also introduce 
              significant discrepancies, affecting the integrity of the register.
            </p>

            <p className="leading-relaxed text-lg">
              If you&apos;re uncertain about the accuracy of your NAR or the effectiveness of your data 
              management processes, our experts can audit your system, identify inconsistencies, and 
              recommend a structured data cleansing strategy. We also provide ongoing support to maintain 
              data quality and prevent future duplication.
            </p>

            <p className="leading-relaxed text-lg font-medium text-white">
              Let us help you ensure a clean, reliable, and efficient data register for seamless operations.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
} 