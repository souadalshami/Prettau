import Header from '../components/layout/Header'
import PageFooter from '../components/layout/PageFooter';
import Details from '../components/ProductDetails/Details';
import PageHeader from '../components/ProductDetails/PageHeader';

function ProductDetails(){

    return(
        <div>
            <Header/>
            <PageHeader/>
            <Details/>
            <PageFooter/>
        </div>
    )

}
export default ProductDetails;