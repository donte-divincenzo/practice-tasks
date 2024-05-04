import { data } from "../../data/items";
import styles from "./Item.module.scss";

const Item = () => {
  return (
    <div className={styles.itemWrapper}>
      {data.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.cardItems}>
            <span>{"#" + item.id}</span>
            <h2 className={styles.cardHead}>{item.head}</h2>
            <p className={styles.cardBody}>{item.body}</p>
            {item.image ? (
              <img
                width={100}
                height={100}
                src={item.image}
                alt={item.id + " image"}
              />
            ) : (
              ""
            )}
            {item.link ? <a href={item.link}>{item.linkText}</a> : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
