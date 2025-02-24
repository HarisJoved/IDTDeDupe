'use client';
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, ArrowRightLeft, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/images/image 1.jpeg",
    "/images/image 2.png"
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Add padding to account for fixed header */}
      <div className="pt-[72px]">
        {/* Hero Section */}
        <section className="bg-[#2C3E50] px-4 py-16 text-white">
          <div className="container mx-auto text-center">
            {/* Logo and Heading */}
            <div className="flex items-center justify-center mb-6">
              {/* Logo */}
              <div style={{ width: '50px', height: '40px', position: 'relative', marginRight: '16px' }}>
                <Image
                  src="/images/idtlogo.jpg"
                  alt="IDT Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Heading */}
              <h1 className="text-6xl font-bold">IDT DEDUPE</h1>
            </div>

            {/* Subheading */}
            <p className="mb-8 max-w-2xl text-lg text-white mx-auto">
              De-duplicate and find matches in your Excel spreadsheet or database
            </p>

            {/* Replace Video with Carousel */}
            <div className="mx-auto max-w-3xl">
              <div className="relative aspect-video rounded-lg bg-gray-800 overflow-hidden">
                <button 
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <Image
                  src={images[currentImage]}
                  alt={`Screenshot ${currentImage + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 hover:bg-black/70"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        currentImage === index ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="mb-6 text-4xl font-bold text-[#2C3E50] text-center">
              A simple tool for Master Data Management
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-600 text-center mx-auto">
              Unified customer data across all council systems
            </p>
            <p className="mb-12 max-w-3xl text-gray-600 text-center mx-auto">
              IDT Governance offers a solution for detecting and removing duplicate data, ensuring clean, accurate, and reliable customer and staff records. Whether you&apos;re managing customer databases, CRM systems, or large datasets, our intelligent algorithms help you eliminate redundancy, reduce errors, and optimize efficiency.
            </p>

            <h2 className="mb-6 text-2xl font-bold text-[#2C3E50] text-center">
              IDT Governance Uses
            </h2>
            <div className="text-center grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-gray-600">De-duplicating customer records</div>
              <div className="text-gray-600">Combining lists of addresses</div>
              <div className="text-gray-600">Master data management</div>
              <div className="text-gray-600">Data Merging</div>
              <div className="text-gray-600">Creating a Gold Customer Record</div>
              <div className="text-gray-600">Defining Formatting Standards</div>
              <div className="text-gray-600">Record Merging</div>
              <div className="text-gray-600">Cleansing Profiles</div>
            </div>

            <h2 className="mt-12 mb-6 text-2xl font-bold text-[#2C3E50] text-center">
              Why Choose Our Council Data Deduplication Solution?
            </h2>
            <div className="text-center">
              <p className="text-gray-600 max-w-3xl mx-auto mb-4">Our system goes beyond basic data matching—we apply smart logic to:</p>
              <ul className="list-disc list-inside text-gray-600 max-w-3xl mx-auto inline-block text-left">
                <li>Identify and merge duplicate records</li>
                <li>Ensure regulatory compliance</li>
                <li>Improve council service efficiency</li>
                <li>Prevent future duplication with intelligent data governance</li>
              </ul>
            </div>

            <p className="mt-8 text-gray-600 text-center max-w-3xl mx-auto">
              Enhance data quality. Streamline operations. Improve resident and business services. Contact us today to optimize your council&apos;s data management!
            </p>
          </div>
        </section>

        <section className="bg-[#2C3E50] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold">How can you use IDT Governance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl">👤</div>
                <h3 className="mt-4 font-bold text-lg">Find duplicates in customer data</h3>
                <p>Create a golden customer NAR</p>
              </div>
              <div>
                <div className="text-5xl">👥</div>
                <h3 className="mt-4 font-bold text-lg">Auto/Manual Merge Customer Data</h3>
                <p>Comprehensive MDM solutions</p>
              </div>
              <div>
                <div className="text-5xl">📜</div>
                <h3 className="mt-4 font-bold text-lg">Data Governance Policy</h3>
                <p>Various pre-cleansing procedures applied to the data, along with detailed data entry and creation standards</p>
              </div>
            </div>
            <p className="mt-8 font-bold">Cleansing the NAR automatically</p>
            <p className="max-w-3xl mx-auto mt-2">
              Our customer was a Victorian Council who needed to reduce the manual effort involved in deduplicating their NAR (Name and Address Register).
            </p>
            <p className="mt-6">
              Visit IDT Governance Scenarios and examples:
              <Link href="/scenarios" className="text-[#059669] font-bold hover:text-[#047857]"> Here</Link>
            </p>
            <p className="mt-8 text-sm max-w-3xl mx-auto">
              Customer identification is a fundamental aspect of any organisation, whether in the private or public sector, and plays a critical role at all levels of service delivery. Establishing a robust and immutable customer identity also ensures better decision-making, data integrity, and accurate reporting.
            </p>
            <p className="mt-4 text-sm">
              Read more of <a href="/solution" className="text-[#059669]   font-bold">Our Solution</a>
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-emerald-600 px-4 py-16 text-white">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">How it works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-emerald-500 p-6 text-center text-white">
                <Upload className="mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Upload your data</h3>
                <p>Upload a spreadsheet and find all exact and similar records within it</p>
              </Card>
              <Card className="bg-emerald-500 p-6 text-center text-white">
                <ArrowRightLeft className="mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Train it</h3>
                <p>Tell us which records are the same, and our algorithm learns from your choices</p>
              </Card>
              <Card className="bg-emerald-500 p-6 text-center text-white">
                <CheckCircle2 className="mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Validate and download</h3>
                <p>Review the suggestions and download your cleaned up data</p>
              </Card>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="bg-gray-100 px-4 py-16">
          <div className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Questions?</h2>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
            <p className="mt-6 text-gray-600">
              We are ready to help! Read out <a href="/faqs" className="text-[#059669]   font-bold">FAQs</a>
            </p>
            
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-white px-4 py-8">
          <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 font-semibold">About</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Company</Link>
                  </li>
                  <li>
                    <Link href="#">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Product</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Features</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Support</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Documentation</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Connect</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#">Twitter</Link>
                  </li>
                  <li>
                    <Link href="#">GitHub</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

