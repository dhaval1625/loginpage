import styles from './FormCard.module.css';

export default function FormCard(props) {

    return (
        <div className={styles['form-container']}>
            <form onSubmit={props.submit}>
                {props.children}
                <button className={styles['btn-register']} type='submit'>{props.buttonContent}</button>
            </form>
        </div>
    )
}