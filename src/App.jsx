import { useState } from 'react'
import './App.css'

const PROJECTS = [
  {id:1,name:"CubeMaze-Unity",desc:"Unity ile yapılmış basit bir 3D labirent oyunudur..",tech:["Unity","C#"],link:"https://github.com/Yurdanur22/CubeMaze-Unity",stars:0,color:"#7ec8e3"},
  {id:2,name:"SimpleLife-Unity",desc:"Unity ile geliştirilmiş 3 boyutlu bir yaşam simülasyon oyunudur.",tech:["Unity","C#"],link:"https://github.com/Yurdanur22/SimpleLife-Unity",stars:0,color:"#b5ead7"},
  {id:3,name:"BookshopGame",desc:"Unity ile yapılmış basit bir kitapçı yönetim oyunu.",tech:["Unity","C#"],link:"https://github.com/Yurdanur22/BookshopGame",stars:0,color:"#ffdac1"},
];

const EVENTS = [
  {id:1,title:"Balıkesir Teknokent GameJam 2",category:"Yarışma",date:"Aralık 2025",desc:"GameJam'de 1. olduk.",emoji:"🏆",color:"#ffd700",img: ['indir.jpg', 'indir2.jpg', 'indir3.jpg']},
];

const BOOKS = [
  {id:1,title:"Dune",author:"Frank Herbert",status:"Okundu ✓",note:"Efsane bir evren. Herkese tavsiye ederim.",color:"#c8a96e",spine:"#8b6914"},
  {id:2,title:"Anna Karenina",author:"Lev Tolstoy",status:"Okundu ✓",note:"Klasik edebiyatın en güçlü insan ve toplum tahlillerinden biri.",color:"#5c7a5c",spine:"#3a5a3a"},
  {id:3,title:"Steve Jobs",author:"Walter Isaacson",status:"Okundu ✓",note:"Teknoloji dünyasını şekillendiren vizyoner bir liderin biyografisi.",color:"#4a7fa5",spine:"#2a5f85"},
  {id:4,title:"Atomic Habits",author:"James Clear",status:"Okundu ✓",note:"Alışkanlık sistemi üzerine pratik bir rehber.",color:"#e8956d",spine:"#c8754d"},
  {id:5,title:"Uçurtma Avcısı",author:"Khaled Hosseini",status:"Okundu ✓",note:"Dostluk, sadakat ve kefaret üzerine derinden etkileyici bir hikaye.",color:"#888",spine:"#555"},
];

const HOTSPOTS = [
  { x: 69, y: 46, w: 16, h: 16, label: "< Projelerim />", modal: "projects", pulse: "#7ec8e3" },
  { x: 14, y: 35, w: 21, h: 15, label: "📌 Etkinlikler & Yarışmalar", modal: "events", pulse: "#ffd700" },
  { x: 35, y: 28, w: 22, h: 22, label: "📚 Kitaplarım", modal: "books", pulse: "#ff5f57" }
];

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedBook, setSelectedBook] = useState(BOOKS[4]); // Varsayılan: Uçurtma Avcısı

  const closeModal = () => setActiveModal(null);

  // --- MODAL İÇERİK RENDER FONKSİYONLARI ---
  const renderModalContent = () => {
    switch (activeModal) {
      case 'projects':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '10px 5px' }}>
            {PROJECTS.map(proj => (
              <div key={proj.id} style={{ 
                border: `3px solid ${proj.color}80`, 
                borderLeft: `5px solid ${proj.color}`, 
                background: '#111019', 
                padding: '20px', 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '160px'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0, fontSize: '15px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                      <span style={{ width: '10px', height: '10px', backgroundColor: proj.color, display: 'inline-block' }}></span>
                      {proj.name}
                    </h3>
                    <span style={{ color: '#ffd700', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      ⭐ <span style={{ color: '#888', fontSize: '12px' }}>{proj.stars}</span>
                    </span>
                  </div>
                  <p style={{ margin: '0 0 15px 0', fontSize: '13px', color: '#aaa', lineHeight: '1.5' }}>{proj.desc}</p>
                </div>
                
                <div>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '15px' }}>
                    {proj.tech.map((t, i) => (
                      <span key={i} style={{ border: '1px solid #4a5568', padding: '2px 6px', fontSize: '11px', color: '#a0aec0', fontWeight: 'bold' }}>{t}</span>
                    ))}
                  </div>
                  <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: '#888', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', display: 'inline-block' }}>
                    [[ GitHub'da Aç ]]
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'events':
        return (
          <div style={{ padding: '5px', maxHeight: '70vh', overflowY: 'auto' }}>
            {EVENTS.map(ev => (
              <div key={ev.id}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <span style={{ fontSize: '28px' }}>{ev.emoji}</span>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h3 style={{ margin: 0, fontSize: '16px', color: '#fff', fontWeight: 'bold' }}>{ev.title}</h3>
                      <span style={{ backgroundColor: '#ffd700', color: '#000', padding: '2px 6px', fontSize: '11px', fontWeight: 'bold' }}>{ev.category}</span>
                    </div>
                    <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#718096', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      📅 {ev.date}
                    </p>
                  </div>
                </div>
                <p style={{ color: '#cbd5e0', fontSize: '14px', margin: '0 0 20px 0' }}>{ev.desc}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {ev.img.map((image, idx) => (
                    <img 
                      key={idx} 
                      src={`/${image}`} 
                      alt="Etkinlik" 
                      style={{ width: '100%', borderRadius: '2px', border: '1px solid #2d3748', display: 'block' }} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'books':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ 
              background: '#231912', 
              border: '3px solid #3c2d20', 
              padding: '25px 20px 0 20px', 
              height: '140px', 
              display: 'flex', 
              alignItems: 'flex-end',
              position: 'relative',
              boxShadow: 'inset 0 -10px 0 #19120c'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', width: '100%' }}>
                {BOOKS.map(book => {
                  const isSelected = selectedBook?.id === book.id;
                  return (
                    <div 
                      key={book.id}
                      onClick={() => setSelectedBook(book)}
                      style={{
                        width: '32px',
                        height: isSelected ? '115px' : '105px',
                        backgroundColor: book.color,
                        borderLeft: `4px solid ${book.spine}`,
                        borderTop: isSelected ? '4px solid #fff' : 'none',
                        borderRight: isSelected ? '4px solid #fff' : 'none',
                        cursor: 'pointer',
                        transform: isSelected ? 'translateY(-4px)' : 'none',
                        transition: 'all 0.15s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        writingMode: 'vertical-rl',
                        transformOrigin: 'bottom'
                      }}
                    >
                      <span style={{ fontSize: '9px', color: '#fff', transform: 'rotate(180deg)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                        {book.title}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px', background: '#4a3b2c' }}></div>
            </div>

            {selectedBook && (
              <div style={{ border: '2px solid #4a5568', background: '#111019', padding: '20px', display: 'flex', gap: '20px' }}>
                <div style={{ 
                  width: '90px', 
                  height: '130px', 
                  backgroundColor: selectedBook.color, 
                  borderLeft: `8px solid ${selectedBook.spine}`,
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '3px 3px 10px rgba(0,0,0,0.5)'
                }}>
                  <div style={{ fontSize: '10px', color: '#fff', fontWeight: 'bold', marginBottom: '8px' }}>{selectedBook.title}</div>
                  <div style={{ fontSize: '8px', color: '#ccc' }}>{selectedBook.author}</div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: '#fff', fontWeight: 'bold' }}>{selectedBook.title}</h3>
                  <p style={{ margin: '0 0 15px 0', fontSize: '13px', color: '#a0aec0' }}>— {selectedBook.author}</p>
                  
                  <div style={{ margin: '0 0 15px 0' }}>
                    <span style={{ background: '#2d3748', border: '1px solid #4a5568', color: '#fff', padding: '3px 8px', fontSize: '11px', fontWeight: 'bold' }}>
                      {selectedBook.status}
                    </span>
                  </div>
                  
                  <p style={{ margin: 0, fontSize: '13px', color: '#e2e8f0', fontStyle: 'italic', lineHeight: '1.5' }}>
                    "{selectedBook.note}"
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const getModalColor = () => {
    if (activeModal === 'projects') return '#7ec8e3';
    if (activeModal === 'events') return '#ffd700';
    if (activeModal === 'books') return '#b5ead7';
    return '#fff';
  };

  const getModalTitle = () => {
    if (activeModal === 'projects') return '< Projelerim />';
    if (activeModal === 'events') return '📌 Etkinlikler & Yarışmalar';
    if (activeModal === 'books') return '🕹️ Kitap Rafım';
    return '';
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#0a080d',
      margin: 0,
      fontFamily: '"Courier New", Courier, monospace',
      userSelect: 'none',
      boxSizing: 'border-box',
      padding: '20px'
    }}>
      
      {/* ANA KAPSAYICI DEV (Oda ve Yeni Eklenen Alt Bilgiler) */}
      <div style={{ 
        position: 'relative', 
        display: 'inline-block', 
        maxWidth: '100%', 
        maxHeight: '85vh', // Alt yazılara yer kalsın diye yüksekliği hafif daralttık
        border: '3px solid #231d2f', // Görseldeki gibi odayı çevreleyen ince şık çerçeve
        padding: '12px',
        backgroundColor: '#0e0c15',
        borderRadius: '4px'
      }}>
        
        {/* Pixel Oda Görseli */}
        <img 
          src="/pixelroom.jpg" 
          alt="Pixel Oda" 
          style={{ maxWidth: '100%', maxHeight: '75vh', objectFit: 'contain', display: 'block' }}
        />
        
        {/* Hotspot Alanları (Şeffaf Butonlar) */}
        {HOTSPOTS.map((spot, index) => (
          <div
            key={index}
            onClick={() => setActiveModal(spot.modal)}
            title={spot.label}
            style={{
              position: 'absolute',
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              width: `${spot.w}%`,
              height: `${spot.h}%`,
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `rgba(${parseInt(spot.pulse.slice(1,3),16)}, ${parseInt(spot.pulse.slice(3,5),16)}, ${parseInt(spot.pulse.slice(5,7),16)}, 0.15)`}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          />
        ))}

        {/* --- YENİ EKLENEN SOL ALT LOGO KUTUSU --- */}
        <div style={{
          position: 'absolute',
          bottom: '25px',
          left: '25px',
          backgroundColor: '#111019',
          border: '2px solid #2d3748',
          padding: '2px 8px',
          boxShadow: '2px 2px 0px rgba(0,0,0,0.4)'
        }}>
          <div style={{ color: '#fff', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '-1px' }}>
            Yurdanur's
          </div>
          <div style={{ color: '#fff', fontSize: '9px', fontFamily: 'monospace' }}>
            digital room
          </div>
        </div>

        {/* --- YENİ EKLENEN ORTA ALT KILAVUZ YAZISI --- */}
        <div style={{
          position: 'absolute',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgb(255, 255, 255)', // Silik retro gri tonu
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          letterSpacing: '1px'
        }}>
          <span>Odadaki nesnelere tıkla ve keşfet</span>
          <span style={{ fontSize: '10px' }}>◀</span>
        </div>

      </div>

      {/* MODAL PENCERELERİ (DEĞİŞMEDİ) */}
      {activeModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }} onClick={closeModal}>
          
          <div style={{
            backgroundColor: '#0c0a12',
            color: '#fff',
            width: '90%',
            maxWidth: activeModal === 'events' ? '650px' : '850px',
            border: `3px solid ${getModalColor()}`,
            boxShadow: '0px 0px 25px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column'
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Üst Bar */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              padding: '10px 15px', 
              borderBottom: `2px solid ${getModalColor()}`,
              background: '#0e0c15'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#ff5f56' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#ffbd2e' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '2px', backgroundColor: '#27c93f' }}></span>
                </div>
                <h2 style={{ margin: 0, fontSize: '14px', color: getModalColor(), fontWeight: 'bold' }}>
                  {getModalTitle()}
                </h2>
              </div>

              <button 
                onClick={closeModal}
                style={{
                  background: 'transparent',
                  color: '#4a5568',
                  border: '1px solid #2d3748',
                  width: '22px',
                  height: '22px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ff5f56'; e.currentTarget.style.borderColor = '#ff5f56'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#4a5568'; e.currentTarget.style.borderColor = '#2d3748'; }}
              >
                X
              </button>
            </div>

            {/* Modal İçerik */}
            <div style={{ padding: '20px', backgroundColor: '#0c0a12', maxHeight: '75vh', overflowY: 'auto' }}>
              <div style={{ border: '2px solid #2d3748', padding: '15px', background: '#0f0d18' }}>
                {renderModalContent()}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default App