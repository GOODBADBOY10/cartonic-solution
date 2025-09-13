import { Sun, Moon, Home, Minus, Square, Triangle, Check, Type, Menu, Bell, Headphones, GalleryHorizontal } from 'lucide-react';

type HeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
    return (
        <header className="border-b transition-colors duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-14">
                    {/* Left side - Logo and Navigation */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center">
                                <span className="text-white text-xs font-bold">K</span>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                krea Logo
                            </span>
                        </div>
                    </div>

                    {/* Center Navigation */}
                    <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
                        <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Home className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Minus className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Square className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Triangle className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Check className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Type className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <Menu className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right side - User controls */}
                    <div className="flex items-center space-x-3">
                        <button className="text-xs flex items-center gap-1 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                            <GalleryHorizontal className='w-4 h-4' />
                            Gallery
                        </button>
                        <button className="text-xs flex items-center gap-1 px-2 py-1 rounded text-gray-600 dark:text-gray-300">
                            <Headphones className='w-4 h-4' />
                            Support
                        </button>
                        <Bell className="w-4 h-4 text-gray-600" />
                        <button
                            onClick={toggleTheme}
                            className="p-1.5 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">👤</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}