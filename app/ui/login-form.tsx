export default function LoginForm() {
    return (
        <form>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
            />
            <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
            />
            <button className="mt-4 w-full">
                Log in
            </button>
        </form>
    )
}

