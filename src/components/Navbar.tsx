import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <header>
            <nav className="flex justify-between items-center">
                <div>
                    <img src={logo} alt="Company Logo" />
                </div>
                <div>
                    <ul className="flex justify-between items-center gap-7 cursor-pointer">
                        <li>Home</li>
                        <li>Product</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
