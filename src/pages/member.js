import '../css/member.css'
import Navigation from '../components/Nav';

export default function Member() {
    return (
        <div className="membercon">
            <Navigation />
            <h3 style={{textAlign: "center"}}>Daftar Member</h3>
            <table>
                <tr>
                    <th>Kode Member</th>
                    <th>Nama Member</th>
                    <th>Asal Member</th>
                    <th>No. Telpon</th>
                    <th>Tipe Member</th>
                </tr>
                <tr>
                    <td>3</td>
                    <td>a</td>
                    <td>asdfg</td>
                    <td>0823456789</td>
                    <td>harian</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>cass</td>
                    <td>eagjmns</td>
                    <td>09876541</td>
                    <td>bulanan</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>abcder</td>
                    <td>penebel</td>
                    <td>08987654321</td>
                    <td>mingguan</td>
                </tr>
            </table>
        </div>
    );
}