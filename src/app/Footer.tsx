export default function Footer() {
    return (
        // <div></div>
        <footer className="border-t mt-8 dark:bg-gray-900 border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-black text-sm font-bold">K</span>
                        </div>
                        <span className="text-white text-sm font-medium">Krea AI</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <span className="text-white text-sm">curated by</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                                    <span className="text-black text-xs italic font-bold">M</span>
                                </div>
                                <span className="text-white text-sm font-medium">Mobbin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}