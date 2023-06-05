import NavigationDots from "../components/NavigationDots";
import SocialMedia from "../components/SocialMedia";

import './Wrap.scss';

const Wrap = (Component, idName) => function HOC() {
    return (
        <div className="app__wrapper" id={idName}>
            <SocialMedia />

            <div>
                <Component />

                <div className="app__copy-rights">

                </div>
            </div>

            <NavigationDots active={idName} />
        </div>
    )
}

export default Wrap;