import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { AppleIcon } from './AppleIcon';
import { BaseIcon } from './BaseIcon';
import { BaseIcon2 } from './BaseIcon2';
import { Cuboid_logoIcon } from './Cuboid_logoIcon';
import classes from './Group1880.module.css';
import { Ic_credit_cardIcon } from './Ic_credit_cardIcon';
import { Ic_more_vertIcon } from './Ic_more_vertIcon';
import { Ic_notificationsIcon } from './Ic_notificationsIcon';
import { ItemIcon } from './ItemIcon';
import { ItemIcon2 } from './ItemIcon2';
import { NetflixIcon } from './NetflixIcon';
import { SpotifyIcon } from './SpotifyIcon';

interface Props {
  className?: string;
}
/* @figmaId 8:2 */
export const Group1880: FC<Props> = memo(function Group1880(props = {}) {
  return (
    <>
      <div className={classes.dashboard}>
        <div className={classes.item}>
          <div className={classes.bankAndCards}>Bank and cards</div>
          <div className={classes.item2}>
            <div className={classes.base}></div>
            <div className={classes.bankMandiriTBK}>Bank Mandiri TBK</div>
            <div className={classes._8787}>****8787</div>
            <div className={classes.giro}>Giro</div>
            <div className={classes.item3}>
              <ItemIcon className={classes.icon} />
            </div>
          </div>
          <div className={classes.text}>
            <div className={classes.connectBankOrCard}>Connect bank or cards &gt;</div>
          </div>
        </div>
        <div className={classes.item4}>
          <div className={classes.currentActivity}>Current Travel Plans</div>
          <div className={classes.checkOutWhenFunds}>
            Check when flights and hotels are available and plan ahead. If booked through Karat, you gain considerable
            rebates and discounts.{' '}
          </div>
          <div className={classes.text2}>
            <div className={classes.showAllActivity}>Show Travel &gt;</div>
          </div>
        </div>
        <div className={classes.item5}>
          <div className={classes.item6}>
            <div className={classes.base2}></div>
            <div className={classes.image}></div>
            <div className={classes.leahEdwards}>
              <div className={classes.textBlock}>Target</div>
              <div className={classes.textBlock2}>4.5%</div>
            </div>
          </div>
          <div className={classes.item7}>
            <div className={classes.base3}></div>
            <div className={classes.image2}></div>
            <div className={classes.mikeTownse}>
              <div className={classes.textBlock3}>Best Buy</div>
              <div className={classes.textBlock4}>3%</div>
            </div>
          </div>
          <div className={classes.item8}>
            <div className={classes.base4}></div>
            <div className={classes.item9}>
              <ItemIcon2 className={classes.icon2} />
            </div>
            <div className={classes.eugeneHughes}>
              <div className={classes.textBlock5}>Carl’s Jr</div>
              <div className={classes.textBlock6}>12%</div>
            </div>
          </div>
          <div className={classes.base5}></div>
          <div className={classes.image3}></div>
          <div className={classes.ic_credit_card}>
            <Ic_credit_cardIcon className={classes.icon3} />
          </div>
          <div className={classes.text3}>
            <div className={classes.manual}>Explore</div>
          </div>
          <div className={classes.quickTransaction}>Cash Boost</div>
        </div>
        <div className={classes.item10}>
          <div className={classes.item11}>
            <div className={classes.base6}></div>
            <div className={classes.base7}></div>
            <div className={classes.netflix}>
              <NetflixIcon className={classes.icon4} />
            </div>
            <div className={classes._22Oct2021}>22 Oct 2021</div>
            <div className={classes.netflix2}>Netflix</div>
            <div className={classes._3450}> - $345.00</div>
            <div className={classes.entertainment}>Entertainment</div>
          </div>
          <div className={classes.item12}>
            <div className={classes.base8}></div>
            <div className={classes.base9}></div>
            <div className={classes.spotify}>
              <SpotifyIcon className={classes.icon5} />
            </div>
            <div className={classes._13May2021}>13 May 2021</div>
            <div className={classes.spotify2}>Spotify</div>
            <div className={classes._34502}> - $345.00</div>
            <div className={classes.entertainment2}>Entertainment</div>
          </div>
          <div className={classes.item13}>
            <div className={classes.base10}></div>
            <div className={classes.image4}></div>
            <div className={classes._14Nov2021}>14 Nov 2021</div>
            <div className={classes.antonioBennett}>Antonio Bennett</div>
            <div className={classes._34503}> + $345.00</div>
            <div className={classes.transferToAccount}>Transfer to account</div>
          </div>
          <div className={classes.item14}>
            <div className={classes.base11}></div>
            <div className={classes.image5}></div>
            <div className={classes._22Dec2021}>22 Dec 2021</div>
            <div className={classes.mittieWolfe}>Mittie Wolfe</div>
            <div className={classes._34504}> + $345.00</div>
            <div className={classes.transferToAccount2}>Transfer to account</div>
          </div>
          <div className={classes.item15}>
            <div className={classes.base12}></div>
            <div className={classes.base13}></div>
            <div className={classes.apple}>
              <AppleIcon className={classes.icon6} />
            </div>
            <div className={classes._25Apr2021}>25 Apr 2021</div>
            <div className={classes.apple2}>Apple</div>
            <div className={classes._34505}> - $345.00</div>
            <div className={classes.entertainment3}>Entertainment</div>
          </div>
          <div className={classes.transactionHistory}>Transaction history</div>
          <div className={classes.text4}>
            <div className={classes.allTransaction}>All transaction</div>
          </div>
        </div>
        <div className={classes.goodMorningEureka}>Good Morning, Eureka!</div>
        <div className={classes.base14}></div>
        <div className={classes.gradient}></div>
        <button className={classes.button}>
          <div className={classes.base15}></div>
          <div className={classes.transferFunds}>Pay Bill Online</div>
        </button>
        <div className={classes.ic_more_vert}>
          <Ic_more_vertIcon className={classes.icon7} />
        </div>
        <div className={classes.text5}>
          <div className={classes._19800}>1,980.00</div>
        </div>
        <div className={classes.base16}></div>
        <div className={classes.text6}>
          <div className={classes.available}>Available</div>
        </div>
        <div className={classes.text7}>
          <div className={classes.unnamed}>$</div>
        </div>
        <div className={classes.text8}>
          <div className={classes.coboidBalance}>Available Credit</div>
        </div>
        <div className={classes.base17}></div>
        <div className={classes.line}></div>
        <div className={classes.text9}>
          <div className={classes.summary}>Summary</div>
        </div>
        <div className={classes.text10}>
          <div className={classes.payment}>Payment</div>
        </div>
        <div className={classes.text11}>
          <div className={classes.activities}>Travel</div>
        </div>
        <div className={classes.text12}>
          <div className={classes.wallet}>Account</div>
        </div>
        <div className={classes.text13}>
          <div className={classes.offer}>Offer</div>
        </div>
        <div className={classes.text14}>
          <div className={classes.help}>Help</div>
        </div>
        <div className={classes.selector}></div>
        <div className={classes.profile}>
          <div className={classes.base18}>
            <BaseIcon className={classes.icon8} />
          </div>
          <div className={classes.eureka}>Eureka</div>
        </div>
        <div className={classes.ic_notifications}>
          <Ic_notificationsIcon className={classes.icon9} />
        </div>
        <div className={classes.notification}>
          <div className={classes.base19}>
            <BaseIcon2 className={classes.icon10} />
          </div>
          <div className={classes._4}>4</div>
        </div>
        <div className={classes.cuboid_logo}>
          <Cuboid_logoIcon className={classes.icon11} />
        </div>
      </div>
    </>
  );
});
