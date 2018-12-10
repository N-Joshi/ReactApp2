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
                uvotes:parseInt(product.uvotes)+1,
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
                 dvotes:parseInt(product.dvotes)+1,
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
                    upvote={prod.uvotes}
                    downvote={prod.dvotes}
                    submittedby={prod.submittedBy}
                    avatar={prod.avatar}
                    proUrl={prod.productUrl}
                    onVote={this.upProdVote}
                    deleteVote={this.downProdVote}>
            </Product>
        ))

        return(
            <div className='ui unstackable items'>
            <h1 className="style">Movie Votes</h1>
            {productComponet}
            </div>
        )
    }


    render(){
        const prods = this.state.prod.sort((a,b)=>(
        b.uvotes-a.uvotes
        ));
        const productComponet = prods.map((prod) =>(
            <Product
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    desc={prod.description}
                    link={prod.link}
                    url={prod.url}
                    upvote={prod.uvotes}
                    downvote={prod.dvotes}
                    submittedby={prod.submittedBy}
                    avatar={prod.avatar}
                    proUrl={prod.productUrl}
                    onVote={this.upProdVote}
                    deleteVote={this.downProdVote}>
            </Product>
        ))

return(

    <div className='ui unstackable items'>
    <h1 className="style">Movie Votes</h1>
    {productComponet}
    <br></br>
    <br></br>
    </div>

        )      
    }
}
 
export default ProductList;