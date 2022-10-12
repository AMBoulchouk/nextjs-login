import Link from 'next/link'

export default Nav;

function Nav() {
    return (
        <>

            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-home-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-home"
                        type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </button>
                    <button className="nav-link" id="nav-profile-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-profile"
                        type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <Link href="/signin">
                            <a>Sign In</a>
                        </Link>
                    </button>
                    <button className="nav-link" id="nav-profile-tab"
                        data-bs-toggle="tab" data-bs-target="#nav-profile"
                        type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <Link href="/login">
                            <a>Log In</a>
                        </Link>
                    </button>
                </div>
            </nav>

        </>
    )
}

