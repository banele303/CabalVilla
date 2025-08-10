import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "What construction services do you provide?",
      answer:
        "We offer comprehensive construction and engineering services including electrical work, plumbing, mechanical engineering, civil engineering, general construction, and building services. Our licensed professionals handle everything from small repairs to large commercial projects with expertise and reliability.",
    },
    {
      question: "Are your contractors licensed and insured?",
      answer:
        "Yes, all our contractors and engineers are fully licensed, bonded, and insured. We maintain comprehensive liability insurance and workers' compensation coverage. Our team includes licensed electricians, plumbers, professional engineers, and certified contractors who meet all local and state requirements.",
    },
    {
      question: "Do you provide 24/7 emergency services?",
      answer:
        "Absolutely. We understand that construction emergencies don't wait for business hours. Our emergency service team is available 24/7 for urgent electrical, plumbing, and structural issues. Call our emergency hotline at +27 83 222 5674 for immediate assistance.",
    },
    {
      question: "How do you ensure quality in your construction projects?",
      answer:
        "Quality is our top priority. We implement rigorous quality control processes, use only premium materials, and follow industry best practices. All work is performed by experienced professionals and undergoes thorough inspections. We also provide comprehensive warranties on our workmanship.",
    },
    {
      question: "What is the typical timeline for construction projects?",
      answer:
        "Project timelines vary depending on scope and complexity. Small electrical or plumbing jobs may be completed in 1-2 days, while larger construction projects can take several weeks to months. We provide detailed project schedules during consultation and keep you updated throughout the process.",
    },
    {
      question: "Do you provide free estimates and consultations?",
      answer:
        "Yes, we offer free estimates and consultations for all our services. Our experts will assess your project requirements, provide professional recommendations, and deliver a detailed quote with no obligation. We believe in transparent pricing and clear communication from the start.",
    },
    {
      question: "Can you handle both residential and commercial projects?",
      answer:
        "Yes, we serve both residential and commercial clients. Our team has extensive experience with home renovations, office buildings, retail spaces, industrial facilities, and specialized projects like data centers and medical facilities. We scale our services to match your project size and requirements.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We provide construction services throughout the metropolitan area and surrounding regions. For specific location coverage or projects outside our standard service area, please contact us to discuss your needs. We're always willing to work with clients on special arrangements for larger projects.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about our construction services, processes, and expertise. If you don't see your question
            here, please contact our team for personalized assistance.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

