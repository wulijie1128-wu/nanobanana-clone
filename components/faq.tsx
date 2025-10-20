import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Nano Banana?",
    answer:
      "Nano Banana is an advanced AI-powered image editing platform that allows you to transform any image using simple text prompts. Our model delivers consistent character editing and scene preservation that outperforms competitors.",
  },
  {
    question: "How does the image upload work?",
    answer:
      "Simply drag and drop your image into the upload area or click to browse your files. We support all common image formats (JPG, PNG, WebP) up to 50MB. Once uploaded, you can enter your text prompt to describe the changes you want.",
  },
  {
    question: "What makes Nano Banana different from other AI editors?",
    answer:
      "Nano Banana excels in three key areas: one-shot editing (no multiple iterations needed), superior scene preservation (maintains original composition and lighting), and character consistency across multiple images. Our natural language processing also makes it incredibly easy to use.",
  },
  {
    question: "Can I process multiple images at once?",
    answer:
      "Yes! Our batch processing feature allows you to upload and edit multiple images simultaneously, perfect for professional workflows and large projects.",
  },
  {
    question: "What kind of edits can I make?",
    answer:
      "You can make virtually any edit using natural language prompts: change backgrounds, adjust lighting, apply artistic styles, enhance portraits, transform scenes, and much more. The possibilities are limited only by your imagination.",
  },
  {
    question: "How fast is the processing?",
    answer:
      "Nano Banana delivers results in seconds, not minutes. Our optimized AI model ensures ultra-fast processing without compromising on quality.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! We offer a free trial so you can experience the power of Nano Banana before committing to a subscription. Sign up to get started today.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support all common image formats including JPG, PNG, WebP, and more. Maximum file size is 50MB per image.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              Everything you need to know about Nano Banana
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
