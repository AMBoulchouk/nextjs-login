import Nav from './partials/nav';
import cx from 'classnames';
import styles from '../styles/In.module.css';

export default function Root() {
  return (
    <>
      <Nav />

      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <h1 className="h3 mb-3 fw-normal">Welcome to Mi Page!</h1>
      </main>
    </>
  )
}
