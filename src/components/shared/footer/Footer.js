import styles from './styles.module.css';

export default function Footer() {
    return (
        <div className={ styles.footer }>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className={ styles.copyright }>© Filgram 2021.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
