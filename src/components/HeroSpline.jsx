import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative h-[320px] md:h-[420px] lg:h-[520px]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent pointer-events-none" />
    </div>
  )
}
