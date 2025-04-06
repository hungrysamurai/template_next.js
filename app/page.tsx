import CatCard from './components/cards/cat/CatCard';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <CatCard tag={'jhg'} title={'hgjh'} body={''} author={''} time={''} />
      <h1>This is heading one</h1>
      <h2>This is heading two</h2>
      <h3>This is heading three</h3>
      <h4>
        This is heading four. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tenetur, sed mollitia. Iste harum vero veritatis inventore, totam
        quos, architecto est iure neque, dignissimos dolore. Facere laboriosam
        natus doloribus quas ducimus?
      </h4>
      <h5>
        This is heading five. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Assumenda nostrum tempora veritatis veniam sit
        laboriosam alias quibusdam nesciunt quasi expedita aliquid, modi
        inventore mollitia? Asperiores autem eius adipisci harum quam?
      </h5>
      <p>
        This is paragraph. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Necessitatibus aperiam consequuntur voluptatum id fugiat
        distinctio, tenetur numquam quasi laborum nihil, eaque quos fuga iure
        sit expedita, sapiente porro in? Obcaecati nam saepe exercitationem
        alias omnis iusto eveniet, ad cumque facilis quae repellendus unde
        asperiores magnam sit voluptatem corrupti ex, quos maiores cupiditate
        enim praesentium nobis consequuntur voluptas officia! Tempore voluptatum
        quod, similique neque iusto distinctio nam recusandae assumenda mollitia
        nemo eos asperiores eligendi numquam doloribus aliquid! Minus, delectus
        vel, accusantium at aspernatur nulla recusandae, odio earum suscipit
        iure necessitatibus non nesciunt consectetur id sint quasi porro quia
        velit qui nihil.
      </p>
    </main>
  );
}
