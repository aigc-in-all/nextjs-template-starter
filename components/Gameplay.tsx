import { GraduationCap, Trophy, Share2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Gameplay = () => {
    const steps = [
        {
            icon: <GraduationCap className="w-12 h-12 text-orange-500" />,
            title: "XXX",
            description: "xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx"
        },
        {
            icon: <Trophy className="w-12 h-12 text-orange-500" />,
            title: "XXX",
            description: "xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx"
        },
        {
            icon: <Share2 className="w-12 h-12 text-orange-500" />,
            title: "XXX",
            description: "xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx"
        }
    ];

    return (
        <div className="w-full py-12 bg-zinc-900 rounded-md" id="how-to-use">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
                    Gameplay Mechanics of Example App
                </h2>
                <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                    xxx
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <Card key={index} className="bg-zinc-800 border border-zinc-700 relative overflow-hidden group hover:border-orange-500 transition-colors">
                            <CardContent className="pt-6 p-6">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="mb-4 transform group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400">
                                        {step.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gameplay;