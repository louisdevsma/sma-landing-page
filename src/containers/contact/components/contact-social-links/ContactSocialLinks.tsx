interface ContactSocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface ContactSocialLinksProps {
  links: ContactSocialLink[];
}

export const ContactSocialLinks = ({ links }: ContactSocialLinksProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-white text-lg font-bold">Follow Us</h3>
      <div className="flex items-center gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            className="text-muted-foreground hover:text-white transition-colors"
            data-alt={`${link.name} social media icon`}
            href={link.href}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
