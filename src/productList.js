import React from 'react'
import Product from './product';
import axios from 'axios';



class ProductList extends React.Component {
   

    constructor(props) {
        super(props)
        this.state = {
            prod: []
        }
        this.upProdVote=this.upProdVote.bind(this)
        this.downProdVote=this.downProdVote.bind(this)
    }

    getRemoteData() {
        axios.get("http://localhost:3000/prod")
            .then((received) => {
                this.setState({ prod: received.data })
                console.log(this.state.prod)
            })
    }
    
    componentWillMount() {
        this.getRemoteData()
    }

    upProdVote(id){
       const nextProd=this.state.prod.map((product)=>{
        if(product.id == id){
            return Object.assign({},product,{
                votes:parseInt(product.votes)+1,
            });
        }else{
            return product;
        }
    
    });
    this.setState({
        prod:nextProd,
    });
    }

    downProdVote(id){
        const nextProd=this.state.prod.map((product)=>{
         if(product.id === id){
             return Object.assign({},product,{
                 votes:parseInt(product.votes)-1,
             });
         }else{
             return product;
         }
     
     });
     this.setState({
         prod:nextProd,
     });
     }

    
    render() { 
        const productComponet = this.state.prod.map((prod) => (
             <Product
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    desc={prod.description}
                    link={prod.link}
                    url={prod.url}
                    vote={prod.votes}
                    submittedby={prod.submittedBy}
                    avatar={prod.avatar}
                    proUrl={prod.productUrl}
                    onVote={this.upProdVote}
                    deleteVote={this.downProdVote}>
            </Product>
        ))

        return(
            <div className='ui unstackable items'>
            {productComponet}
            </div>
        )
    }


    render(){
        const prods = this.state.prod.sort((a,b)=>(
        b.votes-a.votes
        ));
        const productComponet = prods.map((prod) =>(
            <Product
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    desc={prod.description}
                    link={prod.link}
                    url={prod.url}
                    vote={prod.votes}
                    submittedby={prod.submittedBy}
                    avatar={prod.avatar}
                    proUrl={prod.productUrl}
                    onVote={this.upProdVote}
                    deleteVote={this.downProdVote}>
            </Product>
        ))

return(
    <div className='ui unstackable items'>
    {productComponet}
    </div>
        )      
    }
}
 
export default ProductList;