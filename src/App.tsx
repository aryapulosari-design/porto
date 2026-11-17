import { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'

const linkedin = 'https://id.linkedin.com/in/arya-kharisudin-irfani-055311328'

const projects = [
  { slug: 'borderwatch', number: '01', title: 'BorderWatch', category: 'Mobile Development', short: 'Konsep aplikasi mobile berbasis geofencing.', theme: 'border', tags: ['Geofencing', 'Mobile App'], focus: 'Menjelajahi penggunaan lokasi dan batas wilayah digital dalam pengalaman aplikasi mobile.' },
  { slug: 'agen-evakuasi-pendaki', number: '02', title: 'Agen Evakuasi Pendaki', category: 'Artificial Intelligence', short: 'Konsep dukungan keputusan untuk skenario evakuasi pendaki.', theme: 'evac', tags: ['AI', 'Decision Support'], focus: 'Mengkaji bagaimana informasi lapangan dapat membantu proses pengambilan keputusan saat evakuasi.' },
  { slug: 'maggot-monitoring-dashboard', number: '03', title: 'Maggot Monitoring Dashboard', category: 'Web Development', short: 'Konsep dashboard untuk pemantauan dan pengelolaan data.', theme: 'maggot', tags: ['Dashboard', 'Data Management'], focus: 'Menyusun tampilan data operasional agar lebih mudah dipantau dan ditinjau.' },
] as const

const certifications = [
  { issuer: 'Cisco', title: 'Introduction to Cybersecurity', mark: 'C' },
  { issuer: 'TryHackMe', title: 'Pre Security Certificate', mark: 'THM' },
  { issuer: 'TryHackMe', title: 'Cyber Security 101 Certificate', mark: 'THM' },
  { issuer: 'Aguna Course', title: 'Aguna Course', mark: 'A' },
]

const nav = [
  ['Tentang', '#about'], ['Pengalaman', '#experience'], ['Keahlian', '#skills'],
  ['Proyek', '#projects'], ['Cyber Lab', '#lab'], ['Sertifikasi', '#certifications'], ['Kontak', '#contact'],
]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  return <header className="site-header"><div className="container nav-inner">
    <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="ARYA, ke beranda">ARYA<span>.</span></Link>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? 'Tutup' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    <nav id="site-nav" className={open ? 'nav-links open' : 'nav-links'} aria-label="Navigasi utama">
      {nav.map(([label, hash]) => <Link key={hash} to={'/' + hash} onClick={() => setOpen(false)} className={location.hash === hash ? 'active' : ''}>{label}</Link>)}
    </nav>
  </div></header>
}

function ScrollToSection() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function SectionHead({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-head"><div><p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p><h2>{title}</h2></div>{description && <p className="section-description">{description}</p>}</div>
}

function ProjectArt({ theme }: { theme: string }) {
  return <div className={'project-art ' + theme} aria-hidden="true"><div className="art-grid" />
    {theme === 'border' && <div className="art-border"><div className="map-ring ring-one"/><div className="map-ring ring-two"/><div className="map-pin">●</div><div className="art-caption">GEOFENCE / 001</div></div>}
    {theme === 'evac' && <div className="art-evac"><div className="mountain mountain-one"/><div className="mountain mountain-two"/><div className="route-line"/><div className="route-dot dot-one"/><div className="route-dot dot-two"/><div className="art-caption">ROUTE / DECISION</div></div>}
    {theme === 'maggot' && <div className="art-dashboard"><div className="dash-top"><i/><i/><i/></div><div className="dash-bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="dash-bottom"><span/><span/><span/></div><div className="art-caption">MONITOR / DATA</div></div>}
  </div>
}

function Home() {
  return <><main>
    <section className="hero" id="home"><div className="container hero-grid"><div className="hero-copy">
      <div className="availability"><span/> Portfolio / Arya Kharisudin Irfani</div>
      <p className="hero-kicker">CYBERSECURITY · AI ENGINEERING · COMMUNITY</p>
      <h1>Securing systems.<br/><em>Building intelligence.</em></h1>
      <p className="hero-intro">Saya Arya Kharisudin Irfani, mahasiswa Teknologi Informasi di UIN Maulana Malik Ibrahim Malang. Saya mendalami keamanan siber defensif, kecerdasan buatan, dan pengembangan solusi digital.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">Lihat proyek <span aria-hidden="true">↗</span></a><a className="button quiet" href={linkedin} target="_blank" rel="noopener noreferrer">Terhubung di LinkedIn <span aria-hidden="true">↗</span></a></div>
      <div className="hero-foot"><span>Berbasis di Indonesia</span><span className="foot-rule"/><span>Ketua Komunitas ETH-0</span></div>
    </div><div className="hero-visual" aria-label="Ilustrasi abstrak jaringan, analisis, dan sistem digital"><div className="visual-orbit orbit-a"/><div className="visual-orbit orbit-b"/><div className="visual-core"><span className="core-letter">A<span>.</span></span><small>SYSTEMS · INTELLIGENCE</small></div><div className="visual-node node-a">01 <span>DEFEND</span></div><div className="visual-node node-b">02 <span>LEARN</span></div><div className="visual-node node-c">03 <span>BUILD</span></div><div className="visual-index">FIG. 01 / AN APPROACH TO TECHNOLOGY</div></div></div></section>

    <section className="section about-section" id="about"><div className="container"><SectionHead eyebrow="01 / TENTANG SAYA" title="Keingintahuan yang menjadi arah." description="Berangkat dari teknologi informasi, saya membangun pemahaman lewat praktik, komunitas, dan proyek yang menjawab masalah nyata."/><div className="about-grid"><div className="about-statement"><span className="large-quote">“</span><p>Teknologi yang baik perlu dipahami dari dua sisi: bagaimana ia bekerja, dan bagaimana menjaganya tetap aman.</p></div><div className="about-details"><p>Fokus saya berada pada defensive security, Blue Team, dan AI Engineering. Saya tertarik menghubungkan cara berpikir analitis dengan implementasi yang bermanfaat bagi pengguna.</p><div className="education"><div className="timeline-dot"/><div><span className="micro-label">PENDIDIKAN</span><h3>UIN Maulana Malik Ibrahim Malang</h3><p>Teknologi Informasi</p></div></div></div></div></div></section>

    <section className="section experience-section" id="experience"><div className="container"><SectionHead eyebrow="02 / PENGALAMAN" title="Belajar bersama. Bertumbuh bersama." description="Kepemimpinan dan kolaborasi adalah bagian penting dari perjalanan teknis saya."/><div className="experience-grid"><div className="experience-feature"><p className="feature-label">LEADERSHIP / ETH-0</p><div className="eth-symbol">ETH<span>—</span>0</div><p>Komunitas sebagai ruang untuk belajar keamanan siber, berbagi perspektif, dan tumbuh bersama.</p><a href="#eth" className="text-link">Tentang ETH-0 <span aria-hidden="true">↗</span></a></div><div className="experience-list"><article className="experience-item"><span className="item-number">01</span><div><p className="micro-label">KOMUNITAS</p><h3>Ketua Komunitas ETH-0</h3><p>Memimpin ruang kolaborasi dan pembelajaran komunitas keamanan siber.</p></div><span className="item-arrow" aria-hidden="true">↗</span></article><article className="experience-item"><span className="item-number">02</span><div><p className="micro-label">ORGANISASI</p><h3>HMPS Teknik Informatika “Encoder”</h3><p>Pengalaman berorganisasi dalam lingkungan mahasiswa Teknik Informatika.</p></div><span className="item-arrow" aria-hidden="true">↗</span></article></div></div></div></section>

    <section className="section skills-section" id="skills"><div className="container"><SectionHead eyebrow="03 / KEAHLIAN" title="Bidang yang saya tekuni." description="Kemampuan ditampilkan sebagai area pembelajaran dan praktik, tanpa persentase buatan."/><div className="skills-grid"><article className="skill-block"><span className="skill-icon">◇</span><span className="skill-index">01</span><h3>Cybersecurity</h3><p>Memahami sistem, mengamati sinyal, dan berpikir defensif.</p><div className="tags"><span>Defensive Security</span><span>Blue Team</span><span>Network Security</span><span>Log Analysis</span></div></article><article className="skill-block"><span className="skill-icon">✳</span><span className="skill-index">02</span><h3>AI & Programming</h3><p>Menggunakan pemrograman untuk mengeksplorasi solusi berbasis data.</p><div className="tags"><span>Python</span><span>Artificial Intelligence</span><span>Automation</span></div></article><article className="skill-block"><span className="skill-icon">▦</span><span className="skill-index">03</span><h3>Software Development</h3><p>Membangun antarmuka dan alur aplikasi yang jelas dan berguna.</p><div className="tags"><span>Flutter</span><span>Laravel</span><span>REST API</span><span>Database</span></div></article></div></div></section>

    <section className="section projects-section" id="projects"><div className="container"><SectionHead eyebrow="04 / PROYEK PILIHAN" title="Ide yang diwujudkan lewat sistem." description="Tiga proyek yang sedang saya dokumentasikan. Detail teknis dan hasil pengujian akan ditambahkan setelah diverifikasi."/><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.slug}><Link to={'/projects/' + project.slug} aria-label={'Lihat detail ' + project.title}><ProjectArt theme={project.theme}/><div className="project-card-body"><div className="card-meta"><span>{project.number} / {project.category}</span><span aria-hidden="true">↗</span></div><h3>{project.title}</h3><p>{project.short}</p><span className="card-link">Lihat detail <span aria-hidden="true">→</span></span></div></Link></article>)}</div></div></section>

    <section className="section lab-section" id="lab"><div className="container lab-grid"><div><p className="eyebrow light-eyebrow"><span className="eyebrow-line"/>05 / CYBERSECURITY LAB</p><h2>Rasa ingin tahu,<br/><em>diuji dalam praktik.</em></h2><p>Ruang untuk mendokumentasikan perjalanan belajar keamanan siber. Catatan lab akan dipublikasikan setelah materi dan izin publikasinya ditinjau.</p><a className="button outline-light" href="#certifications">Lihat jejak pembelajaran <span aria-hidden="true">↗</span></a></div><div className="lab-panel"><div className="lab-panel-top"><span>LEARNING AREAS</span><span>ARYA / LAB</span></div>{['TryHackMe Learning Journey', 'Blue Team & SOC Practice', 'Network Security', 'Security Tools & Experiments'].map((item, index) => <div className="lab-row" key={item}><span>0{index + 1}</span><strong>{item}</strong><span aria-hidden="true">↗</span></div>)}</div></div></section>

    <section className="section certifications-section" id="certifications"><div className="container"><SectionHead eyebrow="06 / SERTIFIKASI" title="Bukti untuk terus belajar." description="Sertifikasi yang tercantum dalam PRD. Tanggal dan tautan verifikasi akan dilengkapi setelah dokumen sumber tersedia."/><div className="cert-grid">{certifications.map((cert, index) => <article className="cert-card" key={cert.title}><div className="cert-top"><span className="cert-mark">{cert.mark}</span><span>0{index + 1} / 04</span></div><div><p className="micro-label">{cert.issuer}</p><h3>{cert.title}</h3></div><div className="cert-bottom"><span>Detail verifikasi menyusul</span><span aria-hidden="true">↗</span></div></article>)}</div></div></section>

    <section className="section community-section" id="eth"><div className="container community-grid"><div><p className="eyebrow"><span className="eyebrow-line"/>07 / KOMUNITAS</p><h2>ETH-0.<br/><em>Belajar lebih jauh, bersama.</em></h2><p>Sebagai ketua komunitas ETH-0, saya melihat komunitas sebagai tempat untuk bertanya, menguji gagasan, dan membangun kebiasaan belajar yang konsisten.</p><p className="community-note">Dokumentasi kegiatan akan ditambahkan setelah materi yang dapat dipublikasikan tersedia.</p></div><div className="community-art" aria-hidden="true"><div className="community-word">ETH<span>—</span>0</div><div className="community-cross c1">+</div><div className="community-cross c2">+</div><div className="community-cross c3">+</div><span className="community-art-caption">COMMUNITY / COLLABORATION / CURIOSITY</span></div></div></section>

    <section className="section contact-section" id="contact"><div className="container contact-grid"><div><p className="eyebrow light-eyebrow"><span className="eyebrow-line"/>08 / KONTAK</p><h2>Mari mulai<br/><em>percakapan.</em></h2><p>Tertarik berdiskusi tentang keamanan siber, AI, atau kolaborasi komunitas? Temukan saya di LinkedIn.</p></div><a className="contact-link" href={linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span aria-hidden="true">↗</span></a></div></section>
  </main><Footer/></>
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <main className="not-found container"><h1>Proyek tidak ditemukan.</h1><Link className="button primary" to="/">Kembali ke beranda</Link></main>
  return <><main className="detail-page"><div className="container"><Link className="back-link" to="/#projects">← Kembali ke proyek</Link><div className="detail-heading"><p className="eyebrow"><span className="eyebrow-line"/>PROYEK / {project.number}</p><h1>{project.title}<span>.</span></h1><p>{project.short}</p><div className="detail-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}<span>Dokumentasi berlangsung</span></div></div><ProjectArt theme={project.theme}/><div className="detail-content"><div><p className="micro-label">TENTANG PROYEK</p><h2>Fokus dan arah.</h2></div><div><p>{project.focus}</p><p>Halaman ini memuat gambaran awal proyek. Peran spesifik, arsitektur, tangkapan layar implementasi, hasil pengujian, dan tautan kode akan ditambahkan ketika dokumentasi sumbernya tersedia.</p><Link className="text-link" to="/#contact">Hubungi saya tentang proyek ini <span aria-hidden="true">↗</span></Link></div></div><div className="detail-next"><span>PROYEK LAINNYA</span><Link to={'/projects/' + projects[(projects.indexOf(project) + 1) % projects.length].slug}>{projects[(projects.indexOf(project) + 1) % projects.length].title} <span aria-hidden="true">↗</span></Link></div></div></main><Footer/></>
}

function Footer() { return <footer className="footer"><div className="container footer-inner"><Link className="brand" to="/">ARYA<span>.</span></Link><p>Securing Systems. Building Intelligence.</p><Link to="/#home">Kembali ke atas ↑</Link></div></footer> }

export default function App() { return <><ScrollToSection/><a className="skip-link" href="#main-content">Lewati ke konten</a><Header/><div id="main-content"><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="*" element={<main className="not-found container"><h1>Halaman tidak ditemukan.</h1><Link className="button primary" to="/">Kembali ke beranda</Link></main>}/></Routes></div></> }
