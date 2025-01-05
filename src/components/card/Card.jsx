import styles from './card.module.css';

function Card(props) {
    return (
        <div className={styles.card} >
            <img className={styles.img} src={props.url}/>
            <h2 className={styles.card_title}>{props.name}</h2>
        </div> 
    );
}
export default Card;
