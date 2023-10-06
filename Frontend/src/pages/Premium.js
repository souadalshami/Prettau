import Header from '../components/layout/Header'
import PageFooter from '../components/layout/Footer';
import PremiumProduct from '../components/Products/PremiumProduct';
import PageHeader from '../components/Products/PageHeader';

function Premium(){

    return(
        <div>
            <Header/>
            <PageHeader/>
            <PremiumProduct/>
            <PageFooter/>
        </div>

    )

}


export default Premium;