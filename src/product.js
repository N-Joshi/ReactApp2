import React from 'react'


class Product extends React.Component {
    
    constructor(props){
        super(props);
            this.upVote=this.upVote.bind(this)
            this.downVote=this.downVote.bind(this)
        }
    

    upVote(){
        this.props.onVote(this.props.id)
            
    }

    downVote(){
        this.props.deleteVote(this.props.id)
    }

    render() { 
        return (  
            <div className='item'>
                <div className='image'>
                    <img src={this.props.proUrl}/>             
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.upVote}>
                        <div class="ui labeled button"><button class="ui red button" tabindex="0"><i aria-hidden="true" class="heart icon">
                                </i> Like</button><div class="ui blue left pointing basic label">{this.props.upvote}</div></div>
                        </a>&nbsp;&nbsp;
                        <a onClick={this.downVote}>
                        <div class="ui labeled button">
                                <button class="ui blue basic button" tabindex="0">
                                <i aria-hidden="true" class="heart icon"></i> Dislike</button>
                                <div class="ui blue left pointing basic label">{this.props.downvote}</div>
                        </div>
                        </a>                      
                    </div>
                    <div>
                        <div className='description'>
                       <a href={this.props.url}>
                            <h1>{this.props.title}</h1>
                        </a>
                        <p>
                            <h4>{this.props.desc}</h4>
                        </p>
                        </div>
                        <div className='extra'>
                        <b><span>Submitted By : </span></b>
                        {this.props.submittedby}&nbsp;
                        <img  src={this.props.avatar} className='ui avatar image'/>
                        </div>
                    </div>
            </div>
        </div>
            
        );
    }
}
 
export default Product;