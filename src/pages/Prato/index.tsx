
import styles from './Prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato){
    return  <NotFound />;
  }
  return(
    <Routes>
      <Route path="*" element={<PaginaPadrao />} >
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
                {prato.title}
              </h1>
              <div className={styles.imagem}>
                <img  src={prato.photo} alt={prato.title}/>
              </div>
              <TagsPrato {...prato} />
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}