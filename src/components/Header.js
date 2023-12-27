import logo from '../Herbalife.png';

export default function Header() {
    return (
        <header>
            <h2>Aplikasi Pemeliharaan</h2>
            <img src={logo} alt='Logo Herbalife'/>
            <h1>Nutrition Club Pegasus</h1>
        </header>
    );
}