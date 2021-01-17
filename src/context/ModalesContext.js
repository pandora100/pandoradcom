//ModalContext.js
import React, {useState} from 'react';
let ModalContext = React.createContext({});
let {Provider,Consumer}=ModalContext;
 function ModalProvider ({children}) {
  let [isModalTecnologiasOpen, setIsModalTecnologiasOpen] = useState(false);
  let [t1ModalTecnologias, setT1ModalTecnologias] = useState('Add Grupo');
  let [isModalAgentesOpen, setIsModalAgentesOpen] = useState(false);
  let [t1ModalAgentes, setT1ModalAgentes] = useState('Add Agente');
  let [isModalModulosOpen, setIsModalModulosOpen] = useState(false);
  let [t1ModalModulos, setT1ModalModulos] = useState('Add Modulo');
  let [isModalCorrelacionesOpen, setIsModalCorrelacionesOpen] = useState(false);
  let [t1ModalCorrelaciones, setT1ModalCorrelaciones] = useState('Add Corr');
  let [isModalNewAlarmasOpen, setIsModalNewAlarmasOpen] = useState(false);
  let [t1ModalNewAlarmas, setT1ModalNewAlarmas] = useState('Add newAlarma');
  let [isModalcorrActivasOpen, setIsModalcorrActivasOpen] = useState(false);
  let [t1ModalcorrActivas, setT1ModalcorrActivas] = useState('Edit Corr');
  let [isModalEditAlarmasOpen, setIsModalEditAlarmasOpen] = useState(false);
  let [t1ModalEditAlarmas, setT1ModalEditAlarmas] = useState('Edit Alarm');
  let [isModalStartProcsOpen, setIsModalStartProcsOpen] = useState(false);
  let [t1ModalStartProcs, setT1ModalStartProcs] = useState(false);
  let [isModalStopProcsOpen, setIsModalStopProcsOpen] = useState(false);
  let [t1ModalStopProcs, setT1ModalStopProcs] = useState(false);
  let [isModalHistoricosOpen, setIsModalHistoricosOpen] = useState(false);
  let [t1ModalHistoricos, setT1ModalHistoricos] = useState(false);
  let [isModalConfigsOpen, setIsModalConfigsOpen] = useState(false);
  let [t1ModalConfigs, setT1ModalConfigs] = useState(false);
  let [isModalDelAlarmasOpen, setIsModalDelAlarmasOpen] = useState(false);
  let [t1ModalDelAlarmas, setT1ModalDelAlarmas] = useState('Del Alarma');

  return  <Provider value={{isModalTecnologiasOpen,
  	                        setIsModalTecnologiasOpen,
  	                        t1ModalTecnologias,
  	                        setT1ModalTecnologias,
                            isModalAgentesOpen,
                            setIsModalAgentesOpen,
                            t1ModalAgentes,
                            setT1ModalAgentes,
                            isModalModulosOpen,
                            setIsModalModulosOpen,
                            t1ModalModulos,
                            setT1ModalModulos,
                            isModalCorrelacionesOpen,
                            setIsModalCorrelacionesOpen,
                            t1ModalCorrelaciones,
                            setT1ModalCorrelaciones,
                            isModalHistoricosOpen,
                            setIsModalHistoricosOpen,
                            t1ModalHistoricos,
                            setT1ModalHistoricos,
                            isModalConfigsOpen,
                            setIsModalConfigsOpen,
                            t1ModalConfigs,
                            setT1ModalConfigs,
                            isModalStartProcsOpen,
                            setIsModalStartProcsOpen,
                            t1ModalStartProcs,
                            setT1ModalStartProcs,
                            isModalStopProcsOpen,
                            setIsModalStopProcsOpen,
                            t1ModalStopProcs,
                            setT1ModalStopProcs,
                            isModalNewAlarmasOpen,
                            setIsModalNewAlarmasOpen,
                            t1ModalNewAlarmas,
                            setT1ModalNewAlarmas,
                            isModalcorrActivasOpen,
                            setIsModalcorrActivasOpen,
                            t1ModalcorrActivas,
                            setT1ModalcorrActivas,
                            isModalEditAlarmasOpen,
                            setIsModalEditAlarmasOpen,
                            t1ModalEditAlarmas,
                            setT1ModalEditAlarmas,
                            setT1ModalStopProcs,
                            isModalDelAlarmasOpen,
                            setIsModalDelAlarmasOpen,
                            t1ModalDelAlarmas,
                            setT1ModalDelAlarmas


                          }}
             >
    {children}
  </Provider>
}
export {ModalProvider,Consumer as ModalConsumer,ModalContext} ;