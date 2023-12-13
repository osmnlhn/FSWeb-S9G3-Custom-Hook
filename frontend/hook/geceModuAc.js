import useLocalStorageKullan from './localStorageKullan';


const geceModuAc = (initialState) => {
  const [geceModu, setGeceModu] = useLocalStorageKullan('darkMode',initialState);

  const geceModuAcKapat = () => {
    setGeceModu((prevGeceModu) => !prevGeceModu);
  };

  return [geceModu, geceModuAcKapat];
};

export default geceModuAc;