'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the email using your backend
    // For now, we'll just simulate opening the mail client
    const mailtoLink = `mailto:INFO@IDTSOLUTIONS.COM.AU?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setSubmitMessage('Thank you for your message!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#2C3E50] pt-[72px]">
      <div className="container mx-auto px-4 py-16">
        <Card className="mx-auto max-w-2xl bg-white">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-center text-2xl text-[#2C3E50]">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#2C3E50]">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#2C3E50]">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#2C3E50]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full min-h-[120px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-emerald-500 focus:ring-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-emerald-600 hover:bg-emerald-700 w-full text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>

              {submitMessage && (
                <p className="text-center text-emerald-600 mt-4">{submitMessage}</p>
              )}

              <div className="text-center text-sm text-gray-600 mt-4">
                Or email us directly at:{' '}
                <a 
                  href="mailto:INFO@IDTSOLUTIONS.COM.AU"
                  className="text-emerald-600 hover:underline"
                >
                  INFO@IDTSOLUTIONS.COM.AU
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 