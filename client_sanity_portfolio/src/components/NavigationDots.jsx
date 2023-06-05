
const NavigationDots = ({ active }) => {
    return (
      <div className="app__navigations-dots">
            {['home', 'about', 'work', 'skills', 'contact', 'testimonials'].map(navDot => {
                return (
                    <a
                        key={navDot}
                        href={`#${navDot}`}
                        style={{backgroundColor: active === navDot ?  'var(--secondary-color)' : 'var(--gray-color)' }}
                    />
                )
            })}
        </div>
    )
}

export default NavigationDots;