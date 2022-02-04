import React, { createContext, useCallback, useContext, useState } from 'react';

interface DataMeetProps {
  children: React.ReactNode;
}

type DataMeetType = {
  nameRoom: string;
  nameUser: string;
  handleNameRoom: (nameRoomString: string) => void;
  handleNameUser: (nameRoomString: string) => void;
};

const DataMeetContext = createContext({} as DataMeetType);

export function DataMeetContextProvider({ children }: DataMeetProps) {
  const [nameRoom, setNameRoom] = useState('');
  const [nameUser, setNameUser] = useState('');

  const handleNameRoom = useCallback((nameRoomString: string) => {
    setNameRoom(nameRoomString);
  }, []);

  const handleNameUser = useCallback((nameUserString: string) => {
    setNameUser(nameUserString);
  }, []);

  return (
    <DataMeetContext.Provider
      value={{ handleNameRoom, nameRoom, handleNameUser, nameUser }}
    >
      {children}
    </DataMeetContext.Provider>
  );
}

export const useDataMeet = () => useContext(DataMeetContext);
