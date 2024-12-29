import { Star } from "lucide-react";

const UserReviews: React.FC = () => {
    const reviews = [
        {
            name: "Marcus J.",
            role: "Professional Gamer",
            comment: "xxx xxx xxx",
            rating: 5,
            platform: "Steam Player"
        },
        {
            name: "Marcus J.",
            role: "Professional Gamer",
            comment: "xxx xxx xxx",
            rating: 5,
            platform: "Steam Player"
        },
        {
            name: "Marcus J.",
            role: "Professional Gamer",
            comment: "xxx xxx xxx",
            rating: 5,
            platform: "Steam Player"
        },
        {
            name: "Marcus J.",
            role: "Professional Gamer",
            comment: "xxx xxx xxx",
            rating: 5,
            platform: "Steam Player"
        },
        {
            name: "Marcus J.",
            role: "Professional Gamer",
            comment: "xxx xxx xxx",
            rating: 5,
            platform: "Steam Player"
        },
        {
            name: "Marcus J.",
            role: "Professional Gamer",
            comment: "xxx xxx xxx",
            rating: 5,
            platform: "Steam Player"
        }
    ];

    const renderStars = (rating: number) => {
        return [...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
        ));
    };

    return (
        <div className="w-full py-12 bg-zinc-900 rounded-md" id="testimonials">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
                    What Users Say About Example App
                </h2>
                <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
                    xxx
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-orange-500 transition-colors"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                {renderStars(testimonial.rating)}
                            </div>

                            <blockquote className="text-zinc-300 mb-4 min-h-[100px]">
                                "{testimonial.comment}"
                            </blockquote>

                            <div className="border-t border-zinc-700 pt-4">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-white">
                                        {testimonial.name}
                                    </span>
                                    <span className="text-orange-500 text-sm">
                                        {testimonial.role}
                                    </span>
                                    <span className="text-sm text-zinc-500 mt-1">
                                        {testimonial.platform}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserReviews;