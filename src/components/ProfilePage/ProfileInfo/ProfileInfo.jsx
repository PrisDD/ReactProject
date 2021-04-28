import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className='slider'>
                <img className='slider-img' src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg' />
            </div>
            <div className={s.about}>
                <div className='bio-photo'>
                    <img className='bio-img' src='https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk' />
                </div>
                <div className='bio-info'>
                    <h3>Pris.DD</h3>
                    <span className={s.span}>Date of Birth: 28 Feb.</span>
                    <span className={s.span}>City: Pervomaisk</span>
                    <span className={s.span}>Inst: @pris.dd</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;