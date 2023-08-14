import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./About/About";
import { Contacts } from "./Contacts/Contacts";
import { LogInForm } from "./LogInForm/LogInForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { SharedLayout } from "./SharedLayout/SharedLayout";





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
            <Route path="/login" element={<LogInForm />}></Route>
          </Route>
        </Routes>
      </Suspense>       
      </div>
  );
}

