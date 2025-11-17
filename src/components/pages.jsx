import { Link } from 'react-router-dom'
import HeroSpline from '../components/HeroSpline'

export function LoginPage() {
  return (
    <div className="px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 bg-white border-4 border-black rounded-full px-4 py-2 shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]">
            <span className="text-2xl">🤖🩺</span>
            <span className="font-extrabold">Welcome to Ayushman AI</span>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-3xl border-4 border-black p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-yellow-200 border-4 border-black flex items-center justify-center">👋</div>
              <div className="text-2xl font-extrabold">Login</div>
            </div>
            <div className="space-y-3">
              <input placeholder="Email" className="w-full rounded-2xl border-4 border-black px-4 py-3 text-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]" />
              <input type="password" placeholder="Password" className="w-full rounded-2xl border-4 border-black px-4 py-3 text-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]" />
              <button className="w-full mt-2 rounded-full bg-pink-300 border-4 border-black px-6 py-3 text-xl font-extrabold shadow-[8px_8px_0_0_rgba(0,0,0,0.6)] active:translate-y-0.5">
                Login
              </button>
              <div className="mt-2">
                <Link to="/register" className="inline-flex items-center gap-2 bg-blue-200 rounded-full border-4 border-black px-4 py-2 text-sm shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]">
                  <span>New user? Register</span>
                  <span className="text-lg">💬</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <HeroSpline />
      </div>
    </div>
  )
}

export function RegisterPage() {
  return (
    <div className="px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white/80 backdrop-blur rounded-3xl border-4 border-black p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-pink-200 border-4 border-black flex items-center justify-center">🧑‍⚕️</div>
            <div className="text-2xl font-extrabold">Register</div>
          </div>
          <div className="space-y-3">
            <input placeholder="Full name" className="w-full rounded-2xl border-4 border-black px-4 py-3 text-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]" />
            <input placeholder="Email" className="w-full rounded-2xl border-4 border-black px-4 py-3 text-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]" />
            <input type="password" placeholder="Password" className="w-full rounded-2xl border-4 border-black px-4 py-3 text-lg shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]" />
            <button className="w-full mt-2 rounded-full bg-mint-300 border-4 border-black px-6 py-3 text-xl font-extrabold shadow-[8px_8px_0_0_rgba(0,0,0,0.6)] active:translate-y-0.5">
              Create account
            </button>
          </div>
        </div>
        <div className="text-center">
          <div className="inline-block p-6 rounded-3xl bg-white border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,0.6)]">
            <div className="text-6xl mb-2">🤖🩺</div>
            <div className="font-extrabold text-xl">Nurse Bot here to help!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HomePage() {
  const tiles = [
    { icon: '💬', title: 'Chat with Assistant', to: '/chat', color: 'bg-pink-200' },
    { icon: '🩺', title: 'Symptom Check', to: '/symptoms', color: 'bg-mint-200' },
    { icon: '📘', title: 'Village FAQ', to: '/faq', color: 'bg-blue-200' },
    { icon: '📞', title: 'Doctor Connect', to: '/connect', color: 'bg-yellow-200' },
  ]
  return (
    <div className="px-4 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.map((t) => (
          <Link key={t.title} to={t.to} className={`group ${t.color} rounded-3xl border-4 border-black p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-transform`}>
            <div className="text-5xl mb-3">{t.icon}</div>
            <div className="font-extrabold text-lg">{t.title}</div>
            <div className="opacity-60 text-sm">Tap to open</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export function ChatPage() {
  const ChatBubble = ({ who = 'ai', text = 'Hello! How can I help?' }) => (
    <div className={`max-w-[80%] rounded-3xl border-4 border-black px-4 py-3 shadow-[8px_8px_0_0_rgba(0,0,0,0.6)] ${who === 'ai' ? 'bg-blue-200' : 'bg-white ml-auto'}`}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">{who === 'ai' ? '🤖🩺' : '🙂'}</span>
        <span className="font-semibold">{who === 'ai' ? 'Doctor Bot' : 'You'}</span>
      </div>
      <div className="mt-1">{text}</div>
    </div>
  )

  return (
    <div className="px-4 md:px-8">
      <div className="bg-white/80 border-4 border-black rounded-3xl p-4 md:p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 bg-yellow-200 border-4 border-black rounded-full px-3 py-1">
            <span className="text-xs font-bold">Powered by Sarvam</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <button className="rounded-full bg-mint-200 border-4 border-black w-12 h-12 shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]">🎤</button>
            <button className="rounded-full bg-pink-200 border-4 border-black w-12 h-12 shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]">🔊</button>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <ChatBubble who="ai" text="Namaste! I am your village health assistant. Tell me your symptoms." />
          <ChatBubble who="me" text="I have a fever and cough since last night." />
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-3 py-1">
            <span className="text-xs">Transcribing…</span>
            <span>📈</span>
          </div>
        </div>

        <div className="flex gap-2">
          <input className="flex-1 rounded-2xl border-4 border-black px-4 py-3 text-lg" placeholder="Type your message" />
          <button className="rounded-2xl bg-blue-200 border-4 border-black px-6 text-lg font-extrabold shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]">Send</button>
        </div>
      </div>
    </div>
  )
}

export function SymptomPage() {
  const items = [
    { icon: '🌡️', title: 'Fever', desc: 'Sweating thermometer' },
    { icon: '😷', title: 'Cough', desc: 'Coughing lungs' },
    { icon: '🤢', title: 'Stomach Pain', desc: 'Upset belly' },
  ]
  return (
    <div className="px-4 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <div key={c.title} className="bg-white rounded-3xl border-4 border-black p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.6)]">
            <div className="text-6xl mb-3">{c.icon}</div>
            <div className="font-extrabold text-xl">{c.title}</div>
            <div className="opacity-70">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function FAQPage() {
  const items = [
    { icon: '💧', title: 'Drinking Water', desc: 'Boiled or filtered is best.' },
    { icon: '🩹', title: 'First Aid', desc: 'Clean, press, bandage.' },
    { icon: '🍼', title: 'Infant Care', desc: 'Exclusive breastfeeding 6 months.' },
  ]
  return (
    <div className="px-4 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <div key={c.title} className="bg-white rounded-3xl border-4 border-black p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.6)]">
            <div className="text-6xl mb-3">{c.icon}</div>
            <div className="font-extrabold text-xl">{c.title}</div>
            <div className="opacity-70">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ConnectPage() {
  return (
    <div className="px-4 md:px-8">
      <div className="grid sm:grid-cols-2 gap-6">
        <a href="tel:+911122233344" className="bg-yellow-200 rounded-3xl border-4 border-black p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.6)] flex items-center justify-between">
          <div>
            <div className="text-5xl mb-2">📞</div>
            <div className="font-extrabold text-xl">CALL DOCTOR</div>
          </div>
          <div className="text-6xl">👨‍⚕️</div>
        </a>
        <a href="https://wa.me/911122233344" target="_blank" className="bg-green-200 rounded-3xl border-4 border-black p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.6)] flex items-center justify-between">
          <div>
            <div className="text-5xl mb-2">🟢</div>
            <div className="font-extrabold text-xl">WHATSAPP</div>
          </div>
          <div className="text-6xl">💬</div>
        </a>
      </div>
    </div>
  )
}

export function VoiceUIPage() {
  return (
    <div className="px-4 md:px-8">
      <div className="bg-white rounded-3xl border-4 border-black p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.6)] text-center">
        <div className="text-7xl mb-4 animate-pulse">🎤</div>
        <div className="font-extrabold text-xl mb-2">Listening… / सुन रहा हूँ…</div>
        <div className="mx-auto w-full max-w-md h-24 bg-blue-100 rounded-2xl border-4 border-black flex items-center justify-center">
          <div className="w-3/4 h-2 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export function SarvamUIPage() {
  return (
    <div className="px-4 md:px-8">
      <div className="space-y-4">
        <div className="bg-white rounded-3xl border-4 border-black p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.6)]">
          <div className="font-extrabold text-xl mb-2">Sarvam Integration</div>
          <div className="inline-flex items-center gap-2 bg-yellow-200 border-4 border-black rounded-full px-3 py-1">
            <span className="text-xs font-bold">Powered by Sarvam</span>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-100 border-4 border-black rounded-full px-3 py-1">
            <span>Waveform Mascot</span>
            <span>📈</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-3 py-1">
            <span>Transcribing…</span>
            <span>💬</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-3 py-1">
            <span>Generating reply…</span>
            <span>✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}
