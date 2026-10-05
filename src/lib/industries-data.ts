export interface IndustryData {
  id: string;
  name: string;
  seoTitle: string;
  description: string;
  expertise: string;
  experience: string;
  image: string;
  keyServices: string[];
  highlights: string;
}

export const INDUSTRIES_DATA: IndustryData[] = [
  {
    id: "it",
    name: "Information Technology",
    seoTitle: "IT Industry HR Solutions & Event Management | APCASD PLANAR",
    description:
      "Leading HR and event management partner for IT companies. We specialize in talent acquisition, employee engagement, and tech conferences that drive innovation and growth in the rapidly evolving IT sector.",
    expertise:
      "We understand the unique challenges of IT organizations - from managing highly skilled technical talent to organizing high-impact tech events. Our solutions are designed to support rapid scaling and maintain company culture.",
    experience:
      "With years of experience working with leading IT companies, startups, and tech giants, we've successfully managed thousands of IT professionals and organized major tech conferences and team-building events.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    keyServices: ["Talent Acquisition", "Tech Conferences", "Team Engagement Programs", "Leadership Development"],
    highlights:
      "Expertise in recruiting specialized IT talent, managing technical hiring processes, and creating engaging tech events that attract industry-leading professionals.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    seoTitle: "Manufacturing HR Solutions & Corporate Events | APCASD PLANAR",
    description:
      "Specialized HR and event management services for manufacturing companies. We support your workforce planning, safety-focused training, and operational excellence through tailored people solutions.",
    expertise:
      "Manufacturing demands precision, safety, and operational efficiency. We provide HR solutions that enhance worker productivity, ensure compliance, and create a culture of excellence on the production floor.",
    experience:
      "Proven track record with major manufacturing facilities managing blue-collar and white-collar workforce needs, conducting safety trainings, and organizing team-building events that strengthen plant communities.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
    keyServices: ["Safety Training", "Workforce Planning", "Production Efficiency Programs", "Employee Recognition"],
    highlights:
      "Specialized in manufacturing recruitment, safety compliance training, and events that boost workplace morale across all levels of production teams.",
  },
  {
    id: "automotive",
    name: "Automotive",
    seoTitle: "Automotive Industry HR & Event Management Solutions | APCASD PLANAR",
    description:
      "Dedicated HR and event management partner for the automotive industry. We support dealerships, manufacturers, and suppliers with targeted talent solutions and impactful corporate events.",
    expertise:
      "The automotive sector requires fast-paced hiring, continuous skill development, and innovative employee engagement. We deliver solutions that keep your teams competitive and motivated.",
    experience:
      "Extensive experience with major automotive OEMs, component suppliers, and dealership networks. We've supported their hiring drives, training programs, and large-scale industry events.",
    image: "https://ptc-p-001.sitecorecontenthub.cloud/api/public/content/b5652be4bd904cf8a51005df000c5cd4?v=32324506",
    keyServices: ["Dealer Recruitment", "Technical Training", "Industry Conferences", "Dealer Engagement Events"],
    highlights:
      "Deep understanding of automotive sales, service, and manufacturing roles. Expert at organizing dealer meets, automotive expos, and technical skill development programs.",
  },
  {
    id: "bfsi",
    name: "BFSI",
    seoTitle: "Banking & Finance HR Solutions & Event Management | APCASD PLANAR",
    description:
      "Premium HR and event management services for Banking, Financial Services, and Insurance companies. We support your talent strategy, compliance requirements, and high-impact client events.",
    expertise:
      "Financial services require strict compliance, sophisticated talent management, and impeccable event execution. We specialize in creating professional, secure environments for banking and insurance operations.",
    experience:
      "Partnership with leading banks, insurance companies, and fintech firms. We've managed executive recruitment, compliance training, investor conferences, and premium client engagement events.",
    image: "https://images.unsplash.com/photo-1553729784-e91953dec042?w=800&q=80",
    keyServices: ["Executive Recruitment", "Compliance Training", "Client Conferences", "Investor Relations Events"],
    highlights:
      "Expert in banking and insurance talent management, regulatory compliance training, and organizing sophisticated client and investor engagement events.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    seoTitle: "Healthcare HR Solutions & Medical Events | APCASD PLANAR",
    description:
      "Specialized HR and event management for healthcare providers, hospitals, and medical institutions. We support your clinical and administrative staffing needs and organize medical conferences and health initiatives.",
    expertise:
      "Healthcare demands compassionate, skilled teams and seamless operations. We provide HR solutions that ensure you have the right medical professionals, combined with impactful health-focused events.",
    experience:
      "Worked with leading hospitals, diagnostic centers, nursing homes, and healthcare networks. We've supported medical recruitment, staff training programs, and organized medical conferences and health awareness campaigns.",
    image: "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    keyServices: ["Medical Recruitment", "Healthcare Training", "Medical Conferences", "Health Awareness Events"],
    highlights:
      "Specialized in healthcare staffing including nurses, doctors, and support staff. Expert at organizing medical conferences, health awareness programs, and staff wellness events.",
  },
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    seoTitle: "Pharma Industry HR & Event Management Solutions | APCASD PLANAR",
    description:
      "Dedicated HR and event management services for pharmaceutical companies. We support your scientific and commercial talent needs and organize industry conferences and regulatory-compliant events.",
    expertise:
      "Pharmaceutical companies require specialized talent with scientific expertise and regulatory knowledge. We deliver targeted HR solutions and organize professional events that elevate your brand.",
    experience:
      "Partnership with leading pharmaceutical companies, biotech firms, and medical device manufacturers. We've managed scientific recruitment, training programs, and organized major pharma conferences and medical events.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    keyServices: ["Scientific Recruitment", "Regulatory Training", "Industry Conferences", "Product Launch Events"],
    highlights:
      "Expert in pharmaceutical talent acquisition, from scientists to sales professionals. Specialized in organizing medical congresses, product launch events, and regulatory compliance programs.",
  },
  {
    id: "retail-fmcg",
    name: "Retail & FMCG",
    seoTitle: "Retail & FMCG HR Solutions & Brand Events | APCASD PLANAR",
    description:
      "Comprehensive HR and event management solutions for retail and FMCG companies. We support your high-volume hiring needs and organize impactful brand events that drive sales and customer engagement.",
    expertise:
      "Retail and FMCG operate with tight margins and fast-moving timelines. We provide scalable HR solutions and dynamic event management that keeps your operations running smoothly.",
    experience:
      "Extensive experience with major retail chains, FMCG brands, and distribution networks. We've managed seasonal hiring campaigns, store launches, trade shows, and brand activation events.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
    keyServices: ["Store Staff Recruitment", "Sales Training", "Trade Shows", "Brand Activation Events"],
    highlights:
      "Specialist in high-volume retail recruitment, sales team training, and organizing impactful in-store events and trade exhibitions.",
  },
  {
    id: "education",
    name: "Education",
    seoTitle: "Educational Institution HR & Campus Events | APCASD PLANAR",
    description:
      "Specialized HR and event management services for educational institutions. We support your faculty recruitment, staff development, and organize impactful student and alumni events.",
    expertise:
      "Educational institutions need to attract talented educators and create engaging campus experiences. We provide HR solutions that build strong academic communities and memorable educational events.",
    experience:
      "Worked with schools, colleges, universities, and training institutes. We've supported faculty recruitment, administrative staffing, organized convocations, alumni meets, and campus engagement programs.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    keyServices: ["Faculty Recruitment", "Staff Development", "Student Events", "Alumni Engagement"],
    highlights:
      "Expert in educational staffing and campus event management. Specialized in organizing convocations, alumni reunions, educational conferences, and student engagement programs.",
  },
  {
    id: "startups",
    name: "Startups",
    seoTitle: "Startup HR Solutions & Growth Events | APCASD PLANAR",
    description:
      "Agile HR and event management solutions for startups and emerging companies. We support your rapid scaling needs and organize pitch events and investor engagement programs.",
    expertise:
      "Startups move fast and need flexible HR support. We provide nimble HR solutions and help organize investor pitches, product launches, and team-building events that fuel growth.",
    experience:
      "Supported hundreds of startups across various sectors including fintech, e-commerce, SaaS, and technology. We've managed rapid hiring, founder coaching, pitch events, and company milestone celebrations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    keyServices: ["Rapid Hiring", "Founder Coaching", "Pitch Events", "Company Growth Events"],
    highlights:
      "Specialized in startup hiring, culture building during scale-up phases, and organizing investor pitches and product launch events.",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    seoTitle: "Professional Services HR & Client Events | APCASD PLANAR",
    description:
      "Premium HR and event management solutions for consulting, legal, accounting, and professional services firms. We support your talent development and organize client engagement events.",
    expertise:
      "Professional services firms operate on expertise and relationships. We provide targeted HR solutions for attracting top talent and organizing sophisticated client events.",
    experience:
      "Partnership with leading consulting firms, law firms, accounting practices, and professional services organizations. We've managed executive recruitment, staff development, and organized client conferences and networking events.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    keyServices: ["Executive Recruitment", "Client Conferences", "Leadership Programs", "Networking Events"],
    highlights:
      "Expert in recruiting and developing consulting and professional services talent. Specialized in organizing high-level client events, executive roundtables, and industry networking forums.",
  },
];
