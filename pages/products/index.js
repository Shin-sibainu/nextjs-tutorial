import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ProductsList = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>

        <ul>
          <li>
            <Link href="/products/smartPhone">
              <a>スマートフォン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc">
              <a>パソコン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headPhone">
              <a>ヘッドホン</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default ProductsList;
