'use client'

// import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// import text from '@/data/landingPageTextFile.json'

export function Footer({language}) {
  const [info, setInfo] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, message } = info;
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "List-Unsubscribe": "<mailto:unsubscribe@example.com>",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Email sent:", data);
      } else {
        const errorData = await res.json();
        console.error("Failed to send email:", errorData.message);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
    setIsSubmitted(true)
  }
  if (!language) return null
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="gap-8">
          {/* <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Sitemap</h2>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/genetics" className="hover:underline text-white">{text.Genetics.title[language]}</Link></li>
                <li><Link href="/products" className="hover:underline text-white">{text.Products.title[language]}</Link></li>
                <li><Link href="/team" className="hover:underline text-white">{text.About.title[language]}</Link></li>
                <li><Link href="/Blog" className="hover:underline text-white">{text.Blog.title[language]}</Link></li>
                <li><Link href="/contact" className="hover:underline text-white">{text.Contact.title[language]}</Link></li>
                <li><Link href="/login" className="hover:underline text-white">{text.Genetics.title[language]}</Link></li>


              </ul>
            </nav>
          </div> */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                  required
                  className="bg-white text-black"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={info.email}
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                  required
                  className="bg-white text-black"
                />
              </div>
              <Textarea
                placeholder="Message"
                value={info.message}
                onChange={(e) => setInfo({ ...info, message: e.target.value })}
                required
                className="bg-white text-black"
              />
              <Button type="submit" className="bg-white text-black hover:bg-gray-200">
                {isSubmitted ? 'Message Sent' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Moroccan Cannabis Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

