export default function Widget() {
    return (
        <>
        <body className="bg-white text-zinc-800 dark:bg-zinc-900 dark:text-white">
            <nav className="p-5 bg-zinc-100 dark:bg-zinc-800">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-xl font-semibold">Tejas Raut 🌐</div>
                    <div className="space-x-4">
                        <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white">Home</a>
                        <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white">Blog</a>
                        <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white">Projects</a>
                        <a href="#" className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white">Search</a>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center">
                    <img src="https://placehold.co/200x200" alt="Tejas Raut" className="rounded-full mb-4"/>
                    <h1 className="text-3xl font-bold mb-2">Tejas Raut</h1>
                    <p className="text-center mb-4">Hi 👋! I'm Tejas, I am a dedicated and skilled professional with experience in Information Technology, proficient in languages such as C++, Java, HTML, CSS, and JavaScript, and equipped with knowledge in technologies/frameworks like React.js, Firebase. My strength lies in dedication, staying updated, expanding skills, and applying expertise to deliver exceptional results in the IT industry and contribute to project success.</p>
                    <div className="flex space-x-3">
                        <a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                        </a>
                        <a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.02 3.68 9.18 8.44 9.87v-6.99H8.9V12h1.54V9.71c0-1.53.87-2.38 2.2-2.38.64 0 1.31.12 1.31.12v1.44h-.74c-.73 0-.96.45-.96.91v1.08h1.64l-.26 1.88h-1.38v6.99C18.32 21.18 22 17.02 22 12z"></path></svg>
                        </a>
                        <a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                        </a>
                        <a href="#" className="text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
            <footer className="text-center p-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                © 2023 Tejas Raut
            </footer>
        </body>
        </>
        
        
    )
}