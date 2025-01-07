import { useState } from 'react';
import styles from './card.module.css';
import ReactCardFlip from 'react-card-flip';

function Card(props) {

    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            <div className={styles.card} onClick={flipCard}>
                <img className={styles.img} src={props.url}/>
                <h2 className={styles.card_title}>{props.name}</h2>
                <p className={styles.card_universe}>Вселенная: {props.universe}</p>
                <p className={styles.card_alterego}>Имя: {props.alterego}</p>                
                <p className={styles.card_occupation}>Род деятельности: {props.occupation}</p>
                <p className={styles.card_friends}>Друзья: {props.friends}</p>
                <p className={styles.card_superpowers}>Суперсила: {props.superpowers}</p>
            </div>
            <div className={`${styles.card_back} ${styles.card}`} onClick={flipCard}>
                <p className={styles.card_info}>Дополнительная информация: {props.info}</p>
            </div>
        </ReactCardFlip> 
    );
}
export default Card;

