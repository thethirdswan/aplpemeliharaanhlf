import Navigation from '../components/Nav';

export default function Inventaris() {
    return (
        <div className="inventariscon">
            <h3 style={{textAlign: "center"}}>Inventaris</h3>
            <Navigation />
            <table>
                <tr>
                    <th>Kode Barang</th>
                    <th>Nama Barang</th>
                    <th>Stok Barang</th>
                </tr>
                <tr>
                    <td>01</td>
                    <td>shake vanilla</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>shake chocolate</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>nrg tea</td>
                    <td>23</td>
                </tr>
            </table>
        </div>
    );
}