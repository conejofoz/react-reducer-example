"use client"

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useAppSelector } from "../redux/hooks/useAppSelector";
//import { useSelector } from "react-redux";
//import { RootState } from "../redux/store";

/* Imports necessários para alterar um reducer */
import { useDispatch } from 'react-redux';
import { setAge, setName } from '../redux/reducers/userReducer';
import { setThemeStatus } from "../redux/reducers/themeReducer";



const PageContent = ()=>{
  //const user = useSelector((state: RootState)=> state.user);
  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state=>state.theme);
  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));

  const dispatch = useDispatch();

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setName(e.target.value))
  }

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(setAge(parseInt(e.target.value)));
  }

  const handleSwitchTheme = ()=>{
    switchTheme(theme.status === 'light' ? 'dark' : 'light');
  }

  return (
      <div>
        Meu nome é: {user.name} e tenho {user.age} anos. <br />
        Tema: {theme.status}

        <hr />
        <input type="text" value={user.name} onChange={handleNameInput} />
        <input type="text" value={user.age} onChange={handleAgeInput} />
        <hr />
        <button onClick={handleSwitchTheme}>Switch Theme</button>
      </div>
  )
}

const Page = ()=>{
  return (
    <Provider store={store}>
      <PageContent />
    </Provider>
  )
}


export default Page;