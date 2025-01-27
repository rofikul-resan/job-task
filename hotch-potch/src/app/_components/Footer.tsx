import React from "react";
interface FooterLink {
  title: string;
  links: string[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
  {
    title: "Links",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

const Footer = () => {
  return (
    <div className=" text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-32">
          {footerLinks.map((linkGroup) => (
            <div key={linkGroup.title}>
              <h5 className=" mb-8">{linkGroup.title}</h5>
              <ul className="space-y-4 font-light tracking-wide">
                {linkGroup.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-lgBlue transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
