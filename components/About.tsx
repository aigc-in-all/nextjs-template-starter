const About = () => {
    return (
        <div className="flex flex-col space-y-12 items-center justify-center" id="about">
            <div className="w-full pt-12 pb-4 bg-zinc-900 rounded-md">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
                        What is Example App?
                    </h2>
                    <div>
                        <p className="text-zinc-400 text-center mb-12">
                            xxx
                        </p>
                        <img src="/logo.png" alt="Example App" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;