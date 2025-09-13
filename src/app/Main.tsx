import { Image, Video, Zap, FileText, Users, Target, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Main() {

    const featuredApps = [
        {
            id: 1,
            title: "WAN 2.2",
            subtitle: "WAN 2.2 Image generation",
            description: "Generate complex images with this brand new and powerful WAN 2.2 model. Exceptional prompt adherence and photorealistic features.",
            image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
            badge: "Try WAN 2.2",
            category: "AI"
        },
        {
            id: 2,
            title: "Open Source",
            subtitle: "FLUX.1 Krea",
            description: "We're excited! The weights of our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
            badge: "Open",
            category: "Tools"
        }
    ];

    const apps = [
        { name: "Image", icon: <Image className="w-4 h-4" />, badge: "NEW", description: "Generate images with custom prompts and professional quality", status: "Open", color: "bg-blue-500" },
        { name: "Video", icon: <Video className="w-4 h-4" />, description: "Generate videos with Haiku, Pika, RunwayML, Luma and more", status: "Open", color: "bg-orange-500" },
        { name: "Realtime", icon: <Zap className="w-4 h-4" />, description: "Real-time something or a canvas interface for fun", status: "Open", color: "bg-cyan-500" },
        { name: "Enhancer", icon: <Target className="w-4 h-4" />, badge: "NEW", description: "Upscale and enhance images and photographs", status: "Open", color: "bg-gray-800" },
        { name: "Edit", icon: <FileText className="w-4 h-4" />, badge: "NEW", description: "Add objects, change style, or extend photos and paintings", status: "Open", color: "bg-purple-500" },
        { name: "Video Lipsync", icon: <Video className="w-4 h-4" />, badge: "NEW", description: "Upscale any video to high resolution", status: "Open", color: "bg-green-500" },
        { name: "Motion Transfer", icon: <Target className="w-4 h-4" />, badge: "NEW", description: "Transfer motion to images and videos for animation", status: "Open", color: "bg-gray-800" },
        { name: "Train", icon: <Users className="w-4 h-4" />, description: "Train Krea to replicate your style, products, or characters", status: "Open", color: "bg-orange-400" }
    ];

    const dotCount = 7;
    const currentDot = 0;

    return (
        <main className="max-w-7xl mx-auto px-6 py-6">
            {/* Featured Section */}
            <div className="mb-8">
                <div className="grid lg:grid-cols-2 gap-4">
                    {featuredApps.map((app) => (
                        <div
                            key={app.id}
                            className="relative overflow-hidden rounded-2xl shadow-sm"
                        >
                            <div className="aspect-[16/9] relative">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="text-white/80 text-xs font-medium">WAN 2.2 MODEL</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-white text-3xl font-bold mb-1">{app.title}</h3>
                                    <h4 className="text-white text-lg font-medium mb-2">{app.subtitle}</h4>
                                    <p className="text-white/90 text-sm mb-4 max-w-md leading-relaxed">{app.description}</p>
                                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                                        {app.badge}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                    <div className="flex justify-center flex-1 space-x-1">
                        {[...Array(dotCount)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-1.5 h-1.5 rounded-full ${index === currentDot
                                    ? 'bg-gray-800 dark:bg-gray-300'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="flex space-x-2">
                        <button className="p-1 rounded text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="p-1 rounded text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Generate Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Generate
                    </h2>
                    <button className="text-blue-600 text-sm hover:text-blue-700">
                        Show all
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {apps.map((app, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-xl transition-all duration-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 shadow-sm cursor-pointer group border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className={`p-2.5 rounded-lg ${app.color} group-hover:scale-105 transition-transform`}>
                                    <div className="text-white">
                                        {app.icon}
                                    </div>
                                </div>
                                {app.badge && (
                                    <span className="bg-blue-100 text-blue-800 text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                                        {app.badge}
                                    </span>
                                )}
                            </div>
                            <h3 className="font-medium text-sm mb-1 text-gray-900 dark:text-white">
                                {app.name}
                            </h3>
                            <p className="text-xs mb-3 line-clamp-2 text-gray-600 dark:text-gray-400">
                                {app.description}
                            </p>
                            <button className="text-blue-600 text-xs font-medium hover:text-blue-700">
                                {app.status}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}