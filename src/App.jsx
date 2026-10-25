
import { useState } from 'react'
import './App.css'

const MENU = [
  {
    id: 1,
    name: 'Latte',
    thaiName: 'ลาเต้',
    price: 75,
    description: 'กาแฟเอสเพรสโซ่ผสมนมสด รสชาติกลมกล่อม',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 2,
    name: 'Americano',
    thaiName: 'อเมริกาโน่',
    price: 65,
    description: 'กาแฟดำหอมกรุ่น รสชาติเข้มข้น สดชื่น',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 3,
    name: 'Cappuccino',
    thaiName: 'คาปูชิโน่',
    price: 80,
    description: 'เอสเพรสโซ่ผสมนมและฟองนมนุ่มละมุน',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 4,
    name: 'Iced Latte',
    thaiName: 'ลาเต้เย็น',
    price: 80,
    description: 'กาแฟนมเย็น หอมละมุน ดื่มง่ายทุกวัน',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 5,
    name: 'Matcha Latte',
    thaiName: 'มัทฉะลาเต้',
    price: 90,
    description: 'มัทฉะหอมเข้ม ผสานนมสดอย่างลงตัว',
    image:
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 6,
    name: 'Cold Brew',
    thaiName: 'โคลด์บรูว์',
    price: 85,
    description: 'กาแฟสกัดเย็น รสนุ่ม ดื่มแล้วสดชื่น',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85',
  },
]

const DEVELOPERS = [
  'Tarathep Punyakong',
  'Rattaphum Kamsantia',
]

function App() {
  const [orderedId, setOrderedId] = useState(null)
  const [message, setMessage] = useState('')

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  function handleOrder(item) {
    setOrderedId(item.id)
    setMessage(`สั่งซื้อ ${item.thaiName} สำเร็จ!`)

    window.setTimeout(() => {
      setOrderedId(null)
      setMessage('')
    }, 2000)
  }

  return (
    <div className="coffee-app">
      <header className="site-header">
        <a
          href="#home"
          className="brand"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('home')
          }}
        >
          <span className="brand-icon">☕</span>
          <span>COFFEE TIME</span>
        </a>

        <nav className="navigation" aria-label="เมนูหลัก">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('home')
            }}
          >
            หน้าแรก
          </a>

          <a
            href="#menu"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('menu')
            }}
          >
            เมนู
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <span className="hero-icon" aria-hidden="true">
              ☕
            </span>

            <p className="hero-eyebrow">WELCOME TO COFFEE TIME</p>

            <h1>ร้านกาแฟ</h1>

            <p className="hero-english">Fresh Coffee Everyday</p>

            <p className="hero-description">
              กาแฟตำรับดั้งเดิม คั่วสดทุกสัปดาห์
              <br />
              เปิดทุกวัน 07:00–20:00 น.
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={() => scrollToSection('menu')}
            >
              ดูเมนู
              <span aria-hidden="true"> ↓</span>
            </button>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true">
          <span>✦</span>
        </div>

        <section id="menu" className="menu-section">
          <div className="section-heading">
            <p className="section-eyebrow">OUR MENU</p>
            <h2>เมนูแนะนำ</h2>
            <p className="section-description">
              เลือกกาแฟแก้วโปรดของคุณ แล้วเติมความสุขในทุกวัน
            </p>
          </div>

          <div className="menu-grid">
            {MENU.map((item) => (
              <article className="menu-card" key={item.id}>
                <div className="menu-image-wrapper">
                  <img
                    className="menu-image"
                    src={item.image}
                    alt={item.thaiName}
                    loading="lazy"
                  />
                </div>

                <div className="menu-card-content">
                  <div className="menu-title-row">
                    <div>
                      <h3>{item.name}</h3>
                      <p className="menu-thai-name">{item.thaiName}</p>
                    </div>

                    <span className="menu-price">฿{item.price}</span>
                  </div>

                  <p className="menu-description">{item.description}</p>

                  <button
                    type="button"
                    className={`order-button ${
                      orderedId === item.id ? 'ordered' : ''
                    }`}
                    onClick={() => handleOrder(item)}
                  >
                    {orderedId === item.id ? '✓ สั่งซื้อสำเร็จ' : 'สั่งซื้อ'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a
          href="#home"
          className="footer-brand"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('home')
          }}
        >
          ☕ COFFEE TIME
        </a>

        <p>Fresh Coffee Everyday</p>

        <div className="developer-credit">
          <p className="developer-heading">Developed by</p>
          <ul>
            {DEVELOPERS.map((developer) => (
              <li key={developer}>{developer}</li>
            ))}
          </ul>
        </div>

        <p className="copyright">
          © 2026 COFFEE TIME. All rights reserved.
        </p>
      </footer>

      {message && (
        <div className="toast-message" role="status" aria-live="polite">
          <span className="toast-check">✓</span>
          {message}
        </div>
      )}
    </div>
  )
}

export default App
