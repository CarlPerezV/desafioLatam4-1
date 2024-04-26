import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header titulo={"Adopta un perrito"} />

      <div className="container">
        <div className="d-flex gap-4">
          <MyCard
            image={
              "https://media.istockphoto.com/id/1281408411/es/foto/perro-akita-sonriente-con-expresi%C3%B3n-feliz-y-los-ojos-cerrados-aislado-sobre-fondo-de-color-azul.jpg?s=612x612&w=0&k=20&c=41hi-7N_6UzhJIjHIsw4YSffKORzF-aV9YwGb86dAUA="
            }
            nombre={"Bartolo"}
            desc={
              "Lleno de energía y listo para jugar, ¡Dale a Bartolo el hogar amoroso que se merece!"
            }
            variante={"success"}
            raza={"Akita"}
          />
          <MyCard
            image={
              "https://cdn.pixabay.com/photo/2022/12/22/02/56/dog-7671355_1280.jpg"
            }
            nombre={"Messi"}
            desc={
              "Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
            }
            variante={"info"}
            raza={"Labrador"}
          />
          <MyCard
            image={
              "https://media.istockphoto.com/id/175453491/es/foto/d%C3%A1lmata.jpg?s=612x612&w=0&k=20&c=flWZ8C9v3FnrziYcYcxPMAp_NHa0E_hF1AEPOm1iixE="
            }
            nombre={"Gohan"}
            desc={
              "Un perro de tamaño mediano con un corazón gigante, Hazte amigo de Gohan y experimenta un amor incondicional! "
            }
            bg={"warning"}
            raza={"Dalmata"}
          />
          <MyCard
            image={
              "https://media.istockphoto.com/id/1404300806/es/foto/el-lindo-cachorro-de-perro-salchicha-se-sienta-y-mira-atentamente-de-reojo-al-due%C3%B1o-esperando.jpg?s=612x612&w=0&k=20&c=HHkLcp4cVgIfT_uA6Z0xMVKN8BLnjX9SiEiWCfNl9dE="
            }
            nombre={"Princesa"}
            desc={
              "Es una compañera leal y cariñosa que adora los mimos y los abrazos, ¡Ayuda a Princesa a encontrar su lugar feliz! "
            }
            variante={"danger"}
            raza={"Dachshund "}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
