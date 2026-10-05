import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Sampath S Hebbar",
  description: "Get in touch for AI, data science, and cybersecurity opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <Contact />
    </div>
  );
}
