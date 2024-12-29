import { Card } from "@/components/ui/card";

const FAQ = () => {
    const faqList = [
        {
            question: "What is Example App?",
            answer: "xxx"
        },
        {
            question: "What is Example App?",
            answer: "xxx"
        },
    ];

    return (
        <section className="w-full py-12 bg-zinc-900 rounded-md" id="faq">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                    Everything you need to know about the Example App
                </p>

                <div className="max-w-4xl mx-auto grid gap-6">
                    {faqList.map((faq, index) => (
                        <Card
                            key={index}
                            className="bg-zinc-800 border border-zinc-700 p-6 hover:border-orange-500 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-orange-500 mb-3">
                                {faq.question}
                            </h3>
                            <p className="text-zinc-300">
                                {faq.answer}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;