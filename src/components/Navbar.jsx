import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <Link class="navbar-brand me-auto ms-md-5" to="/">
                    Secure Password
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto me-md-5">
                        <Link class="nav-link ms-md-5" to="/">Home</Link>
                        <Link class="nav-link ms-md-5" to="/generatepassword">Gerar senha</Link>
                        <Link class="nav-link ms-md-5" to="/testpassword">Testar senha</Link>
                        <Link class="nav-link ms-md-5" to="/tips">Dicas</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar