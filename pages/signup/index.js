import cx from 'classnames';
import styles from '../../styles/In.module.css';
import Nav from '../partials/nav';

export default Signup;

function Signup() {
  return (
    <>

    <Nav />

      <main className={cx(styles["form-signin"],"text-center","mt-5")}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Sign up</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="passwordAgain" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password again</label>
          </div>

          <div className={cx(styles.checkbox,"mb-3")}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>
      </main>

    </>
  )
}
