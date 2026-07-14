import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TourSearch from '../TourSearch/TourSearch';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import VKNews from '../VKNews/VKNews';
import About from '../About/About';
import ContactBanner from '../ContactBanner/ContactBanner';
import AboutUs from '../AboutUs/AboutUs';
import Tourists from '../Tourists/Tourists';
import Contacts from '../Contacts/Contacts';
// Tours
import BusTours from '../BusTours/BusTours';
import WorldTours from '../WorldTours/WorldTours';
import GroupTours from '../GroupTours/GroupTours';
import SpaTreatment from '../SpaTreatment/SpaTreatment';
// Gelendzhik
import Gelendzhik from '../Gelendzhik/Gelendzhik';
import Neolit from '../Neolit/Neolit';
import Kiulait from '../Kiulait/Kiulait';
// import Olina from '../Olina/Olina';  !!!
// Kabardinka
import Kabardinka from '../Kabardinka/Kabardinka';
import HotelRoyal from '../HotelRoyal/HotelRoyal';
import Lakis from '../Lakis/Lakis';
import Doob from '../Doob/Doob';
// import Edem from '../Edem/Edem';   !!!
// Divnomorskoye
import Divnomorskoye from '../Divnomorskoye/Divnomorskoye';
import Avangard from '../Avangard/Avangard';
import Layt from '../Layt/Layt';
import Kiparis from '../Kiparis/Kiparis';
// Novomikhailovsky
import Novomikhailovsky from '../Novomikhailovsky/Novomikhailovsky';
import Edelweiss from '../Edelweiss/Edelweiss';
import Estella from '../Estella/Estella';
import SouthCarolina from '../SouthCarolina/SouthCarolina';
// Lermontovo
import Lermontovo from '../Lermontovo/Lermontovo';
import Brillianite1 from '../Brillianite1/Brillianite1';
import Brillianite2 from '../Brillianite2/Brillianite2';
// Dzhubga
import Dzhubga from '../Dzhubga/Dzhubga';
import Leodimas from '../Leodimas/Leodimas';
//
import SocialList from '../SocialList/SocialList';
import PopUp from '../PopUp/PopUp';
import ScrollUp from '../ScrollUp/ScrollUp';
import Privacy from '../Privacy/Privacy';

export default function App() {
  const [isTourPopupOpen, setIsTourPopupOpen] = useState(false);
  const [isAdvicePopupOpen, setIsAdvicePopupOpen] = useState(false);

  const openAdvice = () => setIsAdvicePopupOpen(true);
  const openTour = () => setIsTourPopupOpen(true);

  return (
    <>
      <Header onOpenAdvice={openAdvice} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TourSearch />
                <Services />
                <Banner onOpenTour={openTour} />
                <VKNews />
                <About />
                <ContactBanner onOpenAdvice={openAdvice} />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/tourists" element={<Tourists />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/bus-tours"
            element={<BusTours onOpenAdvice={openAdvice} />}
          />
          <Route path="/world-tours" element={<WorldTours />} />
          <Route
            path="/bus-tours/gelendzhik"
            element={<Gelendzhik onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/gelendzhik/neolit"
            element={<Neolit onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/gelendzhik/kiulait"
            element={<Kiulait onOpenAdvice={openAdvice} />}
          />
          {/* <Route
            path="/bus-tours/gelendzhik/olina"
            element={<Olina onOpenAdvice={openAdvice} />}
            /> */}
          <Route
            path="/bus-tours/kabardinka"
            element={<Kabardinka onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/kabardinka/hotel-royal"
            element={<HotelRoyal onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/kabardinka/lakis"
            element={<Lakis onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/kabardinka/doob"
            element={<Doob onOpenAdvice={openAdvice} />}
          />
          {/* <Route
            path="/bus-tours/kabardinka/edem"
            element={<Edem onOpenAdvice={openAdvice} />}
            /> */}
          <Route
            path="/bus-tours/divnomorskoye"
            element={<Divnomorskoye onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/divnomorskoye/avangard"
            element={<Avangard onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/divnomorskoye/layt"
            element={<Layt onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/divnomorskoye/kiparis"
            element={<Kiparis onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/novomikhailovsky"
            element={<Novomikhailovsky onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/novomikhailovsky/edelweiss"
            element={<Edelweiss onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/novomikhailovsky/estella"
            element={<Estella onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/novomikhailovsky/south-carolina"
            element={<SouthCarolina onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/lermontovo"
            element={<Lermontovo onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/lermontovo/brillianite-1"
            element={<Brillianite1 onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/lermontovo/brillianite-2"
            element={<Brillianite2 onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/dzhubga"
            element={<Dzhubga onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/bus-tours/dzhubga/leodimas"
            element={<Leodimas onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/group-tours"
            element={<GroupTours onOpenAdvice={openAdvice} />}
          />
          <Route
            path="/spa-treatment"
            element={<SpaTreatment onOpenAdvice={openAdvice} />}
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer onOpenAdvice={openAdvice} />
      <SocialList />
      <PopUp
        isOpen={isTourPopupOpen}
        onClose={() => setIsTourPopupOpen(false)}
        title={
          <>
            Подобрать тур <span>по акции!</span>
          </>
        }
      />
      <PopUp
        isOpen={isAdvicePopupOpen}
        onClose={() => setIsAdvicePopupOpen(false)}
        title="Получить консультацию"
      />
      <ScrollUp />
    </>
  );
}
