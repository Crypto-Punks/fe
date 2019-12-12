import React from 'react';
import { useSelector } from 'react-redux';
import { getOpenMenu } from '../../selectors/menuSelectors';
import styles from '../hamburger-menu/AboutUsMenu.css';


const AboutUsMenu = () => {
  const openMenu = useSelector(getOpenMenu);

  return (
    <div className={`${styles.AboutUsMenu} ${openMenu ? styles.open : styles.closed}`} >
      <h1>About Crypto Trader</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor augue a ligula vulputate facilisis. Maecenas sit amet malesuada nibh, eget fermentum quam. Donec eu varius sapien. Aenean et hendrerit quam. Fusce nibh ligula, facilisis vel neque eget, porta posuere erat. Praesent porta metus urna, eu efficitur lectus euismod vel. Duis condimentum suscipit quam nec vehicula. Sed imperdiet quis ipsum a congue. Sed vestibulum ipsum at nulla sodales dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porta pretium eros a fermentum. Cras euismod, orci at rutrum mollis, magna ex efficitur enim, sit amet tincidunt urna urna et ex. Phasellus at sem neque. Suspendisse sem ipsum, pellentesque vitae mauris eu, eleifend fringilla nulla. Praesent sed ornare lacus, id luctus velit. Donec porttitor suscipit venenatis.<br></br>
      <br></br>
Phasellus sed magna luctus, mattis elit at, placerat leo. Aliquam sodales lorem ac nunc iaculis viverra. Donec non velit lacinia, faucibus metus nec, vulputate orci. Vivamus sagittis semper molestie. Nullam in mauris enim. Quisque porttitor facilisis metus non vehicula. Donec sit amet ultricies lacus. Nam ac rhoncus dui. Nulla at porta velit. Aenean nunc urna, euismod et purus vitae, posuere lobortis quam. Sed leo lorem, pretium a tellus a, aliquam hendrerit risus. Phasellus nec sapien ac lectus fringilla ornare iaculis et sapien.<br></br>
<br></br>
Mauris tempor ante mauris, vel suscipit libero vehicula nec. Aenean in ex sit amet dui venenatis commodo. Nam dictum mauris sit amet nulla vestibulum lobortis. Mauris porttitor suscipit ligula, eu congue nisl ullamcorper a. Proin molestie laoreet nunc, et luctus quam auctor ac. Donec fringilla interdum efficitur. Vestibulum facilisis odio nec sodales imperdiet. Sed fringilla accumsan libero sit amet faucibus. Aenean ornare, magna vel porttitor luctus, turpis tortor ultrices turpis, sit amet faucibus dolor ex non ipsum. Phasellus a velit et ipsum vulputate vehicula quis in justo. Nam at leo at nisi laoreet finibus. Quisque tristique elit ac mattis dapibus. Nulla eu tellus sagittis lectus lobortis vestibulum.<br></br>
<br></br>
Curabitur imperdiet laoreet dapibus. Etiam a tempus dolor. Cras dapibus tortor pharetra, venenatis nunc at, eleifend leo. Aliquam erat volutpat. Curabitur laoreet eros nibh, id maximus lacus ullamcorper at. Duis scelerisque accumsan faucibus. Donec quis purus nulla. Pellentesque at tellus sapien. Morbi id odio quis neque mattis vestibulum. Aenean nunc dolor, rutrum quis ipsum sed, sollicitudin ultrices nisl. Nunc in magna egestas, tincidunt eros vel, dictum diam. Pellentesque molestie a dolor in faucibus. Vestibulum sed magna ac nisi lobortis porta. In vel massa tellus. Aenean iaculis nulla sed dolor suscipit, in vulputate libero sollicitudin. Proin interdum ipsum ac sapien posuere condimentum.<br></br>
<br></br>
Integer dolor odio, tincidunt in vulputate ac, varius eget justo. Curabitur eget orci porttitor, varius ligula id, suscipit diam. Etiam ut nisl dui. Proin accumsan pretium nulla. Praesent blandit neque ac auctor mattis. Cras eu nisl non erat tempor tincidunt at eget lorem. Nulla nisl eros, maximus at finibus aliquet, congue id nulla.</p>
    </div >
  );
};

export default AboutUsMenu;
