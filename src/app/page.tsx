"use client"

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useAppSelector } from "../redux/hooks/useAppSelector";
//import { useSelector } from "react-redux";
//import { RootState } from "../redux/store";

const PageContent = ()=>{
  //const user = useSelector((state: RootState)=> state.user);
  const user = useAppSelector(state => state.user);

  return (
      <div>
        Meu nome é: {user.name} e tenho {user.age} anos. <br />
        Tema: ...

        <hr />
        <input type="text" value={'...'} />
        <hr />
        <button>Switch Theme</button>
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