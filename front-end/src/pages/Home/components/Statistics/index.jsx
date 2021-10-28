import {
    StatisticsTable,
    CategoriesButton,
    StatisticsContainer,
} from './styled'

const Statistics = () => {
    return (
        <StatisticsContainer>
            <h3>Estatísticas</h3>
            <StatisticsTable>
                <tbody>
                    <tr>
                        <th>Amigos</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Contatos</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Escola</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Parentes</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Trabalho</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Outros</th>
                        <td>20</td>
                    </tr>
                    <tr>
                        <th>Total de contatos</th>
                        <td>20</td>
                    </tr>
                </tbody>
            </StatisticsTable>
            <CategoriesButton>Visualizar Contatos</CategoriesButton>
        </StatisticsContainer>
    );
}

export default Statistics;