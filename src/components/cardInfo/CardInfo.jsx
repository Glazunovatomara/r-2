import styles from './cardInfo.module.css';


function CardInfo (props) {
    return (
        <div className={styles.card_information}>
            <img className={styles.img} src={props.url}/>
            <div className={styles.info}>
                <h2 className={styles.card_title}>{props.name}</h2>
                <p className={styles.card_universe}>Вселенная: {props.universe}</p>
                <p className={styles.card_alterego}>Имя: {props.alterego}</p>                
                <p className={styles.card_occupation}>Род деятельности: {props.occupation}</p>
                <p className={styles.card_friends}>Друзья: {props.friends}</p>
                <p className={styles.card_superpowers}>Суперсила: {props.superpowers}</p>
                <p className={styles.card_info}>Дополнительная информация: {props.info}</p>
            </div>
        </div>
    )
}

export default CardInfo;