export function AppFooter(): JSX.Element {
    return (
        <footer className="flex bg-primary text-white justify-center p-4">
            <div>
                <ul className="flex flex-row gap-4 align-middle justify-between w-full">
                    <li>
                        <a
                            href="mailto:hpgill312@gmail.com"
                            className="text-2xl"
                        >
                            email
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/henrypgill"
                            className="text-2xl"
                            target="blank"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/henrypgill/"
                            target="blank"
                            className="text-2xl"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
