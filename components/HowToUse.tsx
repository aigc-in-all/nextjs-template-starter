// components/HowToUse.tsx
import {
    CircuitBoard,
    ArrowRight,
    Factory,
    Calculator
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const HowToUse = () => {
    const example = {
        input: "xxx",
        requirements: [
            "xxx",
            "xxx",
            "xxx",
            "xxx",
            "xxx",
            "xxx"
        ]
    };

    const steps = [
        {
            icon: <CircuitBoard className="w-8 h-8 text-orange-500" />,
            title: "XXX",
            description: "xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx"
        },
        {
            icon: <Calculator className="w-8 h-8 text-orange-500" />,
            title: "XXX",
            description: "xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx"
        },
        {
            icon: <Factory className="w-8 h-8 text-orange-500" />,
            title: "XXX",
            description: "xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx"
        }
    ];

    return (
        <div className="w-full py-12 bg-zinc-900 rounded-md" id="example">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
                    How To Use Example App
                </h2>
                <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                    xxx
                </p>

                {/* Steps */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center ">
                            <div className="mb-4 p-4 bg-zinc-700 rounded-full">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {step.title}
                            </h3>
                            <p className="text-zinc-400 max-w-xs">
                                {step.description}
                            </p>
                            {index < steps.length - 1 && (
                                <ArrowRight className="hidden md:block h-8 w-8 text-orange-500 absolute -right-12 top-1/2 transform -translate-y-1/2" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Example Card */}
                <Card className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Example: {example.input}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-medium text-orange-500 mb-2">
                                    You'll Need:
                                </h4>
                                <ul className="space-y-2 text-zinc-300">
                                    {example.requirements.map((req, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-zinc-900 p-4 rounded-lg">
                                <p className="text-zinc-400">
                                    xxx
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default HowToUse;