import { Layout } from "./components/layout";
import { Header } from "./components/header";
import { PageContent } from "./components/pageContent";
import { Cards } from "./components/card";
import { CardsWithButtons } from "./components/mybutton";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <Header />
      <PageContent>
        <CardsWithButtons />
      </PageContent>
    </Layout>
  );
};

export default App;
