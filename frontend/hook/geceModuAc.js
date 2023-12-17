
import localStorageKullan from './localStorageKullan';
const geceModuAc = () => {
  const [geceModuAcik, setGeceModuAcik] = localStorageKullan();

  const toggleGeceModu = () => {
    setGeceModuAcik(prevValue => !prevValue);
  };

  return [geceModuAcik, toggleGeceModu];
};

export default geceModuAc;