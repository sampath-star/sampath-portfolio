export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  slug: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "OSINT Investigation",
    description: "An investigation-oriented project exploring open-source intelligence collection, organization and analysis from publicly available information.",
    fullDescription: "An investigation-oriented project exploring open-source intelligence collection, organization, analysis and reporting from publicly available information. Focuses on safe, high-level public-source collection and structuring data for analysis.",
    tags: ["OSINT", "Cybersecurity", "Intelligence", "Investigation"],
    slug: "osint-investigation"
  },
  {
    id: "2",
    title: "Inventory Management System",
    description: "A structured inventory management application concept focused on tracking items, records, availability and operational workflows.",
    fullDescription: "A structured inventory management application concept focused on tracking items, records, availability and operational workflows. Designed for structured inventory records, accurate item tracking, and efficient workflow management.",
    tags: ["Management System", "Database", "Web Application"],
    slug: "inventory-management"
  },
  {
    id: "3",
    title: "MTD in Autonomous SDN",
    description: "An academic/research-oriented project exploring Moving Target Defense concepts within Autonomous Software-Defined Networking to improve network resilience and reduce attack predictability.",
    fullDescription: "An academic/research-oriented project exploring Moving Target Defense concepts within Autonomous Software-Defined Networking to improve network resilience and reduce attack predictability. Investigates moving-target defense at a research level in modern SDNs.",
    tags: ["MTD", "Autonomous SDN", "Network Security", "Research"],
    slug: "autonomous-sdn-mtd"
  }
];
