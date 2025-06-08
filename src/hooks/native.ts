import { useEffect, useState } from "react";
import { NativeModules, Platform } from "react-native";

const { DeviceName, OSVersionModule } = NativeModules;

const useDeviceInformation = () => {
  const [deviceName, setDeviceName] = useState('Carregando...');
  const [osVersion, setOsVersion] = useState<string | null>(null);

  useEffect(() => {
    fetchDeviceInfo();
  }, []);

  const fetchDeviceInfo = async () => {
    await Promise.all([fetchDeviceName(), fetchOSVersion()]);
  };

  const fetchDeviceName = async () => {
    try {
      if (DeviceName?.getDeviceName) {
        const name = await DeviceName.getDeviceName();
        setDeviceName(name);
      } else {
        setDeviceName('Dispositivo não suportado');
      }
    } catch (error) {
      console.error('Erro ao obter nome do dispositivo:', error);
      setDeviceName('Erro ao obter nome');
    }
  };

  const fetchOSVersion = async () => {
    try {
      if (OSVersionModule?.getOSVersion) {
        const version = await OSVersionModule.getOSVersion();
        setOsVersion(version);
      } else {
        const version = Platform.Version.toString();
        setOsVersion(version);
      }
    } catch (error) {
      console.error('Erro ao obter versão do sistema:', error);
      setOsVersion('Erro ao obter versão');
    }
  };

  return { deviceName, osVersion };
};

export default useDeviceInformation;
