
import localStorageKullan from './localStorageKullan';
const geceModuAc = (initialValue) => {
  const [geceModuAcik, setGeceModuAcik] = localStorageKullan(initialValue);

  const toggleGeceModu = () => {
    setGeceModuAcik(prevValue => !prevValue);
  };

  return [geceModuAcik, toggleGeceModu];
};

export default geceModuAc;