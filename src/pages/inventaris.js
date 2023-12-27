import Navigation from '../components/Nav';

export default function Inventaris() {
    return (
        <div className="inventariscon">
            <h3 style={{textAlign: "center"}}>Inventaris Nutrition Club</h3>
            <Navigation />
            <div className="d-flex flex-column">
                <div>
                    <div className="float-start p-3">
                        <label for="kodebarang">Kode Barang</label><br/>
                        <input type="text"name='kodebarang'/><br/>
                        <label for="namabarang">Nama Barang</label><br/>
                        <input type='text' name='namabarang'/><br/>
                        <label for="stokbarang">Stok Barang</label><br/>
                        <input type='text' name='stokbarang'/>
                    </div>
                    <div className="buttoninv float-end p-3">
                        <button className="btn btn-primary text-nowrap">Isi Data</button><br/>
                        <button className="btn btn-primary text-nowrap">Hapus Data</button><br/>
                        <button className="btn btn-primary text-nowrap">Edit Data</button>
                    </div>
                </div>
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
        </div>
    );
}