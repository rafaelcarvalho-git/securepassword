import styles from './Home.module.css'
import { MdPassword, MdSecurity } from 'react-icons/md';
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';
import { GrSecure } from 'react-icons/gr';
import { VscGistSecret } from 'react-icons/vsc';

function Tips() {
    return (
        <section className="container rounded shadow bg-info my-5 pb-4">
            <h2 class="py-4 border-bottom text-center">Dicas para ter uma senha forte e segura</h2>
            <div class="row">
                <div class="col-sm-6 col-md-4 px-4">
                    <div class="box-shadow">
                        <div class="icon text-center my-4">
                            <MdPassword className={styles.icon} />
                        </div>
                        <p>A password should be 16 characters or more; our password-related research has found that 45 percent of Americans use passwords of eight characters or less, which are not as secure as longer passwords.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 px-4">
                    <div class="box-shadow">
                        <div class="icon text-center my-4">
                            <RiLockPasswordLine className={styles.icon} />
                        </div>
                        <p>A password should include a combination of letters, numbers, and characters.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 px-4">
                    <div class="box-shadow">
                        <div class="icon text-center my-4">
                            <MdSecurity className={styles.icon} />
                        </div>
                        <p>A password shouldn’t be shared with any other account.</p>
                    </div>  
                </div>
                <div class="col-sm-6 col-md-4 px-4">
                    <div class="box-shadow">
                        <div class="icon text-center my-4">
                            <GrSecure className={styles.icon} />
                        </div>
                        <p>A password shouldn’t include any of the user’s personal information like their address or phone number. It’s also best not to include any information that can be accessed on social media like kids’ or pets’ names.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 px-4">
                    <div class="box-shadow">
                        <div class="icon text-center my-4">
                            <VscGistSecret className={styles.icon} />
                        </div>
                        <p>A password shouldn’t contain any consecutive letters or numbers.</p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 px-4">
                    <div class="box-shadow">
                        <div class="icon text-center my-4">
                            <RiLockPasswordFill className={styles.icon} />
                        </div>
                        <p>A password shouldn’t be the word “password” or the same letter or number repeated.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tips