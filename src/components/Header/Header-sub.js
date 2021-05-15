import React from 'react';
import ashish from '../../assets/images/26170116_1938413376419165_4779025603988534887_o.jpg';
import styles from '../../assets/css/Header.module.css';
import 'boxicons';

import { SiUpwork } from 'react-icons/si';
import { CIcon } from '@coreui/icons-react';
import { cibMailRu } from '@coreui/icons';

function HeaderSub() {
  return (
    <div>
      <div className={styles.subContainer}>
        <div className={styles.ashish}>
          <img src={ashish} alt='ashish' />
        </div>

        <div className={styles.right}>
          <div>
            <div className={styles.name}>Ashish</div>
            <div className={styles.name}>Kumar</div>
            <div className={styles.name}>Mahto</div>
          </div>

          <div className={styles.social}>
            <a
              href='https://www.facebook.com/endev.ashish/'
              target='_blank'
              rel='noreferrer'
            >
              <box-icon
                type='logo'
                name='facebook'
                color={styles.social_icon}
              ></box-icon>
            </a>
            <a
              href='https://www.instagram.com/ashish13005/'
              target='_blank'
              rel='noreferrer'
            >
              <box-icon name='instagram' type='logo'></box-icon>
            </a>
            <a
              href='https://twitter.com/AshishM9301'
              target='_blank'
              rel='noreferrer'
            >
              <box-icon name='twitter' type='logo'></box-icon>
            </a>
            <a
              href='https://www.upwork.com/freelancers/~013fb158c54d703709'
              target='_blank'
              rel='noreferrer'
            >
              <SiUpwork color='#000' size='24px' />
            </a>
            <a href='mailto:giftofgodashish@gmail.com'>
              <CIcon
                content={cibMailRu}
                style={{ width: 24, height: 24 }}
                color='inherit'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSub;
