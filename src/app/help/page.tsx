"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Mail, Phone, MessageSquare } from "lucide-react"

// Sample FAQ data
const faqs = [
    {
        question: "How do I reset my password?",
        answer:
            "To reset your password, click on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password.",
    },
    {
        question: "How can I update my profile information?",
        answer:
            "Log in to your account, go to the 'Settings' page, and click on 'Edit Profile'. Make your changes and click 'Save' to update your information.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express) and PayPal. For more information, please visit our Payment Methods page.",
    },
    {
        question: "How can I track my order?",
        answer:
            "Once your order is shipped, you will receive a tracking number via email. You can use this number on our 'Order Tracking' page or the courier's website to track your package.",
    },
    {
        question: "What is your return policy?",
        answer:
            "We offer a 30-day return policy for most items. Please check our Returns & Refunds page for detailed information on how to initiate a return and any specific conditions that may apply.",
    },
]

// Sample troubleshooting guides
const troubleshootingGuides = [
    {
        title: "Connection Issues",
        steps: [
            "Check your internet connection",
            "Clear your browser cache and cookies",
            "Try using a different browser",
            "Disable any VPN or proxy services",
            "If the problem persists, contact our support team",
        ],
    },
    {
        title: "Payment Failure",
        steps: [
            "Verify that your payment information is correct",
            "Ensure you have sufficient funds in your account",
            "Check if your card hasn't expired",
            "Try using a different payment method",
            "If issues continue, contact your bank or our support team",
        ],
    },
    {
        title: "Account Access Problems",
        steps: [
            "Double-check your username and password",
            "Use the 'Forgot Password' feature if needed",
            "Ensure your account hasn't been locked for security reasons",
            "Clear your browser cache and try again",
            "If you still can't access your account, contact support",
        ],
    },
]

export default function HelpSupportPage() {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="p-4 md:p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Help & Support</h1>
                <p className="text-muted-foreground">Find answers and get support</p>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Search Knowledge Base</CardTitle>
                    <CardDescription>Find answers to your questions</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search for answers..."
                            className="pl-8"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="faq" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                    <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
                    <TabsTrigger value="contact">Contact Support</TabsTrigger>
                </TabsList>

                <TabsContent value="faq">
                    <Card>
                        <CardHeader>
                            <CardTitle>Frequently Asked Questions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {filteredFaqs.map((faq, index) => (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                                        <AccordionContent>{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="troubleshooting">
                    <Card>
                        <CardHeader>
                            <CardTitle>Troubleshooting Guides</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                {troubleshootingGuides.map((guide, index) => (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger>{guide.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <ol className="list-decimal list-inside space-y-2">
                                                {guide.steps.map((step, stepIndex) => (
                                                    <li key={stepIndex}>{step}</li>
                                                ))}
                                            </ol>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="contact">
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Support</CardTitle>
                            <CardDescription>Get in touch with our support team</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>support@example.com</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>Live Chat (Available 24/7)</span>
                                </div>
                                <Button className="w-full">Start Live Chat</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

