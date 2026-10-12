import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { GiChurch } from 'react-icons/gi';
import { 
  FaBars, FaTimes, FaFacebookF, FaTiktok, FaYoutube, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPrayingHands, 
  FaChurch, FaStarOfLife, FaHands, FaCross, FaMobileAlt, FaDonate,
  FaBell
} from 'react-icons/fa';
import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <div className="App">
        {/* Top bar with church name */}
        <div className="top-bar">
          ✝️ ÉGLISE ÉVANGÉLIQUE DES VRAIS ADORATEURS ✝️
        </div>

        {/* Navigation bar */}
        <nav className="navbar">
          <div className="nav-container">


            <Link to="/" className="logo-area" onClick={closeMenu}>
              <img 
                src="/images/logo.jpg" 
                alt="E.V.A.D - Église des Vrais Adorateurs de Dieu" 
                className="logo-img" 
              />
              <span className="logo-text">E.V.A.D Église des Vrais Adorateurs de Dieu</span>

            </Link>


            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
              <li><NavLink to="/" end onClick={closeMenu}>Accueil</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>Qui sommes-nous ?</NavLink></li>
              <li><NavLink to="/live" onClick={closeMenu}>Culte en Direct</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
              <li><NavLink to="/prayer" onClick={closeMenu}>Nos jours de prières</NavLink></li>
              <li><NavLink to="/donate" onClick={closeMenu}>Faire un don</NavLink></li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/live" element={<CulteEnDirect />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prayer" element={<PrayerDays />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        {/* Footer with social icons */}
        <footer>
          <div className="footer-follow">
            <p className="follow-text">
              Suivez-nous sur Facebook, TikTok et YouTube pour ne manquer aucune de nos prières et cultes 👇
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Pasteur-Barthel-Boukama-Tv/61555569552041/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://vt.tiktok.com/ZSxcJGBR9/" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://www.youtube.com/@missionevangeliqueevad" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
          <p>© 2026 Église Evad – Les vrais adorateurs de Dieu | Tous droits réservés</p>
          <p className="small">km4 vers l'école 5 février 1979 – Pointe‑Noire, Congo</p>
        </footer>
      </div>
    </Router>
  );
}


// ---------- Home Component (with 4 images + 4 videos) ----------
function Home() {
  const images = [
    { src: "/images/pasteur1.jpg", alt: "Révérend Pasteur Barthel Blessing" },
    { src: "/images/pasteur2.jpg", alt: " Révérend Pasteur Barthel Boukama" },
    { src: "/images/pasteur3.jpg", alt: "Dédicace du temple" },
    { src: "/images/pasteur4.jpg", alt: "Culte et adoration" }
  ];

  const videos = [
    { src: "/videos/video1.mp4", title: "Culte du dimanche" },
    { src: "/videos/video2.mp4", title: "Culte & Adoration" },
    { src: "/videos/video3.mp4", title: "Prédication" },
    { src: "/videos/video4.mp4", title: "Prière en ligne" }
  ];

  return (
    <div className="home">
      <div className="hero">
        <h1>Mission Évangélique Evad</h1>
        <p>Ministère de la Restauration – Temple dédié le 17 Septembre 2005 </p>
        <p><FaMapMarkerAlt /> Pointe‑Noire – Ruelle de la maison du Général</p>
        <Link to="/contact" className="btn-gold">Nous contacter</Link>
      </div>

      {/* ========== 4 IMAGES ========== */}
      <h2 style={{ marginTop: '2rem' }}>Nos moments forts</h2>
      <div className="image-gallery">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img.src} alt={img.alt} />
            <p className="image-caption">{img.alt}</p>
          </div>
        ))}
      </div>

      {/* ========== 4 VIDEOS ========== */}
      <h2 style={{ marginTop: '3rem' }}>Nos vidéos</h2>
      <div className="video-gallery">
        {videos.map((video, idx) => (
          <div key={idx} className="video-item">
            <video 
              controls 
              preload="metadata"
              className="video-player"
            >
              <source src={video.src} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
            <p className="video-caption">{video.title}</p>
          </div>
        ))}
      </div>

      <div className="welcome">
        <h2>Bienvenue</h2>
        <p>Nous sommes une communauté de foi, rassemblée autour de l'amour du Christ et du culte en vérité. Rejoignez‑nous pour grandir ensemble dans la louange, la prédication et l'adoration.</p>
        <p><strong>Pasteur Barthel Boukama</strong> – Prédication, Adoration, Louange</p>
        <p className="italic">« Grandes journées de dédicace du temple – Ministère de la Restauration »</p>
      </div>
    </div>
  );
}


// ---------- About Component ----------
function About() {
  return (
    <div>
      <h2>Qui sommes-nous ?</h2>
      <p>« Les vrais adorateurs de Dieu » est une église évangélique établie à Pointe‑Noire (Congo). Notre vision : restaurer le culte authentique et former des disciples selon Jean 4:23-24.</p>
      <div className="grid-2">
        <div className="card"><h3>Prédication</h3><p>Enseignement biblique solide centré sur Christ.</p></div>
        <div className="card"><h3>Louange & Adoration</h3><p>Moments de louange et d'intimité avec Dieu.</p></div>
        <div className="card"><h3>Restauration</h3><p>Ministère d'accompagnement spirituel et social.</p></div>
      </div>
      <p>Le début du ministère pastoral du Révérend pasteur Barthel Boukama Blessing; le 17 Septembre 2005 à Pointe‑Noire.</p>
    </div>
  );
}

// ---------- Culte en Direct Component (YouTube Live) ----------
function CulteEnDirect() {
  const youtubeChannelId = "UC_D6DcTkdPYbVWvIe9M1sVQ";
  const youtubeChannelUrl = "https://www.youtube.com/@missionevangeliqueevad";

  return (
    <div>
      <h2>Culte en Direct</h2>
      <p>Rejoignez-nous en direct pour le culte sur notre chaîne YouTube.</p>
      
      {/* YouTube Live Player */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/live_stream?channel=${youtubeChannelId}`}
          title="Culte en Direct - Mission Évangélique EVAD Tv"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)', maxWidth: '900px' }}
        ></iframe>
      </div>

      <p style={{ marginTop: '1rem', fontStyle: 'italic', textAlign: 'center' }}>
        Si la vidéo ne s'affiche pas, le culte n'est peut-être pas encore en direct.
      </p>

      {/* Notification Call-to-Action Box */}
      <div 
        className="card" 
        style={{ 
          marginTop: '2rem', 
          background: '#fff8e1', 
          borderLeft: '5px solid #d4af37',
          padding: '1.5rem',
          textAlign: 'center'
        }}
      >
        <h3 style={{ marginTop: 0 }}>
          <FaBell style={{ color: '#d4af37', marginRight: '8px' }} />
          Ne manquez aucun culte en direct !
        </h3>
        <p>
          Pour recevoir une <strong>notification automatique</strong> chaque fois que nous sommes en direct :
        </p>
        <ol style={{ textAlign: 'left', display: 'inline-block', margin: '1rem auto' }}>
          <li>Abonnez-vous à notre chaîne YouTube</li>
          <li>Cliquez sur l'icône <strong>cloche 🔔</strong> à côté du bouton "S'abonner"</li>
          <li>Sélectionnez <strong>"Toutes les notifications"</strong></li>
        </ol>
        <p style={{ marginBottom: '1rem' }}>
          Vous recevrez alors une alerte sur votre téléphone ou ordinateur dès que nous commençons à diffuser !
        </p>
        <a 
          href={youtubeChannelUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-gold"
          style={{ display: 'inline-block', textDecoration: 'none' }}
        >
          <FaYoutube style={{ marginRight: '8px' }} /> 
          S'abonner à notre chaîne
        </a>
      </div>

      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <a 
          href={youtubeChannelUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#d4af37', textDecoration: 'underline' }}
        >
          Visiter notre chaîne YouTube pour voir toutes nos vidéos
        </a>
      </div>
    </div>
  );
}

// ---------- Contact Component (Using Web3Forms) ----------
function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi en cours...");

    const formData = new FormData(event.target);
    formData.append("access_key", "c55f3351-5a94-494a-855e-433f5b9fde32");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message envoyé avec succès ! Nous vous répondrons bientôt.");
        event.target.reset(); 
      } else {
        console.error("Error", data);
        setResult(data.message || "❌ Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Network Error", error);
      setResult("❌ Erreur de connexion. Veuillez vérifier votre réseau.");
    }
  };

  return (
    <div>
      <h2>Nous contacter</h2>
      <p>Vous avez une question, une prière ou vous souhaitez nous rejoindre ? Écrivez‑nous.</p>
      
      <form onSubmit={onSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Votre nom complet" required />
        <input type="email" name="email" placeholder="Adresse e-mail" required />
        <input type="tel" name="phone" placeholder="Téléphone (optionnel)" />
        <textarea name="message" placeholder="Votre message..." required></textarea>
        
        <button type="submit" className="btn-gold">
          Envoyer le message
        </button>
      </form>

      {result && (
        <div className="form-feedback" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          {result}
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <p><FaMapMarkerAlt /> km4 vers l'école 5 février 1979, Pointe‑Noire, Congo</p>
        <p><FaPhoneAlt /> +242 06866 4474; +242 05534 55 62</p>
        <p><FaEnvelope /> pasteurbarthelboukamatv@gmail.com</p>
      </div>
    </div>
  );
}

// ---------- Prayer Days Component ----------
function PrayerDays() {
  const days = [
    { icon: <FaPrayingHands />, title: 'Mercredi', desc: '17h30 à 19h30 : Culte d\'enseignement' },
    { icon: <FaChurch />, title: 'Vendredi', desc: '17h30 à 19h30 : Culte de délivrance'    },
    { icon: <FaStarOfLife />, title: 'Dimanche', desc: '08h00 à 11h30 : Culte d\'action de grâce'  },
    { icon: <FaHands />, title: 'Jeudi ', desc: '21h00 à 21h45 : Prière en Ligne'     },
    { icon: <FaCross />, title: 'Samedi', desc: '21h00 à 21h45 : Prière en Ligne'       },
  ];
  return (
    <div>
      <h2>Nos jours de prières</h2>
      <div className="grid-2">
        {days.map((day, idx) => (
          <div key={idx} className="card">{day.icon} <strong>{day.title}</strong> – {day.desc}</div>
        ))}
      </div>
      <p>Tous les mois, une journée de jeûne et prière est organisée. Rejoignez‑nous !</p>
    </div>
  );
}

// ---------- Donate Component ----------
function Donate() {
  return (
    <div>
      <h2>Faire un don</h2>
      <p>Soutenez le ministère de l'Église des vrais adorateurs. Vos dons participent à l'entretien du temple, aux actions sociales et à l'évangélisation.</p>
      <div className="grid-2">
        <div className="card"><FaMobileAlt /><h3>Mobile Money / Airtel Money</h3><p> +242 06 866 44 74 / +242 05 534 55 62</p></div>
        <div className="card"><FaDonate /><h3>Offrande en ligne</h3><p>Bientôt disponible via notre partenaire sécurisé.</p></div>
      </div>
      <div className="card" style={{ background: '#f0ede5', textAlign: 'center' }}>🌟 Dieu aime celui qui donne avec joie et amour . Merci pour votre générosité !</div>
    </div>
  );
}

export default App;