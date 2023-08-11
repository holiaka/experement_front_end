import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About/About";





export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Contacts />}></Route>
            <Route path="/about" element={<About />}></Route>   
            <Route path="/registration" element={<RegisterForm />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
          </Route>
        </Routes>
      </Suspense>       
      </div>
  );
}

