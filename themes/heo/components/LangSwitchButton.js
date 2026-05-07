import { useGlobal } from '@/lib/global'

const LangSwitchButton = (props) => {
  const { className } = props
  const { lang, changeLang } = useGlobal()

  const isZH = lang?.startsWith('zh')
  const nextLang = isZH ? 'en-US' : 'zh-CN'
  const label = isZH ? 'EN' : '中'
  const title = isZH ? 'Switch to English' : '切换为中文'

  const handleClick = () => {
    changeLang(nextLang)
    if (typeof window !== 'undefined') {
      try { localStorage.setItem('lang', nextLang) } catch (e) {}
    }
  }

  return (
    <div
      onClick={handleClick}
      title={title}
      className={`${className || ''} cursor-pointer hover:scale-100 hover:bg-black hover:bg-opacity-10 rounded-full w-10 h-10 flex justify-center items-center duration-200 transition-all select-none`}>
      <span className='text-sm font-semibold'>{label}</span>
    </div>
  )
}

export default LangSwitchButton
