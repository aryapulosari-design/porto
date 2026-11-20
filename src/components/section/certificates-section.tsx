import { DATA } from "@/data/resume";
import Link from "next/link";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="certificates-section scroll-reveal" aria-labelledby="certificates-heading">
      <div className="certificates-heading">
        <div>
          <p className="intro-eyebrow">Verified learning</p>
          <h2 id="certificates-heading">Certificates</h2>
        </div>
        <p>Cybersecurity learning milestones listed on my public LinkedIn profile.</p>
      </div>
      <div className="certificates-grid">
        {DATA.certificates.map(({ title, issuer, issued }) => (
          <article className="certificate-folder" key={title}>
            <div className="certificate-folder-top">
              <span className="certificate-issuer">{issuer}</span>
              <span className="certificate-issued">{issued}</span>
            </div>
            <h3>{title}</h3>
          </article>
        ))}
      </div>
      <Link className="certificates-source" href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer">
        View credentials on LinkedIn
      </Link>
    </section>
  );
}
