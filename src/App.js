import { Layout } from "./components/layout";
import { Header } from "./components/header";
import { PageContent } from "./components/pageContent";
import { Cards } from "./components/card";

const App = () => {
  return (
    <Layout>
      <Header />
      <PageContent>
        <Cards />
      </PageContent>
    </Layout>
  );
};

export default App;
