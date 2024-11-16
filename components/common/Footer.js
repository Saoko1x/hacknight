import config from "@/config";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Terms of Service", href: "/tos" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="link link-hover">
            {item.label}
          </a>
        ))}
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          {config.appName}
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
