import { Routes, Route, Navigate } from 'react-router-dom'
import ToonShell from './components/ToonShell'
import {
  LoginPage,
  RegisterPage,
  HomePage,
  ChatPage,
  SymptomPage,
  FAQPage,
  ConnectPage,
  VoiceUIPage,
  SarvamUIPage,
} from './components/pages'

function SummaryPage() {
  const item = (title, points) => (
    <div className="bg-white rounded-3xl border-4 border-black p-6 shadow-[10px_10px_0_0_rgba(0,0,0,0.6)]">
      <div className="font-extrabold text-xl mb-3">{title}</div>
      <ul className="list-disc pl-6 space-y-1">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="px-4 md:px-8 space-y-6">
      <div className="bg-pink-200 border-4 border-black rounded-3xl p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.6)]">
        <div className="text-2xl md:text-3xl font-extrabold">Ayushman AI – Toon UI Brief</div>
        <div className="opacity-80">Playful, readable, rural-friendly medical assistant UI</div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {item('General Style', [
          'Soft gradients: baby blue, mint/green, peach, pink',
          'Thick outline vector shapes, rounded corners',
          'Friendly shadows and soft glows',
          'Cartoon health village theme',
        ])}
        {item('Mascots', [
          'Toon doctor bot 🤖🩺 and nurse robot 🧑‍⚕️',
          'Microphone 🎤 (blinking eyes), Speaker 🔊 (smiling)',
          'Book 📘, Bandage 🩹 & Thermometer 🌡️ characters',
        ])}
      </div>

      {item('Pages', [
        'Login: big round logo, waving doctor, chunky button',
        'Registration: nurse robot assisting, pastel blue/pink',
        'Home: large cartoon tiles',
        'Chat: toon bubbles, thinking anim, mic & speaker',
        'Symptom Checker: illustrated cards',
        'FAQ: friendly icon cards',
        'Doctor Connect: big CTA buttons',
        'Voice UI: animated mic, toon waves',
        'Sarvam Integration UI: badges, transcription states',
      ])}

      {item('Sarvam Integration Notes', [
        'Badge: “Powered by Sarvam” wherever voice/LLM is used',
        'Transcription state: “Transcribing…” bubble',
        'Generation state: “Generating reply…” bubble',
      ])}

      <div className="bg-blue-200 border-4 border-black rounded-3xl p-6 shadow-[12px_12px_0_0_rgba(0,0,0,0.6)]">
        <div className="font-extrabold text-xl mb-2">3D Hero (Spline)</div>
        <div className="mb-2">Black & white mini robot with subtle orange lighting — playful and friendly.</div>
        <div className="text-sm break-all">
          https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ToonShell>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/symptoms" element={<SymptomPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/voice" element={<VoiceUIPage />} />
        <Route path="/sarvam" element={<SarvamUIPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ToonShell>
  )
}
